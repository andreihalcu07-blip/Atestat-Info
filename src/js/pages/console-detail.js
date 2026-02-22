/**
 * Console Detail Page - Dynamic content loader
 * Loads console specs from consoles.json and renders them into the page
 */

import { getConsoleById, getConsoleIdFromUrl, resolveImagePath } from '../data/data-loader.js';

/**
 * Image dimensions mapping - prevents layout shift during load
 * Format: 'filename.webp': { width: px, height: px }
 */
const IMAGE_DIMENSIONS = {
    '3do.webp': { width: 1200, height: 531 },
    'atari-2600.webp': { width: 1200, height: 735 },
    'atari-5200.webp': { width: 1200, height: 596 },
    'atari-7800.webp': { width: 1200, height: 648 },
    'atari-home-pong.webp': { width: 1200, height: 865 },
    'atari-jaguar.webp': { width: 1200, height: 517 },
    'atari-lynx.webp': { width: 1200, height: 691 },
    'coleco-telstar.webp': { width: 1200, height: 569 },
    'colecovision.webp': { width: 1200, height: 527 },
    'famicom.webp': { width: 1200, height: 1092 },
    'game-boy.webp': { width: 1200, height: 1455 },
    'game-boy-advance.webp': { width: 1200, height: 829 },
    'game-boy-color.webp': { width: 1200, height: 1657 },
    'intellivision.webp': { width: 1200, height: 637 },
    'magnavox-odyssey.webp': { width: 1200, height: 582 },
    'magnavox-odyssey-2.webp': { width: 1200, height: 698 },
    'microvision.webp': { width: 1200, height: 1723 },
    'neo-geo-aes.webp': { width: 1200, height: 397 },
    'neo-geo-pocket.webp': { width: 1200, height: 853 },
    'neo-geo-pocket-color.webp': { width: 1200, height: 844 },
    'nes.webp': { width: 1200, height: 652 },
    'nintendo-3ds.webp': { width: 1200, height: 1085 },
    'nintendo-64.webp': { width: 1200, height: 646 },
    'nintendo-ds.webp': { width: 1200, height: 1013 },
    'nintendo-gamecube.webp': { width: 1200, height: 674 },
    'nintendo-switch.webp': { width: 1200, height: 644 },
    'nintendo-wii.webp': { width: 1200, height: 1200 },
    'nintendo-wii-u.webp': { width: 1200, height: 580 },
    'pc-engine.webp': { width: 1200, height: 479 },
    'philips-cd-i.webp': { width: 1200, height: 645 },
    'playstation-1.webp': { width: 1200, height: 501 },
    'playstation-2.webp': { width: 1200, height: 1064 },
    'playstation-3.webp': { width: 1200, height: 1095 },
    'playstation-4.webp': { width: 1200, height: 962 },
    'playstation-5.webp': { width: 1200, height: 1600 },
    'ps1.webp': { width: 1200, height: 501 },
    'ps2.webp': { width: 1200, height: 1064 },
    'ps3.webp': { width: 1200, height: 1095 },
    'ps4.webp': { width: 1200, height: 962 },
    'ps5.webp': { width: 1200, height: 1600 },
    'psp.webp': { width: 1200, height: 658 },
    'ps-vita.webp': { width: 1200, height: 701 },
    'sega-dreamcast.webp': { width: 1200, height: 582 },
    'sega-game-gear.webp': { width: 1200, height: 804 },
    'sega-genesis.webp': { width: 1200, height: 571 },
    'sega-master-system.webp': { width: 1200, height: 958 },
    'sega-saturn.webp': { width: 1200, height: 653 },
    'sega-sg-1000.webp': { width: 1200, height: 708 },
    'snes.webp': { width: 1200, height: 623 },
    'vectrex.webp': { width: 1200, height: 1517 },
    'wonderswan.webp': { width: 1200, height: 825 },
    'xbox.webp': { width: 1200, height: 498 },
    'xbox360.webp': { width: 1200, height: 1200 },
    'xbox-one.webp': { width: 1200, height: 723 },
    'xbox-series-s.webp': { width: 1200, height: 1709 },
    'xbox-series-x.webp': { width: 1200, height: 1118 }
};

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
        
        // Set width and height to prevent layout shift
        const imageName = consola.imagine.split('/').pop();
        const dimensions = IMAGE_DIMENSIONS[imageName];
        if (dimensions) {
            img.width = dimensions.width;
            img.height = dimensions.height;
        }
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
