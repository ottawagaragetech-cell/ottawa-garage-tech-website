Add-Type -AssemblyName System.Drawing
$w, $h = 1200, 630
$bmp = New-Object System.Drawing.Bitmap $w, $h
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = 'AntiAlias'
$g.Clear([System.Drawing.Color]::FromArgb(255, 247, 245, 241))
$brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 27, 94, 75))
$g.FillRectangle($brush, 0, 0, $w, 180)
$accent = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 184, 149, 58))
$g.FillRectangle($accent, 0, 160, $w, 12)
$fontTitle = New-Object System.Drawing.Font('Segoe UI', 52, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font('Segoe UI', 28, [System.Drawing.FontStyle]::Regular)
$white = [System.Drawing.Brushes]::White
$dark = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 28, 36, 32))
$g.DrawString('Ottawa Garage Tech', $fontTitle, $white, 60, 50)
$g.DrawString('Garage door repair - Ottawa', $fontSub, $white, 64, 120)
$g.DrawString('Replace og-preview.png before launch', $fontSub, $dark, 60, 280)
$path = Join-Path $PSScriptRoot '..\assets\og-preview.png'
$bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
Write-Output "Created $path"
