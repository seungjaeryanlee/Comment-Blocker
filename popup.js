function issues() {
  var URL = "https://github.com/sjlee235/Comment-Blocker/issues";
  chrome.tabs.create({ url: URL });
}

window.onload=function(){
  document.getElementById("issueButton").addEventListener("click", issues);
}