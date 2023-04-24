$(".rich_media_content img").parent().each((i, e)=>{
    var _obj = $(e);
    if(!_obj.attr("id")) {
        _obj.attr("id", uuid())
    }
    var id = _obj.attr("id")
    layer.photos({
        photos: '#'+id
        ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
    })
    $("#"+id).click(function() {
        setTimeout(()=>{
            $(".layui-layer-shade").css("opacity", 0.2)
        }, 500)
    });
})

// 方法二
$(document).on("mousewheel DOMMouseScroll", ".layui-layer-phimg", function (e) {
    debugger
    $("#layui-layer-photos").css("height", "auto")
    window.ele = e;
    var delta = ele.originalEvent.wheelDelta / Math.abs(ele.originalEvent.wheelDelta);
    var photos = $(".layui-layer-photos");
    var oldWidth = photos.width();
    var oldHeight = photos.height();
    var width = oldWidth * (1 + delta * 0.1);
    var height = oldHeight * (1 + delta * 0.1);

    if(delta<-1 && width<100) return;
    photos.css("width", width+"px");
    photos.css("height", height+"px");

    var oldLeft = parseFloat(photos.css("left").replaceAll("px", ""));
    var oldTop = parseFloat(photos.css("top").replaceAll("px", ""));
    var clientX = ele.originalEvent.clientX;
    var clientY = ele.originalEvent.clientY;
    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight;

    var top = oldTop - (height-oldHeight)*clientY/innerHeight;
    var left = oldLeft - (width-oldWidth)*clientX/innerWidth;
    photos.css("top", top);
    photos.css("left", left);
})

// 方法一
// $(document).on("mousewheel DOMMouseScroll", ".layui-layer-phimg", function (e) {
//     $(document).on("mousewheel DOMMouseScroll", ".layui-layer-phimg", function (e) {
//         window.ele = e;
//         var delta = ele.originalEvent.wheelDelta / Math.abs(ele.originalEvent.wheelDelta);
//         var photos = $(".layui-layer-photos");
//         photos.css("width", photos * (1 + delta * 0.1) + "px");
//
//
//         console.log(e);
//         var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
//             (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
//         var imagep = $(".layui-layer-phimg").parent().parent();
//         var image = $(".layui-layer-phimg").parent();
//         var h = image.height();
//         var w = image.width();
//         var oldTop = e.offsetTop;
//         var oldLeft = e.offsetLeft;
//         console.log(oldTop, oldLeft);
//         var img_url = $("#imglayer").attr("src");
//
//         // 创建对象
//         var img = new Image();
//
//         // 改变图片的src
//         img.src = img_url;
//         var width = img.width;
//         var height = img.height;
//         var rate = 1.1;
//         if (delta > 0) {
//             // if (h < (window.innerHeight)) {
//             // }
//             h = h * rate;
//             w = w * rate;
//             width = width*rate;
//             height = height*rate;
//         } else if (delta < 0) {
//             if (h > 100) {
//                 h = h * (1-rate);
//                 w = w * (1-rate);
//                 width = width*(1-rate);
//                 height = height*(1-rate);
//             }
//         }
//         imagep.css("top", (window.innerHeight - h) / 2);
//         imagep.css("left", (window.innerWidth - w) / 2);
//         image.height(h);
//         image.width(w);
//         imagep.height(h);
//         imagep.width(w);
//         var current = $("#current").val();
//         if((current/90)%2==1){
//             $('#imglayer').css("width",h);
//             $('#imglayer').css("margin-top",-(w-h)/2);
//             if(height<width){
//                 $('#imglayer').css("margin-left",(w-h)/2);
//             }
//         }else{
//             $('#imglayer').css("width",w);
//             $('#imglayer').css("margin-top",0);
//             if(height<width){
//                 $('#imglayer').css("margin-left",0);
//             }
//         }
//     });
// })






// 接上面的备份
// $(document).on("click", ".rich_media_content img", function() {
//     var _this = $(this);
//     var availWidth = Math.min(document.body.clientWidth, window.screen.availWidth);
//     var availHeight = Math.min(document.body.clientHeight, window.screen.availHeight);
//     var width = 540;
//     var height = parseInt(_this.height() * _this.width()/width);
//     var left = (availWidth-width)/2-10;
//     var top = (availHeight-height)/2-10;
//     var html = `
//         <div class="mq-shade"></div>
//         <div class="mq" style="width: ${width}px; height: ${height}px; top: ${top}px; left: ${left}px; ">
//             <div class="mq-photos">
//                 <img src="${_this.attr("src")}" style="width: ${width}px; height: ${height}px;" />
//             </div>
//         </div>
//     `;
//     $("body").append(html);
// })
//
// $(document).on("click", ".mq-shade", function() {
//     $(".mq-shade").remove();
//     $(".mq").remove();
// })
//
// $(document).on("mousewheel DOMMouseScroll", ".mq", function (e) {
//     var _this = $(this);
//     var availWidth = Math.min(document.body.clientWidth, window.screen.availWidth);
//     var availHeight = Math.min(document.body.clientHeight, window.screen.availHeight);
//     var width = _this.width() + 20 * (e.originalEvent.wheelDelta/Math.abs(e.originalEvent.wheelDelta));
//     var height = parseInt(_this.height() * width/_this.width());
//     var left = (availWidth-width)/2-10;
//     var top = (availHeight-height)/2-10;
//     _this.css("width", width)
//         .css("height", height)
//         .css("top", top)
//         .css("left", left);
//     _this.find("img").css("width", width)
//         .css("height", height)
//     e.stopPropagation();
// });
//
// $(document).on("drag", ".mq", function (e) {
//     var left = e.originalEvent.clientX;
//     var top = e.originalEvent.clientY;
//     if(left<=5 || top<=5) return;
//
//     $(this).css("top", top).css("left", left);
// })
