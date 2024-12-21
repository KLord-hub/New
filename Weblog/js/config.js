// 冻结配置对象防止运行时修改
const CONFIG = Object.freeze({
    // 导航栏配置
    nav: {
        profile: {
            avatar: './images/小红毛.jpg',
            name: 'KLord',
            description: '热爱生活，记录美好'
        },
        links: [
            { id: 'home', icon: 'fas fa-home', text: '首页' },
            { id: 'collection', icon: 'fas fa-heart', text: '收藏集' },
            { id: 'diary', icon: 'fas fa-book', text: '日记本' },
            { id: 'about', icon: 'fas fa-user', text: '关于我' }
        ]
    },
    
    // 登录凭证
    login: {
        username: 'KLord',
        password: '20041002'
    },
    
    // 首页配置
    home: {
        welcome: {
            title: '漫漫人生路，相遇即是缘',
            text: '记录生活点滴，分享心路历程，留下美好回忆...'
        },
        features: [
            {
                icon: 'fas fa-book-reader',
                title: '阅读分享',
                description: '记录读书心得，分享知识见解'
            },
            {
                icon: 'fas fa-camera-retro',
                title: '生活随拍',
                description: '用镜头记录美好瞬间'
            },
            {
                icon: 'fas fa-pencil-alt',
                title: '心情随写',
                description: '记录生活感悟与思考'
            },
            {
                icon: 'fas fa-code',
                title: '技术笔记',
                description: '分享学习与成长历程'
            }
        ],
        updates: [
            {
                date: '2024-12-20',
                title: '木兰花·令拟古决绝词',
                content: '人生若只如初见，何事秋风悲画扇'
            },
            {
                date: '2024-12-20',
                title: '摸鱼儿·雁丘词',
                content: '问世间情为何物，直教生死相许'
            }
        ]
    },
    
    // 收藏集配置
    collections: {
        // 简化分类标签
        categories: [
            { id: 'all', name: '全部' }
        ],
        
        // 更新收藏项目
        items: [
            {
                id: 1,
                category: 'all',
                title: '青玉案 元夕',
                description: '东风夜放花千树，更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜���龙舞。',
                image: 'images/collection/poetry1.jpg',
                icon: 'fas fa-book',
                date: '2024-12-20',
                likes: 25,
                style: 'classic',
                color: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
                textColor: '#8b4513',
                borderColor: 'rgba(253, 160, 133, 0.5)'
            },
            {
                id: 2,
                category: 'all',
                title: '星空摄影集',
                description: '银河璀璨，繁星点点，记录璀璨夜空下的静谧时光',
                image: 'images/collection/stars.jpg',
                icon: 'fas fa-star',
                date: '2024-11-15',
                likes: 42,
                style: 'modern',
                color: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
                textColor: '#ffffff',
                animation: 'twinkle 1.5s infinite'
            },
            {
                id: 3,
                category: 'all',
                title: '春日物语',
                description: '樱花纷飞，春风拂面，定格每一个温暖瞬间',
                image: 'images/collection/spring.jpg',
                icon: 'fas fa-seedling',
                date: '2024-10-30',
                likes: 38,
                style: 'nature',
                color: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
                textColor: '#4a4a4a',
                borderColor: 'rgba(142, 197, 252, 0.5)'
            },
            {
                id: 4,
                category: 'all',
                title: '《月光》',
                description: '德彪西的钢琴印象曲，如月光般清澈动人',
                image: 'images/collection/music1.jpg',
                icon: 'fas fa-music',
                date: '2024-12-01',
                likes: 31,
                style: 'elegant',
                color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                textColor: '#ffffff',
                animation: 'fadeInOut 2s infinite'
            },
            {
                id: 5,
                category: 'all',
                title: '水墨江南',
                description: '小桥流水人家，诗意东方韵味',
                image: 'images/collection/ink.jpg',
                icon: 'fas fa-paint-brush',
                date: '2024-11-20',
                likes: 56,
                style: 'ink',
                color: 'linear-gradient(to right, #434343 0%, black 100%)',
                textColor: '#ffffff',
                borderStyle: 'double'
            }
        ]
    },

    // 日记本置
    diary: {
        months: [
            { value: '2024-12', text: '2024年12月' },
            { value: '2024-12', text: '2024年12月' }
        ],
        entries: [
            {
                id: 1,
                date: { day: '20', month: '十二月' },
                weather: { icon: 'fas fa-sun', text: '晴朗' },
                title: '今日随想',
                content: '我将于茫茫人海中访我唯一灵魂之伴侣',
                tags: ['冬天', '随笔', '生活感悟'],
                mood: { icon: 'fas fa-smile', text: '心情愉悦' }
            }
        ]
    },

    // 关于我配置
    about: {
        profile: {
            name: 'KLord',
            avatar: 'images/profile.jpg',
            bio: '热爱生活，喜欢探索新事物。喜欢极限运动，喜欢冒险，喜欢挑战自己。',
            stats: [
                // { value: '125', label: '日记' },
                // { value: '48', label: '收藏' },
                // { value: '89', label: '运动' }
            ]
        },
        hobbies: [
            { icon: 'fas fa-book', text: '登山' },
            { icon: 'fas fa-music', text: '滑雪' },
            { icon: 'fas fa-camera', text: '户外' },
            { icon: 'fas fa-code', text: '编程' }
        ],
        quote: {
            text: '生活不止眼前的苟且，还有诗和远方的田野。',
            author: '海子'
        },
        contact: [
            { type: 'email', icon: 'fas fa-envelope', text: '发送邮件', link: 'mailto:example@email.com' },
            { type: 'github', icon: 'fab fa-github', text: 'QQ', link: '#' },
            { type: 'wechat', icon: 'fab fa-weixin', text: '微信', link: '#' }
        ]
    }
}); 

// 添加配置验证
function validateConfig() {
    const required = ['login', 'nav', 'home', 'collections', 'diary', 'about'];
    required.forEach(key => {
        if (!CONFIG[key]) {
            throw new Error(`Missing required config: ${key}`);
        }
    });
}

// 在使用配置前验证
try {
    validateConfig();
} catch (error) {
    console.error('Configuration error:', error);
} 