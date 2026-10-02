#!/usr/bin/env bash
set -euo pipefail

site_host="proxyfox.io"
indexnow_key="224b916b58898e6f67da86ef449f1b1e"
key_location="https://${site_host}/${indexnow_key}.txt"
sitemap_path="${1:-docs/sitemap.xml}"

if [[ ! -f "$sitemap_path" ]]; then
  echo "Sitemap not found: $sitemap_path" >&2
  exit 1
fi

url_list="$(grep -oE 'https://proxyfox\.io[^\"<]+' "$sitemap_path" | sort -u | jq -Rsc 'split("\n") | map(select(length > 0))')"
payload="$(jq -n --arg host "$site_host" --arg key "$indexnow_key" --arg keyLocation "$key_location" --argjson urlList "$url_list" '{host:$host,key:$key,keyLocation:$keyLocation,urlList:$urlList}')"

for attempt in {1..24}; do
  remote_key="$(curl --silent --show-error --max-time 10 "$key_location" || true)"
  if [[ "$remote_key" == "$indexnow_key" ]]; then
    break
  fi
  if [[ "$attempt" -eq 24 ]]; then
    echo "IndexNow key is not live at $key_location" >&2
    exit 1
  fi
  sleep 10
done

curl --fail-with-body --silent --show-error \
  --header 'Content-Type: application/json; charset=utf-8' \
  --data "$payload" \
  https://api.indexnow.org/indexnow

echo "Submitted $(jq 'length' <<<"$url_list") URLs to IndexNow."
