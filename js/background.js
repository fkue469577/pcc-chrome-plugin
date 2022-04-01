window._chrome = chrome;

chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
        // if(tabs[0].url.indexOf("naotu.baidu.com/file")>-1) {
        //     // chrome.tabs.executeScript(tabs[0].id, {file: "/js/import-export.js"});
        //     // chrome.tabs.insertCSS(tabs[0].id, {file: "/css/import-export.css"});
        // }
    });
});

// 添加导入导出按钮
function addInputExportButtom() {
    chrome.tabs.getCurrent(function(tab) {
    });
}
