
var proxied = window.XMLHttpRequest.prototype.open;
window.XMLHttpRequest.prototype.open = function() {
    var args = arguments
    var url = args[1];
    if (url.indexOf("192.168.1.213:9900") > -1) {
        args[1] = url.replaceAll("192\.168\.1\.213:9900", "192.168.1.33:9900");
    }
    if (url.indexOf("https://capi.xmjztm.com") > -1) {
        args[1] = url.replaceAll("https://capi\.xmjztm\.com", "http://192.168.1.33:9192");
    }
    return proxied.apply(this, [].slice.call(args));
};
