// 鼠标跟随效果
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // 平滑跟随效果
    function animate() {
        let dx = mouseX - cursorX;
        let dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        
        requestAnimationFrame(animate);
    }
    animate();

    // 交互效果
    const interactiveElements = document.querySelectorAll('a, button, input');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1.5)`;
            cursor.style.background = 'rgba(255, 107, 107, 0.4)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1)`;
            cursor.style.background = 'rgba(255, 255, 255, 0.3)';
        });
    });

    // 点击波纹效果
    const rippleContainer = document.querySelector('.ripple-container');
    document.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        
        ripple.style.left = (e.clientX - 20) + 'px';
        ripple.style.top = (e.clientY - 20) + 'px';
        
        const colors = [
            'rgba(255, 107, 107, 0.8)',
            'rgba(78, 205, 196, 0.8)',
            'rgba(69, 183, 209, 0.8)',
            'rgba(150, 206, 180, 0.8)'
        ];
        ripple.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        rippleContainer.appendChild(ripple);
        
        ripple.addEventListener('animationend', function() {
            ripple.remove();
        });
    });
});

// 提示框功能
function showHint(event) {
    event.preventDefault();
    const modal = document.getElementById('hintModal');
    modal.style.display = 'flex';
    
    modal.onclick = function() {
        modal.style.display = 'none';
    };
} 