// Page loading animation
window.addEventListener('DOMContentLoaded', function() {
  // Page loading animation
  const loader = document.getElementById('pageLoader');
  if (loader) {
    setTimeout(() => loader.classList.add('hide'), 200);
    setTimeout(() => loader.remove(), 600);
  }

  // Back to Top button
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
      //Determine whether on the portfolio_section.html page
      if (window.location.pathname.includes('portfolio_section.html')) {
        const section = document.getElementById('portfolio-content-section');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // Navigation highlight
  const navLinks = document.querySelectorAll('.top_manu li a');
  navLinks.forEach(link => {
    if (window.location.href.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

  // Global Read Button
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
      // Obtain the main content
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
      // 4. Other main contents can be added as needed.
      text = text.replace(/\n{2,}/g, '\n');
      if (!text.trim()) text = document.body.innerText;
      //Read aloud
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
    // Show/hide button when scrolling (consistent with the back to top button)
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        readAllBtn.classList.add('show');
      } else {
        readAllBtn.classList.remove('show');
      }
    });
    // Initial judgment
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

  // portfolio_section.html Music cover click to switch YouTube video
  if (window.location.pathname.includes('portfolio_section.html')) {
    const musicData = [
      {
        id: 'music-one-last-kiss',
        img: 'images/one_last_kiss.jpg',
        alt: 'one_last_kiss',
        video: 'images/video/one_last_kiss.mp4'
      },
      {
        id: 'music-whiplash',
        img: 'images/boa.jpg',
        alt: 'boa',
        video: 'images/video/whiplash.mp4'
      },
      {
        id: 'music-aliez',
        img: 'images/aLiez.jpg',
        alt: 'aLiez',
        video: 'images/video/aliez.mp4'
      },
      {
        id: 'music-bios',
        img: 'images/BIOS.jpg',
        alt: 'BIOS',
        video: 'images/video/bios.mp4'
      }
    ];

    function bindMusicCoverClick(item) {
      const block = document.getElementById(item.id);
      if (!block) return;
      const img = block.querySelector('img');
      if (!img) return;
      img.onclick = function() {
        // 先恢复所有为图片
        musicData.forEach(other => {
          const otherBlock = document.getElementById(other.id);
          if (!otherBlock) return;
          if (!otherBlock.querySelector('img')) {
            otherBlock.innerHTML = `<img src="${other.img}" alt="${other.alt}" class="hero-img music-cover" style="display: block; margin: 0 auto; cursor:pointer;"><h2>${otherBlock.querySelector('h2').innerText}</h2>`;
            // 重新绑定点击事件
            bindMusicCoverClick(other);
          }
        });
        // 当前替换为视频
        block.innerHTML = `<video src="${item.video}" width="100%" height="340" style="border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.06);" controls autoplay></video><h2>${block.querySelector('h2').innerText}</h2>`;
      };
    }
    // 初始绑定
    musicData.forEach(item => {
      bindMusicCoverClick(item);
    });
  }

  document.querySelectorAll('#planned-features-list .toggle-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const detail = btn.parentElement.querySelector('.feature-detail');
      if (detail.hasAttribute('hidden')) {
        detail.removeAttribute('hidden');
        btn.textContent = '<';
        btn.setAttribute('aria-label', 'Collapse');
      } else {
        detail.setAttribute('hidden', '');
        btn.textContent = '>';
        btn.setAttribute('aria-label', 'Expand');
      }
    });
  });
});

