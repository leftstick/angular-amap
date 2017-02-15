(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = nullCheck;
/* unused harmony export numberCheck */
/* harmony export (immutable) */ __webpack_exports__["a"] = isNull;
/* harmony export (immutable) */ __webpack_exports__["d"] = isString;
/* harmony export (immutable) */ __webpack_exports__["c"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["b"] = isArray;
/* unused harmony export controlTypeCheck */

function nullCheck(val, msg) {
    if (isNull(val)) {
        throw new Error(msg);
    }
}

function numberCheck(val, msg) {
    if (isNumber(val)) {
        throw new Error(msg);
    }
}

function isNull(obj) {
    return obj === null || obj === undefined;
}

function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}

function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

var CONTROL_TYPS = ['maptype', 'overview', 'scale', 'toolbar'];
function controlTypeCheck(type) {
    if (CONTROL_TYPS.indexOf((type || '').toLowerCase()) < 0) {
        throw new Error('control type should be one of: [\'maptype\', \'overview\', \'scale\', \'toolbar\']');
    }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["c"] = lngLat;
/* harmony export (immutable) */ __webpack_exports__["d"] = view2D;
/* harmony export (immutable) */ __webpack_exports__["a"] = pixel;
/* unused harmony export size */
/* unused harmony export icon */
/* harmony export (immutable) */ __webpack_exports__["b"] = marker;
/* harmony export (immutable) */ __webpack_exports__["e"] = tileLayer;


function lngLat(obj, field) {
    var msg = 'passed ' + field + ' is not correct';
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["b" /* isArray */])(obj)) {
        if (obj.length !== 2) {
            throw new Error(msg);
        }
        return new AMap.LngLat(obj[0], obj[1]);
    }

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNumber */])(obj.lng) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNumber */])(obj.lat)) {
        throw new Error(msg);
    }
    return new AMap.LngLat(obj.lng, obj.lat);
}

function view2D(obj, field) {
    var msg = 'passed ' + field + ' is not correct';

    var opts = JSON.parse(JSON.stringify(obj));
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["a" /* isNull */])(opts.center)) {
        throw new Error(msg + ', center property is missed');
    }
    opts.center = lngLat(obj.center, field + '.center');
    return new AMap.View2D(opts);
}

function pixel(obj, field) {
    var msg = 'passed ' + field + ' is not correct';

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNumber */])(obj.x)) {
        throw new Error(msg + ', x property is not a number');
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNumber */])(obj.y)) {
        throw new Error(msg + ', y property is not a number');
    }
    return new AMap.Pixel(obj.x, obj.y);
}

function size(obj, field) {
    var msg = 'passed ' + field + ' is not correct';

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNumber */])(obj.width)) {
        throw new Error(msg + ', width property is not a number');
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNumber */])(obj.height)) {
        throw new Error(msg + ', height property is not a number');
    }
    return new AMap.Size(obj.width, obj.height);
}

function icon(obj, field) {
    var msg = 'passed ' + field + ' is not correct';
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["d" /* isString */])(obj)) {
        return AMap.Icon({
            image: obj
        });
    }
    var opts = JSON.parse(JSON.stringify(obj));
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

