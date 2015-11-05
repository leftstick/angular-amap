## Basic Usage

### Import `amap` SDK ###

Put below snippet into your `html`:

```html
<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=您申请的key值"></script>
```
> The `您申请的key值` should be applied on [Apply ak](http://lbs.amap.com/console/key).


### Import `angular-amap` ###

#### CommonJS ####

```JavaScript
var angular = require('angular');
var amap = require('angular-amap');

var app = angular.module('app', ['angular-amap']);
```

#### RequireJS ####

```JavaScript
require.config({
    paths: {
        'angular': 'bower_components/angular/angular.min',
        'angular-amap': 'bower_components/angular-amap/angular-amap.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-amap': {
            deps: ['angular']
        }
    }
});

define(['angular', 'angular-amap'], function(angular){
    var app = angular.module('app', ['angular-amap']);
});
```

#### Plain JavaScript ####

```html
<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="bower_components/angular-amap/angular-amap.min.js"></script>

<script type="text/javascript">
    var app = angular.module('app', ['angular-amap']);
</script>
```

### Use `ng-amap` directive ###

```html
<ng-amap options="mapOptions" style="display: block; width: 500px; height: 400px;"></a-map>
```
> `mapOptions` is what you defined in the controller.

### Define `mapOptions` in controller

```JavaScript
app.controller('demoCtrl', ['$scope',
    function($scope) {
        var longitude = 121.506191;
        var latitude = 31.245554;
        $scope.mapOptions = {
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 17,
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
```

### Description of attributes

| Attribute        | Type           | Required  | Description | Example  |
| :------------- |:-------------| :-----:| :-----| :-----|
| options.center.longitude | number | Yes | The longitude of the center point | 121.506191 |
| options.center.latitude | number | Yes | The latitude of the center point | 31.245554 |
| options.zoom | number | Yes | Map's zoom level. This must be a number between 3 and 19 | 9 |
| options.navCtrl | boolean | No | Whether to add a NavigationControl to the map, default to true | false |
| options.scaleCtrl | boolean | No | Whether to add a ScaleControl to the map, default to true | false |
| options.overviewCtrl | boolean | No | Whether to add a OverviewMapControl to the map, default to true | false |
| options.enableScrollWheelZoom | boolean | No | Whether to enableScrollWheelZoom to the map, default to true | false
| options.markers | array | no | The markers you'd like to have on the displayed map | [{longitude: longitude,latitude: latitude,icon: 'img/mappiont.png',width: 49,height: 60,title: 'Where',content: 'Put description here'}] |
| marker.longitude | number | Yes | The longitude of the the markder | 121.506191 |
| marker.latitude | number | Yes | The latitude of the the markder | 31.245554 |
| marker.width | number | No | The width of the the infowindow which displayed while clicking the markder | 300 |
| marker.height | number | No | The height of the the infowindow which displayed while clicking the markder | 300 |
| marker.icon | string | No | The icon's url for the marker. The default icon will be set if you haven't set this value. | 'img/mappiont.png' |
| marker.title | string | No | The title on the infowindow displayed once you click the marker. | 'hello' |
| marker.content | string | No | The content on the infowindow displayed once you click the marker. | 'hello world' |
