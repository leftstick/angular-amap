import angular from 'angular';
import {defaultOpts, defaultOfflineOpts} from './defaults';
import {validator} from './validator';
import {def} from './directiveDef';
import {loader} from './scriptLoader';
import {divStyle, labelStyle} from './style/offline';

import {createInstance, redrawMarkers} from './map';

export const ngAmap = (function() {
    var name = 'angular-amap';

    def(name, 'ngAmap', {
        restrict: 'E',
        scope: {
            options: '=',
            ak: '@',
            offline: '=',
            onMapLoaded: '&'
        },
        link: function($scope, element, attrs) {

            var opts = angular.extend({}, defaultOpts, $scope.options);
            var offlineOpts = angular.extend({}, defaultOfflineOpts, $scope.offline);
            $scope.offlineWords = offlineOpts.txt;
            validator($scope.ak, 'ak must not be empty');
            validator(opts.center, 'options.center must be set');
            validator(opts.center.longitude, 'options.center.longitude must be set');
            validator(opts.center.latitude, 'options.center.latitude must be set');
            validator(attrs.id, 'id cannot be ignored');

            loader($scope.ak, offlineOpts, function() {

                var map = createInstance(opts, element[0]);

                $scope.onMapLoaded({map});

                //create markers
                var previousMarkers = [];

                redrawMarkers(map, previousMarkers, opts);

                $scope.$watch('options.center', function(newValue, oldValue) {

                    opts = $scope.options;
                    map.setZoomAndCenter(opts.zoom, new AMap.LngLat(opts.center.longitude, opts.center.latitude));
                    redrawMarkers(map, previousMarkers, opts);

                }, true);

                $scope.$watch('options.markers', function(newValue, oldValue) {
                    redrawMarkers(map, previousMarkers, opts);
                }, true);

            });

            $scope.divStyle = divStyle;
            $scope.labelStyle = labelStyle;

            setTimeout(function() {
                var $label = document.querySelector('ng-amap div label');
                $scope.labelStyle.marginTop = $label.clientHeight / -2 + 'px';
                $scope.labelStyle.marginLeft = $label.clientWidth / -2 + 'px';
                $scope.$apply();
            });

        },
        template: '<div ng-style="divStyle"><label ng-style="labelStyle">{{ offlineWords }}</label></div>'
    });

    return name;
}());
