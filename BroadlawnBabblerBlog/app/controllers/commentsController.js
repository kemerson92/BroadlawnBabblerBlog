//
(function () {
    'use strict';

    angular
     .module('app')
     .controller('commentsController', commentsController);

    function commentsController($scope, sharedBabbleService) {
        $scope.comment = {};

        $scope.addComment = function () {
            var babble = sharedBabbleService.getBabble();

            $scope.comment.createdOn = Date.now();
            babble.comments.push($scope.comment);
            $scope.comment = {};
        }
    }
})();