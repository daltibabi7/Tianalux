$path = "c:\Users\Hp\Downloads\neo fx folder\tianalux\index.html"
$newPath = "c:\Users\Hp\Downloads\neo fx folder\tianalux\index_new.html"
$content = Get-Content $path -Raw -Encoding UTF8

$content = $content -replace "goTo\('booking'\)", "goTo('services')"
$content = $content -replace 'goTo\("booking"\)', "goTo('services')"

$btnOld = 'onclick="goTo(''booking'',''${s.id}'')">Book Appointment</button>'
$btnNew = 'onclick="window.open(s.calLink || ''https://cal.com/tianalux'', ''_blank'')">Book Appointment</button>'
$content = $content.Replace($btnOld, $btnNew)

$reqOld = 'onclick="goTo(''booking'',''${s.id}'')">Request Consultation</button>'
$reqNew = 'onclick="window.open(s.calLink || ''https://cal.com/tianalux'', ''_blank'')">Request Consultation</button>'
$content = $content.Replace($reqOld, $reqNew)

$depOld = '${s.dep>0?`<button class="btn" onclick="goTo(''booking'',''${s.id}'')">Pay Deposit</button>`:''''}'
$content = $content.Replace($depOld, "")

$content = $content -replace "(name:'Traditional Locs Installation'.*?)(})", "`${1},calLink:'https://cal.com/tianalux/traditional-locs-installation'`$2"
$content = $content -replace "(name:'Traditional Loc \(startters loc\)'.*?)(})", "`${1},calLink:'https://cal.com/tianalux/traditional-loc-retie-retwist-consultation'`$2"
$content = $content -replace "(name:'Traditional Loc Retie / Retwist'.*?)(})", "`${1},calLink:'https://cal.com/tianalux/traditional-loc-retie-retwist-consultation'`$2"
$content = $content -replace "(name:'Traditional Locs Retightening'.*?)(})", "`${1},calLink:'https://cal.com/tianalux/traditional-loc-retie-retwist-consultation'`$2"
$content = $content -replace "(name:'Microlocs Retie'.*?)(})", "`${1},calLink:'https://cal.com/tianalux/microlocs-retie-consultation'`$2"
$content = $content -replace "(name:'Microlocs Retightening'.*?)(})", "`${1},calLink:'https://cal.com/tianalux/microlocs-retie-consultation'`$2"
$content = $content -replace "(name:'Cornrows'.*?)(})", "`${1},calLink:'https://cal.com/tianalux/cornrows-consultation'`$2"
$content = $content -replace "(name:'.*?mbr.*? Brows'.*?)(})", "`${1},calLink:'https://cal.com/tianalux/15min'`$2"
$content = $content -replace "(name:'.*?mbr.*? Brow Touch-Up'.*?)(})", "`${1},calLink:'https://cal.com/tianalux/ombre-brow-touch-up'`$2"

$content = $content -replace "const DATA_VER='8.5'", "const DATA_VER='8.7'"
$content = $content -replace "const DATA_VER='8.6'", "const DATA_VER='8.7'"

[System.IO.File]::WriteAllText($newPath, $content)
Write-Host "Replaced index_new.html"
