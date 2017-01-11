import {isNull, isArray, isNumber, isString} from './validate';
import {lngLat, view2D, tileLayer} from './transformer';

export function create(element, mapOptions) {
    return new AMap.Map(element, transformOptions(mapOptions));
}

export function refresh(map, mapOptions) {
    const opts = transformOptions(mapOptions);

    map.setCenter(opts.center);

    isArray(opts.layers) && map.setLayers(opts.layers);
    isNumber(opts.zoom) && map.setZoom(opts.zoom);
    isNumber(opts.labelzIndex) && map.setlabelzIndex(opts.labelzIndex);
    isString(opts.lang) && map.setLang(opts.lang);
    isString(opts.cursor) && map.setDefaultCursor(opts.cursor);
    !isNull(opts.defaultLayer) && map.setDefaultLayer(opts.defaultLayer);
    !isNull(opts.city) && map.setCity(opts.city);
}


function transformOptions(options) {
    const opts = JSON.parse(JSON.stringify(options));
    opts.center = lngLat(opts.center, 'mapOptions.center');
    if (!isNull(opts.view)) {
        opts.view = view2D(opts.view, 'mapOptions.view');
    }
    if (!isNull(opts.defaultLayer)) {
        opts.defaultLayer = tileLayer(opts.defaultLayer, 'mapOptions.defaultLayer');
    }
    return opts;
}
