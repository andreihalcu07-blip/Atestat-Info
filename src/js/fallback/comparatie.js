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

    // Specs for ALL consoles with detailed data
    const consolesData = {
        // === GENERAȚIA 9 ===
        'playstation-5': {
            name: 'PlayStation 5', manufacturer: 'Sony', year: 2020, generation: 9,
            image: '../../assets/images/consoles/ps5.png',
            specs: {
                cpu: { arch: 'AMD Zen 2', node: '7 nm', cores: '8C/16T', clock: '3.5 GHz (var)', ipc: 'Zen 2', tdp: '~200W' },
                gpu: { arch: 'RDNA 2', cu: '36 CUs', clock: '2.23 GHz', tflops: '10.3 TFLOPS', features: 'RT, mesh, VRS', api: 'DX12U, Vulkan' },
                memory: { type: 'GDDR6', size: '16 GB', bus: '256-bit', bw: '448 GB/s', layout: 'Unificată' },
                storage: { type: 'Custom NVMe SSD', interface: 'PCIe 4.0', speed: '5.5 GB/s (raw)', expansion: 'M.2 NVMe' },
                video: { max: '4K', refresh: '120 Hz', hdr: 'HDR10', upscaling: 'Checkerboard, FSR' },
                tech: { rt: true, vrr: true, bc: 'PS4', other: 'Tempest 3D Audio' }
            },
            pros: ['SSD NVMe 5.5 GB/s ultra-rapid', 'Ray tracing hardware', 'DualSense cu haptic feedback', 'Încărcare aproape instantanee'],
            cons: ['Stocare internă limitată', 'Dimensiuni mari', 'Preț ridicat la lansare']
        },
        'xbox-series-x': {
            name: 'Xbox Series X', manufacturer: 'Microsoft', year: 2020, generation: 9,
            image: '../../assets/images/consoles/xbox-series-x.png',
            specs: {
                cpu: { arch: 'AMD Zen 2', node: '7 nm', cores: '8C/16T', clock: '3.8 GHz', ipc: 'Zen 2', tdp: '~200W' },
                gpu: { arch: 'RDNA 2', cu: '52 CUs', clock: '1.825 GHz', tflops: '12 TFLOPS', features: 'RT, mesh, VRS', api: 'DX12U' },
                memory: { type: 'GDDR6', size: '16 GB', bus: '320-bit', bw: '560 GB/s', layout: 'Unificată' },
                storage: { type: 'NVMe SSD', interface: 'PCIe 4.0', speed: '2.4 GB/s', expansion: 'Expansion Card' },
                video: { max: '4K', refresh: '120 Hz', hdr: 'HDR10, Dolby Vision', upscaling: 'Auto HDR' },
                tech: { rt: true, vrr: true, bc: 'Xbox/360/One', other: 'Quick Resume' }
            },
            pros: ['12 TFLOPS - cea mai puternică', 'Game Pass valoare excelentă', 'Backward compatibility extinsă', '1 TB stocare standard'],
            cons: ['SSD mai lent decât PS5', 'Puține exclusive la lansare', 'Design polarizant']
        },
        'xbox-series-s': {
            name: 'Xbox Series S', manufacturer: 'Microsoft', year: 2020, generation: 9,
            image: '../../assets/images/consoles/xbox-series-s.png',
            specs: {
                cpu: { arch: 'AMD Zen 2', node: '7 nm', cores: '8C/16T', clock: '3.6 GHz', ipc: 'Zen 2', tdp: '~100W' },
                gpu: { arch: 'RDNA 2', cu: '20 CUs', clock: '1.565 GHz', tflops: '4 TFLOPS', features: 'RT, VRS', api: 'DX12U' },
                memory: { type: 'GDDR6', size: '10 GB', bus: '128-bit', bw: '224 GB/s', layout: 'Unificată' },
                storage: { type: 'NVMe SSD', interface: 'PCIe 4.0', speed: '2.4 GB/s', expansion: 'Expansion Card' },
                video: { max: '1440p', refresh: '120 Hz', hdr: 'HDR10', upscaling: 'N/A' },
                tech: { rt: true, vrr: true, bc: 'Xbox One', other: 'All-Digital' }
            },
            pros: ['Preț accesibil', 'Compactă și silențioasă', 'Game Pass inclus', 'Next-gen la buget redus'],
            cons: ['Doar 4 TFLOPS', 'Fără disc optic', '512 GB stocare limitată']
        },

        // === GENERAȚIA 8 ===
        'playstation-4': {
            name: 'PlayStation 4', manufacturer: 'Sony', year: 2013, generation: 8,
            image: '../../assets/images/consoles/playstation-4.png',
            specs: {
                cpu: { arch: 'AMD Jaguar', node: '28 nm', cores: '8C/8T', clock: '1.6 GHz', ipc: 'Jaguar', tdp: '~150W' },
                gpu: { arch: 'GCN 1.1', cu: '18 CUs', clock: '800 MHz', tflops: '1.84 TFLOPS', features: 'Compute', api: 'GNM/GNMX' },
                memory: { type: 'GDDR5', size: '8 GB', bus: '256-bit', bw: '176 GB/s', layout: 'Unificată' },
                storage: { type: '2.5" HDD', interface: 'SATA II', speed: '~100 MB/s', expansion: '2.5" HDD/SSD' },
                video: { max: '1080p', refresh: '60 Hz', hdr: 'PS4 Pro only', upscaling: 'Checkerboard (Pro)' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Share Play, PS VR' }
            },
            pros: ['Bibliotecă vastă de jocuri', 'Exclusive excelente', 'DualShock 4 confortabil', 'PlayStation VR support'],
            cons: ['Hardware depășit', 'HDD lent', 'Ventilator zgomotos']
        },
        'xbox-one': {
            name: 'Xbox One', manufacturer: 'Microsoft', year: 2013, generation: 8,
            image: '../../assets/images/consoles/xbox-one.png',
            specs: {
                cpu: { arch: 'AMD Jaguar', node: '28 nm', cores: '8C/8T', clock: '1.75 GHz', ipc: 'Jaguar', tdp: '~120W' },
                gpu: { arch: 'GCN 1.1', cu: '12 CUs', clock: '853 MHz', tflops: '1.31 TFLOPS', features: 'N/A', api: 'DX11.2' },
                memory: { type: 'DDR3', size: '8 GB', bus: '256-bit', bw: '68.3 GB/s', layout: 'Unificată + 32MB ESRAM' },
                storage: { type: '2.5" HDD', interface: 'SATA II', speed: '~100 MB/s', expansion: 'USB 3.0' },
                video: { max: '1080p', refresh: '60 Hz', hdr: 'One S/X', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'Xbox 360 (select)', other: 'Kinect 2.0' }
            },
            pros: ['Backward compatibility excelentă', 'Game Pass value', 'Media center capabilities'],
            cons: ['Mai slabă decât PS4', 'Dimensiuni mari', 'Puține exclusive memorabile']
        },
        'nintendo-switch': {
            name: 'Nintendo Switch', manufacturer: 'Nintendo', year: 2017, generation: 8,
            image: '../../assets/images/consoles/nintendo-switch.png',
            specs: {
                cpu: { arch: 'ARM Cortex-A57', node: '20 nm', cores: '4C/4T', clock: '1.02 GHz', ipc: 'ARM v8', tdp: '~40W' },
                gpu: { arch: 'NVIDIA Maxwell', cu: '256 CUDA', clock: '768 MHz (docked)', tflops: '0.4 TFLOPS', features: 'N/A', api: 'Vulkan, OpenGL' },
                memory: { type: 'LPDDR4', size: '4 GB', bus: '64-bit', bw: '25.6 GB/s', layout: 'Unificată' },
                storage: { type: 'Flash', interface: 'eMMC', speed: '~100 MB/s', expansion: 'microSD' },
                video: { max: '1080p', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Hybrid TV/Portable' }
            },
            pros: ['Portabilitate completă', 'Exclusive Nintendo legendare', 'Moduri TV/Handheld/Tabletop', 'Joy-Con detașabili'],
            cons: ['Hardware slab vs concurență', 'Joy-Con drift issues', '720p în modul portabil']
        },
        'nintendo-wii-u': {
            name: 'Nintendo Wii U', manufacturer: 'Nintendo', year: 2012, generation: 8,
            image: '../../assets/images/consoles/nintendo-wii-u.png',
            specs: {
                cpu: { arch: 'IBM Espresso', node: '45 nm', cores: '3C/3T', clock: '1.24 GHz', ipc: 'PowerPC', tdp: '~75W' },
                gpu: { arch: 'AMD GX2', cu: '320 shaders', clock: '550 MHz', tflops: '0.35 TFLOPS', features: 'N/A', api: 'GX2' },
                memory: { type: 'DDR3', size: '2 GB', bus: '64-bit', bw: '12.8 GB/s', layout: 'Unificată' },
                storage: { type: 'Flash', interface: 'eMMC', speed: 'N/A', expansion: 'USB HDD' },
                video: { max: '1080p', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'Wii', other: 'GamePad tablet' }
            },
            pros: ['Backward compatibility Wii', 'GamePad inovator', 'Off-TV play'],
            cons: ['Marketing confuz', 'Support scurt', 'Hardware slab pentru generație']
        },

        // === GENERAȚIA 7 ===
        'playstation-3': {
            name: 'PlayStation 3', manufacturer: 'Sony', year: 2006, generation: 7,
            image: '../../assets/images/consoles/playstation-3.png',
            specs: {
                cpu: { arch: 'Cell BE', node: '90/65 nm', cores: '1 PPE + 7 SPE', clock: '3.2 GHz', ipc: 'Cell', tdp: '~200W' },
                gpu: { arch: 'RSX', cu: '24 ROPs', clock: '550 MHz', tflops: '0.23 TFLOPS', features: 'N/A', api: 'PSGL/OpenGL' },
                memory: { type: 'XDR + GDDR3', size: '256 + 256 MB', bus: '64 + 128-bit', bw: '25.6 + 22.4 GB/s', layout: 'Separată' },
                storage: { type: '2.5" HDD', interface: 'SATA', speed: '~100 MB/s', expansion: 'HDD swap' },
                video: { max: '1080p', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'PS1/PS2 (modele timpurii)', other: 'Blu-ray' }
            },
            pros: ['Blu-ray player integrat', 'Jocuri exclusive legendare', 'PSN gratuit', 'Cell puternic'],
            cons: ['Arhitectură greu de programat', 'Preț mare la lansare', 'Consum ridicat']
        },
        'xbox-360': {
            name: 'Xbox 360', manufacturer: 'Microsoft', year: 2005, generation: 7,
            image: '../../assets/images/consoles/xbox-360.png',
            specs: {
                cpu: { arch: 'PowerPC Xenon', node: '90 nm', cores: '3C/6T', clock: '3.2 GHz', ipc: 'PowerPC', tdp: '~175W' },
                gpu: { arch: 'ATI Xenos', cu: '48 ALU', clock: '500 MHz', tflops: '0.24 TFLOPS', features: 'Unified shaders', api: 'DX9c' },
                memory: { type: 'GDDR3', size: '512 MB', bus: '128-bit', bw: '22.4 GB/s', layout: 'Unificată' },
                storage: { type: '2.5" HDD', interface: 'SATA', speed: '~100 MB/s', expansion: 'HDD swap' },
                video: { max: '1080p', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'Xbox (select)', other: 'Kinect' }
            },
            pros: ['Xbox Live excelent', 'Controller iconic', 'GPU unified shaders', 'Kinect inovator'],
            cons: ['Red Ring of Death', 'Ventilator zgomotos', 'DVD în loc de Blu-ray']
        },
        'nintendo-wii': {
            name: 'Nintendo Wii', manufacturer: 'Nintendo', year: 2006, generation: 7,
            image: '../../assets/images/consoles/nintendo-wii.png',
            specs: {
                cpu: { arch: 'IBM Broadway', node: '90 nm', cores: '1C', clock: '729 MHz', ipc: 'PowerPC', tdp: '~18W' },
                gpu: { arch: 'ATI Hollywood', cu: 'N/A', clock: '243 MHz', tflops: '~0.01 TFLOPS', features: 'N/A', api: 'GX' },
                memory: { type: 'GDDR3', size: '88 MB', bus: '64-bit', bw: '3.9 GB/s', layout: 'Separată' },
                storage: { type: 'Flash', interface: 'NAND', speed: 'N/A', expansion: 'SD Card' },
                video: { max: '480p', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'GameCube', other: 'Motion controls' }
            },
            pros: ['Motion controls revoluționare', 'Preț accesibil', 'Jocuri pentru toată familia', 'Backwards compat GameCube'],
            cons: ['Grafică inferioară', 'Fără HD output', 'Online slab']
        },

        // === GENERAȚIA 6 ===
        'playstation-2': {
            name: 'PlayStation 2', manufacturer: 'Sony', year: 2000, generation: 6,
            image: '../../assets/images/consoles/playstation-2.png',
            specs: {
                cpu: { arch: 'Emotion Engine', node: '180 nm', cores: 'MIPS + VU', clock: '300 MHz', ipc: 'MIPS', tdp: '~50W' },
                gpu: { arch: 'Graphics Synthesizer', cu: 'N/A', clock: '147 MHz', tflops: 'N/A', features: 'N/A', api: 'N/A' },
                memory: { type: 'RDRAM', size: '32 MB', bus: '128-bit', bw: '3.2 GB/s', layout: 'Separată' },
                storage: { type: 'DVD-ROM', interface: 'ATA', speed: '10x', expansion: 'HDD (FAT)' },
                video: { max: '480i/480p', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'PS1', other: 'DVD playback' }
            },
            pros: ['Cea mai vândută consolă vreodată', 'Bibliotecă masivă', 'DVD player integrat', 'Backward compat PS1'],
            cons: ['Hardware depășit rapid', 'Memory cards mici', 'Grafică inferioară Xbox']
        },
        'xbox': {
            name: 'Xbox', manufacturer: 'Microsoft', year: 2001, generation: 6,
            image: '../../assets/images/consoles/xbox.png',
            specs: {
                cpu: { arch: 'Intel Pentium III', node: '180 nm', cores: '1C/1T', clock: '733 MHz', ipc: 'P6', tdp: '~60W' },
                gpu: { arch: 'NVIDIA NV2A', cu: '4 pipelines', clock: '233 MHz', tflops: '~0.02 TFLOPS', features: 'T&L, PS', api: 'DX8.1' },
                memory: { type: 'DDR', size: '64 MB', bus: '128-bit', bw: '6.4 GB/s', layout: 'Unificată' },
                storage: { type: 'HDD', interface: 'ATA', speed: '8-10 GB', expansion: 'N/A' },
                video: { max: '480p/720p/1080i', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Xbox Live pioneer' }
            },
            pros: ['Hardware puternic pentru epocă', 'Xbox Live pioneer', 'HDD integrat', 'Controller S îmbunătățit'],
            cons: ['Controller original imens', 'Dimensiuni mari', 'Puține jocuri japoneze']
        },
        'nintendo-gamecube': {
            name: 'Nintendo GameCube', manufacturer: 'Nintendo', year: 2001, generation: 6,
            image: '../../assets/images/consoles/nintendo-gamecube.png',
            specs: {
                cpu: { arch: 'IBM Gekko', node: '180 nm', cores: '1C', clock: '485 MHz', ipc: 'PowerPC', tdp: '~35W' },
                gpu: { arch: 'ATI Flipper', cu: '4 pipelines', clock: '162 MHz', tflops: 'N/A', features: 'T&L', api: 'GX' },
                memory: { type: 'MoSys 1T-SRAM', size: '43 MB total', bus: '64-bit', bw: '2.6 GB/s', layout: 'Separată' },
                storage: { type: 'Mini-DVD', interface: 'Proprietary', speed: 'N/A', expansion: 'Memory Card' },
                video: { max: '480p', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'GBA Player' }
            },
            pros: ['Jocuri Nintendo excelente', 'Design compact', 'Controller ergonomic', 'Fiabilitate ridicată'],
            cons: ['Mini-DVD proprietar', 'Fără DVD playback', 'Online inexistent']
        },
        'sega-dreamcast': {
            name: 'Sega Dreamcast', manufacturer: 'Sega', year: 1998, generation: 6,
            image: '../../assets/images/consoles/sega-dreamcast.png',
            specs: {
                cpu: { arch: 'Hitachi SH-4', node: '180 nm', cores: '1C', clock: '200 MHz', ipc: 'SuperH', tdp: '~30W' },
                gpu: { arch: 'PowerVR2', cu: '100M poly/s', clock: '100 MHz', tflops: 'N/A', features: 'T&L', api: 'N/A' },
                memory: { type: 'SDRAM', size: '16 MB', bus: '64-bit', bw: '800 MB/s', layout: 'Separată' },
                storage: { type: 'GD-ROM', interface: 'Proprietary', speed: '12x', expansion: 'VMU' },
                video: { max: '480p', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Modem integrat' }
            },
            pros: ['Prima consolă cu modem integrat', 'Jocuri inovatoare', 'VMU cu ecran', 'Grafică impresionantă'],
            cons: ['Viață comercială scurtă', 'Fără DVD', 'Piraterie ușoară']
        },

        // === GENERAȚIA 5 ===
        'playstation-1': {
            name: 'PlayStation 1', manufacturer: 'Sony', year: 1994, generation: 5,
            image: '../../assets/images/consoles/playstation-1.png',
            specs: {
                cpu: { arch: 'MIPS R3000A', node: '0.8 µm', cores: '1C', clock: '33.8 MHz', ipc: 'MIPS I', tdp: '~10W' },
                gpu: { arch: 'GPU custom', cu: '360K poly/s', clock: '33.8 MHz', tflops: 'N/A', features: 'Texture mapping', api: 'N/A' },
                memory: { type: 'EDO DRAM', size: '2 MB', bus: '32-bit', bw: '132 MB/s', layout: 'Separată' },
                storage: { type: 'CD-ROM', interface: 'CD', speed: '2x', expansion: 'Memory Card' },
                video: { max: '640×480', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'CD Audio' }
            },
            pros: ['Trecere la CD (cost redus)', 'GPU 3D timpuriu', 'Bibliotecă definitorie', 'Jocuri legendare'],
            cons: ['Încărcare lentă de pe CD', 'Texturi instabile (wobble)', 'Fără RAM pentru textură']
        },
        'nintendo-64': {
            name: 'Nintendo 64', manufacturer: 'Nintendo', year: 1996, generation: 5,
            image: '../../assets/images/consoles/nintendo-64.png',
            specs: {
                cpu: { arch: 'NEC VR4300', node: '350 nm', cores: '1C', clock: '93.75 MHz', ipc: 'MIPS III', tdp: '~15W' },
                gpu: { arch: 'SGI RCP', cu: 'Reality Co-Processor', clock: '62.5 MHz', tflops: 'N/A', features: 'Z-buffer, AA', api: 'N/A' },
                memory: { type: 'RDRAM', size: '4 MB (8 w/ Exp)', bus: '9-bit', bw: '562 MB/s', layout: 'Unificată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: '~5 MB/s', expansion: 'Controller Pak' },
                video: { max: '640×480', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Analog stick' }
            },
            pros: ['Grafică 3D excelentă', 'Controller cu analog stick', 'Multiplayer local 4 jucători', 'Fără timpi de încărcare'],
            cons: ['Cartridge scumpe', 'Memorie limitată', 'Sunet comprimat']
        },
        'sega-saturn': {
            name: 'Sega Saturn', manufacturer: 'Sega', year: 1994, generation: 5,
            image: '../../assets/images/consoles/sega-saturn.png',
            specs: {
                cpu: { arch: 'Hitachi SH-2 (dual)', node: '350 nm', cores: '2C', clock: '28.6 MHz × 2', ipc: 'SuperH', tdp: '~25W' },
                gpu: { arch: 'VDP1 + VDP2', cu: 'Dual video', clock: '28.6 MHz', tflops: 'N/A', features: 'Sprites, 3D', api: 'N/A' },
                memory: { type: 'SDRAM', size: '2 MB + 1.5 MB VRAM', bus: '32-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'CD-ROM', interface: 'CD', speed: '2x', expansion: 'Cart RAM' },
                video: { max: '704×480', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'CD Audio' }
            },
            pros: ['2D sprites excelente', 'Jocuri arcade perfecte', 'Bibliotecă JP bogată'],
            cons: ['Arhitectură complexă', '3D inferior PS1', 'Lansare grăbită']
        },
        '3do': {
            name: '3DO Interactive', manufacturer: 'Panasonic', year: 1993, generation: 5,
            image: '../../assets/images/consoles/3do.png',
            specs: {
                cpu: { arch: 'ARM60', node: '600 nm', cores: '1C', clock: '12.5 MHz', ipc: 'ARM', tdp: '~20W' },
                gpu: { arch: 'Custom CEL', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: 'CEL animation', api: 'N/A' },
                memory: { type: 'DRAM', size: '2 MB', bus: '32-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'CD-ROM', interface: 'CD', speed: '2x', expansion: 'N/A' },
                video: { max: '640×480', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'FMV games' }
            },
            pros: ['Hardware avansat la lansare', 'CD-ROM', 'Design modular'],
            cons: ['Preț foarte ridicat ($699)', 'Puține jocuri de calitate', 'Depășit rapid']
        },
        'atari-jaguar': {
            name: 'Atari Jaguar', manufacturer: 'Atari', year: 1993, generation: 5,
            image: '../../assets/images/consoles/atari-jaguar.png',
            specs: {
                cpu: { arch: 'Motorola 68000', node: 'N/A', cores: '1C + 2 RISC', clock: '13.3 MHz', ipc: '68K', tdp: '~15W' },
                gpu: { arch: 'Tom + Jerry', cu: 'Custom RISC', clock: '26.6 MHz', tflops: 'N/A', features: '64-bit bus', api: 'N/A' },
                memory: { type: 'DRAM', size: '2 MB', bus: '64-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'Jaguar CD' },
                video: { max: '720×576', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: '64-bit marketing' }
            },
            pros: ['Arhitectură 64-bit', 'Potential tehnic mare', 'Tempest 2000'],
            cons: ['Programare dificilă', 'Controller complex', 'Puține jocuri']
        },

        // === GENERAȚIA 4 ===
        'snes': {
            name: 'Super Nintendo', manufacturer: 'Nintendo', year: 1990, generation: 4,
            image: '../../assets/images/consoles/snes.png',
            specs: {
                cpu: { arch: '65C816', node: '1.0 µm', cores: '1C', clock: '3.58 MHz', ipc: '65C816', tdp: '~10W' },
                gpu: { arch: 'PPU (dual)', cu: '2 PPU chips', clock: '3.58 MHz', tflops: 'N/A', features: 'Mode 7', api: 'N/A' },
                memory: { type: 'WRAM', size: '128 KB', bus: '16-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'Super FX (cart)' },
                video: { max: '256×224', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'DSP audio, Mode 7' }
            },
            pros: ['Audio superior (Sony SPC700)', 'Mode 7 hardware', 'Controller SNES iconic', 'Jocuri legendare'],
            cons: ['CPU mai lent decât Genesis', 'Cartridge scumpe', 'Procesare lentă uneori']
        },
        'sega-genesis': {
            name: 'Sega Genesis', manufacturer: 'Sega', year: 1988, generation: 4,
            image: '../../assets/images/consoles/sega-genesis.png',
            specs: {
                cpu: { arch: 'Motorola 68000', node: 'N/A', cores: '1C', clock: '7.6 MHz', ipc: '68000', tdp: '~10W' },
                gpu: { arch: 'VDP (Yamaha)', cu: 'Custom', clock: '7.6 MHz', tflops: 'N/A', features: 'Blast Processing', api: 'N/A' },
                memory: { type: 'RAM', size: '64 KB + 64 KB VRAM', bus: '16-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'Sega CD, 32X' },
                video: { max: '320×224', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Blast Processing' }
            },
            pros: ['Procesor mai rapid ca SNES', 'Sonic The Hedgehog', 'Marketing agresiv', 'Hardware extensibil'],
            cons: ['Sunet inferior SNES', 'Paletă de culori limitată', 'Add-on-uri scumpe']
        },
        'pc-engine': {
            name: 'PC Engine', manufacturer: 'NEC/Hudson', year: 1987, generation: 4,
            image: '../../assets/images/consoles/pc-engine.png',
            specs: {
                cpu: { arch: 'HuC6280', node: 'N/A', cores: '1C', clock: '7.16 MHz', ipc: '6502', tdp: '~5W' },
                gpu: { arch: 'HuC6270', cu: 'Custom VDC', clock: '7.16 MHz', tflops: 'N/A', features: '512 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '8 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'HuCard', interface: 'Card', speed: 'N/A', expansion: 'CD-ROM²' },
                video: { max: '256×239', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'CD gaming pioneer' }
            },
            pros: ['Compact și puternic', 'CD-ROM add-on', 'Grafică excelentă pentru epocă'],
            cons: ['8-bit CPU', 'Puțină expunere în Occident', 'HuCards proprietare']
        },
        'neo-geo-aes': {
            name: 'Neo Geo AES', manufacturer: 'SNK', year: 1990, generation: 4,
            image: '../../assets/images/consoles/neo-geo-aes.png',
            specs: {
                cpu: { arch: 'Motorola 68000', node: 'N/A', cores: '1C', clock: '12 MHz', ipc: '68000', tdp: '~15W' },
                gpu: { arch: 'SNK Custom', cu: 'N/A', clock: '12 MHz', tflops: 'N/A', features: '380 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '64 KB', bus: '16-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM (up to 330MB)', speed: 'N/A', expansion: 'N/A' },
                video: { max: '320×224', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Arcade-perfect' }
            },
            pros: ['Calitate arcade acasă', 'Sprite-uri imense', 'Bibliotecă fighting games'],
            cons: ['Preț prohibitiv', 'Cartridge foarte scumpe', 'Nici o economie de scală']
        },
        'philips-cd-i': {
            name: 'Philips CD-i', manufacturer: 'Philips', year: 1991, generation: 4,
            image: '../../assets/images/consoles/philips-cd-i.png',
            specs: {
                cpu: { arch: 'Motorola 68000', node: 'N/A', cores: '1C', clock: '15.5 MHz', ipc: '68000', tdp: '~20W' },
                gpu: { arch: 'Custom', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: 'FMV', api: 'N/A' },
                memory: { type: 'RAM', size: '1 MB', bus: '16-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'CD-ROM', interface: 'CD', speed: '1x', expansion: 'Digital Video Cart' },
                video: { max: '384×280', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Multimedia' }
            },
            pros: ['Format CD interactiv', 'Multimedia versatil', 'Filme interactive'],
            cons: ['Nu e o consolă de gaming reală', 'Controller slab', 'Jocuri Zelda/Mario teribile']
        },

        // === GENERAȚIA 3 ===
        'nes': {
            name: 'Nintendo NES', manufacturer: 'Nintendo', year: 1985, generation: 3,
            image: '../../assets/images/consoles/nes.png',
            specs: {
                cpu: { arch: 'Ricoh 2A03', node: '2.0 µm', cores: '1C', clock: '1.79 MHz', ipc: '6502', tdp: '~5W' },
                gpu: { arch: 'PPU (2C02)', cu: 'Custom', clock: '5.37 MHz', tflops: 'N/A', features: '64 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '2 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'MMC chips' },
                video: { max: '256×240', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Zapper, R.O.B.' }
            },
            pros: ['A salvat industria jocurilor', 'Jocuri iconice (Mario, Zelda)', 'Bibliotecă vastă', 'Control calitate strict'],
            cons: ['Blinking cartridge issue', 'Grafică limitată', 'Fără save intern', '2 KB RAM']
        },
        'famicom': {
            name: 'Nintendo Famicom', manufacturer: 'Nintendo', year: 1983, generation: 3,
            image: '../../assets/images/consoles/famicom.png',
            specs: {
                cpu: { arch: 'Ricoh 2A03', node: '2.0 µm', cores: '1C', clock: '1.79 MHz', ipc: '6502', tdp: '~5W' },
                gpu: { arch: 'PPU', cu: 'Custom', clock: '5.37 MHz', tflops: 'N/A', features: '64 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '2 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'Disk System' },
                video: { max: '256×240', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Famicom Disk System' }
            },
            pros: ['Design compact', 'Controller hardwired', 'Disk System expansion', 'Piață JP enormă'],
            cons: ['Controlere fixe', 'Doar RF output', 'Fără NES lockout chip']
        },
        'sega-master-system': {
            name: 'Sega Master System', manufacturer: 'Sega', year: 1985, generation: 3,
            image: '../../assets/images/consoles/sega-master-system.png',
            specs: {
                cpu: { arch: 'Zilog Z80', node: 'N/A', cores: '1C', clock: '3.58 MHz', ipc: 'Z80', tdp: '~5W' },
                gpu: { arch: 'VDP (TMS9918)', cu: 'Custom', clock: '10.74 MHz', tflops: 'N/A', features: '64 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '8 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge/Card', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '256×192', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'SG-1000', other: '3D glasses' }
            },
            pros: ['Hardware superior NES', 'Paletă de culori mai mare', 'Succes în Europa/Brazilia'],
            cons: ['Bibliotecă mai mică', 'Marketing slab în SUA', 'Fără third-party major']
        },
        'sega-sg-1000': {
            name: 'Sega SG-1000', manufacturer: 'Sega', year: 1983, generation: 3,
            image: '../../assets/images/consoles/sega-sg-1000.png',
            specs: {
                cpu: { arch: 'Zilog Z80', node: 'N/A', cores: '1C', clock: '3.58 MHz', ipc: 'Z80', tdp: '~5W' },
                gpu: { arch: 'TMS9918A', cu: 'Custom', clock: '10.74 MHz', tflops: 'N/A', features: '32 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '1 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '256×192', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'First Sega console' }
            },
            pros: ['Prima consolă Sega', 'Hardware decent pentru epocă'],
            cons: ['Eclipsată de Famicom', 'Distribuție limitată', 'Bibliotecă mică']
        },
        'atari-7800': {
            name: 'Atari 7800', manufacturer: 'Atari', year: 1986, generation: 3,
            image: '../../assets/images/consoles/atari-7800.png',
            specs: {
                cpu: { arch: 'Atari SALLY', node: 'N/A', cores: '1C', clock: '1.79 MHz', ipc: '6502C', tdp: '~5W' },
                gpu: { arch: 'MARIA', cu: 'Custom', clock: '7.16 MHz', tflops: 'N/A', features: '100 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '4 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '320×240', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'Atari 2600', other: 'Backward compat' }
            },
            pros: ['Backward compat 2600', 'Grafică superioară 2600', 'Arcade ports bune'],
            cons: ['Lansare întârziată', 'Sunet 2600 de bază', 'Prea târziu pe piață']
        },

        // === GENERAȚIA 2 ===
        'atari-2600': {
            name: 'Atari 2600', manufacturer: 'Atari', year: 1977, generation: 2,
            image: '../../assets/images/consoles/atari-2600.png',
            specs: {
                cpu: { arch: 'MOS 6507', node: 'N/A', cores: '1C', clock: '1.19 MHz', ipc: '6502', tdp: '~5W' },
                gpu: { arch: 'TIA', cu: 'Custom', clock: '1.19 MHz', tflops: 'N/A', features: 'Sprite/playfield', api: 'N/A' },
                memory: { type: 'RAM', size: '128 bytes', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '160×192', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Cartridge pioneer' }
            },
            pros: ['Pionier home console', 'Ecosistem de cartușe', 'Bibliotecă diversă', 'Longevitate'],
            cons: ['128 bytes RAM (!)', 'Grafică primitivă', 'Controller rigid', 'Video game crash 1983']
        },
        'atari-5200': {
            name: 'Atari 5200', manufacturer: 'Atari', year: 1982, generation: 2,
            image: '../../assets/images/consoles/atari-5200.png',
            specs: {
                cpu: { arch: 'MOS 6502C', node: 'N/A', cores: '1C', clock: '1.79 MHz', ipc: '6502', tdp: '~10W' },
                gpu: { arch: 'ANTIC/GTIA', cu: 'Custom', clock: '1.79 MHz', tflops: 'N/A', features: 'Player/missile', api: 'N/A' },
                memory: { type: 'RAM', size: '16 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '320×192', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Analog controller' }
            },
            pros: ['Grafică superioară 2600', 'Analog controller', 'Bazat pe Atari 400/800'],
            cons: ['Controller fragil și non-centering', 'Incompatibil cu 2600', 'Design masiv']
        },
        'colecovision': {
            name: 'ColecoVision', manufacturer: 'Coleco', year: 1982, generation: 2,
            image: '../../assets/images/consoles/colecovision.png',
            specs: {
                cpu: { arch: 'Zilog Z80', node: 'N/A', cores: '1C', clock: '3.58 MHz', ipc: 'Z80', tdp: '~10W' },
                gpu: { arch: 'TMS9918A', cu: 'Custom', clock: '10.74 MHz', tflops: 'N/A', features: '32 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '1 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'Expansion modules' },
                video: { max: '256×192', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'Atari 2600 (adapter)', other: 'Arcade ports' }
            },
            pros: ['Grafică arcade-quality', 'Donkey Kong bundle', 'Z80 puternic'],
            cons: ['Controller numeric complex', 'Crash 1983', 'Scurtă durată']
        },
        'intellivision': {
            name: 'Intellivision', manufacturer: 'Mattel', year: 1979, generation: 2,
            image: '../../assets/images/consoles/intellivision.png',
            specs: {
                cpu: { arch: 'GI CP1610', node: 'N/A', cores: '1C', clock: '894 kHz', ipc: 'CP1610', tdp: '~10W' },
                gpu: { arch: 'AY-3-8900', cu: 'Custom', clock: 'N/A', tflops: 'N/A', features: '8 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '1.5 KB', bus: '16-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'Intellivoice' },
                video: { max: '159×96', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Voice synthesis' }
            },
            pros: ['Grafică superioară 2600', 'Controller disc unic', 'Voice synthesis (Intellivoice)'],
            cons: ['Controller dificil de folosit', 'Rezoluție scăzută', 'Crash 1983']
        },
        'magnavox-odyssey-2': {
            name: 'Magnavox Odyssey 2', manufacturer: 'Magnavox', year: 1978, generation: 2,
            image: '../../assets/images/consoles/magnavox-odyssey-2.png',
            specs: {
                cpu: { arch: 'Intel 8048', node: 'N/A', cores: '1C', clock: '1.79 MHz', ipc: '8048', tdp: '~5W' },
                gpu: { arch: 'Intel 8244', cu: 'Custom', clock: '3.54 MHz', tflops: 'N/A', features: '4 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '64 bytes', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '160×200', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Membrane keyboard' }
            },
            pros: ['Tastatură membranară', 'Jocuri educaționale', 'Design compact'],
            cons: ['Grafică limitată', 'Sunete primitive', 'Bibliotecă mică']
        },
        'vectrex': {
            name: 'Vectrex', manufacturer: 'GCE', year: 1982, generation: 2,
            image: '../../assets/images/consoles/vectrex.png',
            specs: {
                cpu: { arch: 'Motorola 68A09', node: 'N/A', cores: '1C', clock: '1.5 MHz', ipc: '6809', tdp: '~20W' },
                gpu: { arch: 'Vector display', cu: 'CRT vector', clock: 'N/A', tflops: 'N/A', features: 'Vector graphics', api: 'N/A' },
                memory: { type: 'RAM', size: '1 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'Light pen, 3D goggles' },
                video: { max: 'Vector (no pixels)', refresh: 'Analog', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Built-in monitor' }
            },
            pros: ['Display vector integrat', 'Grafică crisp fără pixeli', 'Design unic'],
            cons: ['Doar monocrom', 'Bibliotecă limitată', 'Crash 1983']
        },

        // === GENERAȚIA 1 ===
        'magnavox-odyssey': {
            name: 'Magnavox Odyssey', manufacturer: 'Magnavox', year: 1972, generation: 1,
            image: '../../assets/images/consoles/magnavox-odyssey.png',
            specs: {
                cpu: { arch: 'Analog circuitry', node: 'N/A', cores: 'N/A', clock: 'N/A', ipc: 'N/A', tdp: '~5W' },
                gpu: { arch: 'Analog', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: 'Spots on screen', api: 'N/A' },
                memory: { type: 'N/A', size: 'N/A', bus: 'N/A', bw: 'N/A', layout: 'N/A' },
                storage: { type: 'Plug-in cards', interface: 'Jumper', speed: 'N/A', expansion: 'N/A' },
                video: { max: 'RF output', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Screen overlays' }
            },
            pros: ['Prima consolă home din istorie', 'Concept inovator', 'Fundația industriei'],
            cons: ['Fără sunet', 'Analog, fără CPU', 'Necesită overlay-uri']
        },
        'atari-home-pong': {
            name: 'Atari Home Pong', manufacturer: 'Atari', year: 1975, generation: 1,
            image: '../../assets/images/consoles/atari-home-pong.png',
            specs: {
                cpu: { arch: 'Dedicated logic', node: 'N/A', cores: 'N/A', clock: 'N/A', ipc: 'N/A', tdp: '~5W' },
                gpu: { arch: 'Analog', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: 'Pong only', api: 'N/A' },
                memory: { type: 'N/A', size: 'N/A', bus: 'N/A', bw: 'N/A', layout: 'N/A' },
                storage: { type: 'N/A', interface: 'N/A', speed: 'N/A', expansion: 'N/A' },
                video: { max: 'RF output', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Single game' }
            },
            pros: ['Succes comercial uriaș', 'Design simplu', 'Multiplayer local'],
            cons: ['Un singur joc', 'Fără expansiune', 'Rapid depășit']
        },
        'coleco-telstar': {
            name: 'Coleco Telstar', manufacturer: 'Coleco', year: 1976, generation: 1,
            image: '../../assets/images/consoles/coleco-telstar.png',
            specs: {
                cpu: { arch: 'AY-3-8500', node: 'N/A', cores: '1 chip', clock: 'N/A', ipc: 'N/A', tdp: '~5W' },
                gpu: { arch: 'Integrated', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: 'Pong variants', api: 'N/A' },
                memory: { type: 'N/A', size: 'N/A', bus: 'N/A', bw: 'N/A', layout: 'N/A' },
                storage: { type: 'N/A', interface: 'N/A', speed: 'N/A', expansion: 'N/A' },
                video: { max: 'RF output', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Pong clone' }
            },
            pros: ['Preț accesibil', 'Mai multe variante Pong', 'Succes comercial'],
            cons: ['Jocuri limitate', 'Clone Pong', 'Fără extensibilitate']
        },

        // === HANDHELD ===
        'game-boy': {
            name: 'Game Boy', manufacturer: 'Nintendo', year: 1989, generation: 4,
            image: '../../assets/images/consoles/game-boy.png',
            specs: {
                cpu: { arch: 'Sharp LR35902', node: 'N/A', cores: '1C', clock: '4.19 MHz', ipc: 'Z80-like', tdp: '~0.5W' },
                gpu: { arch: 'Custom LCD', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: '40 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '8 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '160×144', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Link Cable' }
            },
            pros: ['Portabilitate revoluționară', 'Baterie durabilă', 'Tetris bundle', 'Bibliotecă imensă'],
            cons: ['Ecran monocrom fără backlight', 'Grafică limitată', 'Fără color']
        },
        'game-boy-color': {
            name: 'Game Boy Color', manufacturer: 'Nintendo', year: 1998, generation: 5,
            image: '../../assets/images/consoles/game-boy-color.png',
            specs: {
                cpu: { arch: 'Sharp LR35902', node: 'N/A', cores: '1C', clock: '8.39 MHz', ipc: 'Z80-like', tdp: '~0.6W' },
                gpu: { arch: 'Custom LCD', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: '40 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '32 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '160×144 color', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'Game Boy', other: 'Infrared' }
            },
            pros: ['Ecran color', 'Backward compat GB', 'Pokémon Gold/Silver', 'Baterie bună'],
            cons: ['Fără backlight', 'Hardware modest', 'Upgrade incremental']
        },
        'game-boy-advance': {
            name: 'Game Boy Advance', manufacturer: 'Nintendo', year: 2001, generation: 6,
            image: '../../assets/images/consoles/game-boy-advance.png',
            specs: {
                cpu: { arch: 'ARM7TDMI', node: 'N/A', cores: '1C', clock: '16.78 MHz', ipc: 'ARM', tdp: '~0.5W' },
                gpu: { arch: 'Custom 2D', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: '128 sprites, rotation', api: 'N/A' },
                memory: { type: 'RAM', size: '256 KB + 96 KB VRAM', bus: '16-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '240×160', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'Game Boy/Color', other: 'GC Link' }
            },
            pros: ['Grafică aproape SNES', 'Backward compat GB/GBC', 'Bibliotecă excelentă', 'Formă ergonomică'],
            cons: ['Fără backlight (original)', 'Ecran mic', 'Baterie AA']
        },
        'nintendo-ds': {
            name: 'Nintendo DS', manufacturer: 'Nintendo', year: 2004, generation: 7,
            image: '../../assets/images/consoles/nintendo-ds.png',
            specs: {
                cpu: { arch: 'ARM9 + ARM7', node: '130 nm', cores: '2C', clock: '67 + 33 MHz', ipc: 'ARM', tdp: '~1W' },
                gpu: { arch: 'Custom 3D', cu: 'N/A', clock: '67 MHz', tflops: 'N/A', features: 'Basic 3D', api: 'N/A' },
                memory: { type: 'RAM', size: '4 MB', bus: '16-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'Slot-2 (GBA)' },
                video: { max: '256×192 × 2', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'GBA', other: 'Touch screen, Wi-Fi' }
            },
            pros: ['Dual screen cu touch', 'Backward compat GBA', 'Wi-Fi integrat', 'Microfon'],
            cons: ['3D graphics limitate', 'Rezoluție mică', 'Build plastic']
        },
        'nintendo-3ds': {
            name: 'Nintendo 3DS', manufacturer: 'Nintendo', year: 2011, generation: 8,
            image: '../../assets/images/consoles/nintendo-3ds.png',
            specs: {
                cpu: { arch: 'ARM11 MPCore', node: '40 nm', cores: '2C', clock: '268 MHz', ipc: 'ARM', tdp: '~2W' },
                gpu: { arch: 'PICA200', cu: 'N/A', clock: '268 MHz', tflops: 'N/A', features: 'Autostereoscopic 3D', api: 'N/A' },
                memory: { type: 'RAM', size: '128 MB', bus: '64-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge + SD', interface: 'ROM', speed: 'N/A', expansion: 'SD card' },
                video: { max: '800×240 (3D)', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'DS', other: '3D fără ochelari' }
            },
            pros: ['3D fără ochelari', 'Backward compat DS', 'StreetPass', 'Bibliotecă vastă'],
            cons: ['3D obositor pentru ochi', 'Hardware modest', 'Baterie slabă']
        },
        'psp': {
            name: 'PlayStation Portable', manufacturer: 'Sony', year: 2004, generation: 7,
            image: '../../assets/images/consoles/psp.png',
            specs: {
                cpu: { arch: 'MIPS R4000', node: '90 nm', cores: '2C', clock: '333 MHz', ipc: 'MIPS', tdp: '~2W' },
                gpu: { arch: 'Graphics Core', cu: 'N/A', clock: '166 MHz', tflops: 'N/A', features: 'PS2-like', api: 'N/A' },
                memory: { type: 'RAM', size: '32 MB', bus: '128-bit', bw: '2.6 GB/s', layout: 'Separată' },
                storage: { type: 'UMD', interface: 'Optical', speed: '1.4 MB/s', expansion: 'Memory Stick' },
                video: { max: '480×272', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Wi-Fi, UMD Video' }
            },
            pros: ['Grafică aproape PS2', 'Ecran mare și frumos', 'Media player', 'Wi-Fi'],
            cons: ['Baterie slabă', 'UMD lent', 'Loading times lungi']
        },
        'ps-vita': {
            name: 'PlayStation Vita', manufacturer: 'Sony', year: 2011, generation: 8,
            image: '../../assets/images/consoles/ps-vita.png',
            specs: {
                cpu: { arch: 'ARM Cortex-A9', node: '40 nm', cores: '4C', clock: '2 GHz', ipc: 'ARM', tdp: '~3W' },
                gpu: { arch: 'PowerVR SGX543MP4+', cu: '128 cores', clock: '200 MHz', tflops: 'N/A', features: 'PS3-like', api: 'N/A' },
                memory: { type: 'RAM', size: '512 MB', bus: '128-bit', bw: '3.2 GB/s', layout: 'Unificată' },
                storage: { type: 'Game Card', interface: 'Proprietary', speed: 'N/A', expansion: 'Memory Card' },
                video: { max: '960×544 OLED', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'PSP (digital)', other: 'Touch front+back, 3G' }
            },
            pros: ['Ecran OLED superb', 'Hardware puternic', 'Dual analog sticks', 'Remote Play'],
            cons: ['Memory card proprietary scump', 'Support abandonat', 'Puține jocuri exclusive']
        },
        'sega-game-gear': {
            name: 'Sega Game Gear', manufacturer: 'Sega', year: 1990, generation: 4,
            image: '../../assets/images/consoles/sega-game-gear.png',
            specs: {
                cpu: { arch: 'Zilog Z80', node: 'N/A', cores: '1C', clock: '3.58 MHz', ipc: 'Z80', tdp: '~2W' },
                gpu: { arch: 'VDP (SMS)', cu: 'Custom', clock: '10.74 MHz', tflops: 'N/A', features: '64 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '8 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'TV Tuner' },
                video: { max: '160×144 color', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'SMS (adapter)', other: 'Backlit color' }
            },
            pros: ['Ecran color cu backlight', 'Compatibil SMS (adapter)', 'Hardware solid'],
            cons: ['6 baterii AA, 3-5 ore', 'Greu și mare', 'Bibliotecă mai mică decât GB']
        },
        'atari-lynx': {
            name: 'Atari Lynx', manufacturer: 'Atari', year: 1989, generation: 4,
            image: '../../assets/images/consoles/atari-lynx.png',
            specs: {
                cpu: { arch: 'MOS 65C02', node: 'N/A', cores: '1C', clock: '4 MHz', ipc: '6502', tdp: '~2W' },
                gpu: { arch: 'Custom Suzy', cu: 'N/A', clock: '16 MHz', tflops: 'N/A', features: 'Hardware scaling', api: 'N/A' },
                memory: { type: 'RAM', size: '64 KB', bus: '16-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'ComLynx' },
                video: { max: '160×102 color', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Ambidextrous flip' }
            },
            pros: ['Ecran color backlit', 'Hardware scaling sprites', 'Design ambidextru'],
            cons: ['Baterie teribilă', 'Mare și greu', 'Puține jocuri']
        },
        'microvision': {
            name: 'Microvision', manufacturer: 'Milton Bradley', year: 1979, generation: 2,
            image: '../../assets/images/consoles/microvision.png',
            specs: {
                cpu: { arch: 'Intel 8021', node: 'N/A', cores: '1C', clock: '100 kHz', ipc: 'MCS-48', tdp: '~0.5W' },
                gpu: { arch: 'LCD direct', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: '16×16 LCD', api: 'N/A' },
                memory: { type: 'RAM', size: '64 bytes', bus: '8-bit', bw: 'N/A', layout: 'In cart' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '16×16', refresh: 'N/A', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'First LCD handheld' }
            },
            pros: ['Prima consolă handheld cu LCD', 'Cartridge interschimbabile'],
            cons: ['Ecran minuscul', 'Foarte fragil', 'CPU în cartușe']
        },
        'neo-geo-pocket': {
            name: 'Neo Geo Pocket', manufacturer: 'SNK', year: 1998, generation: 5,
            image: '../../assets/images/consoles/neo-geo-pocket.png',
            specs: {
                cpu: { arch: 'Toshiba TLCS-900H', node: 'N/A', cores: '1C', clock: '6.144 MHz', ipc: 'TLCS900', tdp: '~1W' },
                gpu: { arch: 'Custom', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: '64 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '12 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '160×152 mono', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Clicky joystick' }
            },
            pros: ['Joystick clicky excelent', 'Baterie durabilă', 'Jocuri SNK'],
            cons: ['Doar monocrom', 'Scurtă durată', 'Bibliotecă mică']
        },
        'neo-geo-pocket-color': {
            name: 'Neo Geo Pocket Color', manufacturer: 'SNK', year: 1999, generation: 5,
            image: '../../assets/images/consoles/neo-geo-pocket-color.png',
            specs: {
                cpu: { arch: 'Toshiba TLCS-900H', node: 'N/A', cores: '1C', clock: '6.144 MHz', ipc: 'TLCS900', tdp: '~1W' },
                gpu: { arch: 'Custom', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: '64 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '12 KB', bus: '8-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '160×152 color', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'NGP', other: 'Dreamcast link' }
            },
            pros: ['Ecran color', 'Joystick superb', 'Jocuri fighting excelente', 'Dreamcast connectivity'],
            cons: ['Bibliotecă mică', 'Fără backlight', 'SNK a dat faliment']
        },
        'wonderswan': {
            name: 'WonderSwan', manufacturer: 'Bandai', year: 1999, generation: 5,
            image: '../../assets/images/consoles/wonderswan.png',
            specs: {
                cpu: { arch: 'NEC V30MZ', node: 'N/A', cores: '1C', clock: '3.072 MHz', ipc: 'x86-16', tdp: '~0.5W' },
                gpu: { arch: 'Custom', cu: 'N/A', clock: 'N/A', tflops: 'N/A', features: '128 sprites', api: 'N/A' },
                memory: { type: 'RAM', size: '16 KB', bus: '16-bit', bw: 'N/A', layout: 'Separată' },
                storage: { type: 'Cartridge', interface: 'ROM', speed: 'N/A', expansion: 'N/A' },
                video: { max: '224×144', refresh: '60 Hz', hdr: 'N/A', upscaling: 'N/A' },
                tech: { rt: false, vrr: false, bc: 'N/A', other: 'Vertical/Horizontal play' }
            },
            pros: ['Design ultra-slim', 'O baterie AA (30h+)', 'Orientare rotativă'],
            cons: ['Doar monocrom', 'Doar Japonia', 'Fără localizare']
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
