/**
 * Console Detail Page - Dynamic content loader
 * Loads console specs from consoles.json and renders them into the page
 */

import { getConsoleById, getConsoleIdFromUrl, resolveImagePath } from '../data/data-loader.js';

/**
 * Spec section definitions - maps JSON keys to display labels
 */
const SPEC_SECTIONS = [
    {
        group: 'Principale',
        cards: [
            {
                title: 'Procesare (CPU)',
                render: (c) => formatList([
                    ['Arhitectură', c.cpu.arhitectura],
                    ['Proces', c.cpu.proces_nm],
                    ['Nuclee', c.cpu.nuclee],
                    ['Frecvență', c.cpu.frecventa],
                    ['TDP', c.cpu.tdp]
                ])
            },
            {
                title: 'Grafică (GPU)',
                render: (c) => formatList([
                    ['Arhitectură', c.gpu.arhitectura],
                    ['Unități', c.gpu.unitati],
                    ['Frecvență', c.gpu.frecventa],
                    ['TFLOPS', c.gpu.tflops],
                    ['Capabilități', c.gpu.capabilitati]
                ])
            },
            {
                title: 'Memorie',
                render: (c) => formatList([
                    ['Tip', c.memorie.tip],
                    ['Capacitate', c.memorie.capacitate],
                    ['Magistrală', c.memorie.magistrala],
                    ['Bandwidth', c.memorie.bandwidth]
                ])
            },
            {
                title: 'Stocare',
                render: (c) => formatList([
                    ['Tip', c.stocare.tip],
                    ['Interfață', c.stocare.interfata],
                    ['Viteză', c.stocare.viteza]
                ])
            }
        ]
    },
    {
        group: 'Secundare',
        cards: [
            {
                title: 'Output Video',
                render: (c) => formatList([
                    ['Rezoluție', c.output_video.rezolutie],
                    ['Refresh', c.output_video.refresh],
                    ['HDR', c.output_video.hdr],
                    ['Upscaling', c.output_video.upscaling]
                ])
            },
            {
                title: 'Tehnologii',
                render: (c) => formatList([
                    ['Ray Tracing', formatBool(c.tehnologii.ray_tracing)],
                    ['VRR', formatBool(c.tehnologii.vrr)],
                    ['Backwards Compat', c.tehnologii.backwards_compatibility],
                    ['Altele', c.tehnologii.altele]
                ])
            }
        ]
    }
];

function formatBool(val) {
    if (val === true) return 'Da';
    if (val === false) return 'Nu';
    return val || 'N/A';
}

function isNA(val) {
    return !val || val === 'N/A' || val === 'n/a';
}

function formatList(pairs) {
    const filtered = pairs.filter(([_, val]) => !isNA(val));
    if (filtered.length === 0) return '<p>—</p>';
    return filtered.map(([label, val]) => `<strong>${label}:</strong> ${val}`).join('<br>');
}

/**
 * Render specs sections into the page
 */
function renderSpecs(consola) {
    const specsContainer = document.querySelector('.specs-section .container');
    if (!specsContainer) return;

    let html = '<h2 class="section-title">Specificații Cheie</h2>';

    SPEC_SECTIONS.forEach(section => {
        html += `
            <div class="specs-group">
                <h3 class="specs-group-title">${section.group}</h3>
                <div class="specs-grid">
                    ${section.cards.map(card => `
                        <div class="spec-card">
                            <h4>${card.title}</h4>
                            <p>${card.render(consola)}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    // Verdict section (avantaje / dezavantaje)
    if (consola.avantaje?.length || consola.dezavantaje?.length) {
        html += `
            <div class="specs-group">
                <h3 class="specs-group-title">Verdict</h3>
                <div class="specs-grid">
                    ${consola.avantaje?.length ? `
                    <div class="spec-card">
                        <h4>Avantaje</h4>
                        <ul class="verdict-list pros-list">
                            ${consola.avantaje.map(p => `<li class="pro-item">✓ ${p}</li>`).join('')}
                        </ul>
                    </div>` : ''}
                    ${consola.dezavantaje?.length ? `
                    <div class="spec-card">
                        <h4>Dezavantaje</h4>
                        <ul class="verdict-list cons-list">
                            ${consola.dezavantaje.map(c => `<li class="con-item">✗ ${c}</li>`).join('')}
                        </ul>
                    </div>` : ''}
                </div>
            </div>
        `;
    }

    specsContainer.innerHTML = html;
}

/**
 * Render the Istorie section dynamically from JSON
 * Inserted between hero and specs sections
 */
function renderHistory(consola) {
    // Ensure we have a reference point: place before .specs-section
    const specsSection = document.querySelector('.specs-section');
    if (!specsSection) return;

    // Create history section element
    let historySection = document.querySelector('.history-section');
    if (!historySection) {
        historySection = document.createElement('section');
        historySection.className = 'section history-section';
        const inner = document.createElement('div');
        inner.className = 'container';
        historySection.appendChild(inner);
        specsSection.parentNode.insertBefore(historySection, specsSection);
    }

    const container = historySection.querySelector('.container');
    // Section title
    const titleHtml = '<h2 class="section-title">Istorie</h2>';

    // History content (do not add example text if empty)
    let historyHtml = '';
    if (consola.istorie && String(consola.istorie).trim()) {
        // Split by double newlines for paragraphs, then replace single newlines with <br>
        const paragraphs = String(consola.istorie).split('\n\n').map(p => {
            return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
        }).join('');
        historyHtml = `<div class="history-content">${paragraphs}</div>`;
    } else {
        historyHtml = '<div class="history-content"></div>';
    }
    const content = historyHtml;

    container.innerHTML = titleHtml + content;
}

/**
 * Render the hero section with console data
 */
function renderHero(consola) {
    // Update title
    const h1 = document.querySelector('.console-hero-text h1');
    if (h1) h1.textContent = consola.nume;

    // Update meta info
    const metaContainer = document.querySelector('.console-hero-text .console-meta');
    if (metaContainer) {
        metaContainer.innerHTML = `
            <span>${consola.producator}</span>
            <span>${consola.lansare}</span>
            <span>Generația ${consola.generatie}</span>
        `;
    }

    // Update image
    const img = document.querySelector('.console-hero-image img');
    if (img) {
        img.src = resolveImagePath(consola.imagine);
        img.alt = consola.nume;
    }

    // Update page title
    document.title = `${consola.nume} — Console Notebook`;
}

/**
 * Initialize the console detail page
 */
async function init() {
    const consoleId = getConsoleIdFromUrl();
    if (!consoleId) {
        console.warn('No console ID found in URL');
        return;
    }

    const consola = await getConsoleById(consoleId);
    if (!consola) {
        console.warn(`Console "${consoleId}" not found in database`);
        return;
    }

    renderHero(consola);
    renderHistory(consola);
    renderSpecs(consola);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

export { init };
