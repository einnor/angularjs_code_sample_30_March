var recipesApp = angular.module('recipesApp', []);

recipesApp.controller('recipeListController', function ($scope,$http) {
  $http.get('recipes/recipes.json').success(function(data) {
    $scope.recipes = data.recipes;
  });
  $scope.sortBy = 'cost';
});
