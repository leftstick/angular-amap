
import * as style from '../style';
import {nullCheck} from '../helper/validate';
import {create, refresh} from '../helper/map';

export default {
    bindings: {
        offlineTxt: '<',
        mapOptions: '<',
        loaded: '&',
        click: '&'
    },
    transclude: true,
    template: `
        <div ng-style="$ctrl.style.map" class="amap-instance"></div>
        <div ng-style="$ctrl.style.offline" class="amap-offline">
            <label ng-style="$ctrl.style.offlineLabel">{{ $ctrl.offlineTxt || 'NO_NETWORK' }}</label>
        </div>
        <div ng-transclude style="display: none"></div>
    `,
    controller: class {
        /* @ngInject */
        constructor($scope, $element, $attrs, mapScriptService) {
            this.$scope = $scope;
            this.$element = $element;
            this.$attrs = $attrs;
            this.style = style;
            this.mapScriptService = mapScriptService;
        }

        $onInit() {
            nullCheck(this.mapOptions, 'mapOptions is required for <ng-amap>');
            nullCheck(this.mapOptions.center, 'mapOptions.center is required for <ng-amap>');

            this.mapReady = this.mapScriptService.load()
                .then(() => {
                    return create(this.$element.children()[0], this.mapOptions);
                })
                .then(map => {
                    this.loaded({
                        map
                    });
                    this.$scope.$apply();
                    //eslint-disable-next-line
                    return this.map = map;
                })
                .then(() => {
                    if (!this.$attrs.click) {
                        return;
                    }
                    const clickListener = this.clickListener = (e) => {
                        this.click({
                            e
                        });
                    };
                    AMap.event.addListener(this.map, 'click', clickListener);
                });
        }

        $onChanges(changes) {
            if (!this.map) {
                return;
            }
            refresh(this.map, changes.mapOptions.currentValue);
        }

        $onDestroy() {
            this.map.destroy();
            AMap.event.removeListener(this.map, 'click', this.clickListener);
        }

        getMap() {
            return this.map;
        }
    }
};

