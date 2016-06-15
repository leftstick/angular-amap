import '../css/main.css';
import angular from 'angular';
import {ngAmap} from '../../src/index';

import mapPointUrl from '../img/mappoint.png';

var demo = angular.module('demo', [ngAmap]);

var center1 = {longitude: 121.497775, latitude: 31.237427};
var center2 = {longitude: 121.4798993608, latitude: 31.2250525548};

demo.controller('demoCtrl', [
    '$scope',
    '$timeout',
    function($scope, $timeout) {
        $scope.mapOptions = {
            toolBar: true,
            scaleCtrl: true,
            overviewCtrl: true,
            enableScrollWheelZoom: true,
            center: center1,
            zoom: 17,
            markers: [
                {
                    longitude: center1.longitude,
                    latitude: center1.latitude,
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

        $scope.toggleCoordinate = function() {
            $scope.mapOptions.center = $scope.mapOptions.center === center1 ? center2 : center1;
        };

        $scope.toggleMarker = function() {
            if ($scope.mapOptions.markers[0].longitude === center1.longitude) {
                $scope.mapOptions.markers[0].longitude = center2.longitude;
                $scope.mapOptions.markers[0].latitude = center2.latitude;
                return;
            }
            $scope.mapOptions.markers[0].longitude = center1.longitude;
            $scope.mapOptions.markers[0].latitude = center1.latitude;
        };

        $scope.randomScale = function() {
            $scope.mapOptions.zoom = Math.floor(Math.random() * 15) + 3;
        };
    }
]);
