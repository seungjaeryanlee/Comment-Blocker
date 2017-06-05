chrome.storage.sync.get("enabled", function(obj) {
    if(obj["enabled"] === "true") {
        if (document.querySelector("section#conversation") !== null) {
            document.querySelector("section#conversation").style.display = "none";
        }
    }
});
