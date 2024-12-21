// 首页动画效果
function initHomeAnimations() {
    // 使用 IntersectionObserver 优化动画触发
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // 动画触发后取消观察
            }
        });
    }, {
        threshold: 0.1
    });

    // 观察需要动画的元素
    document.querySelectorAll('.feature-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// 内容切换效果
function initSectionSwitch() {
    const sections = document.querySelectorAll('.section');
    
    // 切换显示区块
    function switchSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
                // 如果是首页，初始化首页动画
                if (sectionId === 'home') {
                    initHomeAnimations();
                }
            } else {
                section.classList.remove('active');
            }
        });
    }

    // 根据hash切换内容
    function handleHashChange() {
        const hash = window.location.hash.slice(1) || 'home';
        switchSection(hash);
    }

    // 监听hash变化
    window.addEventListener('hashchange', handleHashChange);
    
    // 初始化显示
    handleHashChange();
}

// 初始化所有动画
document.addEventListener('DOMContentLoaded', () => {
    initHomeAnimations();
    initSectionSwitch();
}); 