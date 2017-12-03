// Adds the About toggle info functionality
var aboutButton = document.getElementById("about-button");
var aboutInfo = document.getElementById("about-info");

aboutInfo.style.display = "none";

aboutButton.addEventListener("click", function(){
    if(aboutInfo.style.display === "none") {
        aboutInfo.style.display = "block";
    } else {
        aboutInfo.style.display = "none";
    }
})

// Make links work:
document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});
