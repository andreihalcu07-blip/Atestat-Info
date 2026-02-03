# Quick Fix Script - Adaugă Inline JavaScript la Console Pages
# Rulează direct din terminal (nu necesită Set-ExecutionPolicy)

$consoleDir = "src\html\pages\consoles"
$files = Get-ChildItem -Path $consoleDir -Filter "*.html" -File

$inlineScript = @'
    
    <!-- Fallback Inline JavaScript pentru Hamburger Menu -->
    <!-- Funcționează chiar și fără server HTTP -->
    <script>
        // Hamburger Menu Toggle - Console Pages
        (function() {
            'use strict';
            
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            const body = document.body;
            
            if (!hamburger || !navLinks) return;
            
            // Toggle menu
            function toggleMenu() {
                const isActive = navLinks.classList.contains('active');
                
                if (isActive) {
                    closeMenu();
                } else {
                    openMenu();
                }
            }
            
            // Open menu
            function openMenu() {
                hamburger.classList.add('active');
                navLinks.classList.add('active');
                body.classList.add('menu-open');
                hamburger.setAttribute('aria-expanded', 'true');
            }
            
            // Close menu
            function closeMenu() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
            
            // Event listeners
            hamburger.addEventListener('click', toggleMenu);
            
            // Close menu când se click pe un link
            const navLinksItems = navLinks.querySelectorAll('a');
            navLinksItems.forEach(link => {
                link.addEventListener('click', closeMenu);
            });
            
            // Close menu pe ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                    closeMenu();
                }
            });
            
            // Close menu când se click în afara lui
            document.addEventListener('click', (e) => {
                if (navLinks.classList.contains('active') && 
                    !navLinks.contains(e.target) && 
                    !hamburger.contains(e.target)) {
                    closeMenu();
                }
            });
            
            // Marchează link activ
            const currentPath = window.location.pathname;
            navLinksItems.forEach(link => {
                if (link.href === window.location.href) {
                    link.classList.add('active');
                }
            });
        })();
    </script>
'@

$count = 0
$skipped = 0

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Skip dacă deja are inline script
    if ($content -match "Hamburger Menu Toggle - Console Pages") {
        $skipped++
        Write-Host "⚠ Skipped: $($file.Name) (already has inline script)" -ForegroundColor Yellow
        continue
    }
    
    # Găsește poziția script-ului module
    if ($content -match '(<script type="module" src="\.\./\.\./\.\./js/main\.js"></script>)') {
        $newContent = $content -replace '(<script type="module" src="\.\./\.\./\.\./js/main\.js"></script>)', "`$1$inlineScript"
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8 -NoNewline
        $count++
        Write-Host "✓ Updated: $($file.Name)" -ForegroundColor Green
    } else {
        Write-Host "✗ No module script found in: $($file.Name)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "✅ Updated: $count files" -ForegroundColor Green
Write-Host "⚠ Skipped: $skipped files" -ForegroundColor Yellow
Write-Host "================================" -ForegroundColor Cyan
