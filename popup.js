function issues() {
    var URL = "https://github.com/sjlee235/Comment-Blocker/issues";
    chrome.tabs.create({ url: URL });
}

function toggle() {
    chrome.storage.sync.get("enabled", function(obj) {
        if(obj["enabled"] === "true") {
            chrome.storage.sync.set({"enabled": "false"});
            document.getElementById("toggleButton").innerHTML = "Enable";
        }
        else {
            chrome.storage.sync.set({"enabled": "true"});
            document.getElementById("toggleButton").innerHTML = "Disable";
        }
    })
}

window.onload=function(){
    document.getElementById("issueButton").addEventListener("click", issues);
    document.getElementById("toggleButton").addEventListener("click", toggle);
    chrome.storage.sync.get("enabled", function(obj) {
        if(obj["enabled"] === "true") {
            document.getElementById("toggleButton").innerHTML = "Disable";
        }
        else {
            document.getElementById("toggleButton").innerHTML = "Enable";
        }
    })
}