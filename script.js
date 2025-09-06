// Enhanced JavaScript for BRIJESH X CHEAT Profile
document.addEventListener('DOMContentLoaded', function() {
    
    // Loading Screen Animation
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingText = document.querySelector('.loading-text');
    
    // Loading text animation
    const loadingMessages = [
        'INITIALIZING...',
        'LOADING ASSETS...',
        'CONNECTING TO SERVERS...',
        'PREPARING INTERFACE...',
        'ALMOST READY...',
        'WELCOME TO THE FUTURE!'
    ];
    
    let messageIndex = 0;
    const loadingInterval = setInterval(() => {
        if (messageIndex < loadingMessages.length - 1) {
            messageIndex++;
            loadingText.textContent = loadingMessages[messageIndex];
        } else {
            clearInterval(loadingInterval);
        }
    }, 500);
    
    // Remove loading screen after animation
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        document.body.style.overflow = 'auto';
        initializeMainAnimations();
        initializeVisitorCounter();
    }, 3000);
    
    // Main animations after loading
    function initializeMainAnimations() {
        // Typing effect for subtitle
        animateTypingText();
        
        // Initialize parallax scrolling
        initializeParallax();
        
        // Initialize hover effects
        initializeHoverEffects();
        
        // Initialize video background controls
        initializeVideoBackground();
        
        // Add dynamic particle effects
        createParticleEffect();
        
        // Initialize scroll animations
        initializeScrollAnimations();
    }
    
    // Typing animation for subtitle
    function animateTypingText() {
        const typingElement = document.querySelector('.typing-text');
        const text = 'FUTURISTIC GAMING EXPERIENCE';
        let index = 0;
        
        function typeWriter() {
            if (index < text.length) {
                typingElement.textContent = text.substring(0, index + 1);
                index++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    index = 0;
                    typingElement.textContent = '';
                    typeWriter();
                }, 2000);
            }
        }
        
        typeWriter();
    }
    
    // Parallax scrolling effect
    function initializeParallax() {
        const floatingElements = document.querySelectorAll('.floating-circle, .floating-triangle, .floating-hexagon');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.1;
                element.style.transform = `translateY(${parallax * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });
    }
    
    // Enhanced hover effects
    function initializeHoverEffects() {
        const socialCards = document.querySelectorAll('.social-card');
        const platformCards = document.querySelectorAll('.platform-card');
        
        // Social cards hover effects
        socialCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 25px 50px rgba(0, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.1)';
                
                // Add ripple effect
                createRippleEffect(card);
            });
            
            card.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    card.style.boxShadow = '';
                }, 300);
            });
            
            // Click tracking with analytics
            card.addEventListener('click', (e) => {
                const platform = card.classList[1]; // youtube, whatsapp, etc.
                console.log(`Clicked on ${platform} link`);
                
                // Add click animation
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            });
        });
        
        // Platform cards hover effects
        platformCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('i');
                icon.style.transform = 'scale(1.2) rotate(360deg)';
                icon.style.transition = 'all 0.6s ease';
            });
            
            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('i');
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }
    
    // Ripple effect function
    function createRippleEffect(element) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        ripple.style.pointerEvents = 'none';
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Video background controls
    function initializeVideoBackground() {
        const video = document.querySelector('#bgVideo');
        
        if (video) {
            // Force unmuted and set volume immediately
            video.muted = false;
            video.volume = 0.6;
            video.loop = true;
            
            // Force immediate play when video is ready
            const forcePlay = () => {
                video.play().catch(e => {
                    console.log('Direct autoplay failed, forcing play');
                    // Force play even if blocked
                    video.muted = false;
                    video.play();
                });
            };
            
            // Multiple trigger points to ensure video plays
            video.addEventListener('loadstart', forcePlay);
            video.addEventListener('loadedmetadata', forcePlay);
            video.addEventListener('canplay', forcePlay);
            video.addEventListener('canplaythrough', forcePlay);
            
            // Ensure seamless looping
            video.addEventListener('ended', () => {
                video.currentTime = 0;
                video.play();
            });
            
            // Force play immediately when DOM is ready
            if (video.readyState >= 2) {
                forcePlay();
            }
            
            video.addEventListener('error', (e) => {
                console.log('Video loading error, using fallback background');
                document.querySelector('.video-background').style.background = 
                    'linear-gradient(45deg, #000428, #004e92, #009ffd, #00d2ff)';
                document.querySelector('.video-background').style.backgroundSize = '400% 400%';
                document.querySelector('.video-background').style.animation = 'gradientShift 10s ease infinite';
            });
            
            // Pause video when page is not visible, resume when visible
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    video.pause();
                } else {
                    video.muted = false;
                    video.volume = 0.6;
                    video.play();
                }
            });
            
            // Keep video playing continuously with audio
            setInterval(() => {
                if (video.paused && document.visibilityState === 'visible') {
                    video.muted = false;
                    video.volume = 0.6;
                    video.play();
                }
                // Ensure audio stays unmuted
                if (video.muted) {
                    video.muted = false;
                    video.volume = 0.6;
                }
            }, 2000);
            
            // Force play after loading screen
            setTimeout(() => {
                video.muted = false;
                video.volume = 0.6;
                video.play().catch(e => {
                    console.log('Delayed play attempt');
                    video.play();
                });
            }, 3500);
        }
    }
    
    // Audio Control System
    function initializeAudioControl() {
        const video = document.querySelector('#bgVideo');
        const audioToggle = document.querySelector('#audioToggle');
        const audioIcon = document.querySelector('#audioIcon');
        
        if (video && audioToggle && audioIcon) {
            // Initial state - muted
            let isMuted = true;
            updateAudioButton(isMuted);
            
            audioToggle.addEventListener('click', () => {
                if (isMuted) {
                    video.muted = false;
                    video.volume = 0.5;
                    isMuted = false;
                    
                    // Show notification
                    showAudioNotification('🔊 Audio Enabled');
                } else {
                    video.muted = true;
                    isMuted = true;
                    
                    // Show notification
                    showAudioNotification('🔇 Audio Muted');
                }
                
                updateAudioButton(isMuted);
                
                // Ensure video is playing
                video.play().catch(e => console.log('Play after audio toggle failed'));
            });
            
            function updateAudioButton(muted) {
                if (muted) {
                    audioToggle.classList.add('muted');
                    audioIcon.className = 'fas fa-volume-mute';
                } else {
                    audioToggle.classList.remove('muted');
                    audioIcon.className = 'fas fa-volume-up';
                }
            }
            
            function showAudioNotification(message) {
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 90px;
                    right: 20px;
                    z-index: 1002;
                    padding: 12px 20px;
                    background: rgba(0, 255, 255, 0.1);
                    border: 1px solid rgba(0, 255, 255, 0.3);
                    border-radius: 25px;
                    color: #00ffff;
                    font-family: 'Orbitron', monospace;
                    font-size: 0.9rem;
                    backdrop-filter: blur(10px);
                    opacity: 0;
                    transform: translateX(100px);
                    transition: all 0.3s ease;
                `;
                notification.textContent = message;
                
                document.body.appendChild(notification);
                
                // Animate in
                setTimeout(() => {
                    notification.style.opacity = '1';
                    notification.style.transform = 'translateX(0)';
                }, 100);
                
                // Animate out and remove
                setTimeout(() => {
                    notification.style.opacity = '0';
                    notification.style.transform = 'translateX(100px)';
                    setTimeout(() => notification.remove(), 300);
                }, 2500);
            }
        }
    }
    
    // Mobile device detection
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform));
    }
    
    // Visitor Counter System
    function initializeVisitorCounter() {
        const visitorCountElement = document.getElementById('visitorCount');
        
        // Get or initialize visitor count
        let visitorCount = localStorage.getItem('brijeshVisitorCount');
        
        if (!visitorCount) {
            // First time visitor - start at 1043
            visitorCount = 1043;
            localStorage.setItem('brijeshVisitorCount', visitorCount);
            localStorage.setItem('brijeshLastVisit', Date.now());
        } else {
            // Check if it's a new session (more than 30 minutes)
            const lastVisit = localStorage.getItem('brijeshLastVisit');
            const currentTime = Date.now();
            const timeDifference = currentTime - parseInt(lastVisit);
            
            // If more than 30 minutes, count as new visitor
            if (timeDifference > 30 * 60 * 1000) {
                visitorCount = parseInt(visitorCount) + 1;
                localStorage.setItem('brijeshVisitorCount', visitorCount);
            }
            
            localStorage.setItem('brijeshLastVisit', currentTime);
        }
        
        // Animate counter on load
        animateCounter(visitorCountElement, parseInt(visitorCount));
        
        // Add random visitor increments (1-3 visitors every 30-60 seconds)
        setInterval(() => {
            const currentCount = parseInt(localStorage.getItem('brijeshVisitorCount'));
            const increment = Math.floor(Math.random() * 3) + 1;
            const newCount = currentCount + increment;
            
            localStorage.setItem('brijeshVisitorCount', newCount);
            animateCounter(visitorCountElement, newCount);
            
            // Add visitor notification
            showVisitorNotification(increment);
        }, Math.random() * 30000 + 30000); // 30-60 seconds
    }
    
    // Animate counter with smooth transitions
    function animateCounter(element, targetValue) {
        const currentValue = parseInt(element.textContent);
        const duration = 1500;
        const startTime = Date.now();
        
        function updateCounter() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(currentValue + (targetValue - currentValue) * easeOutCubic);
            
            element.textContent = currentCount.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = targetValue.toLocaleString();
            }
        }
        
        updateCounter();
    }
    
    // Show visitor notification
    function showVisitorNotification(increment) {
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.top = '80px';
        notification.style.left = '20px';
        notification.style.zIndex = '1001';
        notification.style.padding = '10px 15px';
        notification.style.background = 'rgba(0, 255, 0, 0.1)';
        notification.style.border = '1px solid rgba(0, 255, 0, 0.3)';
        notification.style.borderRadius = '10px';
        notification.style.color = '#00ff00';
        notification.style.fontFamily = 'Orbitron, monospace';
        notification.style.fontSize = '0.8rem';
        notification.style.backdropFilter = 'blur(10px)';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        notification.style.transition = 'all 0.3s ease';
        notification.innerHTML = `+${increment} new visitor${increment > 1 ? 's' : ''} 👁️`;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Dynamic particle effect
    function createParticleEffect() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-container';
        particleContainer.style.position = 'fixed';
        particleContainer.style.top = '0';
        particleContainer.style.left = '0';
        particleContainer.style.width = '100%';
        particleContainer.style.height = '100%';
        particleContainer.style.pointerEvents = 'none';
        particleContainer.style.zIndex = '-1';
        
        document.body.appendChild(particleContainer);
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = ['#00ffff', '#ff00ff', '#00ff00'][Math.floor(Math.random() * 3)];
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px currentColor`;
            
            particleContainer.appendChild(particle);
            
            const animationDuration = Math.random() * 3000 + 2000;
            const drift = (Math.random() - 0.5) * 200;
            
            particle.animate([
                { transform: 'translateY(0px) translateX(0px)', opacity: particle.style.opacity },
                { transform: `translateY(-${window.innerHeight + 100}px) translateX(${drift}px)`, opacity: 0 }
            ], {
                duration: animationDuration,
                easing: 'linear'
            }).onfinish = () => {
                particle.remove();
            };
        }
        
        // Create particles at intervals
        setInterval(createParticle, 300);
    }
    
    // Scroll animations
    function initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for scroll animations
        const animateElements = document.querySelectorAll('.social-card, .platform-card, .profile-card');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            observer.observe(el);
        });
    }
    
    // Matrix rain effect for background
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.1';
        
        document.body.appendChild(canvas);
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const columns = canvas.width / 20;
        const drops = [];
        
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ffff';
            ctx.font = '15px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = String.fromCharCode(Math.random() * 128);
                ctx.fillText(text, i * 20, drops[i] * 20);
                
                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(draw, 35);
        
        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    // Initialize matrix effect (uncomment if you want matrix rain)
    // createMatrixRain();
    
    // Glitch effect on profile name
    const profileName = document.querySelector('.profile-name');
    if (profileName) {
        setInterval(() => {
            if (Math.random() > 0.95) {
                profileName.style.animation = 'none';
                profileName.offsetHeight; // Trigger reflow
                profileName.style.animation = 'glitch 0.3s ease-in-out';
            }
        }, 2000);
    }
    
    // Performance optimization
    let ticking = false;
    
    function updateAnimations() {
        // Update any continuous animations here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    // Optimize scroll events
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Add custom CSS animations for fade in up
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(style);
    
    // Console message for developers
    console.log(`
    ╔══════════════════════════════════════╗
    ║         BRIJESH X CHEAT              ║
    ║      Futuristic Profile Loaded       ║
    ║                                      ║
    ║    Best Panel PC iOS Android Tools   ║
    ╚══════════════════════════════════════╝
    `);
    
    console.log('🚀 Welcome to the future of gaming!');
});
