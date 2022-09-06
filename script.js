// function handleSomeDiv(someDiv) { 
//     console.log("div was handled");
    
// }

const observer = new MutationObserver(function (mutations, mutationInstance) {
    const someDiv = document.evaluate("//span[text()='Proponowana dla Ciebie']/../../../../../..", document, null, XPathResult.ANY_TYPE, null);
    if (someDiv) {
        // handleSomeDiv(someDiv);
        someDiv.remove
    }
});


observer.observe(document, {
    childList: true,
    subtree:   true
});

//<a target="_blank" href="https://icons8.com/icon/13716/news-feed">News Feed</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
