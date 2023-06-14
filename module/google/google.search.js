var rcnt = document.getElementById("rcnt")
setInterval(()=>{
    openBlank();
}, 5000)
openBlank();

function openBlank() {
    if(rcnt) {
        var yuRUbf = rcnt.getElementsByClassName("yuRUbf")
        if(yuRUbf) {
            for(var item of yuRUbf) {
                for(var a of item.getElementsByTagName("a")) {
                    a.setAttribute("target", "_blank");
                }
            }
        }
    }
}
