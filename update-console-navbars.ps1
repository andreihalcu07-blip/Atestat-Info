# Script pentru actualizarea navbar-urilor în toate paginile console
# Adaugă hamburger menu în toate fișierele console HTML

$consolesPath = "src\html\pages\consoles"
$consoleFiles = Get-ChildItem -Path $consolesPath -Filter "*.html"

$oldNavbar = @'
    <nav class="navbar">
        <div class="container">
            <a href="../index.html" class="logo">Console Notebook</a>
            <ul class="nav-links">
                <li><a href="../index.html">Acasă</a></li>
                <li><a href="../fizica.html">Fizica</a></li>
                <li><a href="../informatica.html">Informatica</a></li>
                <li><a href="../evolutie.html" class="active">Evoluție</a></li>
                <li><a href="../comparatie.html">Comparație</a></li>
            </ul>
        </div>
    </nav>
'@

$newNavbar = @'
    <nav class="navbar">
        <div class="container">
            <a href="../index.html" class="logo">Console Notebook</a>
            
            <!-- Hamburger Button - Mobile Only -->
            <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <ul class="nav-links">
                <li><a href="../index.html">Acasă</a></li>
                <li><a href="../fizica.html">Fizica</a></li>
                <li><a href="../informatica.html">Informatica</a></li>
                <li><a href="../evolutie.html" class="active">Evoluție</a></li>
                <li><a href="../comparatie.html">Comparație</a></li>
            </ul>
        </div>
    </nav>
'@

$updatedCount = 0
$errorCount = 0

Write-Host "🔄 Actualizare navbar-uri pentru $($consoleFiles.Count) fișiere console..." -ForegroundColor Cyan

foreach ($file in $consoleFiles) {
    try {
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        
        if ($content -match [regex]::Escape($oldNavbar)) {
            $newContent = $content -replace [regex]::Escape($oldNavbar), $newNavbar
            Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8 -NoNewline
            $updatedCount++
            Write-Host "✓ Actualizat: $($file.Name)" -ForegroundColor Green
        } else {
            Write-Host "⚠ Skipped (navbar diferit sau deja actualizat): $($file.Name)" -ForegroundColor Yellow
        }
    } catch {
        $errorCount++
        Write-Host "✗ Eroare la: $($file.Name) - $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "✅ Actualizate: $updatedCount fișiere" -ForegroundColor Green
if ($errorCount -gt 0) {
    Write-Host "❌ Erori: $errorCount fișiere" -ForegroundColor Red
}
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
