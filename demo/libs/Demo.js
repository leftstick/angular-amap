var demo = angular.module('demo', ['aMap']);

demo.controller('demoCtrl', ['$scope',
    function($scope) {
        var longitude = 121.497775;
        var latitude = 31.237427;
        $scope.mapOptions = {
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 17,
            width: 500,
            height: 400,
            markers: [{
                longitude: longitude,
                latitude: latitude,
                icon: 'img/mappiont.png',
                title: 'Where',
                content: 'Put description here'
            }]
        };
    }
]);
