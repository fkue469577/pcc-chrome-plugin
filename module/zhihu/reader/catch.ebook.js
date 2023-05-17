chrome.runtime.sendMessage({greeting: '你好，我是content-script呀，我主动发消息给后台！'}, function(response) {
    console.log("---------- catch.ebook.js start ----------");
    console.log('收到来自后台的回复：');
    console.log(response);
    console.log("---------- catch.ebook.js end ----------");
});


setTimeout(()=>{
    var titleArr = document.getElementsByClassName("secondTitle-1")
    if(!titleArr) titleArr = document.getElementsByClassName("firstTitle-1")
    var title = titleArr.outerText;
    var content = document.getElementsByClassName("content")[0].outerHTML;
    chrome.runtime.sendMessage({title: title, content: content}, ()=>{})

    var nextA = document.getElementById("button-next-chapter").getElementsByTagName("a")[0];
    if(nextA.className.indexOf("disabled")==-1) {
        nextA.click();
    }
}, 5000);