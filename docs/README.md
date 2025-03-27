# ProxyFox.io 官方网站

这是 ProxyFox Chrome 扩展的官方网站代码。

## 网站结构

```
web/
├── css/             # 样式表文件
│   └── styles.css   # 主样式表
├── js/              # JavaScript 文件
│   └── main.js      # 主脚本文件
├── images/          # 图片资源
│   ├── proxyfox-logo-128.png  # 主标志
│   ├── network-bg.svg         # 背景图案
│   └── step1.jpg, step2.jpg   # 指南图片
├── en/              # 英文版网站
│   └── index.html   # 英文首页
├── index.html       # 中文首页（默认）
└── favicon.ico      # 网站图标
```

## 部署指南

### 前提条件

- 将 `proxyfox.io` 域名指向托管服务器
- 确保服务器支持静态网站托管

### 部署步骤

1. 将整个 `web` 目录上传到服务器
2. 确保 `index.html` 是默认首页
3. 设置适当的 MIME 类型，特别是以下文件：
   - `.svg` 文件设置为 `image/svg+xml`
   - `.js` 文件设置为 `application/javascript`
   - `.css` 文件设置为 `text/css`

### 设置 HTTPS

推荐使用 Let's Encrypt 为网站设置 HTTPS：

```bash
certbot --nginx -d proxyfox.io -d www.proxyfox.io
```

## 维护指南

### 更新内容

1. 编辑相应的 HTML 文件更新网站内容
   - 中文内容：`index.html`
   - 英文内容：`en/index.html`

2. 修改样式：编辑 `css/styles.css`

3. 添加新图片：放置在 `images/` 目录下

### 更新产品链接

当 Chrome 商店链接可用时，更新以下文件中的下载链接：

```html
<a href="https://chrome.google.com/webstore/detail/proxyfox/ID" class="btn" target="_blank">
```

将 `ID` 替换为实际的 Chrome 商店扩展 ID。

## 语言支持

网站目前支持两种语言：

- 中文（默认）：`/index.html`
- 英文：`/en/index.html`

语言切换通过 `js/main.js` 中的语言检测和切换逻辑实现。

## 图片和资源

- 主 Logo：`images/proxyfox-logo-128.png`，需要替换为实际的高质量 logo
- 指南图片：`step1.jpg`、`step2.jpg` 等需要替换为实际的应用截图
- 背景图案：`network-bg.svg` 是网络连接背景图

## 兼容性说明

网站设计兼容主要浏览器：

- Chrome 最新版
- Firefox 最新版
- Safari 最新版
- Edge 最新版

移动端采用响应式设计，适配各种屏幕尺寸。 