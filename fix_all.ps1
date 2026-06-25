Copy-Item "C:\Users\Hp\.gemini\antigravity\brain\6c51e89c-bb2f-4f2d-9977-ea0cc8bd0aeb\media__1782305165811.jpg" -Destination "c:\Users\Hp\Downloads\neo fx folder\tianalux\microlocs-installation.jpg" -Force

$path = 'c:\Users\Hp\Downloads\neo fx folder\tianalux\index.html'
$content = [System.IO.File]::ReadAllText($path)

$content = $content.Replace("const DATA_VER='9.1';", "const DATA_VER='9.2';")

$preloaderStart = '<div id="preloader">'
$preloaderIndex = $content.IndexOf($preloaderStart)

if ($preloaderIndex -ge 0) {
    $imgStart = $content.IndexOf('<img src="media__', $preloaderIndex)
    if ($imgStart -ge 0 -and $imgStart -lt ($preloaderIndex + 200)) {
        $imgEnd = $content.IndexOf('>', $imgStart)
        if ($imgEnd -ge 0) {
            $before = $content.Substring(0, $imgStart)
            $after = $content.Substring($imgEnd + 1)
            $content = $before + $after
        }
    }
}

[System.IO.File]::WriteAllText($path, $content)
Write-Host "Success"
