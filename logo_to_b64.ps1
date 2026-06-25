# Convert logo to base64 and save
$logoPath = "C:\Users\Hp\Downloads\photo_2026-06-24_11-26-13.jpg"
$bytes = [System.IO.File]::ReadAllBytes($logoPath)
$b64 = [Convert]::ToBase64String($bytes)
$dataUri = "data:image/jpeg;base64," + $b64
Set-Content -Path "logo_b64.txt" -Value $dataUri -Encoding UTF8
Write-Host "Base64 length: $($b64.Length)"
