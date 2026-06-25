$path    = "c:\Users\Hp\Downloads\neo fx folder\tianalux\index.html"
$newPath = "c:\Users\Hp\Downloads\neo fx folder\tianalux\index_new.html"
$b64path = "c:\Users\Hp\Downloads\neo fx folder\tianalux\logo_b64.txt"

# Read logo base64
$logoDataUri = Get-Content $b64path -Raw -Encoding UTF8
$logoDataUri = $logoDataUri.Trim()

# Read HTML
$content = [System.IO.File]::ReadAllText($path)

# ─── 1. NAVBAR: replace text logo with image logo ───────────────────────────
# Old: <a class="logo" onclick="goTo('home')">TIANA <span>LUX</span></a>
$oldNav = '<a class="logo" onclick="goTo(''home'')">TIANA <span>LUX</span></a>'
$newNav = '<a class="logo-img-wrap" onclick="goTo(''home'')" style="cursor:pointer;display:flex;align-items:center;"><img src="' + $logoDataUri + '" alt="Tiana Locs Logo" style="height:52px;width:52px;object-fit:contain;filter:drop-shadow(0 2px 6px rgba(212,175,55,0.35));"></a>'
$content = $content.Replace($oldNav, $newNav)

# ─── 2. PRELOADER: replace text with logo image ──────────────────────────────
$oldPre = '<div class="pre-logo">TIANA LUX</div>'
$newPre = '<img src="' + $logoDataUri + '" alt="Tiana Locs" style="width:100px;height:100px;object-fit:contain;animation:shimmer 2s infinite;filter:drop-shadow(0 4px 16px rgba(212,175,55,0.5));">'
$content = $content.Replace($oldPre, $newPre)

# ─── 3. FOOTER: replace <h2>TIANA LUX</h2> with logo image ──────────────────
$oldFoot = '<h2>TIANA LUX</h2>'
$newFoot = '<img src="' + $logoDataUri + '" alt="Tiana Locs" style="width:90px;height:90px;object-fit:contain;margin-bottom:12px;filter:brightness(1.15) drop-shadow(0 2px 8px rgba(212,175,55,0.4));">'
$content = $content.Replace($oldFoot, $newFoot)

# ─── 4. Bump DATA_VER to force cache refresh ─────────────────────────────────
$content = $content -replace "const DATA_VER='[^']*'", "const DATA_VER='9.0'"

# Write output
[System.IO.File]::WriteAllText($newPath, $content)
Write-Host "Done! index_new.html created."
