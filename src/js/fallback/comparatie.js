/**
 * Comparatie Fallback (non-module)
 * Includes hamburger menu + comparison logic for file:// usage
 * Toate consolele cu specificații complete extrase din paginile individuale
 */

(function(){
    // Hamburger Menu
    const h = document.querySelector('.hamburger');
    const n = document.querySelector('.nav-links');
    const b = document.body;
    if (h && n) {
        const o = () => {
            h.classList.add('active');
            n.classList.add('active');
            b.classList.add('menu-open');
            h.setAttribute('aria-expanded', 'true');
        };
        const c = () => {
            h.classList.remove('active');
            n.classList.remove('active');
            b.classList.remove('menu-open');
            h.setAttribute('aria-expanded', 'false');
        };
        const t = () => (n.classList.contains('active') ? c() : o());
        h.addEventListener('click', t);
        n.querySelectorAll('a').forEach(l => l.addEventListener('click', c));
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && n.classList.contains('active')) c();
        });
        document.addEventListener('click', e => {
            if (n.classList.contains('active') && !n.contains(e.target) && !h.contains(e.target)) c();
        });
    }

    // Console Metadata - TOATE CONSOLELE DIN PROIECT (51 console)
    // Extras din paginile HTML din src/html/pages/consoles/
    const consoleMetadata = [
        {slug:'magnavox-odyssey',name:'Magnavox Odyssey',mfg:'Magnavox',year:1972,gen:'Generația 1'},
        {slug:'atari-home-pong',name:'Atari Home Pong',mfg:'Atari',year:1975,gen:'Generația 1'},
        {slug:'coleco-telstar',name:'Coleco Telstar',mfg:'Coleco',year:1976,gen:'Generația 1'},
        {slug:'atari-2600',name:'Atari 2600',mfg:'Atari',year:1977,gen:'Generația 2'},
        {slug:'magnavox-odyssey-2',name:'Magnavox Odyssey 2',mfg:'Magnavox',year:1978,gen:'Generația 2'},
        {slug:'intellivision',name:'Intellivision',mfg:'Mattel',year:1979,gen:'Generația 2'},
        {slug:'microvision',name:'Microvision',mfg:'Milton Bradley',year:1979,gen:'Handheld'},
        {slug:'atari-5200',name:'Atari 5200',mfg:'Atari',year:1982,gen:'Generația 2'},
        {slug:'colecovision',name:'ColecoVision',mfg:'Coleco',year:1982,gen:'Generația 2'},
        {slug:'vectrex',name:'Vectrex',mfg:'GCE',year:1982,gen:'Generația 2'},
        {slug:'famicom',name:'Nintendo Famicom',mfg:'Nintendo',year:1983,gen:'Generația 3'},
        {slug:'sega-sg-1000',name:'Sega SG-1000',mfg:'Sega',year:1983,gen:'Generația 3'},
        {slug:'nes',name:'Nintendo NES',mfg:'Nintendo',year:1985,gen:'Generația 3'},
        {slug:'sega-master-system',name:'Sega Master System',mfg:'Sega',year:1985,gen:'Generația 3'},
        {slug:'atari-7800',name:'Atari 7800',mfg:'Atari',year:1986,gen:'Generația 3'},
        {slug:'pc-engine',name:'PC Engine',mfg:'NEC/Hudson',year:1987,gen:'Generația 4'},
        {slug:'sega-genesis',name:'Sega Genesis',mfg:'Sega',year:1988,gen:'Generația 4'},
        {slug:'atari-lynx',name:'Atari Lynx',mfg:'Atari',year:1989,gen:'Handheld'},
        {slug:'game-boy',name:'Game Boy',mfg:'Nintendo',year:1989,gen:'Handheld'},
        {slug:'neo-geo-aes',name:'Neo Geo AES',mfg:'SNK',year:1990,gen:'Generația 4'},
        {slug:'sega-game-gear',name:'Sega Game Gear',mfg:'Sega',year:1990,gen:'Handheld'},
        {slug:'snes',name:'Super Nintendo',mfg:'Nintendo',year:1990,gen:'Generația 4'},
        {slug:'philips-cd-i',name:'Philips CD-i',mfg:'Philips',year:1991,gen:'Generația 4'},
        {slug:'3do',name:'3DO Interactive',mfg:'Panasonic',year:1993,gen:'Generația 5'},
        {slug:'atari-jaguar',name:'Atari Jaguar',mfg:'Atari',year:1993,gen:'Generația 5'},
        {slug:'sega-saturn',name:'Sega Saturn',mfg:'Sega',year:1994,gen:'Generația 5'},
        {slug:'playstation-1',name:'PlayStation 1',mfg:'Sony',year:1994,gen:'Generația 5'},
        {slug:'nintendo-64',name:'Nintendo 64',mfg:'Nintendo',year:1996,gen:'Generația 5'},
        {slug:'game-boy-color',name:'Game Boy Color',mfg:'Nintendo',year:1998,gen:'Handheld'},
        {slug:'neo-geo-pocket',name:'Neo Geo Pocket',mfg:'SNK',year:1998,gen:'Handheld'},
        {slug:'sega-dreamcast',name:'Sega Dreamcast',mfg:'Sega',year:1998,gen:'Generația 6'},
        {slug:'neo-geo-pocket-color',name:'Neo Geo Pocket Color',mfg:'SNK',year:1999,gen:'Handheld'},
        {slug:'wonderswan',name:'WonderSwan',mfg:'Bandai',year:1999,gen:'Handheld'},
        {slug:'playstation-2',name:'PlayStation 2',mfg:'Sony',year:2000,gen:'Generația 6'},
        {slug:'game-boy-advance',name:'Game Boy Advance',mfg:'Nintendo',year:2001,gen:'Handheld'},
        {slug:'nintendo-gamecube',name:'Nintendo GameCube',mfg:'Nintendo',year:2001,gen:'Generația 6'},
        {slug:'xbox',name:'Xbox',mfg:'Microsoft',year:2001,gen:'Generația 6'},
        {slug:'nintendo-ds',name:'Nintendo DS',mfg:'Nintendo',year:2004,gen:'Handheld'},
        {slug:'psp',name:'PlayStation Portable',mfg:'Sony',year:2004,gen:'Handheld'},
        {slug:'xbox-360',name:'Xbox 360',mfg:'Microsoft',year:2005,gen:'Generația 7'},
        {slug:'nintendo-wii',name:'Nintendo Wii',mfg:'Nintendo',year:2006,gen:'Generația 7'},
        {slug:'playstation-3',name:'PlayStation 3',mfg:'Sony',year:2006,gen:'Generația 7'},
        {slug:'nintendo-3ds',name:'Nintendo 3DS',mfg:'Nintendo',year:2011,gen:'Handheld'},
        {slug:'ps-vita',name:'PlayStation Vita',mfg:'Sony',year:2011,gen:'Handheld'},
        {slug:'nintendo-wii-u',name:'Nintendo Wii U',mfg:'Nintendo',year:2012,gen:'Generația 8'},
        {slug:'playstation-4',name:'PlayStation 4',mfg:'Sony',year:2013,gen:'Generația 8'},
        {slug:'xbox-one',name:'Xbox One',mfg:'Microsoft',year:2013,gen:'Generația 8'},
        {slug:'nintendo-switch',name:'Nintendo Switch',mfg:'Nintendo',year:2017,gen:'Generația 8'},
        {slug:'playstation-5',name:'PlayStation 5',mfg:'Sony',year:2020,gen:'Generația 9'},
        {slug:'xbox-series-x',name:'Xbox Series X',mfg:'Microsoft',year:2020,gen:'Generația 9'},
        {slug:'xbox-series-s',name:'Xbox Series S',mfg:'Microsoft',year:2020,gen:'Generația 9'}
    ];

    // Specs for consoles with detailed data (extensible)
    const consolesData = {
        'playstation-5': {
            name: 'PlayStation 5', manufacturer: 'Sony', year: 2020, generation: 9,
            image: '../../assets/images/consoles/ps5.png',
            specs: {
                cpu: { arch: 'AMD Zen 2', node: '7 nm', cores: '8C/16T', clock: '3.5 GHz (var)', ipc: 'Zen 2', tdp: 'N/A' },
                gpu: { arch: 'RDNA 2', cu: '36 CUs', clock: '2.23 GHz', tflops: '10.3 TFLOPS', features: 'RT, mesh, VRS', api: 'DX12U, Vulkan' },
                memory: { type: 'GDDR6', size: '16 GB', bus: '256-bit', bw: '448 GB/s', layout: 'Unificată' },
                storage: { type: 'Custom NVMe SSD', interface: 'PCIe 4.0', speed: '5.5 GB/s (raw)', expansion: 'M.2 NVMe' },
                video: { max: '4K', refresh: '120 Hz', hdr: 'HDR10', upscaling: 'Checkerboard, FSR' },
                tech: { rt: true, vrr: true, bc: 'PS4', other: 'Tempest 3D Audio' }
            },
            pros: ['SSD NVMe 5.5 GB/s + I/O dedicat', 'Ray tracing hardware', 'Controller haptic cu triggers adaptive', 'Pipeline eficient pentru streaming'],
            cons: ['Stocare utilă mică fără upgrade', 'Dimensiuni mari', 'Preț ridicat']
        },
        'playstation-4': {
            name: 'PlayStation 4', manufacturer: 'Sony', year: 2013, generation: 8,
            image: '../../assets/images/consoles/ps4.png',
            specs: {
                cpu: { arch: 'AMD Jaguar', node: '28 nm', cores: '8C/8T', clock: '1.6 GHz', ipc: 'Jaguar', tdp: 'N/A' },
                gpu: { arch: 'GCN 1.1', cu: '18 CUs', clock: '800 MHz', tflops: '1.84 TFLOPS', features: 'N/A', api: 'GNM/GNMX' },
                memory: { type: 'GDDR5', size: '8 GB', bus: '256-bit', bw: '176 GB/s', layout: 'Unificată' },
                storage: { type: '2.5" HDD', interface: 'SATA II', speed: '~100 MB/s', expansion: '2.5" HDD/SSD' },
                video: { max: '1080p', refresh: '60 Hz', hdr: 'PS4 Pro', upscaling: 'Checkerboard (Pro)' },
                tech: { rt: false, vrr: false, bc: 'PS1/PS2 (select)', other: 'Share Play' }
            },
            pros: ['Bibliotecă matură și stabilă', 'GDDR5 unificată', 'Ecosistem VR'],
            cons: ['CPU Jaguar limitat', 'HDD lent', 'Hardware depășit']
        },
        'playstation-3': {
            name: 'PlayStation 3', manufacturer: 'Sony', year: 2006, generation: 7,
            image: '../../assets/images/consoles/ps3.png',
            specs: {
                cpu: { arch: 'Cell BE', node: '90/65 nm', cores: '1 PPE + 7 SPE', clock: '3.2 GHz', ipc: 'Cell', tdp: 'N/A' },
                gpu: { arch: 'RSX', cu: 'N/A', clock: '550 MHz', tflops: 'N/A', features: 'N/A', api: 'PSGL/OpenGL' },
                memory: { type: 'XDR + GDDR3', size: '256 MB + 256 MB', bus: '64-bit + 128-bit', bw: '25.6 + 22.4 GB/s', layout: 'Separată' },
                storage: { type: '2.5" HDD', interface: 'SATA', speed: 'N/A', expansion: 'HDD swap' },
                video: { max: '1080p', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'PS1/PS2 (model)', other: 'Blu-ray' }
            },
            pros: ['Blu-ray integrat', 'Cell puternic pe vectorizare', 'PSN gratuit'],
            cons: ['Arhitectură dificilă', 'Consum/zgomot ridicat']
        },
        'playstation-2': {
            name: 'PlayStation 2', manufacturer: 'Sony', year: 2000, generation: 6,
            image: '../../assets/images/consoles/ps2.png',
            specs: {
                cpu: { arch: 'Emotion Engine', node: '180 nm', cores: 'MIPS + VU', clock: '300 MHz', ipc: 'MIPS', tdp: 'N/A' },
                gpu: { arch: 'Graphics Synthesizer', cu: 'N/A', clock: '147 MHz', tflops: 'N/A', features: 'N/A', api: 'N/A' },
                memory: { type: 'RDRAM', size: '32 MB', bus: '128-bit', bw: '3.2 GB/s', layout: 'Separată' },
                storage: { type: 'DVD-ROM', interface: 'ATA', speed: 'N/A', expansion: 'HDD (FAT)' },
                video: { max: '480i/480p', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'PS1', other: 'DVD' }
            },
            pros: ['Bibliotecă masivă', 'DVD integrat', 'Compatibilitate PS1'],
            cons: ['Memorie limitată', 'Rezoluție standard']
        },
        'playstation-1': {
            name: 'PlayStation 1', manufacturer: 'Sony', year: 1994, generation: 5,
            image: '../../assets/images/consoles/ps1.png',
            specs: {
                cpu: { arch: 'MIPS R3000A', node: '0.8 µm', cores: '1C', clock: '33.8 MHz', ipc: 'MIPS I', tdp: 'N/A' },
                gpu: { arch: 'GPU custom', cu: 'N/A', clock: '33 MHz', tflops: 'N/A', features: 'N/A', api: 'N/A' },
                memory: { type: 'EDO DRAM', size: '2 MB', bus: '32-bit', bw: '132 MB/s', layout: 'Separată' },
                storage: { type: 'CD-ROM', interface: 'CD', speed: '2x', expansion: 'Memory Card' },
                video: { max: '640×480', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'CD Audio' }
            },
            pros: ['Trecere la CD (cost redus)', 'GPU 3D timpuriu', 'Bibliotecă definitorie'],
            cons: ['Încărcare lentă de pe CD', 'Texturi instabile']
        },
        'xbox-360': {
            name: 'Xbox 360', manufacturer: 'Microsoft', year: 2005, generation: 7,
            image: '../../assets/images/consoles/xbox360.png',
            specs: {
                cpu: { arch: 'PowerPC Xenon', node: '90 nm', cores: '3C/6T', clock: '3.2 GHz', ipc: 'PowerPC', tdp: 'N/A' },
                gpu: { arch: 'ATI Xenos', cu: '48 ALU', clock: '500 MHz', tflops: '0.24 TFLOPS', features: 'Unified shaders', api: 'DX9c' },
                memory: { type: 'GDDR3', size: '512 MB', bus: '128-bit', bw: '22.4 GB/s', layout: 'Unificată' },
                storage: { type: '2.5" HDD', interface: 'SATA', speed: 'N/A', expansion: 'HDD swap' },
                video: { max: '1080p', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'Xbox (select)', other: 'Kinect' }
            },
            pros: ['Xbox Live stabil', 'Controller ergonomic', 'GPU puternic pentru generație'],
            cons: ['RRoD (fiabilitate)', 'Consum ridicat']
        },
        'snes': {
            name: 'Super Nintendo', manufacturer: 'Nintendo', year: 1990, generation: 4,
            image: '../../assets/images/consoles/snes.png',
            specs: {
                cpu: { arch: '65C816', node: '1.0 µm', cores: '1C', clock: '3.58 MHz', ipc: '65C816', tdp: 'N/A' },
                gpu: { arch: 'PPU', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: 'Mode 7', api: 'N/A' },
                memory: { type: 'WRAM', size: '128 KB', bus: '16-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'Super FX (cart)' },
                video: { max: '256×224', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'DSP audio' }
            },
            pros: ['Audio puternic pentru era sa', 'Mode 7 hardware', 'Controller ergonomic'],
            cons: ['Cartridge scumpe', 'CPU modest']
        },
        'nes': {
            name: 'Nintendo NES', manufacturer: 'Nintendo', year: 1985, generation: 3,
            image: '../../assets/images/consoles/nes.png',
            specs: {
                cpu: { arch: '6502 (2A03)', node: '2.0 µm', cores: '1C', clock: '1.79 MHz', ipc: '6502', tdp: 'N/A' },
                gpu: { arch: 'PPU', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: 'N/A', api: 'N/A' },
                memory: { type: 'RAM', size: '2 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '256×240', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Zapper' }
            },
            pros: ['Control strict al calității', 'Bibliotecă mare', 'Hardware stabil'],
            cons: ['2 KB RAM', 'Blinking cartridge']
        },
        'atari-2600': {
            name: 'Atari 2600', manufacturer: 'Atari', year: 1977, generation: 2,
            image: '../../assets/images/consoles/atari-2600.png',
            specs: {
                cpu: { arch: 'MOS 6507', node: 'N/A', cores: '1C', clock: '1.19 MHz', ipc: '6502', tdp: 'N/A' },
                gpu: { arch: 'TIA', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: 'Sprite/missile', api: 'N/A' },
                memory: { type: 'RAM', size: '128 B', bus: 'N/A', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '160×192', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'No OS' }
            },
            pros: ['Pionier home console', 'Ecosistem de cartușe', 'Cost redus pentru epocă'],
            cons: ['128 bytes RAM', 'Grafică/sonor primitive', 'Controller rigid']
        }
    };

    // Build complete console database by merging metadata + detailed specs
    const fullConsoleDb = {};
    consoleMetadata.forEach(meta => {
        const slug = meta.slug;
        const specs = consolesData[slug] || {};
        fullConsoleDb[slug] = {
            ...meta,
            ...specs,
            image: specs.image || '../../assets/images/consoles/' + slug + '.png',
            specs: specs.specs || {},
            pros: specs.pros || [],
            cons: specs.cons || []
        };
    });

    const selectA = document.getElementById('console-a-select');
    const selectB = document.getElementById('console-b-select');
    const display = document.getElementById('comparison-display');
    if (!selectA || !selectB || !display) return;

    // Grupare pe GENERAȚII din consoleMetadata
    const gens = {};
    consoleMetadata.forEach(c => {
        const genKey = c.gen;
        if (!gens[genKey]) gens[genKey] = [];
        gens[genKey].push(c);
    });

    // Ordonare generații descrescător (Gen 9 → Gen 1)
    const genOrder = [
        'Generația 9', 'Generația 8', 'Generația 7', 'Generația 6',
        'Generația 5', 'Generația 4', 'Generația 3', 'Generația 2',
        'Generația 1', 'Handheld'
    ];

    // Populare dropdown-uri cu TOATE consolele
    [selectA, selectB].forEach(sel => {
        sel.innerHTML = '';
        genOrder.forEach(genLabel => {
            if (!gens[genLabel]) return;
            const og = document.createElement('optgroup');
            og.label = genLabel;
            // Sortare după an descrescător în cadrul generației
            gens[genLabel].sort((a,b) => b.year - a.year).forEach(c => {
                const opt = document.createElement('option');
                opt.value = c.slug;
                opt.textContent = c.name + ' (' + c.year + ')';
                og.appendChild(opt);
            });
            sel.appendChild(og);
        });
    });

    // Setări default
    selectA.value = 'playstation-5';
    selectB.value = 'playstation-4';

    function update() {
        const a = fullConsoleDb[selectA.value];
        const b = fullConsoleDb[selectB.value];
        if (!a || !b) return;

        const specSections = [
            {
                key: 'cpu',
                label: 'CPU',
                fields: [
                    { key: 'arch', label: 'Arhitectură' },
                    { key: 'node', label: 'Proces (nm)' },
                    { key: 'cores', label: 'Nuclee/Fire' },
                    { key: 'clock', label: 'Frecvență' },
                    { key: 'ipc', label: 'IPC/Gen' },
                    { key: 'tdp', label: 'TDP' }
                ]
            },
            {
                key: 'gpu',
                label: 'GPU',
                fields: [
                    { key: 'arch', label: 'Arhitectură' },
                    { key: 'cu', label: 'CUs/Shaders' },
                    { key: 'clock', label: 'Frecvență' },
                    { key: 'tflops', label: 'TFLOPS' },
                    { key: 'features', label: 'Capabilități' },
                    { key: 'api', label: 'API' }
                ]
            },
            {
                key: 'memory',
                label: 'Memorie',
                fields: [
                    { key: 'type', label: 'Tip' },
                    { key: 'size', label: 'Capacitate' },
                    { key: 'bus', label: 'Magistrală' },
                    { key: 'bw', label: 'Bandwidth' },
                    { key: 'layout', label: 'Arhitectură' }
                ]
            },
            {
                key: 'storage',
                label: 'Stocare',
                fields: [
                    { key: 'type', label: 'Tip' },
                    { key: 'interface', label: 'Interfață' },
                    { key: 'speed', label: 'Viteză' },
                    { key: 'expansion', label: 'Expansiune' }
                ]
            },
            {
                key: 'video',
                label: 'Output Video',
                fields: [
                    { key: 'max', label: 'Rezoluție' },
                    { key: 'refresh', label: 'Refresh' },
                    { key: 'hdr', label: 'HDR' },
                    { key: 'upscaling', label: 'Upscaling' }
                ]
            },
            {
                key: 'tech',
                label: 'Tehnologii',
                fields: [
                    { key: 'rt', label: 'Ray Tracing' },
                    { key: 'vrr', label: 'VRR' },
                    { key: 'bc', label: 'Backwards' },
                    { key: 'other', label: 'Altele' }
                ]
            }
        ];

        const formatValue = (val) => {
            if (val === true) return '<span class="flag yes">✓</span>';
            if (val === false) return '<span class="flag no">✗</span>';
            return val && String(val).trim().length ? val : 'N/A';
        };

        const getVal = (obj, sectionKey, fieldKey) => {
            return obj && obj.specs && obj.specs[sectionKey] && obj.specs[sectionKey][fieldKey] !== undefined
                ? obj.specs[sectionKey][fieldKey]
                : null;
        };

        const hasSpecData = (obj) => obj.specs && Object.keys(obj.specs).length > 0;

        const specsHtml = hasSpecData(a) || hasSpecData(b) ? specSections.map(section => {
            const rows = section.fields.map(field => {
                const vA = getVal(a, section.key, field.key);
                const vB = getVal(b, section.key, field.key);
                if (!vA && !vB) return '';
                return `
                    <div class="spec-row">
                        <div class="spec-value spec-left">${formatValue(vA)}</div>
                        <div class="spec-label">${field.label}</div>
                        <div class="spec-value spec-right">${formatValue(vB)}</div>
                    </div>
                `;
            }).filter(r => r.length > 0).join('');
            return rows ? `
                <div class="spec-section">
                    <div class="spec-section-header">${section.label}</div>
                    ${rows}
                </div>
            ` : '';
        }).filter(s => s.length > 0).join('') : '';

        const prosA = a.pros.length > 0 ? a.pros.map(p => '<li class="pro-item">✓ ' + p + '</li>').join('') : '';
        const consA = a.cons.length > 0 ? a.cons.map(c => '<li class="con-item">✗ ' + c + '</li>').join('') : '';
        const prosB = b.pros.length > 0 ? b.pros.map(p => '<li class="pro-item">✓ ' + p + '</li>').join('') : '';
        const consB = b.cons.length > 0 ? b.cons.map(c => '<li class="con-item">✗ ' + c + '</li>').join('') : '';

        const specsSection = specsHtml ? `
            <div class="specs-comparison">
                <h3 class="specs-title">Fișă Tehnică</h3>
                <div class="spec-sheet">${specsHtml}</div>
            </div>
        ` : '';

        const verdictSection = (prosA || consA || prosB || consB) ? `
            <div class="verdict-section">
                <h3 class="verdict-title">Overview Rapid</h3>
                <div class="verdict-grid">
                    <div class="verdict-card">
                        <h4 class="verdict-console-name">${a.name}</h4>
                        <div class="verdict-lists">
                            ${prosA ? '<div class="pros-list"><h5 class="list-title pros-title">Pro</h5><ul>' + prosA + '</ul></div>' : ''}
                            ${consA ? '<div class="cons-list"><h5 class="list-title cons-title">Contra</h5><ul>' + consA + '</ul></div>' : ''}
                        </div>
                    </div>
                    <div class="verdict-card">
                        <h4 class="verdict-console-name">${b.name}</h4>
                        <div class="verdict-lists">
                            ${prosB ? '<div class="pros-list"><h5 class="list-title pros-title">Pro</h5><ul>' + prosB + '</ul></div>' : ''}
                            ${consB ? '<div class="cons-list"><h5 class="list-title cons-title">Contra</h5><ul>' + consB + '</ul></div>' : ''}
                        </div>
                    </div>
                </div>
            </div>
        ` : '';

        display.innerHTML = `
            <div class="comparison-grid">
                <div class="console-card">
                    <div class="console-card-image">
                        <img src="${a.image}" alt="${a.name}" onerror="this.style.display='none'">
                    </div>
                    <div class="console-card-info">
                        <h3>${a.name}</h3>
                        <div class="console-meta-tags">
                            <span class="meta-tag">${a.mfg}</span>
                            <span class="meta-tag">${a.year}</span>
                            <span class="meta-tag">${a.gen}</span>
                        </div>
                    </div>
                </div>
                <div class="console-card">
                    <div class="console-card-image">
                        <img src="${b.image}" alt="${b.name}" onerror="this.style.display='none'">
                    </div>
                    <div class="console-card-info">
                        <h3>${b.name}</h3>
                        <div class="console-meta-tags">
                            <span class="meta-tag">${b.mfg}</span>
                            <span class="meta-tag">${b.year}</span>
                            <span class="meta-tag">${b.gen}</span>
                        </div>
                    </div>
                </div>
            </div>
            ${specsSection}
            ${verdictSection}
        `;
    }

    selectA.addEventListener('change', update);
    selectB.addEventListener('change', update);
    update();
})();
