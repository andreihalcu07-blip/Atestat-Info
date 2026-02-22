/**
 * Main JavaScript Entry Point
 * Inițializează toate modulele
 */

// Import modules
import { NavigationModule } from './modules/navigation.js';
import { AnimationsModule } from './modules/animations.js';

/**
 * App Class - Orchestrates all modules
 */
class App {
    constructor() {
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeModules());
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
            
            console.log('✅ All modules initialized successfully');
            this.initMathRendering();
        } catch (error) {
            console.error('❌ Error initializing modules:', error);
        }
    }

    initMathRendering() {
        if (typeof renderMathInElement === 'undefined') return;

        renderMathInElement(document.body, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false }
            ]
        });
    }
}

// Inițializează app
new App();
