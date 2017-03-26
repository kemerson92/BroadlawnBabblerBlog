//
(function () {
    'use strict';

    angular
     .module('app')
     .controller('navigationController', navigationController);

    function navigationController($scope, $location) {

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }
})();