function marker(obj, field) {
    var opts = JSON.parse(JSON.stringify(obj));
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

function tileLayer(obj, field) {
    var opts = JSON.parse(JSON.stringify(obj));
    return new AMap.TileLayer(opts);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_validate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_map__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





/* harmony default export */ __webpack_exports__["a"] = {
    bindings: {
        offlineTxt: '<',
        mapOptions: '<',
        loaded: '&',
        click: '&'
    },
    transclude: true,
    template: '\n        <div ng-style="$ctrl.style.map" class="amap-instance"></div>\n        <div ng-style="$ctrl.style.offline" class="amap-offline">\n            <label ng-style="$ctrl.style.offlineLabel">{{ $ctrl.offlineTxt || \'NO_NETWORK\' }}</label>\n        </div>\n        <div ng-transclude style="display: none"></div>\n    ',
    controller: function () {
        controller.$inject = ['$scope', '$element', '$attrs', 'mapScriptService'];

        /* @ngInject */
        function controller($scope, $element, $attrs, mapScriptService) {
            _classCallCheck(this, controller);

            this.$scope = $scope;
            this.$element = $element;
            this.$attrs = $attrs;
            this.style = __WEBPACK_IMPORTED_MODULE_0__style__;
            this.mapScriptService = mapScriptService;
        }

        _createClass(controller, [{
            key: '$onInit',
            value: function $onInit() {
                var _this = this;

                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helper_validate__["e" /* nullCheck */])(this.mapOptions, 'mapOptions is required for <ng-amap>');
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helper_validate__["e" /* nullCheck */])(this.mapOptions.center, 'mapOptions.center is required for <ng-amap>');

                this.mapReady = this.mapScriptService.load().then(function () {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helper_map__["a" /* create */])(_this.$element.children()[0], _this.mapOptions);
                }).then(function (map) {
                    _this.loaded({
                        map: map
                    });
                    _this.$scope.$apply();
                    //eslint-disable-next-line
                    return _this.map = map;
                }).then(function () {
                    if (!_this.$attrs.click) {
                        return;
                    }
                    var clickListener = _this.clickListener = function (e) {
                        _this.click({
                            e: e
                        });
                    };
                    AMap.event.addListener(_this.map, 'click', clickListener);
                });
            }
        }, {
            key: '$onChanges',
            value: function $onChanges(changes) {
                if (!this.map) {
                    return;
                }
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helper_map__["b" /* refresh */])(this.map, changes.mapOptions.currentValue);
            }
        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                this.map.destroy();
                AMap.event.removeListener(this.map, 'click', this.clickListener);
            }
        }, {
            key: 'getMap',
            value: function getMap() {
                return this.map;
            }
        }]);

        return controller;
    }()
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_validate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_transformer__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/* harmony default export */ __webpack_exports__["a"] = {
    bindings: {
        options: '<',
        loaded: '&',
        click: '&'
    },
    require: {
        mapCtrl: '^ngAmap'
    },
    template: '',
    controller: function () {
        controller.$inject = ['$scope', '$attrs'];

        /* @ngInject */
        function controller($scope, $attrs) {
            _classCallCheck(this, controller);

            this.$scope = $scope;
            this.$attrs = $attrs;
        }

        _createClass(controller, [{
            key: '$onInit',
            value: function $onInit() {
                var _this = this;

                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_validate__["e" /* nullCheck */])(this.options, 'options is required for <marker>');
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_validate__["e" /* nullCheck */])(this.options.position, 'options.position is required for <marker>');

                this.mapCtrl.mapReady.then(function () {
                    var marker = _this.marker = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helper_transformer__["b" /* marker */])(_this.options, 'options');
                    marker.setMap(_this.mapCtrl.getMap());
                    _this.loaded({
                        marker: marker
                    });
                    _this.$scope.$apply();
                    return marker;
                }).then(function (marker) {
                    if (!_this.$attrs.click) {
                        return;
                    }
                    _this.clickHandler = function (e) {
                        _this.click({
                            e: e,
                            marker: marker,
                            map: _this.mapCtrl.getMap()
                        });
                        _this.$scope.$apply();
                    };
                    AMap.event.addListener(marker, 'click', _this.clickHandler);
                });
            }
        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                AMap.event.removeListener(this.marker, 'click', this.clickHandler);
                this.marker.setMap(null);
            }
        }]);

        return controller;
    }()
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_validate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_transformer__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/* harmony default export */ __webpack_exports__["a"] = {
    bindings: {
        name: '@',
        options: '<',
        loaded: '&'
    },
    require: {
        mapCtrl: '^ngAmap'
    },
    template: '',
    controller: function () {
        controller.$inject = ['$scope'];

        /* @ngInject */
        function controller($scope) {
            _classCallCheck(this, controller);

            this.$scope = $scope;
        }

        _createClass(controller, [{
            key: '$onInit',
            value: function $onInit() {
                var _this = this;

                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_validate__["a" /* isNull */])(this.name);

                this.mapCtrl.mapReady.then(function () {
                    return createControl(_this.mapCtrl.getMap(), _this.name, transformOptions(_this.mapCtrl.getMap(), _this.options || {}));
                }).then(function (control) {
                    _this.control = control;
                    _this.loaded({
                        plugin: control
                    });
                    _this.$scope.$apply();
                    _this.mapCtrl.getMap().addControl(control);
                });
            }
        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                this.mapCtrl.getMap().removeControl(this.control);
            }
        }]);

        return controller;
    }()
};

function createControl(map, name, options) {
    return new Promise(function (resolve, reject) {
        return map.plugin(['AMap.' + name], function () {
            resolve(new AMap[name](options));
        });
    });
}

