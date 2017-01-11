
export function load(key) {
    const MAP_URL = `//webapi.amap.com/maps?v=1.3&key=${key}&callback=amapinit`;

    const loadAMapPromise = window.loadAMapPromise;
    if (loadAMapPromise) {
        return loadAMapPromise.then(displayMap);
    }

    //eslint-disable-next-line
    return window.loadAMapPromise = new Promise((resolve, reject) => {
        window.amapinit = resolve;
        appendScriptTag(MAP_URL);
    }).then(displayMap);
}

function appendScriptTag(url) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = function() {

        Array.prototype
            .slice
            .call(document.querySelectorAll('ng-amap .amap-offline'))
            .forEach(function(node) {
                node.style.display = 'block';
            });
        document.body.removeChild(script);

        setTimeout(() => {
            appendScriptTag(url);
        }, 30000);
    };
    document.body.appendChild(script);
}

function displayMap() {
    return Array.prototype
        .slice
        .call(document.querySelectorAll('ng-amap'))
        .forEach(function(node) {
            node.querySelector('.amap-offline') && node.removeChild(node.querySelector('.amap-offline'));
            node.querySelector('.amap-instance').style.display = 'block';
        });
}
