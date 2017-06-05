chrome.storage.sync.get("enabled", function(obj) {
    if(obj["enabled"] === "true") {
        // sports.naver.com
        if (document.querySelector("div#focusComment") !== null) {
            document.querySelector("div#focusComment").style.display = "none";  
        }
        if (document.querySelector("div#foldBtn") !== null) {
            document.querySelector("div#foldBtn").style.display = "none";
        }

        // news.naver.com
        // comic.naver.com
        // blog.naver.com
        // cafe.naver.com
        // kin.naver.com
    }
});
