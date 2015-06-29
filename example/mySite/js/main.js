(function() {
    "use strict";
    if(window.location.href.indexOf("index") > -1) {
        document.getElementById("middleSpan").innerHTML = "<h3>This text is passed from main.js. If you click the links, you can view some images.</h3>";
    } else if(window.location.href.indexOf("genie") > -1) {
        var genie = document.getElementById("genie");
        var img = document.createElement("img");
        var cap = document.createElement("figcaption");
        cap.innerHTML = "The Genie - served from main.js";
        img.src = "img/genie.jpg";
        genie.appendChild(img);
        genie.appendChild(cap);
    }
})();
