// 导航栏控制
function initNav() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    
    // 初始化导航背景
    navLinks.forEach(link => {
        const bg = document.createElement('div');
        bg.className = 'nav-bg';
        link.appendChild(bg);
    });

    // 设置首页默认激活
    const homeLink = document.querySelector('.nav-links a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
        homeLink.querySelector('.nav-bg').style.transform = 'translateX(0)';
        homeLink.style.color = '#ffffff';
    }

    // 处理导航点击
    document.querySelector('.nav-links').addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        
        e.preventDefault();
        const targetId = link.getAttribute('data-section');
        
        // 更新导航状态
        navLinks.forEach(l => {
            const bg = l.querySelector('.nav-bg');
            l.classList.remove('active');
            l.style.color = 'var(--text-color)';
            bg.style.transform = 'translateX(-100%)';
        });

        // 激活当前导航
        link.classList.add('active');
        link.style.color = '#ffffff';
        link.querySelector('.nav-bg').style.transform = 'translateX(0)';
        
        // 更新内容区域
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(targetId)?.classList.add('active');
    });

    // 处理悬停效果
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (!link.classList.contains('active')) {
                link.querySelector('.nav-bg').style.transform = 'translateX(0)';
                link.style.color = '#ffffff';
            }
        });

        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                link.querySelector('.nav-bg').style.transform = 'translateX(-100%)';
                link.style.color = 'var(--text-color)';
            }
        });
    });
} 