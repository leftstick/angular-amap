
export const createInstance = function(opts, element) {
    // create map instance
    var map = new AMap.Map(element.id, {
        scrollWheel: opts.enableScrollWheelZoom,
        showIndoorMap: opts.showIndoorMap
    });

    // init map, set central location and zoom level
    map.setZoomAndCenter(opts.zoom, new AMap.LngLat(opts.center.longitude, opts.center.latitude));
    if (opts.toolBar) {
        // add navigation control
        map.plugin(['AMap.ToolBar'], function() {
            map.addControl(new AMap.ToolBar());
        });
    }
    if (opts.scaleCtrl) {
        // add scale control
        map.plugin(['AMap.Scale'], function() {
            map.addControl(new AMap.Scale());
        });
    }
    if (opts.overviewCtrl) {
        //add overview map control
        map.plugin(['AMap.OverView'], function() {
            map.addControl(new AMap.OverView());
        });
    }
    return map;
};

export const createMarker = function(marker, pt) {
    return new AMap.Marker({icon: marker.icon, position: pt});
};

export const redrawMarkers = function(map, previousMarkers, opts) {

    previousMarkers.forEach(function({marker, listener}) {
        AMap.event.removeListener(listener);
        marker.setMap(null);
    });

    previousMarkers.length = 0;

    if (!opts.markers) {
        return;
    }

    opts.markers.forEach(function(marker) {

        var marker2 = createMarker(marker, new AMap.LngLat(marker.longitude, marker.latitude));

        // add marker to the map
        marker2.setMap(map);
        let previousMarker = {marker: marker2, listener: null};
        previousMarkers.push(previousMarker);

        if (!marker.title && !marker.content) {
            return;
        }
        let msg = `<p>${marker.title}</p><p>${marker.content}</p>`;
        let infoWindow2 = new AMap.InfoWindow({
            isCustom: false,
            autoMove: true,
            content: msg
        });
        if (marker.width && marker.height) {
            infoWindow2.setSize(new AMap.Size(marker.width, marker.height));
        }
        previousMarker.listener = AMap.event.addListener(marker2, 'click', function(e) {
            infoWindow2.open(map, marker2.getPosition());
        });
    });
};
