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
        } catch (error) {
            console.error('❌ Error initializing modules:', error);
        }
    }
}

// Inițializează app
new App();
