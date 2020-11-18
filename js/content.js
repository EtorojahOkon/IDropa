chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request) {
        if (request.msg == "pickdata") {
            sendResponse({ sender: "content.js", data: "ok" });
            var elems = document.querySelectorAll("*");
            for (let i = 0; i < elems.length; i++) {
            	elems[i].addEventListener('mouseover', explode);
            	elems[i].addEventListener('mousemove', explode);
            	elems[i].addEventListener('mouseenter', explode);
            }
        }
    }
});
function explode() {
	this.style.cursor = "pointer";
    var bg = window.getComputedStyle(this).getPropertyValue('background-color');
    var cl = window.getComputedStyle(this).getPropertyValue('color');
    var classname = '.'+this.className.split(" ").join(", .");
    chrome.runtime.sendMessage({ msg: "usedata", data: [bg, cl, classname] });
}