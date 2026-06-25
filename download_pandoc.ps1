$r = Invoke-RestMethod -Uri 'https://api.github.com/repos/jgm/pandoc/releases/latest' -Headers @{"User-Agent" = "PowerShell"}
$asset = $r.assets | Where-Object { $_.name -match 'windows.*x86_64.*\.msi' } | Select-Object -First 1
if (-not $asset) { Write-Error 'Pandoc MSI asset not found' }
$url = $asset.browser_download_url
Write-Host "Downloading Pandoc from $url"
Invoke-WebRequest -Uri $url -OutFile 'pandoc.msi' -UseBasicParsing
Write-Host "Download complete"
