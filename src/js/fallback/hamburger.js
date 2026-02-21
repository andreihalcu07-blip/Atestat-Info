/**
 * Hamburger Menu Fallback (non-module)
 * Allows file:// usage without ES module loading
 */

(() => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (!hamburger || !navLinks) return;

    const openMenu = () => {
        hamburger.classList.add('active');
        navLinks.classList.add('active');
        body.classList.add('menu-open');
        hamburger.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
    };

    const toggleMenu = () => (navLinks.classList.contains('active') ? closeMenu() : openMenu());

    // Ensure button has explicit type to avoid form submit behavior
    if (hamburger && hamburger.tagName === 'BUTTON' && !hamburger.getAttribute('type')) {
        hamburger.setAttribute('type', 'button');
    }

    // Support both click and touch on mobile to improve reliability
    const bindToggle = (el) => {
        el.addEventListener('click', toggleMenu);
        el.addEventListener('touchstart', (e) => { e.preventDefault(); toggleMenu(); }, { passive: false });
    };

    bindToggle(hamburger);
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    document.addEventListener('click', event => {
        if (navLinks.classList.contains('active') && !navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            closeMenu();
        }
    });

    /* Auto-hide navbar on scroll (fallback, fără module) */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const onScroll = () => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY;

            if (body.classList.contains('menu-open')) {
                lastScrollY = currentY;
                ticking = false;
                return;
            }

            if (currentY < 80) {
                navbar.classList.remove('navbar--hidden');
                lastScrollY = currentY;
                ticking = false;
                return;
            }

            if (Math.abs(delta) < 15) {
                ticking = false;
                return;
            }

            navbar.classList.toggle('navbar--hidden', delta > 0);
            lastScrollY = currentY < 0 ? 0 : currentY;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(onScroll);
                ticking = true;
            }
        }, { passive: true });
    }
})();
