$path = "c:\Users\Hp\Downloads\neo fx folder\tianalux\index.html"
$newPath = "c:\Users\Hp\Downloads\neo fx folder\tianalux\index_new.html"
$content = Get-Content $path -Raw -Encoding UTF8

# The old buggy injected code:
$buggyBtn = 'onclick="window.open(s.calLink || ''https://cal.com/tianalux'', ''_blank'')">Book Appointment</button>'
$fixedBtn = 'onclick="window.open(''${s.calLink || ''https://cal.com/tianalux''}'', ''_blank'')">Book Appointment</button>'
$content = $content.Replace($buggyBtn, $fixedBtn)

$buggyReq = 'onclick="window.open(s.calLink || ''https://cal.com/tianalux'', ''_blank'')">Request Consultation</button>'
$fixedReq = 'onclick="window.open(''${s.calLink || ''https://cal.com/tianalux''}'', ''_blank'')">Request Consultation</button>'
$content = $content.Replace($buggyReq, $fixedReq)

[System.IO.File]::WriteAllText($newPath, $content)
Write-Host "Fixed template literals"
