## Basic Usage


### Download the source code or install the git package by using [bower](http://bower.io/)

v1.0.0 released

```shell
bower install angular-amap -S
```
> `-S` means update the `bower.json` with `angular-amap` involved while installing.

### Add `script` tag to the `index.html` for retrieving a-map API

``` html
<script language="javascript" src="https://webapi.amap.com/maps?v=1.2&key={key}"></script>
```
> The `key` should be applied on [Apply ak](http://api.amap.com/key/).

### Include `aMap.js` file in your page. Then add the `aMap` module to your Angular App file, e.g.

```JavaScript
var app = angular.module('app', ["aMap"]);
```

### Use `aMap` directive in the html

```html
<a-map options="mapOptions"></a-map>
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
```

### Description of attributes

| Attribute        | Type           | Required  | Description | Example  |
| :------------- |:-------------| :-----:| :-----| :-----|
| options.center.longitude | number | Yes | The longitude of the center point | 121.506191 |
| options.center.latitude | number | Yes | The latitude of the center point | 31.245554 |
| options.zoom | number | Yes | Map's zoom level. This must be a number between 3 and 19 | 9 |
| options.width | number | Yes | The width of the map | 600 |
| options.height | number | Yes | The height of the map | 600 |
| options.navCtrl | boolean | No | Whether to add a NavigationControl to the map, default to true | false |
| options.scaleCtrl | boolean | No | Whether to add a ScaleControl to the map, default to true | false |
| options.overviewCtrl | boolean | No | Whether to add a OverviewMapControl to the map, default to true | false |
| options.enableScrollWheelZoom | boolean | No | Whether to enableScrollWheelZoom to the map, default to true | false
| options.markers | array | no | The markers you'd like to have on the displayed map | [{longitude: longitude,latitude: latitude,icon: 'img/mappiont.png',width: 49,height: 60,title: 'Where',content: 'Put description here'}] |
| marker.longitude | number | Yes | The longitude of the the markder | 121.506191 |
| marker.latitude | number | Yes | The latitude of the the markder | 31.245554 |
| marker.icon | string | No | The icon's url for the marker. The default icon will be set if you haven't set this value. | 'img/mappiont.png' |
| marker.title | string | No | The title on the infowindow displayed once you click the marker. | 'hello' |
| marker.content | string | No | The content on the infowindow displayed once you click the marker. | 'hello world' |
