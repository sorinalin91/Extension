function getword(info,tab) {
    chrome.tabs.create({ 
        url: "http://www.ebay.com/sch/i.html?_nkw=" + encodeURIComponent(info.selectionText) + "&LH_Complete=1&rt=nc",
    })
}

function getwordgoogle(info,tab){
	chrome.tabs.create({ 
        url: "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&source=pshome-c-1-1&sa=X&ei=i7IZVY3rMI72O-OQgMAI&ved=0CB8Q7j8#tbm=shop&q=" + encodeURIComponent(info.selectionText) ,
    })
}

function getWordShopping(info,tab){
    chrome.tabs.create({ 
        url: "http://www.shopping.com/product/products?CLT=SCH&KW=" + encodeURIComponent(info.selectionText) ,
    })
}

function getWordEbay(info,tab){
    chrome.tabs.create({ 
        url: "http://www.ebay.com/sch/i.html?_nkw=" + encodeURIComponent(info.selectionText) ,
    })
}

function getWordKeepa(info,tab){
    chrome.tabs.create({
        url: "https://keepa.com/#!search/1-" + encodeURIComponent(info.selectionText) ,
    })
}

function getWordCamel(info,tab){
    chrome.tabs.create({
        url: "http://camelcamelcamel.com/search?sq=" + encodeURIComponent(info.selectionText) ,
    })
}
function getAllWords(info,tab){
    chrome.tabs.create({
        url: "http://camelcamelcamel.com/search?sq=" + encodeURIComponent(info.selectionText) ,
        
    })
    chrome.tabs.create({
    url: "https://keepa.com/#!search/1-" + encodeURIComponent(info.selectionText) ,

    })

    chrome.tabs.create({
        url: "http://www.ebay.com/sch/i.html?_nkw=" + encodeURIComponent(info.selectionText) ,
    })


    chrome.tabs.create({
        url: "http://www.shopping.com/product/products?CLT=SCH&KW=" + encodeURIComponent(info.selectionText) ,

    })

    chrome.tabs.create({
        url: "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&source=pshome-c-1-1&sa=X&ei=i7IZVY3rMI72O-OQgMAI&ved=0CB8Q7j8#tbm=shop&q=" + encodeURIComponent(info.selectionText) ,

    })

    chrome.tabs.create({
        url: "http://www.ebay.com/sch/i.html?_nkw=" + encodeURIComponent(info.selectionText) + "&LH_Complete=1&rt=nc",

    })
}

chrome.contextMenus.create({

    title: "Completed Ebay listings: %s", 
    contexts:["selection"], 
    onclick: getword,

});

chrome.contextMenus.create({

    title: "Ebay: %s", 
    contexts:["selection"], 
    onclick: getWordEbay,

});
chrome.contextMenus.create({

    title: "Google listings: %s", 
    contexts:["selection"], 
    onclick: getwordgoogle,

});

chrome.contextMenus.create({

    title: "Shopping: %s", 
    contexts:["selection"], 
    onclick: getWordShopping,

});
chrome.contextMenus.create({

    title: "Keepa: %s", 
    contexts:["selection"], 
    onclick: getWordKeepa,

});
chrome.contextMenus.create({

    title: "Camel: %s", 
    contexts:["selection"], 
    onclick: getWordCamel,

});
chrome.contextMenus.create({

    title: "Open All: %s", 
    contexts:["selection"], 
    onclick: getAllWords,

});

