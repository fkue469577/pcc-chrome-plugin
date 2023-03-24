var html = `<div class="import-export-container">
    <button class="import">批量导入</button>
    <button class="export">批量导出</button>
    <input type="file" style="display: none;" accept=".km" name="file" id="file"/>
</div>`;


if($(".import-export-container").length==0) {
    var body = $("body")
    body.prepend(html)
}