function transformOptions(map, options) {
    var opts = JSON.parse(JSON.stringify(options));
    if (opts.offset) {
        opts.offset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helper_transformer__["a" /* pixel */])(opts.offset, 'options.offset');
    }
    if (opts.locationMarker) {
        opts.locationMarker = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helper_transformer__["b" /* marker */])(opts.locationMarker, 'options.locationMarker');
        opts.locationMarker.setMap(map);
    }
    return opts;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_validate__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function () {
    var ak = null,
        MAP_URL = void 0;

    this.setKey = function (val) {
        ak = val;
        MAP_URL = '//webapi.amap.com/maps?v=1.3&key=' + val + '&callback=amapinit';
    };

    this.$get = ['$rootScope', function ($rootScope) {
        'ngInject';

        return {
            load: function load() {

                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_validate__["e" /* nullCheck */])(ak, 'ak should be set before use. Read: https://leftstick.github.io/angular-amap/#!/quickstart');

                var loadAMapPromise = $rootScope.loadAMapPromise;
                if (loadAMapPromise) {
                    return loadAMapPromise.then(displayMap);
                }

                //eslint-disable-next-line
                return $rootScope.loadAMapPromise = new Promise(function (resolve, reject) {
                    window.amapinit = resolve;
                    appendScriptTag(MAP_URL);
                }).then(displayMap);
            }
        };
    }];
};

function appendScriptTag(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = function () {

        Array.prototype.slice.call(document.querySelectorAll('ng-amap .amap-offline')).forEach(function (node) {
            node.style.display = 'block';
        });
        document.body.removeChild(script);

        setTimeout(function () {
            appendScriptTag(url);
        }, 30000);
    };
    document.body.appendChild(script);
}

function displayMap() {
    return Array.prototype.slice.call(document.querySelectorAll('ng-amap')).forEach(function (node) {
        node.querySelector('.amap-offline') && node.removeChild(node.querySelector('.amap-offline'));
        node.querySelector('.amap-instance').style.display = 'block';
    });
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transformer__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony export (immutable) */ __webpack_exports__["b"] = refresh;



function create(element, mapOptions) {
    return new AMap.Map(element, transformOptions(mapOptions));
}

function refresh(map, mapOptions) {
    var opts = transformOptions(mapOptions);

    map.setCenter(opts.center);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["b" /* isArray */])(opts.layers) && map.setLayers(opts.layers);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNumber */])(opts.zoom) && map.setZoom(opts.zoom);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* isNumber */])(opts.labelzIndex) && map.setlabelzIndex(opts.labelzIndex);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["d" /* isString */])(opts.lang) && map.setLang(opts.lang);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["d" /* isString */])(opts.cursor) && map.setDefaultCursor(opts.cursor);
    !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["a" /* isNull */])(opts.defaultLayer) && map.setDefaultLayer(opts.defaultLayer);
    !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["a" /* isNull */])(opts.city) && map.setCity(opts.city);
}

function transformOptions(options) {
    var opts = JSON.parse(JSON.stringify(options));
    opts.center = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transformer__["c" /* lngLat */])(opts.center, 'mapOptions.center');
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["a" /* isNull */])(opts.view)) {
        opts.view = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transformer__["d" /* view2D */])(opts.view, 'mapOptions.view');
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate__["a" /* isNull */])(opts.defaultLayer)) {
        opts.defaultLayer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transformer__["e" /* tileLayer */])(opts.defaultLayer, 'mapOptions.defaultLayer');
    }
    return opts;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offline", function() { return offline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offlineLabel", function() { return offlineLabel; });
var map = {
    width: '100%',
    height: '100%',
    display: 'none'
};

var offline = {
    width: '100%',
    height: '100%',
    backgroundColor: '#E6E6E6',
    position: 'relative',
    display: 'none'
};

var offlineLabel = {
    fontSize: '30px',
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    'margin-right': '-50%',
    transform: 'translate(-50%, -50%)'
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_aMap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_marker__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_plugin__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_mapScript__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngAMap", function() { return ngAMap; });







var moduleName = 'angular-amap';

__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module(moduleName, []).provider('mapScriptService', __WEBPACK_IMPORTED_MODULE_4__provider_mapScript__["a" /* default */]).component('ngAmap', __WEBPACK_IMPORTED_MODULE_1__components_aMap__["a" /* default */]).component('marker', __WEBPACK_IMPORTED_MODULE_2__components_marker__["a" /* default */]).component('plugin', __WEBPACK_IMPORTED_MODULE_3__components_plugin__["a" /* default */]);

var ngAMap = moduleName;

/***/ })
/******/ ]);
});