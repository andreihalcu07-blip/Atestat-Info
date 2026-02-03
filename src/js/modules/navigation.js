/**
 * Navigation Module
 * Smooth scrolling, active links
 */

import { DOMUtils } from '../utils/dom.js';

export const NavigationModule = {
    init() {
        this.setupSmoothScroll();
        this.setupActiveLinks();
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
    }
};
