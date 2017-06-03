chrome.storage.sync.get("enabled", function(obj) {
    if(obj["enabled"] === "true") {
        document.querySelector("div.UFIList").style.display = "none";
    }
});
