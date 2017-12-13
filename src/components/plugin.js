import {isNull, isArray} from '../helper/validate';
import {marker, pixel} from '../helper/transformer';

export default {
    bindings: {
        name: '@',
        options: '<',
        loaded: '&'
    },
    require: {
        mapCtrl: '^ngAmap'
    },
    template: '',
    controller: class {
        /* @ngInject */
        constructor($scope) {
            this.$scope = $scope;
        }

        $onInit() {
            isNull(this.name);

            this.mapCtrl
                .mapReady
                .then(() => createControl(this.mapCtrl.getMap(), this.name, transformOptions(this.mapCtrl.getMap(), this.options || {})))
                .then(control => {
                    this.control = control;
                    this.loaded({
                        plugin: control
                    });
                    this.$scope.$apply();
                    if (control) {
                        this.mapCtrl.getMap().addControl(control);
                    }
                });
        }

        $onDestroy() {
            this.mapCtrl.getMap().removeControl(this.control);
        }
    }
};

function createControl(map, name, options) {
    return new Promise((resolve, reject) => {
        return AMap.plugin(['AMap.' + name], () => {
            if (name === 'MarkerClusterer') {
                if (!isArray(options) || !options.length) {
                    return reject(new Error('[options] for MarkerClusterer should not be empty, it must be an Array of marker'));
                }
                return resolve(new AMap[name](map, options.map(o => marker(o, 'option for MarkerClusterer'))));
            }
            resolve(new AMap[name](options));
        });
    });
}

function transformOptions(map, options) {
    const opts = JSON.parse(JSON.stringify(options));
    if (opts.offset) {
        opts.offset = pixel(opts.offset, 'options.offset');
    }
    if (opts.locationMarker) {
        opts.locationMarker = marker(opts.locationMarker, 'options.locationMarker');
        opts.locationMarker.setMap(map);
    }
    return opts;
}
