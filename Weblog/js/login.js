// 登录尝试记录
let loginAttempts = {
    count: 0,
    lastAttempt: 0,
    locked: false
};

// 生成安全令牌
function generateToken() {
    const timestamp = new Date().getTime().toString();
    const random = Math.random().toString();
    return CryptoJS.SHA256(timestamp + random + AUTH_CONFIG.secretKey).toString();
}

// 加密密码
function encryptPassword(password, salt = AUTH_CONFIG.secretKey) {
    return CryptoJS.SHA256(password + salt).toString();
}

// 验证密码强度
function validatePassword(password) {
    if (password.length < AUTH_CONFIG.security.passwordMinLength) {
        return '密码长度不足';
    }
    if (AUTH_CONFIG.security.requireSpecialChar && !/[!@#$%^&*]/.test(password)) {
        return '密码需要包含特殊字符';
    }
    if (AUTH_CONFIG.security.requireNumbers && !/\d/.test(password)) {
        return '密码需要包含数字';
    }
    return true;
}

// 处理登录
async function handleLogin(event) {
    event.preventDefault();
    
    // 检查锁定状态
    if (loginAttempts.locked) {
        const timeLeft = AUTH_CONFIG.security.lockoutDuration - (Date.now() - loginAttempts.lastAttempt);
        if (timeLeft > 0) {
            showError(`账户已锁定，请在 ${Math.ceil(timeLeft / 60000)} 分钟后重试`);
            return;
        }
        loginAttempts = { count: 0, lastAttempt: 0, locked: false };
    }

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // 验证用户名
        if (!username || username !== CONFIG.login.username) {
            loginAttempts.count++;
            showError('用户名或密码错误');
            return;
        }

        // 加密并验证密码
        const hashedPassword = encryptPassword(password);
        const correctHash = encryptPassword(CONFIG.login.password);
        
        if (hashedPassword === correctHash) {
            // 登录成功
            const token = generateToken();
            sessionStorage.setItem('loginStatus', 'true');
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('loginTime', Date.now().toString());
            window.location.replace('index.html');
        } else {
            // 登录失败
            loginAttempts.count++;
            loginAttempts.lastAttempt = Date.now();
            
            if (loginAttempts.count >= AUTH_CONFIG.security.maxAttempts) {
                loginAttempts.locked = true;
                showError('登录失败次数过多，账户已锁定');
            } else {
                showError('用户名或密码错误');
            }
        }
    } catch (error) {
        console.error('Login error:', error);
        showError('登录时发生错误，请稍后重试');
    }
}

// 显示错误信息
function showError(message) {
    const errorDiv = document.querySelector('.error-message') || document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const form = document.querySelector('form');
    if (!document.querySelector('.error-message')) {
        form.insertBefore(errorDiv, form.firstChild);
    }
}

// 定期检查会话状态
function checkSession() {
    const loginTime = parseInt(sessionStorage.getItem('loginTime'));
    if (loginTime && (Date.now() - loginTime > AUTH_CONFIG.security.sessionTimeout)) {
        sessionStorage.clear();
        window.location.replace('login.html');
    }
}

// 添加事件监听器
document.querySelector('form').addEventListener('submit', handleLogin);

// 定期检查会话
setInterval(checkSession, 60000);

function validateLogin(username, password) {
    return username === CONFIG.login.username && 
           password === CONFIG.login.password;
}