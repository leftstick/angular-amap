(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ngAMap = undefined;
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _aMap = __webpack_require__(2);
	
	var _aMap2 = _interopRequireDefault(_aMap);
	
	var _marker = __webpack_require__(7);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	var _control = __webpack_require__(8);
	
	var _control2 = _interopRequireDefault(_control);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleName = 'angular-amap';
	
	_angular2.default.module(moduleName, []).component('ngAmap', _aMap2.default).component('marker', _marker2.default).component('control', _control2.default);
	
	var ngAMap = exports.ngAMap = moduleName;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _style = __webpack_require__(3);
	
	var style = _interopRequireWildcard(_style);
	
	var _validate = __webpack_require__(4);
	
	var _loader = __webpack_require__(5);
	
	var _map = __webpack_require__(6);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	exports.default = {
	    bindings: {
	        key: '@',
	        offlineTxt: '<',
	        mapOptions: '<',
	        loaded: '&',
	        click: '&'
	    },
	    transclude: true,
	    template: '\n        <div ng-style="$ctrl.style.map" class="amap-instance"></div>\n        <div ng-style="$ctrl.style.offline" class="amap-offline">\n            <label ng-style="$ctrl.style.offlineLabel">{{ $ctrl.offlineTxt || \'NO_NETWORK\' }}</label>\n        </div>\n        <div ng-transclude style="display: none"></div>\n    ',
	    controller: function () {
	        /* @ngInject */
	        controller.$inject = ["$scope", "$element", "$attrs"];
	        function controller($scope, $element, $attrs) {
	            _classCallCheck(this, controller);
	
	            this.$scope = $scope;
	            this.$element = $element;
	            this.$attrs = $attrs;
	            this.style = style;
	        }
	
	        _createClass(controller, [{
	            key: '$onInit',
	            value: function $onInit() {
	                var _this = this;
	
	                (0, _validate.nullCheck)(this.key, 'key is required for <ng-amap>');
	
	                this.mapReady = (0, _loader.load)(this.key).then(function () {
	                    return (0, _map.create)(_this.$element.children()[0], _this.mapOptions);
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
	                (0, _map.refresh)(this.map, changes.mapOptions.currentValue);
	            }
	        }, {
	            key: '$onDestroy',
	            value: function $onDestroy() {
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
	
	
	function handleMapOperation(map, method) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	    }
	
	    return new Promise(function (resolve) {
	        map[method].apply(map, args);
	        resolve();
	    });
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var map = exports.map = {
	    width: '100%',
	    height: '100%',
	    display: 'none'
	};
	
	var offline = exports.offline = {
	    width: '100%',
	    height: '100%',
	    backgroundColor: '#E6E6E6',
	    position: 'relative',
	    display: 'none'
	};
	
	var offlineLabel = exports.offlineLabel = {
	    fontSize: '30px',
	    margin: 0,
	    position: 'absolute',
	    top: '50%',
	    left: '50%',
	    'margin-right': '-50%',
	    transform: 'translate(-50%, -50%)'
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.nullCheck = nullCheck;
	exports.numberCheck = numberCheck;
	exports.isNull = isNull;
	exports.isString = isString;
	exports.isNumber = isNumber;
	exports.isArray = isArray;
	exports.controlTypeCheck = controlTypeCheck;
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = load;
	function load(key) {
	    var MAP_URL = '//webapi.amap.com/maps?v=1.3&key=' + key + '&callback=amapinit';
	
	    var loadAMapPromise = window.loadAMapPromise;
	    if (loadAMapPromise) {
	        return loadAMapPromise.then(displayMap);
	    }
	
	    //eslint-disable-next-line
	    return window.loadAMapPromise = new Promise(function (resolve, reject) {
	        window.amapinit = resolve;
	        appendScriptTag(MAP_URL);
	    }).then(displayMap);
	}
	
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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.create = create;
	exports.refresh = refresh;
	
	var _validate = __webpack_require__(4);
	
	function create(element, mapOptions) {
	    return new AMap.Map(element, mapOptions);
	}
	
	function refresh(map, mapOptions) {
	    !(0, _validate.isNull)(mapOptions) && (0, _validate.isArray)(mapOptions.layers) && map.setLayers(mapOptions.layers);
	    !(0, _validate.isNull)(mapOptions) && (0, _validate.isNumber)(mapOptions.zoom) && map.setZoom(mapOptions.zoom);
	    !(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.center) && map.setCenter(mapOptions.center);
	    !(0, _validate.isNull)(mapOptions) && (0, _validate.isNumber)(mapOptions.labelzIndex) && map.setlabelzIndex(mapOptions.labelzIndex);
	    !(0, _validate.isNull)(mapOptions) && (0, _validate.isString)(mapOptions.lang) && map.setLang(mapOptions.lang);
	    !(0, _validate.isNull)(mapOptions) && (0, _validate.isString)(mapOptions.cursor) && map.setDefaultCursor(mapOptions.cursor);
	    !(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.defaultLayer) && map.setDefaultLayer(mapOptions.defaultLayer);
	    !(0, _validate.isNull)(mapOptions) && !(0, _validate.isNull)(mapOptions.city) && map.setCity(mapOptions.city);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _validate = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	exports.default = {
	    bindings: {
	        options: '<',
	        click: '&'
	    },
	    require: {
	        mapCtrl: '^ngAmap'
	    },
	    template: '',
	    controller: function () {
	        /* @ngInject */
	        controller.$inject = ["$scope", "$attrs"];
	        function controller($scope, $attrs) {
	            _classCallCheck(this, controller);
	
	            this.$scope = $scope;
	            this.$attrs = $attrs;
	        }
	
	        _createClass(controller, [{
	            key: '$onInit',
	            value: function $onInit() {
	                var _this = this;
	
	                (0, _validate.nullCheck)(this.options, 'options is required for <marker>');
	                (0, _validate.nullCheck)(this.options.position, 'options.position is required for <marker>');
	
	                this.mapCtrl.mapReady.then(function () {
	                    var marker = _this.marker = new AMap.Marker(_this.options);
	                    marker.setMap(_this.mapCtrl.getMap());
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _validate = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	exports.default = {
	    bindings: {
	        type: '@',
	        options: '<'
	    },
	    require: {
	        mapCtrl: '^ngAmap'
	    },
	    template: '',
	    controller: function () {
	        /* @ngInject */
	        function controller() {
	            _classCallCheck(this, controller);
	        }
	
	        _createClass(controller, [{
	            key: '$onInit',
	            value: function $onInit() {
	                var _this = this;
	
	                (0, _validate.controlTypeCheck)(this.type);
	
	                this.mapCtrl.mapReady.then(function () {
	                    return createControl(_this.mapCtrl.getMap(), _this.type.toLowerCase(), _this.options);
	                }).then(function (control) {
	                    _this.control = control;
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
	
	
	function createControl(map, type, options) {
	    return new Promise(function (resolve, reject) {
	        if (type === 'maptype') {
	            return map.plugin(['AMap.MapType'], function () {
	                resolve(new AMap.MapType(options));
	            });
	        }
	        if (type === 'overview') {
	            return map.plugin(['AMap.OverView'], function () {
	                resolve(new AMap.OverView(options));
	            });
	        }
	        if (type === 'scale') {
	            return map.plugin(['AMap.Scale'], function () {
	                resolve(new AMap.Scale(options));
	            });
	        }
	        if (type === 'toolbar') {
	            return map.plugin(['AMap.ToolBar'], function () {
	                resolve(new AMap.ToolBar(options));
	            });
	        }
	    });
	}

/***/ }
/******/ ])
});
;