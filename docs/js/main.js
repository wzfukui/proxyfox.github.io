document.addEventListener('DOMContentLoaded', function() {
  // 初始化语言
  initLanguage();
  
  // 移动端菜单
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.innerHTML = nav.classList.contains('active') ? '&times;' : '&#9776;';
    });
  }
  
  // 点击导航项收起移动导航
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
        if (mobileMenuBtn) {
          mobileMenuBtn.innerHTML = '&#9776;';
        }
      }
    });
  });
  
  // 初始化常见问题手风琴效果
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // 关闭所有手风琴项
      accordionItems.forEach(accItem => {
        accItem.classList.remove('active');
      });
      
      // 如果点击的不是已经打开的项，则打开当前项
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // 添加页面滚动动画
  const scrollElements = document.querySelectorAll('.scroll-element');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('scrolled');
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // 初始触发一次动画检查
  handleScrollAnimation();
});

// 语言处理
function initLanguage() {
  // 获取语言按钮
  const zhBtn = document.getElementById('lang-zh');
  const enBtn = document.getElementById('lang-en');
  
  // 检测当前页面的语言状态
  const isEnglishPage = window.location.pathname.includes('/en/');
  
  // 获取存储的语言偏好
  const storedLang = localStorage.getItem('proxyfox-language');
  
  // 检测用户浏览器语言作为默认语言
  const userLang = navigator.language || navigator.userLanguage;
  const isZhLang = userLang.toLowerCase().startsWith('zh');
  
  // 确定使用哪种语言
  let currentLang;
  
  if (storedLang) {
    // 优先使用存储的语言偏好
    currentLang = storedLang;
  } else if (isEnglishPage) {
    // 根据当前页面判断
    currentLang = 'en';
  } else {
    // 使用浏览器语言设置
    currentLang = isZhLang ? 'zh' : 'en';
  }
  
  // 设置语言按钮状态
  if (currentLang === 'zh') {
    if (zhBtn) zhBtn.classList.add('active');
    if (enBtn) enBtn.classList.remove('active');
  } else {
    if (enBtn) enBtn.classList.add('active');
    if (zhBtn) zhBtn.classList.remove('active');
  }
  
  // 根据当前语言和页面状态决定是否需要跳转
  if (currentLang === 'en' && !isEnglishPage) {
    window.location.href = './en/index.html';
  } else if (currentLang === 'zh' && isEnglishPage) {
    window.location.href = '../index.html';
  }
  
  // 添加语言切换事件监听器
  if (zhBtn) {
    zhBtn.addEventListener('click', () => {
      switchLanguage('zh');
    });
  }
  
  if (enBtn) {
    enBtn.addEventListener('click', () => {
      switchLanguage('en');
    });
  }
}

function switchLanguage(lang) {
  // 保存语言偏好到本地存储
  localStorage.setItem('proxyfox-language', lang);
  
  // 获取当前页面路径
  const currentPath = window.location.pathname;
  const isEnglishPage = currentPath.includes('/en/');
  
  // 根据当前路径和目标语言决定是否跳转
  if (lang === 'en' && !isEnglishPage) {
    window.location.href = './en/index.html';
  } else if (lang === 'zh' && isEnglishPage) {
    window.location.href = '../index.html';
  } else {
    // 如果已经在正确的语言页面，只更新按钮状态
    const zhBtn = document.getElementById('lang-zh');
    const enBtn = document.getElementById('lang-en');
    
    if (lang === 'zh') {
      if (zhBtn) zhBtn.classList.add('active');
      if (enBtn) enBtn.classList.remove('active');
    } else {
      if (enBtn) enBtn.classList.add('active');
      if (zhBtn) zhBtn.classList.remove('active');
    }
  }
}

// 滚动时头部变化
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}); 