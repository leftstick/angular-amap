import angular from 'angular';

import aMap from './components/aMap';
import marker from './components/marker';
import plugin from './components/plugin';
import mapScriptProvider from './provider/mapScript';

const moduleName = 'angular-amap';

angular
    .module(moduleName, [])
    .provider('mapScriptService', mapScriptProvider)
    .component('ngAmap', aMap)
    .component('marker', marker)
    .component('plugin', plugin);

export const ngAMap = moduleName;
