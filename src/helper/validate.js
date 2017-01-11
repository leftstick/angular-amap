
export function nullCheck(val, msg) {
    if (isNull(val)) {
        throw new Error(msg);
    }
}

export function numberCheck(val, msg) {
    if (isNumber(val)) {
        throw new Error(msg);
    }
}

export function isNull(obj) {
    return obj === null || obj === undefined;
}

export function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}

export function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
}

export function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

const CONTROL_TYPS = ['maptype', 'overview', 'scale', 'toolbar'];
export function controlTypeCheck(type) {
    if (CONTROL_TYPS.indexOf((type || '').toLowerCase()) < 0) {
        throw new Error('control type should be one of: [\'maptype\', \'overview\', \'scale\', \'toolbar\']');
    }
}
