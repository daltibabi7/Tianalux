$path = 'c:\Users\Hp\Downloads\neo fx folder\tianalux\index.html'
$content = [System.IO.File]::ReadAllText($path)

$content = $content.Replace("const DATA_VER='9.0';", "const DATA_VER='9.1';")

$preloaderStart = '<div id="preloader"'
$preloaderIndex = $content.IndexOf($preloaderStart)

if ($preloaderIndex -ge 0) {
    $imgStart = $content.IndexOf('<img src="data:image', $preloaderIndex)
    if ($imgStart -ge 0 -and $imgStart -lt ($preloaderIndex + 300)) {
        $imgEnd = $content.IndexOf('>', $imgStart)
        if ($imgEnd -ge 0) {
            $before = $content.Substring(0, $imgStart)
            $after = $content.Substring($imgEnd + 1)
            
            $newImg = '<img src="media__1782125029494.jpg" alt="TianaLux Logo" style="width:100px;height:100px;margin-bottom:15px;border-radius:50%;border:2px solid var(--gold);object-fit:cover;box-shadow: 0 4px 16px rgba(212,175,55,0.5);">'
            
            $content = $before + $newImg + $after
        }
    }
}

[System.IO.File]::WriteAllText($path, $content)
