chrome.storage.sync.get("enabled", function(obj) {
    if(obj["enabled"] === "true") {
        document.querySelector("div#focusComment").style.display = "none";
        document.querySelector("div#foldBtn").style.display = "none";
    }
});
