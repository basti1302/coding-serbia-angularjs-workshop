function AppCtrl ($scope) {
    'use strict';
    $scope.title = 'The Movie Database';
}

function WelcomeCtrl () {
}

function MoviesListCtrl ($scope, $location,moviesResponse) {
    'use strict';
    $scope.movies = moviesResponse.data;
    $scope.add = function () {
        $location.path('/movies/new');
    };
}

MoviesListCtrl.resolve = {
    moviesResponse: function ($http) {
        'use strict';
        return $http.get('/movies');
    }
};

function MoviesAddCtrl ($scope, $http, $location) {
    'use strict';
    $scope.movie = {};
    $scope.save = function (movie) {
	// We should do something if this fails. But what?
        $http.post('/movies', movie)
            .success(function(res) {
                $location.path('/movies/' + res.id);
            });
    };
}

function NotFoundCtrl () {
}