/**
 * Navigation Module
 * Smooth scrolling, active links, mobile hamburger menu
 */

import { DOMUtils } from '../utils/dom.js';

export const NavigationModule = {
    init() {
        this.setupSmoothScroll();
        this.setupActiveLinks();
        this.setupMobileMenu();
    },

    /**
     * Smooth scroll pentru anchor links
     */
    setupSmoothScroll() {
        DOMUtils.onAll('a[href^="#"]', 'click', (e) => {
            const href = e.currentTarget.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Închide meniul mobile după navigare
                    this.closeMobileMenu();
                }
            }
        });
    },

    /**
     * Marchează link activ în navbar
     */
    setupActiveLinks() {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    },

    /**
     * Mobile Hamburger Menu
     */
    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navLinksItems = document.querySelectorAll('.nav-links a');
        
        if (!hamburger || !navLinks) return;
        
        // Ensure button has explicit type to avoid form submit behavior
        if (hamburger && hamburger.tagName === 'BUTTON' && !hamburger.getAttribute('type')) {
            hamburger.setAttribute('type', 'button');
        }

        // Toggle menu când se apasă hamburger (suport click + touchstart pentru mobile)
        const toggleHandler = (e) => {
            if (e.type === 'touchstart') e.preventDefault();
            this.toggleMobileMenu();
        };

        hamburger.addEventListener('click', toggleHandler);
        hamburger.addEventListener('touchstart', toggleHandler, { passive: false });
        
        // Închide meniul când se apasă un link
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
        
        // Închide meniul când se apasă ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });
        
        // Închide meniul când se face click în afara lui
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !hamburger.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    },

    /**
     * Toggle mobile menu
     */
    toggleMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (!hamburger || !navLinks) return;
        
        const isActive = navLinks.classList.contains('active');
        
        if (isActive) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    },

    /**
     * Deschide mobile menu
     */
    openMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (!hamburger || !navLinks) return;
        
        hamburger.classList.add('active');
        navLinks.classList.add('active');
        document.body.classList.add('menu-open');
        
        // Update ARIA
        hamburger.setAttribute('aria-expanded', 'true');
    },

    /**
     * Închide mobile menu
     */
    closeMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (!hamburger || !navLinks) return;
        
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        // Update ARIA
        hamburger.setAttribute('aria-expanded', 'false');
    }
};
