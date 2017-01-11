import {isNull, isString, isArray, isNumber} from './validate';

export function lngLat(obj, field) {
    const msg = `passed ${field} is not correct`;
    if (isArray(obj)) {
        if (obj.length !== 2) {
            throw new Error(msg);
        }
        return new AMap.LngLat(obj[0], obj[1]);
    }

    if (!isNumber(obj.lng) && !isNumber(obj.lat)) {
        throw new Error(msg);
    }
    return new AMap.LngLat(obj.lng, obj.lat);
}

export function view2D(obj, field) {
    const msg = `passed ${field} is not correct`;

    const opts = JSON.parse(JSON.stringify(obj));
    if (isNull(opts.center)) {
        throw new Error(`${msg}, center property is missed`);
    }
    opts.center = lngLat(obj.center, field + '.center');
    return new AMap.View2D(opts);
}

export function pixel(obj, field) {
    const msg = `passed ${field} is not correct`;

    if (!isNumber(obj.x)) {
        throw new Error(`${msg}, x property is not a number`);
    }
    if (!isNumber(obj.y)) {
        throw new Error(`${msg}, y property is not a number`);
    }
    return new AMap.Pixel(obj.x, obj.y);
}

export function size(obj, field) {
    const msg = `passed ${field} is not correct`;

    if (!isNumber(obj.width)) {
        throw new Error(`${msg}, width property is not a number`);
    }
    if (!isNumber(obj.height)) {
        throw new Error(`${msg}, height property is not a number`);
    }
    return new AMap.Size(obj.width, obj.height);
}

export function icon(obj, field) {
    const msg = `passed ${field} is not correct`;
    if (isString(obj)) {
        return AMap.Icon({
            image: obj
        });
    }
    const opts = JSON.parse(JSON.stringify(obj));
    if (opts.size) {
        opts.size = size(opts.size, field + '.size');
    }
    if (opts.imageOffset) {
        opts.imageOffset = pixel(opts.imageOffset, field + '.imageOffset');
    }
    if (opts.imageSize) {
        opts.imageSize = size(opts.imageSize, field + '.imageSize');
    }
    return new AMap.Icon(opts);
}

export function marker(obj, field) {
    const opts = JSON.parse(JSON.stringify(obj));
    if (opts.position) {
        opts.position = lngLat(opts.position, field + '.position');
    }
    if (opts.offset) {
        opts.offset = pixel(opts.offset, field + '.offset');
    }
    if (opts.icon) {
        opts.icon = icon(opts.icon, field + '.icon');
    }
    if (opts.shadow) {
        opts.shadow = icon(opts.shadow, field + '.shadow');
    }
    return new AMap.Marker(opts);
}
