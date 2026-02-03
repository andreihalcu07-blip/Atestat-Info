/**
 * Comparatie.js - Dynamic Console Comparison
 * Handles console selection and dynamic comparison rendering
 */

import { consolesData, getConsolesList, getConsole } from '../data/consoles-data.js';

// DOM Elements
const selectA = document.getElementById('console-a-select');
const selectB = document.getElementById('console-b-select');
const comparisonContainer = document.getElementById('comparison-display');

// Initialize comparison page
function init() {
    if (!selectA || !selectB || !comparisonContainer) {
        console.warn('Comparison elements not found');
        return;
    }

    // Populate dropdowns
    populateSelects();

    // Add event listeners
    selectA.addEventListener('change', updateComparison);
    selectB.addEventListener('change', updateComparison);

    // Set default selections
    selectA.value = 'playstation-5';
    selectB.value = 'xbox-series-x';

    // Initial render
    updateComparison();
}

// Populate select dropdowns with consoles
function populateSelects() {
    const consoles = getConsolesList();
    
    // Group by generation
    const generations = {};
    consoles.forEach(c => {
        const gen = consolesData[c.id].generation;
        if (!generations[gen]) generations[gen] = [];
        generations[gen].push(c);
    });

    // Create optgroups
    const genLabels = {
        9: 'Generația 9 (2020+)',
        8: 'Generația 8 (2012-2017)',
        7: 'Generația 7 (2005-2006)',
        6: 'Generația 6 (1998-2001)',
        4: 'Generația 4 (1988-1990)',
        3: 'Generația 3 (1983-1987)',
        2: 'Generația 2 (1976-1982)'
    };

    [selectA, selectB].forEach(select => {
        select.innerHTML = '';
        
        Object.keys(generations)
            .sort((a, b) => b - a)
            .forEach(gen => {
                const optgroup = document.createElement('optgroup');
                optgroup.label = genLabels[gen] || `Generația ${gen}`;
                
                generations[gen].forEach(console => {
                    const option = document.createElement('option');
                    option.value = console.id;
                    option.textContent = `${console.name} (${console.year})`;
                    optgroup.appendChild(option);
                });
                
                select.appendChild(optgroup);
            });
    });
}

// Update comparison display
function updateComparison() {
    const consoleA = getConsole(selectA.value);
    const consoleB = getConsole(selectB.value);

    if (!consoleA || !consoleB) return;

    comparisonContainer.innerHTML = `
        <div class="comparison-grid">
            ${renderConsoleCard(consoleA, 'a')}
            <div class="comparison-vs">
                <span class="vs-badge">VS</span>
            </div>
            ${renderConsoleCard(consoleB, 'b')}
        </div>

        <div class="specs-comparison">
            <h3 class="specs-title">Specificații Tehnice</h3>
            ${renderSpecsComparison(consoleA, consoleB)}
        </div>

        <div class="verdict-section">
            <h3 class="verdict-title">Verdict Rapid</h3>
            <div class="verdict-grid">
                ${renderVerdict(consoleA)}
                ${renderVerdict(consoleB)}
            </div>
        </div>
    `;

    // Add animation class
    comparisonContainer.classList.add('fade-in');
    setTimeout(() => comparisonContainer.classList.remove('fade-in'), 300);
}

// Render individual console card
function renderConsoleCard(console, side) {
    return `
        <div class="console-card console-${side}">
            <div class="console-card-image">
                <img src="${console.image}" alt="${console.name}" loading="lazy">
            </div>
            <div class="console-card-info">
                <h3>${console.name}</h3>
                <div class="console-meta-tags">
                    <span class="meta-tag">${console.manufacturer}</span>
                    <span class="meta-tag">${console.year}</span>
                    <span class="meta-tag">Gen ${console.generation}</span>
                </div>
            </div>
        </div>
    `;
}

// Render specs comparison
function renderSpecsComparison(a, b) {
    const specLabels = {
        cpu: 'Procesor (CPU)',
        gpu: 'Grafică (GPU)',
        ram: 'Memorie RAM',
        storage: 'Stocare',
        resolution: 'Rezoluție Max',
        rayTracing: 'Ray Tracing'
    };

    let html = '<div class="specs-rows">';

    Object.keys(specLabels).forEach(key => {
        const valA = formatSpecValue(a.specs[key], key);
        const valB = formatSpecValue(b.specs[key], key);
        const comparison = compareSpecs(a.specs[key], b.specs[key], key);

        html += `
            <div class="spec-row">
                <div class="spec-value ${comparison === 'a' ? 'winner' : ''}">${valA}</div>
                <div class="spec-label">${specLabels[key]}</div>
                <div class="spec-value ${comparison === 'b' ? 'winner' : ''}">${valB}</div>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

// Format spec value for display
function formatSpecValue(value, key) {
    if (key === 'rayTracing') {
        return value ? '<span class="has-feature">✓ Da</span>' : '<span class="no-feature">✗ Nu</span>';
    }
    return value || 'N/A';
}

// Compare two spec values
function compareSpecs(valA, valB, key) {
    // Boolean comparison
    if (typeof valA === 'boolean' && typeof valB === 'boolean') {
        if (valA && !valB) return 'a';
        if (valB && !valA) return 'b';
        return null;
    }

    // Extract TFLOPS for GPU comparison
    if (key === 'gpu') {
        const tflopsA = parseFloat((valA.match(/[\d.]+\s*TFLOPS/i) || ['0'])[0]);
        const tflopsB = parseFloat((valB.match(/[\d.]+\s*TFLOPS/i) || ['0'])[0]);
        if (tflopsA > tflopsB) return 'a';
        if (tflopsB > tflopsA) return 'b';
    }

    // Extract GB for RAM/Storage
    if (key === 'ram' || key === 'storage') {
        const gbA = parseFloat((valA.match(/[\d.]+\s*(?:GB|TB)/i) || ['0'])[0]);
        const gbB = parseFloat((valB.match(/[\d.]+\s*(?:GB|TB)/i) || ['0'])[0]);
        // Convert TB to GB
        const sizeA = valA.includes('TB') ? gbA * 1000 : gbA;
        const sizeB = valB.includes('TB') ? gbB * 1000 : gbB;
        if (sizeA > sizeB) return 'a';
        if (sizeB > sizeA) return 'b';
    }

    return null;
}

// Render verdict (pros/cons)
function renderVerdict(console) {
    const prosHtml = console.pros.map(p => `<li class="pro-item">✓ ${p}</li>`).join('');
    const consHtml = console.cons.map(c => `<li class="con-item">✗ ${c}</li>`).join('');

    return `
        <div class="verdict-card">
            <h4 class="verdict-console-name">${console.name}</h4>
            <div class="verdict-lists">
                <div class="pros-list">
                    <h5 class="list-title pros-title">Avantaje</h5>
                    <ul>${prosHtml}</ul>
                </div>
                <div class="cons-list">
                    <h5 class="list-title cons-title">Dezavantaje</h5>
                    <ul>${consHtml}</ul>
                </div>
            </div>
        </div>
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for testing
export { updateComparison, renderConsoleCard };
