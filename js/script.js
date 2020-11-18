chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.msg == "usedata") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.runtime.sendMessage({ msg: "usedata", data: request.data });
        });
    }
    return true;
});