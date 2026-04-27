// DiscoverKorea - Main JavaScript

// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navMenu.classList.remove('active');
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    }
});

// Load categories dynamically
const categories = [
    {
        title: 'K-Wave 🌊',
        description: 'K-Pop, K-Drama, K-Beauty - Korean culture taking the world by storm',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600',
        link: '#kwave'
    },
    {
        title: 'Korean Species 🐕',
        description: 'Jindo dogs, Korean ginseng, and nature surviving 5000 years',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600',
        link: '#species'
    },
    {
        title: 'Taste Korea 🍜',
        description: 'From kimchi to Korean BBQ - flavors that tell a thousand stories',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600',
        link: '#taste'
    },
    {
        title: 'Culture & Heritage 🏛️',
        description: '5000 years of history, from ancient kingdoms to modern Korea',
        image: 'https://images.unsplash.com/photo-1555400082-3ef3e826c2a8?w=600',
        link: '#culture'
    },
    {
        title: 'Travel Korea 🗺️',
        description: 'From Seoul to Jeju - discover hidden gems and must-visit places',
        image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600',
        link: '#travel'
    },
    {
        title: 'Learn Korean 📚',
        description: 'Master Hangul and dive into the Korean language',
        image: 'https://images.unsplash.com/photo-1528114039593-4366cc08227d?w=600',
        link: '#learn'
    }
];

function loadCategories() {
    const categoryGrid = document.getElementById('categoryGrid');
    if (!categoryGrid) return;
    
    categoryGrid.innerHTML = categories.map(cat => `
        <div class="category-card">
            <img src="${cat.image}" alt="${cat.title}" loading="lazy">
            <div class="category-card-content">
                <h3>${cat.title}</h3>
                <p>${cat.description}</p>
                <a href="${cat.link}" class="card-link">Explore →</a>
            </div>
        </div>
    `).join('');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Language switcher
const langSelect = document.getElementById('langSelect');
if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        // Here you can add translation logic
        console.log('Language changed to:', lang);
        // For now, just show an alert
        if (lang !== 'en') {
            alert('Multi-language support coming soon! 곧 다국어 지원이 제공됩니다!');
            e.target.value = 'en';
        }
    });
}

// Image lazy loading
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Counter animation for stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// Observe stat numbers
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const target = parseInt(entry.target.dataset.target) || 0;
            animateCounter(entry.target, target);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statObserver.observe(stat);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCategories();
    
    // Add fade-in animation to hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 100);
    }
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Video modal functionality (for future use)
function openVideoModal(videoId) {
    // This can be expanded later for custom video modals
    console.log('Opening video:', videoId);
}

// Share functionality (for future use)
function shareContent(platform, url, text) {
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        linkedin: `https://www.linkedin.com/shareArticle?url=${url}&title=${text}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Add "Back to Top" button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--korean-blue, #0066CC);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    z-index: 999;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.opacity = '0';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopButton.addEventListener('mouseenter', () => {
    backToTopButton.style.transform = 'scale(1.1)';
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.transform = 'scale(1)';
});

// Instagram Reel Modal
const reelButton = document.getElementById('reelButton');
const reelModal = document.getElementById('reelModal');
const reelClose = document.getElementById('reelClose');
const reelModalOverlay = document.getElementById('reelModalOverlay');

if (reelButton && reelModal) {
    // Open modal
    reelButton.addEventListener('click', () => {
        reelModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Load Instagram embed script if not already loaded
        if (!window.instgrm) {
            const script = document.createElement('script');
            script.src = '//www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
        } else {
            // Process embeds if script already loaded
            window.instgrm.Embeds.process();
        }
    });
    
    // Close modal - close button
    if (reelClose) {
        reelClose.addEventListener('click', () => {
            reelModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close modal - overlay click
    if (reelModalOverlay) {
        reelModalOverlay.addEventListener('click', () => {
            reelModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close modal - ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && reelModal.classList.contains('active')) {
            reelModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

console.log('DiscoverKorea initialized! 🇰🇷');
