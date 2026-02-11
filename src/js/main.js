/**
 * Main JavaScript Entry Point
 * Inițializează toate modulele
 */

// Import modules
import { NavigationModule } from './modules/navigation.js';
import { AnimationsModule } from './modules/animations.js';
import { ComparisonModule } from './modules/tabs.js';
import { CalculatorModule } from './modules/calculator.js';

/**
 * App Class - Orchestrates all modules
 */
class App {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initializeModules();
        });

        // Fallback dacă DOMContentLoaded deja s-a declanșat
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeModules();
            });
        } else {
            this.initializeModules();
        }
    }

    /**
     * Initialize all modules
     */
    initializeModules() {
        console.log('🚀 Initializing Console Notebook App...');
        
        try {
            NavigationModule.init();
            console.log('✓ Navigation module initialized');
            
            AnimationsModule.init();
            console.log('✓ Animations module initialized');
            
            ComparisonModule.init();
            console.log('✓ Comparison module initialized');
            
            CalculatorModule.init();
            console.log('✓ Calculator module initialized');
            
            console.log('✅ All modules initialized successfully');
            // Small, non-destructive enhancement for the Home page:
            // wrap the first sentence of the intro in a <strong> so it appears bold.
            this._wrapHomeIntroFirstSentence();
            // Ensure a consistent global footer across all pages
            this._injectGlobalFooter();
        } catch (error) {
            console.error('❌ Error initializing modules:', error);
        }
    }

    _wrapHomeIntroFirstSentence() {
        try {
            const el = document.querySelector('#content .section-intro');
            if (!el) return;

            const raw = el.textContent.trim();
            const match = raw.match(/^([\s\S]*?[\.\!\?])(\s+|$)([\s\S]*)/);
            if (match) {
                const first = match[1].trim();
                const rest = match[3] ? match[3].trim() : '';
                // Replace content safely: first sentence wrapped in <strong>
                el.innerHTML = '<span class="first-sentence"><strong>' + first + '</strong></span>' + (rest ? ' ' + rest : '');
            }
        } catch (e) {
            // Fail silently - enhancement only
            console.debug('Home intro enhancement skipped', e);
        }
    }

    _injectGlobalFooter() {
        try {
            const footerHTML = `
                <div class="container footer-grid">
                    <div class="footer-left">
                        <h3>Console Notebook</h3>
                        <p>Analiză tehnică și evoluția consolelor de jocuri.</p>
                    </div>
                    <div class="footer-right">
                        <div class="footer-links">
                            <a href="mailto:contact@consolenotebook.ro">contact@consolenotebook.ro</a>
                            <a href="https://github.com/ConsoleNotebook" target="_blank" rel="noopener">GitHub</a>
                        </div>
                        <p>© 2026 Console Notebook. Proiect educațional.</p>
                    </div>
                </div>
            `;

            document.querySelectorAll('.footer').forEach(f => {
                // Preserve the footer element but replace its inner content
                f.innerHTML = footerHTML;
            });
        } catch (e) {
            console.debug('Footer injection skipped', e);
        }
    }
}

// Inițializează app
new App();
