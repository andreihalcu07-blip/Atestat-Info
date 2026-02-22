/**
 * Console Detail Fallback Script
 * Works without ES modules (file:// protocol)
 * Tries to fetch consoles.json and render the page dynamically
 */
(function () {
    'use strict';

    // Image dimensions mapping - prevents layout shift during load
    var IMAGE_DIMENSIONS = {
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

    // Hamburger menu
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            var expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', String(!expanded));
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Determine console ID from filename
    function getConsoleId() {
        var params = new URLSearchParams(window.location.search);
        var idParam = params.get('id');
        if (idParam) return idParam;

        var path = window.location.pathname;
        var parts = path.replace(/\\/g, '/').split('/');
        var filename = parts[parts.length - 1];
        if (filename && filename.indexOf('.html') !== -1) {
            return filename.replace('.html', '');
        }
        return null;
    }

    // Format a boolean value
    function formatBool(val) {
        if (val === true) return 'Da';
        if (val === false) return 'Nu';
        return val || 'N/A';
    }

    // Check if value is meaningful
    function isNA(val) {
        return !val || val === 'N/A' || val === 'n/a';
    }

    // Format label-value pairs into HTML
    function formatList(pairs) {
        var filtered = pairs.filter(function (p) { return !isNA(p[1]); });
        if (filtered.length === 0) return '<p>\u2014</p>';
        return filtered.map(function (p) {
            return '<strong>' + p[0] + ':</strong> ' + p[1];
        }).join('<br>');
    }

    // Spec sections definition
    var SPEC_SECTIONS = [
        {
            group: 'Principale',
            cards: [
                {
                    title: 'Procesare (CPU)',
                    keys: function (c) {
                        return [
                            ['Arhitectur\u0103', c.cpu.arhitectura],
                            ['Proces', c.cpu.proces_nm],
                            ['Nuclee', c.cpu.nuclee],
                            ['Frecven\u021B\u0103', c.cpu.frecventa],
                            ['TDP', c.cpu.tdp]
                        ];
                    }
                },
                {
                    title: 'Grafic\u0103 (GPU)',
                    keys: function (c) {
                        return [
                            ['Arhitectur\u0103', c.gpu.arhitectura],
                            ['Unit\u0103\u021Bi', c.gpu.unitati],
                            ['Frecven\u021B\u0103', c.gpu.frecventa],
                            ['TFLOPS', c.gpu.tflops],
                            ['Capabilit\u0103\u021Bi', c.gpu.capabilitati]
                        ];
                    }
                },
                {
                    title: 'Memorie',
                    keys: function (c) {
                        return [
                            ['Tip', c.memorie.tip],
                            ['Capacitate', c.memorie.capacitate],
                            ['Magistral\u0103', c.memorie.magistrala],
                            ['Bandwidth', c.memorie.bandwidth]
                        ];
                    }
                },
                {
                    title: 'Stocare',
                    keys: function (c) {
                        return [
                            ['Tip', c.stocare.tip],
                            ['Interfa\u021B\u0103', c.stocare.interfata],
                            ['Vitez\u0103', c.stocare.viteza]
                        ];
                    }
                }
            ]
        },
        {
            group: 'Secundare',
            cards: [
                {
                    title: 'Output Video',
                    keys: function (c) {
                        return [
                            ['Rezolu\u021Bie', c.output_video.rezolutie],
                            ['Refresh', c.output_video.refresh],
                            ['HDR', c.output_video.hdr],
                            ['Upscaling', c.output_video.upscaling]
                        ];
                    }
                },
                {
                    title: 'Tehnologii',
                    keys: function (c) {
                        return [
                            ['Ray Tracing', formatBool(c.tehnologii.ray_tracing)],
                            ['VRR', formatBool(c.tehnologii.vrr)],
                            ['Backwards Compat', c.tehnologii.backwards_compatibility],
                            ['Altele', c.tehnologii.altele]
                        ];
                    }
                }
            ]
        }
    ];

    function renderHero(consola) {
        var h1 = document.querySelector('.console-hero-text h1');
        if (h1) h1.textContent = consola.nume;

        var meta = document.querySelector('.console-hero-text .console-meta');
        if (meta) {
            meta.innerHTML =
                '<span>' + consola.producator + '</span>' +
                '<span>' + consola.lansare + '</span>' +
                '<span>Genera\u021Bia ' + consola.generatie + '</span>';
        }

        var img = document.querySelector('.console-hero-image img');
        if (img) {
            img.src = '../../../' + consola.imagine;
            img.alt = consola.nume;
            
            // Set width and height to prevent layout shift
            var imageName = consola.imagine.split('/').pop();
            var dimensions = IMAGE_DIMENSIONS[imageName];
            if (dimensions) {
                img.width = dimensions.width;
                img.height = dimensions.height;
            }
        }

        document.title = consola.nume + ' \u2014 Console Notebook';
    }

    function renderSpecs(consola) {
        var container = document.querySelector('.specs-section .container');
        if (!container) return;

        var html = '<h2 class="section-title">Specifica\u021Bii Cheie</h2>';

        SPEC_SECTIONS.forEach(function (section) {
            html += '<div class="specs-group">';
            html += '<h3 class="specs-group-title">' + section.group + '</h3>';
            html += '<div class="specs-grid">';

            section.cards.forEach(function (card) {
                html += '<div class="spec-card">';
                html += '<h4>' + card.title + '</h4>';
                html += '<p>' + formatList(card.keys(consola)) + '</p>';
                html += '</div>';
            });

            html += '</div></div>';
        });

        // Verdict
        var hasAvantaje = consola.avantaje && consola.avantaje.length > 0;
        var hasDezavantaje = consola.dezavantaje && consola.dezavantaje.length > 0;

        if (hasAvantaje || hasDezavantaje) {
            html += '<div class="specs-group">';
            html += '<h3 class="specs-group-title">Verdict</h3>';
            html += '<div class="specs-grid">';

            if (hasAvantaje) {
                html += '<div class="spec-card"><h4>Avantaje</h4>';
                html += '<ul class="verdict-list pros-list">';
                consola.avantaje.forEach(function (p) {
                    html += '<li class="pro-item">\u2713 ' + p + '</li>';
                });
                html += '</ul></div>';
            }

            if (hasDezavantaje) {
                html += '<div class="spec-card"><h4>Dezavantaje</h4>';
                html += '<ul class="verdict-list cons-list">';
                consola.dezavantaje.forEach(function (c) {
                    html += '<li class="con-item">\u2717 ' + c + '</li>';
                });
                html += '</ul></div>';
            }

            html += '</div></div>';
        }

        container.innerHTML = html;
    }

    function showError(msg) {
        var container = document.querySelector('.specs-section .container');
        if (container) {
            container.innerHTML =
                '<h2 class="section-title">Eroare</h2>' +
                '<p class="console-loading">' + msg + '</p>';
        }
    }

    // Main init
    function init() {
        var consoleId = getConsoleId();
        if (!consoleId) {
            showError('Nu s-a putut determina consola din URL.');
            return;
        }

        fetch('../../../js/data/consoles.json')
            .then(function (res) {
                if (!res.ok) throw new Error('HTTP ' + res.status);
                return res.json();
            })
            .then(function (data) {
                var consola = null;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id === consoleId) {
                        consola = data[i];
                        break;
                    }
                }
                if (!consola) {
                    showError('Consola "' + consoleId + '" nu a fost g\u0103sit\u0103 \u00een baza de date.');
                    return;
                }
                renderHero(consola);
                renderSpecs(consola);
            })
            .catch(function (err) {
                console.warn('Fallback: fetch failed', err);
                showError('Nu s-au putut \u00EEnc\u0103rca datele. Deschide\u021Bi pagina printr-un server HTTP.');
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
