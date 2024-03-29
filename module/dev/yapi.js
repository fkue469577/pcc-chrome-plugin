if(window.location.href.indexOf("/project/")>-1) {
    setTimeout(()=>{
        var html = `<div id="sort" style="position: absolute;right: 20px;margin-top: -42px;z-index: 1;padding: 0px;"><button type="button" id="sort" class="ant-btn ant-btn-primary" style="float: right;"><span>重新排序</span></button></div>`
        $(".m-subnav").append(html);
        $("#sort").click(function() {
            if(confirm("请选择要重新排序的分类")) {
                var selected = $(".ant-tree-node-selected")
                var body = {};
                if(selected.hasClass("ant-tree-node-content-wrapper-open") || selected.hasClass("ant-tree-node-content-wrapper-close")) {
                    body = collectionBody(selected.next());
                }
                if(selected.hasClass("ant-tree-node-content-wrapper-normal")) {
                    body = collectionBody(selected.parent().parent());
                }
                fetch("/api/interface/up_index", {
                    method: "post"
                    , body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(()=>location.reload());
                function collectionBody(parents) {
                    var sort = ['_init', '_tree', '_分页']
                    return parents.find("a").map((index, item)=>{
                        var href = $(item).attr("href");
                        var hrefs = href.split("/");
                        var id = hrefs[hrefs.length-1];
                        var data = {id: id, name: $(item).text()}
                        sort.forEach((e, i)=>data.name.indexOf(e)>-1? data["sort"]=i: null);
                        return data
                    }).get().sort((a, b)=>{
                        var a_name = a.name.split("_")[0];
                        var b_name = b.name.split("_")[0];
                        if(a_name==b_name) {
                            if(a.sort!=undefined || b.sort!=undefined) {
                                return (a.sort??1000)-(b.sort??1000)
                            } else {
                                return parseInt(a.id)-parseInt(b.id);
                            }
                        } else {
                            return a_name.localeCompare(b_name, 'zh-Hans-CN');
                        }
                    }).map((item, i)=>{
                        item["index"]=i;
                        return item;
                    })
                }
            }
        })
    }, 500)
}
