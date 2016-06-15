import angular from 'angular';

export const def = function(name, dirName, ddo) {
    angular.module(name, [])
        .directive(dirName, [function() {
            return ddo;
        }]);
};
