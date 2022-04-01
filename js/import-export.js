var fileHtml = `<div class="import-export-container">
    <button class="import">导入</button>
    <button class="export">导出</button>
    <input type="file" style="display: none;" accept=".km" name="file" id="file"/>
</div>`;
var homeHtml = `<div class="import-export-container">
    <button class="import-batch">批量导入</button>
    <button class="export-batch">批量导出</button>
    <input type="file" style="display: none;" multiple="multiple" accept=".km" name="file" id="batchFile"/>
</div>`;

if(location.href.indexOf("file")>-1 && $(".import-export-container").length==0) {
    var body = $("body")
    body.prepend(fileHtml)

    $(".import").click(function (){
        $("#file").click();
    });
    $(".export").click(function (){
        console.log("导出");
    });
    document.getElementById('file').addEventListener('change', function selectedFileChanged() {
        if (this.files.length === 0) {
            console.log('请选择文件！');
            return;
        }

        const reader = new FileReader();
        reader.onload = function fileReadCompleted() {
            // 当读取完成时，内容只在`reader.result`中
            var json = {
                strJson: reader.result,
                csrf_token: $("input[name=csrf_token]").val(),
                fileGuid: location.href.match(/\w*$/g)[0]
            }
            updateFile(json, function() {
                history.back(0);
            })
        };
        reader.readAsText(this.files[0]);
    });

    $(".export").click(function (){
        alert("暂未开发");
    });
}

if(location.href.indexOf("home")>-1 && $(".import-export-container").length==0) {
    var body = $("body")
    body.prepend(homeHtml)

    $(".import-batch").click(function (){
        $("#batchFile").click();
    });
    document.getElementById('batchFile').addEventListener('change', function selectedFileChanged() {
        if (this.files.length === 0) {
            console.log('请选择文件！');
            return;
        }

        var i = this.files.length;
        for(var file of this.files) {
            i--;
            var name = file.name.match(/.*(?=(\.km))/g)[0]
            createFile(name, function(createResult) {
                const reader = new FileReader();
                reader.onload = function fileReadCompleted() {
                    console.log(arguments)
                    // 当读取完成时，内容只在`reader.result`中
                        console.log(createResult);
                        var json = {
                            strJson: reader.result,
                            csrf_token: $("input[name=csrf_token]").val(),
                            fileGuid: createResult.data.bos_guid
                        }
                        updateFile(json, function (){
                            if(i==0) history.go(0);
                        });
                };
                reader.readAsText(file);
            })
        }
    })

    $(".export-batch").click(function (){
        alert("暂未开发");
    });
}
function updateFile(data, callback) {
    $.post("/bos/save", data, function(result){
        callback();
    });
}

function createFile(fileName, callback) {
    $.ajax({
        url: "/bos/touch",
        type: "post",
        data: {
            fileName: fileName,
            parentGuid: location.href.match(/\w*$/g)[0],
            template: "default",
            version: "1.4.43",
            csrf_token: $("input[name=csrf_token]").val()
        },
        success: function(result) {
            if(typeof callback == "function") {
                callback(result);
            }
        }
    });
}
