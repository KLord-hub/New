// 渲染收藏集
function renderCollections() {
    // 渲染分类标签
    const tabsContainer = document.querySelector('.section-tabs');
    tabsContainer.innerHTML = CONFIG.collections.categories.map(cat => `
        <button class="tab-btn ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
            ${cat.name}
        </button>
    `).join('');

    // 渲染收藏项目
    const collectionGrid = document.querySelector('.collection-grid');
    collectionGrid.innerHTML = CONFIG.collections.items.map(item => `
        <div class="collection-item" data-category="${item.category}">
            <div class="collection-image">
                <img src="${item.image}" alt="${item.title}">
                <div class="collection-overlay">
                    <i class="${item.icon}"></i>
                </div>
            </div>
            <div class="collection-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="collection-meta">
                    <span><i class="far fa-calendar"></i> ${item.date}</span>
                    <span><i class="far fa-heart"></i> ${item.likes}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 渲染日记本
function renderDiary() {
    // 渲染月份选择
    const monthSelect = document.querySelector('.diary-month');
    monthSelect.innerHTML = `
        <option value="">选择月份</option>
        ${CONFIG.diary.months.map(month => `
            <option value="${month.value}">${month.text}</option>
        `).join('')}
    `;

    // 渲染日记列表
    const diaryList = document.querySelector('.diary-list');
    diaryList.innerHTML = CONFIG.diary.entries.map(entry => `
        <article class="diary-card">
            <div class="diary-header">
                <div class="diary-date">
                    <span class="day">${entry.date.day}</span>
                    <span class="month">${entry.date.month}</span>
                </div>
                <div class="diary-weather">
                    <i class="${entry.weather.icon}"></i>
                    <span>${entry.weather.text}</span>
                </div>
            </div>
            <div class="diary-content">
                <h3>${entry.title}</h3>
                <p>${entry.content}</p>
                <div class="diary-footer">
                    <div class="diary-tags">
                        ${entry.tags.map(tag => `<span>#${tag}</span>`).join('')}
                    </div>
                    <div class="diary-mood">
                        <i class="${entry.mood.icon}"></i>
                        <span>${entry.mood.text}</span>
                    </div>
                </div>
            </div>
        </article>
    `).join('');
}

// 渲染关于我
function renderAbout() {
    // 渲染个人资料
    const profileInfo = document.querySelector('.profile-info');
    profileInfo.innerHTML = `
        <h3>${CONFIG.about.profile.name}</h3>
        <p class="profile-bio">${CONFIG.about.profile.bio}</p>
        <div class="profile-stats">
            ${CONFIG.about.profile.stats.map(stat => `
                <div class="stat-item">
                    <span class="stat-value">${stat.value}</span>
                    <span class="stat-label">${stat.label}</span>
                </div>
            `).join('')}
        </div>
    `;

    // 渲染兴趣爱好
    const hobbyList = document.querySelector('.hobby-list');
    hobbyList.innerHTML = CONFIG.about.hobbies.map(hobby => `
        <li><i class="${hobby.icon}"></i> ${hobby.text}</li>
    `).join('');

    // 渲染最爱的句子
    const favoriteQuotes = document.querySelector('.favorite-quotes');
    favoriteQuotes.innerHTML = `
        <blockquote>
            ${CONFIG.about.quote.text}
            <cite>— ${CONFIG.about.quote.author}</cite>
        </blockquote>
    `;

    // 渲染联系方式
    const contactInfo = document.querySelector('.contact-info');
    contactInfo.innerHTML = CONFIG.about.contact.map(contact => `
        <a href="${contact.link}" class="contact-link">
            <i class="${contact.icon}"></i>
            <span>${contact.text}</span>
        </a>
    `).join('');
}

// 添加错误处理函数
function handleRenderError(section, error) {
    console.error(`Error rendering ${section}:`, error);
    return `<div class="error-message">加载失败，请刷新页面重试</div>`;
}

// 文字动画效果
function createTextAnimation(text, container) {
    // 清空容器
    container.innerHTML = '';
    container.style.opacity = '1';
    
    // 设置容器样式
    container.style.cssText = `
        font-size: 3.2rem;  // 增大字体
        font-weight: 600;   // 加粗字体
        background: linear-gradient(45deg, 
            #1565C0,    // 深蓝色
            #1976D2,    // 蓝色
            #2E7D32,    // 深绿色
            #F57F17     // 深金色
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        background-size: 200% 200%;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
        position: relative;
    `;
    
    // 分割文字
    const chars = text.split('');
    let delay = 0;
    
    chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.cssText = `
            display: inline-block;
            opacity: 0;
            transform: translateY(20px) scale(0.8);
            transition: all 0.3s ease;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        `;
        
        container.appendChild(span);
        
        // 添加动画
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0) scale(1)';
            
            // 添加弹跳效果
            setTimeout(() => {
                span.style.transform = 'translateY(-10px) scale(1.1)';
                setTimeout(() => {
                    span.style.transform = 'translateY(0) scale(1)';
                }, 100);
            }, 200);
        }, delay);
        
        delay += 100;
    });
    
    // 添加背景动画
    setTimeout(() => {
        container.style.animation = 'gradientMove 6s ease infinite';
    }, delay);

    // 添加光晕效果
    const style = document.createElement('style');
    style.textContent = `
        @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .welcome-title::after {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            background: linear-gradient(45deg, 
                rgba(21, 101, 192, 0.3),    // 深蓝色
                rgba(46, 125, 50, 0.3)      // 深绿色
            );
            filter: blur(20px);
            z-index: -1;
            opacity: 0;
            animation: glowEffect 3s ease-in-out infinite alternate;
        }
        
        @keyframes glowEffect {
            from {
                opacity: 0.4;
                transform: scale(0.95);
            }
            to {
                opacity: 0.7;
                transform: scale(1.05);
            }
        }
    `;
    document.head.appendChild(style);
}

// 修改渲染函数
function renderHome() {
    try {
        const welcomeTitle = document.querySelector('.welcome-title');
        const welcomeText = document.querySelector('.welcome-text');
        if (!welcomeTitle || !welcomeText) throw new Error('Welcome elements not found');
        
        // 创建文字动画
        createTextAnimation(CONFIG.home.welcome.title, welcomeTitle);
        
        // 设置欢迎文本
        welcomeText.textContent = CONFIG.home.welcome.text;
        
        // 添加背景动画
        const style = document.createElement('style');
        style.textContent = `
            @keyframes gradientMove {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            .welcome-title {
                position: relative;
            }
            
            .welcome-title::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, 
                    rgba(33, 150, 243, 0.2),
                    rgba(76, 175, 80, 0.2)
                );
                filter: blur(20px);
                z-index: -1;
                opacity: 0;
                animation: glowEffect 3s ease-in-out infinite alternate;
            }
            
            @keyframes glowEffect {
                from {
                    opacity: 0.3;
                    transform: scale(0.9);
                }
                to {
                    opacity: 0.6;
                    transform: scale(1.1);
                }
            }
        `;
        document.head.appendChild(style);
        
        // 渲染功能卡片
        const featuresGrid = document.querySelector('.features-grid');
        featuresGrid.innerHTML = CONFIG.home.features.map(feature => `
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="${feature.icon}"></i>
                </div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `).join('');

        // 渲染最新动态
        const updatesTimeline = document.querySelector('.updates-timeline');
        updatesTimeline.innerHTML = CONFIG.home.updates.map(update => `
            <div class="timeline-item">
                <div class="timeline-date">${update.date}</div>
                <div class="timeline-content">
                    <h3>${update.title}</h3>
                    <p>${update.content}</p>
                </div>
            </div>
        `).join('');
    } catch (error) {
        handleRenderError('home', error);
    }
}

// 渲染导航栏
function renderNav() {
    // 渲染个人资料部分
    const profileSection = document.querySelector('.profile-section');
    profileSection.innerHTML = `
        <img src="${CONFIG.nav.profile.avatar}" alt="头像" class="avatar" onerror="handleImageError(this)">
        <h2>${CONFIG.nav.profile.name}</h2>
        <p>${CONFIG.nav.profile.description}</p>
    `;

    // 渲染导航链接
    const navLinks = document.querySelector('.nav-links');
    navLinks.innerHTML = CONFIG.nav.links.map(link => `
        <li>
            <a href="#${link.id}" data-section="${link.id}">
                <i class="${link.icon}"></i>
                <span>${link.text}</span>
            </a>
        </li>
    `).join('');
}

// 优化初始化函数
function initContent() {
    try {
        renderNav();
        renderHome();
        renderCollections();
        renderDiary();
        renderAbout();
        
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card, index) => {
            requestAnimationFrame(() => {
                card.style.animationDelay = `${index * 0.2}s`;
                card.classList.add('fade-in');
            });
        });
    } catch (error) {
        console.error('Initialization error:', error);
    }
}

// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 首先检查登录状态
    checkAuth();
    
    // 后渲染所有内容
    initContent();
    
    // 最后初始化导航和动画
    initNav();
    initHomeAnimations();
}); 