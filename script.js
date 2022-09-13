// function handleSomeDiv(someDiv) { 
//     console.log("div was handled");
    
// }

// const observer = new MutationObserver(function (mutations, mutationInstance) {
//     const someDiv = document.evaluate("//span[text()='Proponowana dla Ciebie']/../../../../../../..", document, null, XPathResult.ANY_TYPE, null); someDiv.remove();
//     // const someDiv2 = document.evaluate("//span[text()='Proponowana dla Ciebie']/../../../../../../..", document, null, XPathResult.ANY_TYPE, null);
//     // const someDiv3 = document.evaluate("//span[text()='Proponowana dla Ciebie']/../../../../../../../../../../../../..", document, null, XPathResult.ANY_TYPE, null);
//     // const someDiv4 = document.evaluate("//span[text()='Proponowana dla Ciebie']/../../../../../../../../../../../..", document, null, XPathResult.ANY_TYPE, null);
// //     // const someDiv5 = document.evaluate("//span[text()='Proponowana dla Ciebie']/../../../../../../../../../../../..", document, null, XPathResult.ANY_TYPE, null);
//     if (someDiv) {
//         handleSomeDiv(someDiv);
//         console.log('found and removed')
//         // someDiv.remove()
//         // someDiv2.remove
//         // someDiv3.remove
//         // someDiv4.remove
//     }
// });


// observer.observe(document, {
//     childList: true,
//     subtree:   true
// });

//<a target="_blank" href="https://icons8.com/icon/13716/news-feed">News Feed</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

// const div = document.evaluate("//span[text()='Proponowana dla Ciebie']/../../../../../../..", document, null, XPathResult.ANY_TYPE, null);

// const observer = new MutationObserver(mutationList => {
//     for (let mutation of mutationList) {
//         console.log(mutation);
//     }
// });

// observer.observe(div, {
//     childList: true,
//     attributes: true,
//     subtree: true
// });
 

const observer = new MutationObserver(function (mutations, mutationInstance) {
        const someDiv = document.evaluate("//span[text()='Proponowana dla Ciebie']/../../../../../..", document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
        if (someDiv) {
            someDiv.remove()
        }
    });
    
    
    observer.observe(document, {
        childList: true,
        subtree:   true
    });
