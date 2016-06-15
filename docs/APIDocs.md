## Installation

**via npm**

```shell
npm install angular-amap --save
```

**via bower**

```shell
bower install angular-amap --save
```

## Import

**ES2015**

```javascript
import {ngAmap} from 'angular-amap';
```

**CommonJS**

```javascript
var ngAmap = require('angular-amap').ngAmap;
```

**script**

```html
<script type="text/javascript" src="angular/angular.min.js"></script>
<script type="text/javascript" src="angular-amap/dist/angular-amap.min.js"></script>
<script type="text/javascript">
    var ngAmap = window.ngAmap;
</script>
```

## Usage ##

```JavaScript
var app = angular.module('app', [ngAmap]);
```

### Use `ng-amap` directive in the template

```html
<ng-amap options="mapOptions" ak="<your-ak>" offline="offlineOpts" on-map-loaded="loadMap(map)" class="<style-for-it>"></ng-amap>
```

* `options` is what you defined in the controller. More info: [here](#description-of-options)
* `ak` is a plain text you applied at [开放平台](http://lbs.amap.com/dev/key)
* `offline` is used to control offline retry interval, and display text. More info: [here](#description-of-offline)
* `on-map-loaded` is used for hacking purpose, in case some of you insist getting `map` instance
* `class` or `style` has to be defined, otherwise the map cannot be shown

### How to manage map within controller

```JavaScript
app.controller('demoCtrl', ['$scope',
    function($scope) {

        //define offline options
        $scope.offlineOpts = {
            retryInterval: 10000,
            txt: 'Offline Mode'
        };

        var longitude = 121.506191;
        var latitude = 31.245554;

        //define options
        $scope.mapOptions = {
            toolBar: true,
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 17,
            markers: [{
                longitude: longitude,
                latitude: latitude,
                icon: 'img/mappiont.png',
                width: 49,
                height: 60,
                title: 'Where',
                content: 'Put description here'
            }]
        };

        $scope.loadMap = function(map) {
            console.log(map);//gets called while map instance created
        };
    }
]);
```

### Description of options

| Attribute        | Type           | Required  | Description | Example  |
| :------------- |:-------------| :-----:| :-----| :-----|
| options.center.longitude | number | Yes | The longitude of the center point | 121.506191 |
| options.center.latitude | number | Yes | The latitude of the center point | 31.245554 |
| options.zoom | number | Yes | Map's zoom level. This must be a number between 3 and 19 | 9 |
| options.toolBar | boolean | No | Whether to add a `AMap.ToolBar` to the map, default to true | false |
| options.scaleCtrl | boolean | No | Whether to add a `AMap.Scale` to the map, default to true | false |
| options.overviewCtrl | boolean | No | Whether to add a `AMap.OverView` to the map, default to true | false |
| options.enableScrollWheelZoom | boolean | No | Whether to enableScrollWheelZoom to the map, default to true | false
| options.markers | array | no | The markers you'd like to have on the displayed map | [{longitude: longitude,latitude: latitude,icon: 'img/mappiont.png',width: 49,height: 60,title: 'Where',content: 'Put description here'}] |
| marker.longitude | number | Yes | The longitude of the the markder | 121.506191 |
| marker.latitude | number | Yes | The latitude of the the markder | 31.245554 |
| marker.icon | string | No | The icon's url for the marker. The default icon will be set if you haven't set this value. | 'img/mappiont.png' |
| marker.width | number | No | The icon's width for the icon. you have to set this value if `icon` is set. | 40 |
| marker.height | number | Yes | The icon's height for the icon. you have to set this value if `icon` is set. | 60 |
| marker.title | string | No | The title on the infowindow displayed once you click the marker. | 'hello' |
| marker.content | string | No | The content on the infowindow displayed once you click the marker. | 'hello world' |


### Description of offline

| Attribute        | Type           | Required  | Description | Example  |
| :------------- |:-------------| :-----:| :-----| :-----|
| offline.retryInterval | number | No | retry interval while no network available. 30000ms by default | 5000 |
| offline.txt | string | No | hint words while offline mode, 'OFFLINE' by default | OFFLINE MODE |
