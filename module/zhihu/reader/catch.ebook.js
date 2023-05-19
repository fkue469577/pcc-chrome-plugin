chrome.runtime.sendMessage({greeting: '你好，我是content-script呀，我主动发消息给后台！'}, function(response) {
    console.log("---------- catch.ebook.js start ----------");
    console.log('收到来自后台的回复：');
    console.log(response);
    console.log("---------- catch.ebook.js end ----------");
});



var interval = setTimeout(()=>{

    var titleArr = document.getElementsByClassName("secondTitle-1")
    if(!titleArr) titleArr = document.getElementsByClassName("firstTitle-1")
    var title = titleArr.outerText;
    var content = document.getElementsByClassName("content")[0].outerHTML;
    var data = {
        book: document.getElementsByClassName("reader-book-info")[0].getElementsByTagName("section")[0].getElementsByTagName("h3")[0].innerText,
        chapter: {
            parentName: document.getElementsByClassName("is-current")[0].className.indexOf("level-1")>-1? "": getParentName(),
            name: document.getElementsByClassName("is-current")[0].getElementsByTagName("a")[0].innerText,
            context: content
        },
        href: window.location.href
    }
    chrome.runtime.sendMessage(data, ()=>{})

    var nextA = document.getElementById("button-next-chapter").getElementsByTagName("a")[0];
    if(nextA.className.indexOf("disabled")==-1) {
        nextA.click();
    } else {
        clearInterval(interval);
    }
}, 5000);


function getParentName() {
    var eles = document.getElementsByClassName("is-current");
    if(eles.length==0) {
        return null;
    }
    var ele = eles[0];
    while(true){
        var prev = ele.previousElementSibling;
        if(!prev) {
            return null;
        }

        if(prev.className.indexOf("level-1")>-1) {
            return prev.getElementsByTagName("a")[0].innerText;
        }

        ele = prev
    }
}
