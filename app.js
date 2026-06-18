// Main Application Controller & Router (app.js)
import { stateManager } from './state.js';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';

// Page imports
import { HomePage } from './pages/Home.js';
import { AboutPage } from './pages/About.js';
import { ServicesPage } from './pages/Services.js';
import { PortfolioPage } from './pages/Portfolio.js';
import { TestimonialsPage } from './pages/Testimonials.js';
import { BlogPage } from './pages/Blog.js';
import { ContactPage } from './pages/Contact.js';
import { DashboardPage } from './pages/DashboardPage.js';
import { BookingSystem } from './components/Booking.js';
import { PaymentPortal } from './components/Payment.js';

// Router mapping
const routes = {
    '/': HomePage,
    '/about': AboutPage,
    '/services': ServicesPage,
    '/portfolio': PortfolioPage,
    '/testimonials': TestimonialsPage,
    '/blog': BlogPage,
    '/contact': ContactPage,
    '/dashboard': DashboardPage,
    '/booking': BookingSystem,
    '/payment': PaymentPortal
};

// Route resolver
function resolveRoute() {
    const hash = window.location.hash || '#/';
    // Extract base route path ignoring parameters
    const routePath = hash.split('?')[0].substring(1) || '/';
    
    const page = routes[routePath] || HomePage; // Fallback to Home

    // Scroll window to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Mount page HTML
    const contentRoot = document.getElementById('app-content');
    if (contentRoot) {
        contentRoot.innerHTML = page.html();
        // Trigger page initializations (bind event handlers)
        page.init();
    }

    // Highlight active item on Navbar
    Navbar.updateActiveItem(routePath);
}

// Global Toast System
window.showToast = (message, type = 'success') => {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Choose appropriate icon
    const icon = type === 'success' ? 'check-circle' : 'alert-triangle';
    toast.innerHTML = `<i data-lucide="${icon}" style="width:16px;height:16px;"></i> ${message}`;
    
    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    // Fade out and remove toast
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
};

// Global Video Modal Controller
window.openVideoModal = (videoSrc) => {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('modal-video-player');
    
    if (modal && player && videoSrc) {
        player.src = videoSrc;
        modal.classList.add('active');
        player.play().catch(err => console.log("Video auto-play blocked by browser. User must tap play."));
    }
};

window.closeVideoModal = () => {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('modal-video-player');
    
    if (modal && player) {
        player.pause();
        player.src = '';
        modal.classList.remove('active');
    }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mount persistent layout shells
    const headerRoot = document.getElementById('header-root');
    const footerRoot = document.getElementById('footer-root');

    if (headerRoot) {
        headerRoot.innerHTML = Navbar.html();
        Navbar.init();
    }

    if (footerRoot) {
        footerRoot.innerHTML = Footer.html();
        Footer.init();
    }

    // 2. Preloader fade out transition
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.visibility = 'hidden';
            }, 1000);
        }, 1200);
    }

    // 3. Resolve initial route
    resolveRoute();

    // 4. Bind hash router events
    window.addEventListener('hashchange', resolveRoute);
    window.reRoute = resolveRoute; // Expose route refresher helper
});
