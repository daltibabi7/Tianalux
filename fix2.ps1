$html = Get-Content -Path "index.html" -Raw

# Replace the specific brow correction object
# We'll use a regex that handles both single and double quotes, and matches up to video: "" or similar
# Better yet, since we just want it GONE from the frontend, we can just replace its name and description with blanks, or remove it entirely.
$regex = ',\s*\{[^}]*id\s*:\s*["'']brows-3["''][^}]*\}'
$html = $html -replace $regex, ""

# Or let's just do a more brutal match: find the substring and remove the surrounding object
$html = $html -replace ',\s*\{\s*id:\s*"brows-3"[\s\S]*?(?<=\})\s*', ""
$html = $html -replace ',\s*\{\s*id:''brows-3''[\s\S]*?(?<=\})\s*', ""

# Let's also do a hard string replace just in case:
$browText1 = "Brow Correction / Previous Work Done Elsewhere"
$browText2 = "Expert brow correction for work done by other artists. A consultation is required before booking to assess the current state and design the best correction plan."
$browText3 = "Expert brow correction for work done by other artists. Consultation required before booking to assess and design the best correction plan."

$html = $html.Replace($browText1, "REMOVED")
$html = $html.Replace($browText2, "")
$html = $html.Replace($browText3, "")

# Bump version again
$html = $html -replace "const DATA_VER='8.6'", "const DATA_VER='8.7'"

Set-Content -Path "index.html" -Value $html -NoNewline -Encoding UTF8
Write-Host "Fixed index.html again"
