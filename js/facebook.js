chrome.storage.sync.get("enabled", function(obj) {
    if(obj["enabled"] === "true") {
        if (document.querySelector("div.UFIList") !== null) {
            document.querySelector("div.UFIList").style.display = "none";
        }
    }
});
