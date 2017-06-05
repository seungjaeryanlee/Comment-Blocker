chrome.storage.sync.get("enabled", function(obj) {
    if(obj["enabled"] === "true") {
        if (document.querySelector("div#watch-discussion") !== null) {
            document.querySelector("div#watch-discussion").style.display = "none";
        }
    }
});
