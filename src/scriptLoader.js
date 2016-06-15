
export const loader = function(ak, offlineOpts, callback) {
    var MAP_URL = `http://webapi.amap.com/maps?v=1.3&key=${ak}&callback=amapinit`;

    var aMap = window.aMap;
    if (aMap && aMap.status === 'loading') {
        return aMap.callbacks.push(callback);
    }

    if (aMap && aMap.status === 'loaded') {
        return callback();
    }

    window.aMap = {status: 'loading', callbacks: []};
    window.amapinit = function() {
        window.aMap.status = 'loaded';
        callback();
        window.aMap.callbacks.forEach(cb => cb());
        window.aMap.callbacks = [];
    };

    var createTag = function() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = MAP_URL;
        script.onerror = function() {

            Array.prototype
                .slice
                .call(document.querySelectorAll('ng-amap div'))
                .forEach(function(node) {
                    node.style.opacity = 1;
                });
            document.body.removeChild(script);
            setTimeout(createTag, offlineOpts.retryInterval);
        };
        document.body.appendChild(script);
    };

    createTag();
};
