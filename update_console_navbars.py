#!/usr/bin/env python3
"""
Script pentru actualizarea navbar-urilor în toate paginile console.
Adaugă hamburger menu în toate fișierele HTML din consoles/.
"""

import os
import glob
from pathlib import Path

# Definește path-ul către paginile console
CONSOLES_DIR = Path("src/html/pages/consoles")

# Template-ul vechi de navbar
OLD_NAVBAR = '''    <nav class="navbar">
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
    </nav>'''

# Template-ul nou cu hamburger menu
NEW_NAVBAR = '''    <nav class="navbar">
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
    </nav>'''

def update_console_navbars():
    """Actualizează navbar-urile în toate paginile console."""
    
    # Găsește toate fișierele HTML
    html_files = list(CONSOLES_DIR.glob("*.html"))
    
    if not html_files:
        print(f"❌ Nu s-au găsit fișiere HTML în {CONSOLES_DIR}")
        return
    
    print(f"🔄 Actualizare navbar pentru {len(html_files)} fișiere console...\n")
    
    updated_count = 0
    skipped_count = 0
    error_count = 0
    
    for html_file in sorted(html_files):
        try:
            # Citește conținutul
            content = html_file.read_text(encoding='utf-8')
            
            # Verifică dacă există navbar-ul vechi
            if OLD_NAVBAR in content:
                # Înlocuiește cu cel nou
                new_content = content.replace(OLD_NAVBAR, NEW_NAVBAR)
                
                # Scrie înapoi
                html_file.write_text(new_content, encoding='utf-8')
                
                updated_count += 1
                print(f"✓ Actualizat: {html_file.name}")
            else:
                skipped_count += 1
                print(f"⚠ Skipped: {html_file.name} (navbar diferit sau deja actualizat)")
                
        except Exception as e:
            error_count += 1
            print(f"✗ Eroare la {html_file.name}: {e}")
    
    print("\n" + "="*50)
    print(f"✅ Actualizate: {updated_count} fișiere")
    print(f"⚠️  Skipped: {skipped_count} fișiere")
    if error_count > 0:
        print(f"❌ Erori: {error_count} fișiere")
    print("="*50)

if __name__ == "__main__":
    # Verifică dacă suntem în directorul corect
    if not CONSOLES_DIR.exists():
        print(f"❌ Directorul {CONSOLES_DIR} nu există!")
        print("Rulează scriptul din root-ul proiectului (Atestat Info/)")
        exit(1)
    
    update_console_navbars()
    print("\n✨ Proces complet!")
