import angular from 'angular';

import aMap from './components/aMap';
import marker from './components/marker';
import plugin from './components/plugin';

const moduleName = 'angular-amap';

angular
    .module(moduleName, [])
    .component('ngAmap', aMap)
    .component('marker', marker)
    .component('plugin', plugin);

export const ngAMap = moduleName;
