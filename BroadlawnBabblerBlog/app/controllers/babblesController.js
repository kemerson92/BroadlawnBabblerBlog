(function () {
    'use strict';

    angular
        .module('app')
        .controller('babblesController', babblesController);

    function babblesController($scope, babblesService, sharedBabbleService) {

        $scope.babbles = [];

        $scope.tab = 'blog';

        $scope.selectTab = function (setTab) {
            $scope.tab = setTab;
        };

        $scope.isSelected = function (checkTab) {
            if ($scope.tab === checkTab)
            {
                sharedBabbleService.setBabble($scope.babbles[checkTab]);
                return true;
            }
            return false;
        };

        $scope.babble = {};
        $scope.addBabble = function () {
            $scope.babble.createdOn = Date.now();
            $scope.babble.comments = [];
            $scope.babble.likes = 0;
            $scope.babbles.unshift($scope.babble);
            $scope.tab = 0;
            $scope.babble = {};
        };

        babblesService.getBabbles()
            .then(function (data) {
                    $scope.babbles = data;
                  });
    };

})();