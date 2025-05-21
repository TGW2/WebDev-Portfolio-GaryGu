// 页面加载动画
window.addEventListener('DOMContentLoaded', function() {
  // 页面加载动画
  const loader = document.getElementById('pageLoader');
  if (loader) {
    setTimeout(() => loader.classList.add('hide'), 600);
    setTimeout(() => loader.remove(), 1200);
  }

  // 返回顶部按钮
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
    backToTop.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // 导航高亮
  const navLinks = document.querySelectorAll('.top_manu li a');
  navLinks.forEach(link => {
    if (window.location.href.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

  // 全局朗读按钮
  const readAllBtn = document.getElementById('readAllBtn');
  if (readAllBtn) {
    let isReading = false;
    let utter = null;
    readAllBtn.onclick = function() {
      if (isReading) {
        window.speechSynthesis.cancel();
        readAllBtn.classList.remove('reading');
        isReading = false;
        return;
      }
      // 获取主要内容
      let text = '';
      // 1. title
      const title = document.querySelector('.title');
      if (title) text += title.innerText + '\n';
      // 2. intro
      const intro = document.querySelector('.intro');
      if (intro) text += intro.innerText + '\n';
      // 3. media-blocks
      document.querySelectorAll('.media-block').forEach(block => {
        text += block.innerText + '\n';
      });
      // 4. 其他主要内容可按需添加
      text = text.replace(/\n{2,}/g, '\n');
      if (!text.trim()) text = document.body.innerText;
      // 朗读
      utter = new window.SpeechSynthesisUtterance(text);
      utter.lang = 'en-US';
      utter.onend = utter.onerror = function() {
        readAllBtn.classList.remove('reading');
        isReading = false;
      };
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
      readAllBtn.classList.add('reading');
      isReading = true;
    };
    // 滚动时显示/隐藏按钮（与返回顶部按钮一致）
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        readAllBtn.classList.add('show');
      } else {
        readAllBtn.classList.remove('show');
      }
    });
    // 初始判断
    if (window.scrollY > 200) {
      readAllBtn.classList.add('show');
    } else {
      readAllBtn.classList.remove('show');
    }
  }
});
