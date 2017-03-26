//
(function () {
    'use strict';

    angular
        .module('app')
        .service('sharedBabbleService', sharedBabbleService);

    function sharedBabbleService() {

        var babble = {};

        // Return public API.
        return ({
            getBabble: getBabble,
            setBabble: setBabble
        });

        // Get babble
        function getBabble() {
            return babble;
        }

        // Set babble
        function setBabble(value) {
            babble = value;
        }
    };
})();