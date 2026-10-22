$root = Join-Path (Split-Path -Parent $PSScriptRoot) 'site'
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add('http://localhost:5530/')
$l.Start()
Write-Host 'Serving on http://localhost:5530/'
$types = @{ '.html'='text/html; charset=utf-8'; '.css'='text/css'; '.js'='application/javascript'; '.svg'='image/svg+xml'; '.jpg'='image/jpeg'; '.png'='image/png'; '.xml'='application/xml'; '.txt'='text/plain'; '.webmanifest'='application/manifest+json'; '.json'='application/json' }
while ($l.IsListening) {
  $ctx = $l.GetContext()
  $p = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
  if ($p -eq '') { $p = 'index.html' }
  $f = [IO.Path]::GetFullPath((Join-Path $root $p))
  if (-not $f.StartsWith($root) -or -not (Test-Path $f -PathType Leaf)) { $f = Join-Path $root '404.html'; $ctx.Response.StatusCode = 404 }
  $ext = [IO.Path]::GetExtension($f)
  $ctx.Response.ContentType = $(if ($types[$ext]) { $types[$ext] } else { 'application/octet-stream' })
  $b = [IO.File]::ReadAllBytes($f)
  $ctx.Response.OutputStream.Write($b, 0, $b.Length)
  $ctx.Response.Close()
}
