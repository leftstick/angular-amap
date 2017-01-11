import {isNull} from '../helper/validate';
import {marker, pixel} from '../helper/transformer';

export default {
    bindings: {
        name: '@',
        options: '<'
    },
    require: {
        mapCtrl: '^ngAmap'
    },
    template: '',
    controller: class {
        /* @ngInject */
        constructor() {}

        $onInit() {
            isNull(this.name);

            this.mapCtrl
                .mapReady
                .then(() => createControl(this.mapCtrl.getMap(), this.name, transformOptions(this.mapCtrl.getMap(), this.options || {})))
                .then(control => {
                    this.control = control;
                    this.mapCtrl.getMap().addControl(control);
                });
        }

        $onDestroy() {
            this.mapCtrl.getMap().removeControl(this.control);
        }
    }
};

function createControl(map, name, options) {
    return new Promise((resolve, reject) => {
        return map.plugin(['AMap.' + name], () => {
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
