import angular from 'angular';
import {ngAmap} from '../../dist/angular-amap';

import mapPointUrl from '../img/mappoint.png';

var demo = angular.module('demo', [ngAmap]);

demo.controller('demoCtrl', [
    '$scope',
    '$timeout',
    function($scope, $timeout) {
        var longitude = 121.497775;
        var latitude = 31.237427;
        $scope.mapOptions = {
            toolBar: true,
            scaleCtrl: true,
            overviewCtrl: true,
            enableScrollWheelZoom: true,
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 17,
            markers: [
                {
                    longitude: longitude,
                    latitude: latitude,
                    icon: mapPointUrl,
                    title: 'Where',
                    content: 'Put description here'
                }
            ]
        };

        $scope.offline = {retryInterval: 5000};

        $scope.loadMap = function(map) {
            console.log('loaded amap ', map);
        };

        $timeout(function() {
            $scope.mapOptions.center = {
                longitude: 121.4798993608,
                latitude: 31.2250525548
            };
            $scope.mapOptions.markers[0].longitude = 121.4798993608;
            $scope.mapOptions.markers[0].latitude = 31.2250525548;
        }, 3000);
    }
]);
