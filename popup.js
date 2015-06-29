var ebay = 'http://www.ebay.com/sch/i.html?_nkw=';
var google = 'https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&source=pshome-c-1-1&sa=X&ei=i7IZVY3rMI72O-OQgMAI&ved=0CB8Q7j8#tbm=shop&q=';
var ebay_full = 'http://www.ebay.com/sch/i.html?_nkw=';
var shopping = 'http://www.shopping.com/product/products?CLT=SCH&KW=';
var keepa = "https://keepa.com/#!search/1-";
var camel = "http://camelcamelcamel.com/search?sq=";


var funcToInject = function() {
    var range = window.getSelection().getRangeAt(0);
    var selectedText = range.cloneContents().textContent;
    return selectedText;
};

/* This line converts the above function to string
 * (and makes sure it will be called instantly) */
var jsCodeStr = ';(' + funcToInject + ')();';

window.addEventListener('DOMContentLoaded', function() {

    /* Find our input elements from `popup.html` */
    var inp = document.querySelector('input[type="text"]#inp');
    var btn = document.querySelector('input[type="button"]#btn');

    /* Open a new tab with the search results */
    btn.addEventListener('click', function() {
        var query = encodeURIComponent(inp.value);
        chrome.tabs.create({ url: ebay + query +'&LH_Complete=1&rt=nc'});
    });

    /* Inject the code into all frames of the active tab */
    chrome.tabs.executeScript({
        code: jsCodeStr,
        allFrames: true
    }, function(selectedTextPerFrame) {

        if (chrome.runtime.lastError) {
            /* Report any error */
            alert('ERROR:\n' + chrome.runtime.lastError.message);
        } else if ((selectedTextPerFrame.length > 0)
                && (typeof(selectedTextPerFrame[0]) === 'string')) {
            /* The results are as expected, 
             * populate the "search-query" input field */
            inp.value = selectedTextPerFrame[0].trim();
            inp.value = inp.value.replace(/\s{2,}/g, ' ');
        }
    });
});
window.addEventListener('DOMContentLoaded', function() {

    /* Find our input elements from `popup.html` */
    var inp = document.querySelector('input[type="text"]#inp');
    var btng = document.querySelector('input[type="button"]#btng');

    /* Open a new tab with the search results */
    btng.addEventListener('click', function() {
        var query = encodeURIComponent(inp.value);
        chrome.tabs.create({ url: google + query });
    });

    /* Inject the code into all frames of the active tab */
    chrome.tabs.executeScript({
        code: jsCodeStr,
        allFrames: true
    }, function(selectedTextPerFrame) {

        if (chrome.runtime.lastError) {
            /* Report any error */
            alert('ERROR:\n' + chrome.runtime.lastError.message);
        } else if ((selectedTextPerFrame.length > 0)
                && (typeof(selectedTextPerFrame[0]) === 'string')) {
            /* The results are as expected, 
             * populate the "search-query" input field */
            inp.value = selectedTextPerFrame[0].trim();
            inp.value = inp.value.replace(/\s{2,}/g, ' ');
        }
    });
});
window.addEventListener('DOMContentLoaded', function() {

    /* Find our input elements from `popup.html` */
    var inp = document.querySelector('input[type="text"]#inp');
    var btn3 = document.querySelector('input[type="button"]#btn3');

    /* Open a new tab with the search results */
    btn3.addEventListener('click', function() {
        var query = encodeURIComponent(inp.value);
        chrome.tabs.create({ url: shopping + query });
    });

    /* Inject the code into all frames of the active tab */
    chrome.tabs.executeScript({
        code: jsCodeStr,
        allFrames: true
    }, function(selectedTextPerFrame) {

        if (chrome.runtime.lastError) {
            /* Report any error */
            alert('ERROR:\n' + chrome.runtime.lastError.message);
        } else if ((selectedTextPerFrame.length > 0)
                && (typeof(selectedTextPerFrame[0]) === 'string')) {
            /* The results are as expected, 
             * populate the "search-query" input field */
            inp.value = selectedTextPerFrame[0].trim();
            inp.value = inp.value.replace(/\s{2,}/g, ' ');
        }
    });
});
window.addEventListener('DOMContentLoaded', function() {

    /* Find our input elements from `popup.html` */
    var inp = document.querySelector('input[type="text"]#inp');
    var btn4 = document.querySelector('input[type="button"]#btn4');

    /* Open a new tab with the search results */
    btn4.addEventListener('click', function() {
        var query = encodeURIComponent(inp.value);
        chrome.tabs.create({ url: ebay_full + query });
    });

    /* Inject the code into all frames of the active tab */
    chrome.tabs.executeScript({
        code: jsCodeStr,
        allFrames: true
    }, function(selectedTextPerFrame) {

        if (chrome.runtime.lastError) {
            /* Report any error */
            alert('ERROR:\n' + chrome.runtime.lastError.message);
        } else if ((selectedTextPerFrame.length > 0)
                && (typeof(selectedTextPerFrame[0]) === 'string')) {
            /* The results are as expected, 
             * populate the "search-query" input field */
            inp.value = selectedTextPerFrame[0].trim();
            inp.value = inp.value.replace(/\s{2,}/g, ' ');
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {

    /* Find our input elements from `popup.html` */
    var inp = document.querySelector('input[type="text"]#inp');
    var btn5 = document.querySelector('input[type="button"]#btn5');

    /* Open a new tab with the search results */
    btn5.addEventListener('click', function() {
        var query = encodeURIComponent(inp.value);
        chrome.tabs.create({ url: camel + query });
    });

    /* Inject the code into all frames of the active tab */
    chrome.tabs.executeScript({
        code: jsCodeStr,
        allFrames: true
    }, function(selectedTextPerFrame) {

        if (chrome.runtime.lastError) {
            /* Report any error */
            alert('ERROR:\n' + chrome.runtime.lastError.message);
        } else if ((selectedTextPerFrame.length > 0)
                && (typeof(selectedTextPerFrame[0]) === 'string')) {
            /* The results are as expected, 
             * populate the "search-query" input field */
            inp.value = selectedTextPerFrame[0].trim();
            inp.value = inp.value.replace(/\s{2,}/g, ' ');
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {

    /* Find our input elements from `popup.html` */
    var inp = document.querySelector('input[type="text"]#inp');
    var btn6 = document.querySelector('input[type="button"]#btn6');

    /* Open a new tab with the search results */
    btn6.addEventListener('click', function() {
        var query = encodeURIComponent(inp.value);
        chrome.tabs.create({ url: keepa + query });
    });

    /* Inject the code into all frames of the active tab */
    chrome.tabs.executeScript({
        code: jsCodeStr,
        allFrames: true
    }, function(selectedTextPerFrame) {

        if (chrome.runtime.lastError) {
            /* Report any error */
            alert('ERROR:\n' + chrome.runtime.lastError.message);
        } else if ((selectedTextPerFrame.length > 0)
                && (typeof(selectedTextPerFrame[0]) === 'string')) {
            /* The results are as expected, 
             * populate the "search-query" input field */
            inp.value = selectedTextPerFrame[0].trim();
            inp.value = inp.value.replace(/\s{2,}/g, ' ');
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {

    /* Find our input elements from `popup.html` */
    var inp = document.querySelector('input[type="text"]#inp');
    var btn7 = document.querySelector('input[type="button"]#btn7');

    /* Open a new tab with the search results */
    btn7.addEventListener('click', function() {
        var query = encodeURIComponent(inp.value);
        chrome.tabs.create({ url: keepa + query });
        chrome.tabs.create({ url: camel + query });
        chrome.tabs.create({ url: ebay_full + query });
        chrome.tabs.create({ url: shopping + query });
        chrome.tabs.create({ url: ebay + query +'&LH_Complete=1&rt=nc'});
        chrome.tabs.create({ url: google + query });
    });

    /* Inject the code into all frames of the active tab */
    chrome.tabs.executeScript({
        code: jsCodeStr,
        allFrames: true
    }, function(selectedTextPerFrame) {

        if (chrome.runtime.lastError) {
            /* Report any error */
            alert('ERROR:\n' + chrome.runtime.lastError.message);
        } else if ((selectedTextPerFrame.length > 0)
                && (typeof(selectedTextPerFrame[0]) === 'string')) {
            /* The results are as expected, 
             * populate the "search-query" input field */
            inp.value = selectedTextPerFrame[0].trim();
            inp.value = inp.value.replace(/\s{2,}/g, ' ');
        }
    });
});