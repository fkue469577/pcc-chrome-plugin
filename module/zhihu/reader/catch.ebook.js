chrome.runtime.sendMessage({greeting: '你好，我是content-script呀，我主动发消息给后台！'}, function(response) {
    console.log("---------- catch.ebook.js start ----------");
    console.log('收到来自后台的回复：');
    console.log(response);
    console.log("---------- catch.ebook.js end ----------");
});
