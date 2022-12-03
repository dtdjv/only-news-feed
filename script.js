const observer = new MutationObserver(function (mutations, mutationInstance) {
        const someDiv = document.evaluate("//span[text()='Proponowana dla Ciebie']/../../../../../..", document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
        if (someDiv) {
            someDiv.remove()
        }
})    
    
observer.observe(document, {
    childList: true,
    subtree:   true
})
