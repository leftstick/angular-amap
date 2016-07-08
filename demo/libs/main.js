(function(ng) {
    'use strict';

    var demo = ng.module('demo', ['angular-amap']);

    demo.controller('demoCtrl', [
        '$scope',
        '$timeout',
        function($scope, $timeout) {
            var longitude = 121.497775;
            var latitude = 31.237427;
            $scope.mapOptions = {
                center: {
                    longitude: longitude,
                    latitude: latitude
                },
                zoom: 17,
                markers: [
                    {
                        longitude: longitude,
                        latitude: latitude,
                        icon: 'img/mappiont.png',
                        content: 'Put description here'
                    }
                ]
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


}(angular));
