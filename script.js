const forYou = 'Proponowana dla Ciebie'
const events = 'Proponowane wydarzenia'

const observer = new MutationObserver(function (mutations, mutationInstance) {

        const forYouSection = document.evaluate(`//span[text()='${forYou}']/../../../../../..`, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue
        if (forYouSection) {
            forYouSection.remove()
        }

        const eventsSection = document.evaluate(`//span[text()='${events}']/../../../../../..`, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue
        if (eventsSection) {
            eventsSection.remove()
        }

        const sponsored = document.evaluate(`//a[contains(@href,'/ads/about/?')]/../../../../../../../../../..`, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue
        if (sponsored) {
            sponsored.remove()
        }
})    
    
observer.observe(document, {
    childList: true,
    subtree:   true
})
