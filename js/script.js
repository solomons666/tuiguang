// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {

    // ========== 搜索功能 ==========
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                console.log('搜索:', query);
                // 这里可以添加实际的搜索功能
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    console.log('搜索:', query);
                    // 这里可以添加实际的搜索功能
                }
            }
        });
    }

    // ========== 导航菜单高亮 ==========
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ========== 语言选择器 ==========
    const languageSelector = document.querySelector('.language-selector');

    if (languageSelector) {
        languageSelector.addEventListener('click', function() {
            // 这里可以添加语言切换菜单
            console.log('切换语言');
        });
    }

    // ========== 按钮点击事件 ==========
    const btnJoin = document.querySelector('.btn-join');
    const btnLogin = document.querySelector('.btn-login');
    const btnAffiliate = document.querySelector('.btn-affiliate-wrapper');
    const btnSubscribe = document.querySelector('.btn-subscribe');
    const csButton = document.querySelector('.cs-button');

    if (btnJoin) {
        btnJoin.addEventListener('click', function() {
            console.log('加入赚钱');
            // 这里可以添加跳转到注册页面的逻辑
        });
    }

    if (btnLogin) {
        btnLogin.addEventListener('click', function() {
            console.log('登录/注册');
            // 这里可以添加登录/注册弹窗
        });
    }

    if (btnAffiliate) {
        btnAffiliate.addEventListener('click', function() {
            console.log('推广合作');
            // 跳转到推广合作页面
        });
    }

    if (btnSubscribe) {
        btnSubscribe.addEventListener('click', function() {
            console.log('订单');
            // 跳转到订单页面
        });
    }

    if (csButton) {
        csButton.addEventListener('click', function() {
            console.log('客服咨询');
            // 这里可以添加客服聊天窗口
        });
    }

    // ========== 滚动动画效果 ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 为各个卡片添加滚动动画
    const benefitCards = document.querySelectorAll('.benefit-card');
    const stepCards = document.querySelectorAll('.step-card');
    const requirementItems = document.querySelectorAll('.requirement-item');

    benefitCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    stepCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    requirementItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(item);
    });


    // ========== 平滑滚动 ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== 移动端菜单滚动指示器 ==========
    const navMenu = document.querySelector('.nav-menu');

    if (navMenu && window.innerWidth <= 768) {
        let isScrolling = false;

        navMenu.addEventListener('scroll', function() {
            if (!isScrolling) {
                isScrolling = true;
                setTimeout(function() {
                    isScrolling = false;
                }, 100);
            }
        });
    }

    // ========== 响应式处理 ==========
    function handleResize() {
        // 响应式处理可以在这里添加
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // 初始化

    // ========== 卡片悬停效果增强 ==========
    const allCards = document.querySelectorAll('.benefit-card, .step-card');

    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // ========== 客服按钮脉冲动画 ==========
    if (csButton) {
        setInterval(function() {
            csButton.style.animation = 'none';
            setTimeout(function() {
                csButton.style.animation = 'pulse 1.5s ease-in-out';
            }, 10);
        }, 5000);
    }

    // 添加脉冲动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
    `;
    document.head.appendChild(style);

    // ========== 页面加载动画 ==========
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});

// 页面加载时的淡入效果
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
