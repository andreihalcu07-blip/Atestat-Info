/**
 * Tab/Comparison Module
 * Gestionează switch-ul între tab-uri
 */

import { DOMUtils } from '../utils/dom.js';

export const ComparisonModule = {
    init() {
        this.setupTabButtons();
    },

    /**
     * Setup tab buttons
     */
    setupTabButtons() {
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.switchTab(e.target);
            });
        });
    },

    /**
     * Schimbă tab activ
     */
    switchTab(button) {
        const tabName = button.textContent.toLowerCase().replace(/\s+/g, '-');
        
        // Eliminează active class din toate butoanele
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        // Ascunde toate comparison-content
        document.querySelectorAll('.comparison-content').forEach(content => {
            content.classList.remove('active');
        });

        // Arată selected content
        const selectedId = `comparison-${tabName}`;
        const selectedContent = document.getElementById(selectedId);
        if (selectedContent) {
            selectedContent.classList.add('active');
        }
    }
};
