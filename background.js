// Detect Install / Update
chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({"enabled": "true"});
});
