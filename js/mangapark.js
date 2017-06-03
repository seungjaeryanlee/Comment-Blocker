chrome.storage.sync.get("enabled", function(obj) {
    if(obj["enabled"] === "true") {
        document.querySelector("section#conversation").style.display = "none";
    }
});
