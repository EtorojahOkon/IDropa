document.getElementById("get-color").onclick = function() {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	    chrome.tabs.sendMessage(tabs[0].id, { msg: "pickdata", data: 'ok' }, (response) => {
	        if (response) {
	           if (response.data = "ok") {
	           		document.getElementById("get-color").className = "ui green button";
	           		document.getElementById("loading").style.display = "block";
	           }
	        }
	    });
	});
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request) {
        if (request.msg == "usedata") {
        	document.getElementById("preview-bg").style.backgroundColor = request.data[0];
        	document.getElementById("bg").innerHTML = request.data[0];
        	document.getElementById("preview-cl").style.backgroundColor = request.data[1];
        	document.getElementById("cl").innerHTML = request.data[1];
        	document.getElementById("classname").innerHTML = request.data[2];
        }
    }
});