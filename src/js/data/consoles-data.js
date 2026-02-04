/**
 * Console Data - Centralized database for all consoles
 * Easy to extend: just add a new object to the array
 */

export const consolesData = {
    // === MODERN CONSOLES ===
    'playstation-5': {
        name: 'PlayStation 5',
        manufacturer: 'Sony',
        year: 2020,
        generation: 9,
        image: '../../assets/images/consoles/ps5.png',
        specs: {
            cpu: 'AMD Zen 2, 8 cores @ 3.5 GHz',
            gpu: 'AMD RDNA 2, 10.3 TFLOPS',
            ram: '16 GB GDDR6',
            storage: '825 GB SSD (5.5 GB/s)',
            resolution: '4K @ 120Hz',
            rayTracing: true
        },
        pros: [
            'SSD ultra-rapid (5.5 GB/s)',
            'DualSense cu haptic feedback',
            'Jocuri exclusive excelente',
            'Ray tracing hardware',
            'Încărcare aproape instantanee'
        ],
        cons: [
            'Stocare internă limitată',
            'Dimensiuni mari',
            'Preț ridicat la lansare',
            'Puține jocuri native la început'
        ]
    },

    'xbox-series-x': {
        name: 'Xbox Series X',
        manufacturer: 'Microsoft',
        year: 2020,
        generation: 9,
        image: '../../assets/images/consoles/xbox-series-x.png',
        specs: {
            cpu: 'AMD Zen 2, 8 cores @ 3.8 GHz',
            gpu: 'AMD RDNA 2, 12 TFLOPS',
            ram: '16 GB GDDR6',
            storage: '1 TB SSD (2.4 GB/s)',
            resolution: '4K @ 120Hz',
            rayTracing: true
        },
        pros: [
            'Cea mai puternică consolă (12 TFLOPS)',
            'Game Pass - valoare excelentă',
            'Backward compatibility extinsă',
            'Quick Resume între jocuri',
            '1 TB stocare standard'
        ],
        cons: [
            'SSD mai lent decât PS5',
            'Puține exclusive la lansare',
            'Design polarizant',
            'Controller fără haptic avansat'
        ]
    },

    'xbox-series-s': {
        name: 'Xbox Series S',
        manufacturer: 'Microsoft',
        year: 2020,
        generation: 9,
        image: '../../assets/images/consoles/xbox-series-s.png',
        specs: {
            cpu: 'AMD Zen 2, 8 cores @ 3.6 GHz',
            gpu: 'AMD RDNA 2, 4 TFLOPS',
            ram: '10 GB GDDR6',
            storage: '512 GB SSD',
            resolution: '1440p @ 120Hz',
            rayTracing: true
        },
        pros: [
            'Preț accesibil',
            'Compactă și silențioasă',
            'Game Pass inclus',
            'Next-gen la buget redus'
        ],
        cons: [
            'Doar 4 TFLOPS',
            'Fără disc optic',
            '512 GB stocare limitată',
            'Rezoluție max 1440p'
        ]
    },

    'nintendo-switch': {
        name: 'Nintendo Switch',
        manufacturer: 'Nintendo',
        year: 2017,
        generation: 8,
        image: '../../assets/images/consoles/nintendo-switch.png',
        specs: {
            cpu: 'NVIDIA Tegra X1, ARM @ 1.02 GHz',
            gpu: 'NVIDIA Maxwell, 0.4 TFLOPS',
            ram: '4 GB LPDDR4',
            storage: '32 GB (expandabil)',
            resolution: '1080p (docked) / 720p (handheld)',
            rayTracing: false
        },
        pros: [
            'Portabilitate completă',
            'Exclusive Nintendo legendare',
            'Moduri TV/Handheld/Tabletop',
            'Baterie decentă',
            'Joy-Con detașabili'
        ],
        cons: [
            'Hardware slab vs concurență',
            'Joy-Con drift issues',
            '720p în modul portabil',
            'Online infrastructure slabă'
        ]
    },

    // === PREVIOUS GENERATION ===
    'playstation-4': {
        name: 'PlayStation 4',
        manufacturer: 'Sony',
        year: 2013,
        generation: 8,
        image: '../../assets/images/consoles/ps4.png',
        specs: {
            cpu: 'AMD Jaguar, 8 cores @ 1.6 GHz',
            gpu: 'AMD GCN, 1.84 TFLOPS',
            ram: '8 GB GDDR5',
            storage: '500 GB / 1 TB HDD',
            resolution: '1080p @ 60Hz',
            rayTracing: false
        },
        pros: [
            'Bibliotecă vastă de jocuri',
            'Jocuri exclusive excelente',
            'DualShock 4 confortabil',
            'PlayStation VR support'
        ],
        cons: [
            'Hardware depășit',
            'HDD lent',
            'Ventilator zgomotos',
            'Fără backward compatibility PS1-3'
        ]
    },

    'xbox-one': {
        name: 'Xbox One',
        manufacturer: 'Microsoft',
        year: 2013,
        generation: 8,
        image: '../../assets/images/consoles/xbox-one.png',
        specs: {
            cpu: 'AMD Jaguar, 8 cores @ 1.75 GHz',
            gpu: 'AMD GCN, 1.31 TFLOPS',
            ram: '8 GB DDR3',
            storage: '500 GB / 1 TB HDD',
            resolution: '1080p @ 60Hz',
            rayTracing: false
        },
        pros: [
            'Backward compatibility excelentă',
            'Game Pass value',
            'Kinect support (optional)',
            'Media center capabilities'
        ],
        cons: [
            'Mai slabă decât PS4',
            'Dimensiuni mari',
            'Puține exclusive memorabile',
            'Lansare controversată'
        ]
    },

    // === CLASSIC CONSOLES ===
    'playstation-3': {
        name: 'PlayStation 3',
        manufacturer: 'Sony',
        year: 2006,
        generation: 7,
        image: '../../assets/images/consoles/ps3.png',
        specs: {
            cpu: 'Cell BE @ 3.2 GHz',
            gpu: 'RSX @ 550 MHz, 0.23 TFLOPS',
            ram: '256 MB XDR + 256 MB GDDR3',
            storage: '20-500 GB HDD',
            resolution: '1080p @ 60Hz',
            rayTracing: false
        },
        pros: [
            'Blu-ray player integrat',
            'Jocuri exclusive legendare',
            'PlayStation Network gratuit',
            'Cell processor unic'
        ],
        cons: [
            'Arhitectură greu de programat',
            'Preț mare la lansare',
            'Controller fără trigger-e bune',
            'Hack PSN din 2011'
        ]
    },

    'xbox-360': {
        name: 'Xbox 360',
        manufacturer: 'Microsoft',
        year: 2005,
        generation: 7,
        image: '../../assets/images/consoles/xbox360.png',
        specs: {
            cpu: 'IBM Xenon @ 3.2 GHz',
            gpu: 'ATI Xenos, 0.24 TFLOPS',
            ram: '512 MB GDDR3',
            storage: '20-500 GB HDD',
            resolution: '1080p @ 60Hz',
            rayTracing: false
        },
        pros: [
            'Xbox Live excelent',
            'Controller iconic',
            'Lansare puternică cu jocuri',
            'Kinect inovator'
        ],
        cons: [
            'Red Ring of Death',
            'Ventilator zgomotos',
            'Xbox Live Gold obligatoriu',
            'DVD în loc de Blu-ray'
        ]
    },

    'nintendo-wii': {
        name: 'Nintendo Wii',
        manufacturer: 'Nintendo',
        year: 2006,
        generation: 7,
        image: '../../assets/images/consoles/nintendo-wii.png',
        specs: {
            cpu: 'IBM Broadway @ 729 MHz',
            gpu: 'ATI Hollywood, ~0.01 TFLOPS',
            ram: '88 MB',
            storage: '512 MB Flash',
            resolution: '480p max',
            rayTracing: false
        },
        pros: [
            'Motion controls revoluționare',
            'Preț accesibil',
            'Jocuri pentru toată familia',
            'Backwards compat GameCube'
        ],
        cons: [
            'Grafică inferioară',
            'Fără HD output',
            'Online slab',
            'Shovelware abundent'
        ]
    },

    'playstation-2': {
        name: 'PlayStation 2',
        manufacturer: 'Sony',
        year: 2000,
        generation: 6,
        image: '../../assets/images/consoles/ps2.png',
        specs: {
            cpu: 'Emotion Engine @ 300 MHz',
            gpu: 'Graphics Synthesizer',
            ram: '32 MB RDRAM',
            storage: 'Memory Card 8 MB',
            resolution: '480i/480p',
            rayTracing: false
        },
        pros: [
            'Cea mai vândută consolă vreodată',
            'Bibliotecă masivă de jocuri',
            'DVD player integrat',
            'Backward compat PS1'
        ],
        cons: [
            'Hardware depășit rapid',
            'Memory cards mici',
            'Online limitat',
            'Grafică inferioară Xbox-ului'
        ]
    },

    'xbox': {
        name: 'Xbox (Original)',
        manufacturer: 'Microsoft',
        year: 2001,
        generation: 6,
        image: '../../assets/images/consoles/xbox.png',
        specs: {
            cpu: 'Intel Pentium III @ 733 MHz',
            gpu: 'NVIDIA NV2A, 0.02 TFLOPS',
            ram: '64 MB DDR',
            storage: '8-10 GB HDD',
            resolution: '480p/720p/1080i',
            rayTracing: false
        },
        pros: [
            'Hardware puternic pentru epocă',
            'Xbox Live pioneer',
            'HDD integrat',
            'Controller S îmbunătățit'
        ],
        cons: [
            'Controller original imens',
            'Dimensiuni și greutate mari',
            'Puține jocuri japoneze',
            'Viață scurtă pe piață'
        ]
    },

    'nintendo-gamecube': {
        name: 'Nintendo GameCube',
        manufacturer: 'Nintendo',
        year: 2001,
        generation: 6,
        image: '../../assets/images/consoles/nintendo-gamecube.png',
        specs: {
            cpu: 'IBM Gekko @ 485 MHz',
            gpu: 'ATI Flipper',
            ram: '43 MB total',
            storage: 'Memory Card',
            resolution: '480p',
            rayTracing: false
        },
        pros: [
            'Jocuri Nintendo excelente',
            'Design compact și portabil',
            'Controller ergonomic',
            'Fiabilitate ridicată'
        ],
        cons: [
            'Mini-DVD proprietar',
            'Fără DVD playback',
            'Online aproape inexistent',
            'Imagine copilărească'
        ]
    },

    'sega-dreamcast': {
        name: 'Sega Dreamcast',
        manufacturer: 'Sega',
        year: 1999,
        generation: 6,
        image: '../../assets/images/consoles/sega-dreamcast.png',
        specs: {
            cpu: 'Hitachi SH-4 @ 200 MHz',
            gpu: 'PowerVR2',
            ram: '16 MB',
            storage: 'VMU Memory',
            resolution: '480p',
            rayTracing: false
        },
        pros: [
            'Prima consolă cu modem integrat',
            'Jocuri inovatoare',
            'VMU cu ecran',
            'Grafică impresionantă la lansare'
        ],
        cons: [
            'Viață comercială scurtă',
            'Fără DVD',
            'Piraterie ușoară',
            'Sega a părăsit hardware-ul'
        ]
    },

    // === RETRO ===
    'snes': {
        name: 'Super Nintendo (SNES)',
        manufacturer: 'Nintendo',
        year: 1990,
        generation: 4,
        image: '../../assets/images/consoles/snes.png',
        specs: {
            cpu: 'Ricoh 5A22 @ 3.58 MHz',
            gpu: 'PPU custom',
            ram: '128 KB',
            storage: 'Cartridge',
            resolution: '256×224',
            rayTracing: false
        },
        pros: [
            'Jocuri legendare (Zelda, Mario)',
            'Mode 7 graphics',
            'Sunet superior',
            'Controller iconic'
        ],
        cons: [
            'Cartridge scumpe',
            'Region locking',
            'Procesare lentă uneori',
            'Sprite flickering'
        ]
    },

    'sega-genesis': {
        name: 'Sega Genesis',
        manufacturer: 'Sega',
        year: 1988,
        generation: 4,
        image: '../../assets/images/consoles/sega-genesis.png',
        specs: {
            cpu: 'Motorola 68000 @ 7.6 MHz',
            gpu: 'VDP custom',
            ram: '64 KB',
            storage: 'Cartridge',
            resolution: '320×224',
            rayTracing: false
        },
        pros: [
            'Procesor mai rapid ca SNES',
            'Sonic The Hedgehog',
            'Marketing agresiv și cool',
            'Blast Processing'
        ],
        cons: [
            'Sunet inferior SNES',
            'Paletă de culori limitată',
            'Add-on-uri scumpe (CD, 32X)',
            'Fragmentare hardware'
        ]
    },

    'nes': {
        name: 'Nintendo NES',
        manufacturer: 'Nintendo',
        year: 1985,
        generation: 3,
        image: '../../assets/images/consoles/nes.png',
        specs: {
            cpu: 'Ricoh 2A03 @ 1.79 MHz',
            gpu: 'PPU custom',
            ram: '2 KB',
            storage: 'Cartridge',
            resolution: '256×240',
            rayTracing: false
        },
        pros: [
            'A salvat industria jocurilor',
            'Jocuri iconice (Mario, Zelda)',
            'Zapper și R.O.B.',
            'Bibliotecă vastă'
        ],
        cons: [
            'Blinking cartridge issue',
            'Grafică limitată',
            'Fără save intern',
            'Region locking strict'
        ]
    },

    'atari-2600': {
        name: 'Atari 2600',
        manufacturer: 'Atari',
        year: 1977,
        generation: 2,
        image: '../../assets/images/consoles/atari-2600.png',
        specs: {
            cpu: 'MOS 6507 @ 1.19 MHz',
            gpu: 'TIA',
            ram: '128 bytes',
            storage: 'Cartridge',
            resolution: '160×192',
            rayTracing: false
        },
        pros: [
            'Pioneer al consolelor home',
            'Sistem de cartușe',
            'Bibliotecă diversă',
            'Accesibil pentru epocă'
        ],
        cons: [
            'Grafică primitivă',
            'Controller rigid',
            'Crash din 1983',
            'Multe jocuri de calitate slabă'
        ]
    }
};

// Helper function to get sorted console list
export function getConsolesList() {
    return Object.entries(consolesData)
        .map(([id, data]) => ({
            id,
            name: data.name,
            year: data.year,
            manufacturer: data.manufacturer
        }))
        .sort((a, b) => b.year - a.year); // Sort by year descending (newest first)
}

// Get console by ID
export function getConsole(id) {
    return consolesData[id] || null;
}
