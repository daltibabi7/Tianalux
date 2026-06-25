$jsonl = Get-Content 'C:\Users\Hp\.gemini\antigravity\brain\6c51e89c-bb2f-4f2d-9977-ea0cc8bd0aeb\.system_generated\logs\transcript_full.jsonl'
for ($i=0; $i -lt $jsonl.Count; $i++) {
  if ($jsonl[$i] -match '"toolName":"view_file"' -and $jsonl[$i] -match 'index\.html') {
    $nextObj = $jsonl[$i+1] | ConvertFrom-Json
    if ($nextObj.type -eq 'TOOL_RESPONSE') {
      [System.IO.File]::WriteAllText("index_restored.html", $nextObj.content)
      Write-Output "Restored successfully!"
      break
    }
  }
}
