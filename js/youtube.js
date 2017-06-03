chrome.storage.sync.get("enabled", function(obj) {
    if(obj["enabled"] === "true") {
        document.querySelector("div#watch-discussion").style.display = "none";
    }
});
