# Troca o domínio do site em todos os arquivos (SEO, sitemap, robots, redes sociais).
# Como usar: clique com o botão direito neste arquivo > "Executar com o PowerShell"
# ou, no terminal:  powershell -ExecutionPolicy Bypass -File .\trocar-dominio.ps1

$ErrorActionPreference = 'Stop'
$site = Join-Path $PSScriptRoot 'site'
$arquivos = @('index.html', '404.html', 'robots.txt', 'sitemap.xml') | ForEach-Object { Join-Path $site $_ }

# descobre o domínio atual pelo link canônico do index.html
$index = [IO.File]::ReadAllText((Join-Path $site 'index.html'), [Text.Encoding]::UTF8)
$m = [regex]::Match($index, '<link rel="canonical" href="(https://[^"/]+)/?"')
if (-not $m.Success) { throw 'Não encontrei o link canônico no index.html.' }
$atual = $m.Groups[1].Value
Write-Host "Domínio atual: $atual"

$novo = Read-Host 'Digite o novo domínio (ex.: https://www.meusite.com.br)'
$novo = $novo.Trim().TrimEnd('/')
if ($novo -notmatch '^https://[a-z0-9-]+(\.[a-z0-9-]+)+$') {
  throw 'Domínio inválido. Use o formato https://www.exemplo.com.br (com https://, sem barra no final).'
}
if ($novo -eq $atual) { Write-Host 'Nada para trocar.'; exit }

$utf8 = New-Object Text.UTF8Encoding $false
foreach ($f in $arquivos) {
  if (-not (Test-Path $f)) { continue }
  $txt = [IO.File]::ReadAllText($f, [Text.Encoding]::UTF8)
  $qtd = ([regex]::Matches($txt, [regex]::Escape($atual))).Count
  if ($qtd -gt 0) {
    [IO.File]::WriteAllText($f, $txt.Replace($atual, $novo), $utf8)
    Write-Host ("  {0}: {1} troca(s)" -f (Split-Path $f -Leaf), $qtd)
  }
}
Write-Host "Pronto! Domínio trocado para $novo"
