$path = "c:\Users\Hp\Downloads\neo fx folder\tianalux\index.html"
$content = Get-Content $path -Raw -Encoding UTF8
$content = $content -replace "const DATA_VER='8.8'", "const DATA_VER='8.9'"
[System.IO.File]::WriteAllText($path, $content)
Write-Host "Version bumped to 8.9"
