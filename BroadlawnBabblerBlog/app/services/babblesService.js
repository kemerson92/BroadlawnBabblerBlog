//
(function () {
    'use strict';

    angular
        .module('app')
        .service('babblesService', babblesService);

    function babblesService( $http, $q) {
        
        // Return public API.
        return({
            addBabble: addBabble,
            getBabbles: getBabbles,
            removeBabble: removeBabble
        });

        // Add a babble
        function addBabble(name) {
            var request = $http({
                method: "post",
                url: "api/index.cfm",
                params: {
                    action: "add"
                },
                data: {
                    name: name
                }
            });
            return( request.then( handleSuccess, handleError ) );

        }

        // Get all babbles
        function getBabbles() {
            var request = $http({
                method: "get",
                url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/posts_1.json",
                params: {
                    action: "get"
                }
            });
            return( request.then( handleSuccess, handleError ) );
        }

        // Remove a babble
        function removeBabble(id) {
            var request = $http({
                method: "delete",
                url: "api/index.cfm",
                params: {
                    action: "delete"
                },
                data: {
                    id: id
                }
            });
            return( request.then( handleSuccess, handleError ) );
        }

        // ---
        // PRIVATE METHODS.
        // ---

        function handleError( response ) {
            // The API response from the server should be returned in a
            // nomralized format. However, if the request was not handled by the
            // server (or what not handles properly - ex. server error), then we
            // may have to normalize it on our end, as best we can.
            if (
                ! angular.isObject( response.data ) ||
                ! response.data.message
                ) {
                return( $q.reject( "An unknown error occurred." ) );
            }
            // Otherwise, use expected error message.
            return( $q.reject( response.data.message ) );
        }

        function handleSuccess( response ) {
            return( response.data );
        }

    };
})();