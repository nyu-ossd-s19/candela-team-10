function apply(tab) {

    var box = document.createElement("div");
    
    box.setAttribute("style", 
    "opacity: 0.5; background-color: #FFC58F; z-index: 100; position: fixed; width: 100vw; height: 150vh; margin-top: -150vh"); 
    document.body.appendChild(box);
    console.log("appended");
}

browser.browserAction.onClicked.addListener(apply);
