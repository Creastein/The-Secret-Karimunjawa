$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open('d:\Project-\The-Secret-Karimunjawa\.agent\Catatan_Revisi_TheSecret.docx')
$text = $doc.Content.Text
$doc.Close()
$word.Quit()
$text | Out-File -FilePath 'd:\Project-\The-Secret-Karimunjawa\.agent\Catatan_Revisi_TheSecret.txt' -Encoding UTF8
