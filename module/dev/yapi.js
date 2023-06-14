if(window.location.href.indexOf("/project/")>-1) {
    setTimeout(()=>{
        var html = `<div id="sort" style="position: absolute;right: 20px;margin-top: -42px;z-index: 1;padding: 0px;"><button type="button" id="sort" class="ant-btn ant-btn-primary" style="float: right;"><span>重新排序</span></button></div>`
        $(".m-subnav").append(html);
        $("#sort").click(function() {
            confirm("请选择要重新排序的分类", ()=>{
                var body = $(".ant-tree-node-selected").next().find("a").map((i, item)=>{
                    var href = $(item).attr("href");
                    var hrefs = href.split("/");
                    var id = hrefs[hrefs.length-1];
                    return id
                }).get().sort().map((id, i)=>{return {id: id, index:i}})
                fetch("/api/interface/up_index", {
                    method: "post"
                    , body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            })
        })
    }, 500)
}
