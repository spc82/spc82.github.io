var ieBrowser = detectIE();
if (ieBrowser === true) {
    var language = navigator.language || navigator.browserLanguage;
    if (language){language=language.substring(0,2)}
    switch (language) {
        case "es": location.href = '../es/actualiza-navegador.html'; break;
        case "en": location.href = '../en/update-browser.html'; break;
        default: location.href = '../es/actualiza-navegador.html';
    }
}

function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        return true;
    }
    return false;
}

