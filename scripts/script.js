// 页面加载动画
window.addEventListener('DOMContentLoaded', function() {
  // 页面加载动画
  const loader = document.getElementById('pageLoader');
  if (loader) {
    setTimeout(() => loader.classList.add('hide'), 200);
    setTimeout(() => loader.remove(), 600);
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

  // Portfolio Section Page Switch
  const page1 = document.querySelector('.portfolio-page1');
  const page2 = document.querySelector('.portfolio-page2');
  const btnPrev = document.getElementById('portfolioPrev');
  const btnNext = document.getElementById('portfolioNext');
  if (page1 && page2 && btnPrev && btnNext) {
    btnPrev.onclick = function() {
      page1.style.display = '';
      page2.style.display = 'none';
      btnPrev.disabled = true;
      btnNext.disabled = false;
    };
    btnNext.onclick = function() {
      page1.style.display = 'none';
      page2.style.display = '';
      btnPrev.disabled = false;
      btnNext.disabled = true;
    };
  }

  // Home page virtual character animation
  if (document.getElementById('raiden-anim')) {
    const raidenAnim = document.getElementById('raiden-anim');
    const raidenImgs = [
      'raiden_walk-1.png','raiden_walk-2.png','raiden_walk-3.png','raiden_walk-4.png','raiden_walk-5.png','raiden_walk-6.png','raiden_walk-7.png','raiden_walk-8.png','raiden_walk-9.png','raiden_walk-10.png','raiden_walk-11.png','raiden_walk-12.png','raiden_walk-13.png','raiden_walk-14.png','raiden_walk-15.png','raiden_walk-16.png','raiden_walk-17.png','raiden_walk-18.png','raiden_walk-19.png','raiden_walk-20.png','raiden_walk-21.png','raiden_walk-22.png','raiden_walk-23.png','raiden_walk-24.png','raiden_walk-25.png','raiden_walk-26.png','raiden_walk-27.png','raiden_walk-28.png','raiden_walk-29.png','raiden_walk-30.png','raiden_walk-31.png','raiden_walk-32.png'
    ];
    let idx = 0;
    const img = document.createElement('img');
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    raidenAnim.appendChild(img);
    setInterval(() => {
      img.src = 'images/raiden/' + raidenImgs[idx];
      idx = (idx + 1) % raidenImgs.length;
    }, 100);
  }
  
  // Section smooth scroll for portfolio_section.html
  const navBtns = [
    {btn: document.getElementById('btn-media-design'), target: 'media-design-title'},
    {btn: document.getElementById('btn-frisbee'), target: 'frisbee-title'},
    {btn: document.getElementById('btn-music'), target: 'music-title'}
  ];
  navBtns.forEach(item => {
    if (item.btn) {
      item.btn.addEventListener('click', function(e) {
        e.preventDefault();
        const el = document.getElementById(item.target);
        if (el) {
          el.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
      });
    }
  });
});

