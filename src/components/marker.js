import {nullCheck} from '../helper/validate';
import {marker as markerTransform} from '../helper/transformer';

export default {
    bindings: {
        options: '<',
        loaded: '&',
        click: '&'
    },
    require: {
        mapCtrl: '^ngAmap'
    },
    template: '',
    controller: class {
        /* @ngInject */
        constructor($scope, $attrs) {
            this.$scope = $scope;
            this.$attrs = $attrs;
        }

        $onInit() {
            nullCheck(this.options, 'options is required for <marker>');
            nullCheck(this.options.position, 'options.position is required for <marker>');

            this.mapCtrl
                .mapReady
                .then(() => {
                    const marker = this.marker = markerTransform(this.options, 'options');
                    marker.setMap(this.mapCtrl.getMap());
                    this.loaded({
                        marker
                    });
                    this.$scope.$apply();
                    return marker;
                })
                .then(marker => {
                    if (!this.$attrs.click) {
                        return;
                    }
                    this.clickHandler = (e) => {
                        this.click({
                            e,
                            marker,
                            map: this.mapCtrl.getMap()
                        });
                        this.$scope.$apply();
                    };
                    AMap.event.addListener(marker, 'click', this.clickHandler);
                });
        }

        $onDestroy() {
            AMap.event.removeListener(this.marker, 'click', this.clickHandler);
            this.marker.setMap(null);
        }
    }
};

