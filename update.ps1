$path = "c:\Users\Hp\Downloads\neo fx folder\tianalux\index.html"
$content = Get-Content $path -Raw -Encoding UTF8

$content = $content -replace "(name:\s*'Traditional Locs Installation'.*?dur:\s*')([^']*)", "`${1}8 Hours"
$content = $content -replace "(name:\s*'Traditional Locs Retightening'.*?dur:\s*')([^']*)", "`${1}3 Hours"
$content = $content -replace "(name:\s*'Microlocs Installation'.*?dur:\s*')([^']*)", "`${1}Full Day (Unavailable for additional bookings on the same day). Estimated Time: 12+ Hours"
$content = $content -replace "(name:\s*'Microlocs Retightening'.*?dur:\s*')([^']*)", "`${1}8 Hours"
$content = $content -replace "(name:\s*'.*?mbr.*? Brows'.*?dur:\s*')([^']*)", "`${1}4 Hours"
$content = $content -replace "(name:\s*'.*?mbr.*? Brow Touch-Up'.*?dur:\s*')([^']*)", "`${1}2.5 Hours"
$content = $content -replace "(name:\s*'Luxury Pedicure'.*?dur:\s*')([^']*)", "`${1}1 Hour"
$content = $content -replace "(name:\s*'Cornrows'.*?dur:\s*')([^']*)", "`${1}1 Hour"

$content = $content -replace "Monday:\s*.*?<", "Monday: 9 AM - 8 PM<"
$content = $content -replace "Tuesday:\s*.*?<", "Tuesday: 7 AM - 7 PM<"
$content = $content -replace "Wednesday:\s*.*?<", "Wednesday: 7 AM - 5 PM<"
$content = $content -replace "Thursday:\s*.*?<", "Thursday: 7 AM - 5 PM<"
$content = $content -replace "Friday:\s*.*?<", "Friday: 9 AM - 8 PM<"
$content = $content -replace "Saturday:\s*.*?<", "Saturday: 10 AM - 6 PM<"
$content = $content -replace "Sunday:\s*.*?<", "Sunday: Closed<"

Set-Content $path -Value $content -Encoding UTF8
Write-Host "Update completed"
