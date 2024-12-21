// 轮播图控制
export function initCarousel() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    if (!slides.length) return;

    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    
    let currentIndex = 0;
    let interval;
    let isTransitioning = false;
    let touchStartX = 0;

    // 创建指示点
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `切换到第${index + 1}张图片`);
        dot.addEventListener('click', () => !isTransitioning && goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);
    dots[0].classList.add('active');

    // 切换到指定幻灯片
    function goToSlide(index) {
        if (isTransitioning || index === currentIndex) return;
        isTransitioning = true;

        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        
        currentIndex = index;
        
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');

        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    }

    // 自动播放控制
    function startAutoPlay() {
        stopAutoPlay();
        interval = setInterval(() => {
            if (!document.hidden && !isTransitioning) {
                goToSlide((currentIndex + 1) % slides.length);
            }
        }, 5000);
    }

    function stopAutoPlay() {
        clearInterval(interval);
    }

    // 事件监听
    prevBtn?.addEventListener('click', () => {
        goToSlide((currentIndex - 1 + slides.length) % slides.length);
        startAutoPlay();
    });

    nextBtn?.addEventListener('click', () => {
        goToSlide((currentIndex + 1) % slides.length);
        startAutoPlay();
    });

    // 触摸事件
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        stopAutoPlay();
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goToSlide((currentIndex + 1) % slides.length);
            } else {
                goToSlide((currentIndex - 1 + slides.length) % slides.length);
            }
        }
        startAutoPlay();
    }, { passive: true });

    // 可见性变化处理
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    });

    // 鼠标悬停处理
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // 初始化
    startAutoPlay();

    // 返回清理函数
    return () => {
        stopAutoPlay();
        document.removeEventListener('visibilitychange', startAutoPlay);
    };
} 