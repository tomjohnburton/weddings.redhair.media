// DOM Elements
const portfolioFilters = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Portfolio elements
const portfolioCards = document.querySelectorAll('.portfolio-card');


// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .about-text, .contact-info');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});


// Portfolio item hover effects
portfolioItems.forEach(item => {
    const overlay = item.querySelector('.portfolio-overlay');
    const viewBtn = item.querySelector('.view-btn');
    
    item.addEventListener('mouseenter', () => {
        overlay.style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0';
    });
    
    // Add click handler for portfolio items
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').textContent;
        showNotification(`Opening ${title} - This would typically open a video modal or redirect to a portfolio page.`, 'info');
    });
});

// Service card interactions
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const serviceName = card.querySelector('h3').textContent;
        showNotification(`Interested in ${serviceName}? Contact us for more details!`, 'info');
    });
});

// Social media links
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.querySelector('i').className.includes('instagram') ? 'Instagram' :
                        link.querySelector('i').className.includes('vimeo') ? 'Vimeo' :
                        link.querySelector('i').className.includes('youtube') ? 'YouTube' :
                        link.querySelector('i').className.includes('facebook') ? 'Facebook' : 'Social Media';
        
        showNotification(`This would open our ${platform} page.`, 'info');
    });
});

// Brochure download
const brochureBtn = document.querySelector('.brochure-download .btn');
if (brochureBtn) {
    brochureBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('Brochure download would start here. This is a demo.', 'info');
    });
}

// Lazy loading for images (when real images are added)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);


// Preload critical resources
function preloadResources() {
    // Preload Google Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
}


// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    preloadResources();
    
    // Add loading class removal
    document.body.classList.remove('loading');
    
    // Initialize any other components here
    console.log('Wedding Portfolio Website Loaded Successfully!');
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


