angular.module('Angello.User')
    .directive('userstory', ['$rootScope', 'StoriesService', function ($rootScope, StoriesService) {
        var linker = function (scope, element, attrs) {
            element
                .mouseover(function () {
                    element.css({ 'opacity': 0.9 });
                })
                .mouseout(function () {
                    element.css({ 'opacity': 1.0 })
                });
        };

        var controller = function ($scope) {
            $scope.deleteStory = function (id) {
                StoriesService.destroy(id).then(function (result) {
                    $rootScope.$broadcast('storyDeleted');
                }, function (reason) {
                    console.log('ERROR', reason);
                });
            };
        };

        return {
            restrict: 'A',
            controller: controller,
            link: linker
        };
    }]);