var rso = document.getElementById("rso")
if(rso) {
    for(var item of document.getElementById("rso").children) {
        for(var a of item.getElementsByTagName("a")) {
            a.setAttribute("target", "_blank");
        }
    }
}
