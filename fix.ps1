$html = Get-Content -Path "index.html" -Raw

$html = $html -replace "Traditional Loc Retie / Retwist", "Traditional Loc (startters loc)"

$oldDesc = "Precision microloc installation crafted to perfection\. Final price depends on consultation, hair density, hair length, and grid size\. A consultation is required before booking\."
$newDesc = "Precision microloc installation crafted to perfection. Final price depends on consultation, hair density, hair length, and grid size. Consultation required."
$html = $html -replace $oldDesc, $newDesc

$html = $html -replace "img:'tiana-locs-2\.jpg'", "img:'photo_microlocs.jpg'"
$html = $html -replace "image: `"tiana-locs-2\.jpg`"", "image: `"photo_microlocs.jpg`""

$html = $html -replace ",\{id:'brows-3'[^}]*\}", ""

$html = $html -replace "const DATA_VER='8.5'", "const DATA_VER='8.6'"

Set-Content -Path "index.html" -Value $html -NoNewline -Encoding UTF8
Write-Host "Fixed index.html"
