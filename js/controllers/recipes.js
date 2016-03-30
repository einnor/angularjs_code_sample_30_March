var recipesApp = angular.module('recipesApp', []);

recipesApp.controller('recipeListController', function ($scope) {
  $scope.recipes = [
    {
      'name': 'Spring Onion and Cumin Seed Farfelle Stir Fry',
      'timeTaken': '25 minutes',
      'servings' : '3',
      'cost' : '300 Ksh.'
    },
    {
      'name': 'Pork Sausage, Beef and Cheddar Meatballs',
      'timeTaken': '50 minutes',
      'servings' : '3',
      'cost' : '1200 Ksh.'
    },
    {
      'name': 'Garlic Masala Fries',
      'timeTaken': '25 minutes',
      'servings' : '3',
      'cost' : '400 Ksh.'
    },
    {
      'name': 'Grilled Cheese Chicken Sandwich',
      'timeTaken': '45 minutes',
      'servings' : '3',
      'cost' : '900 Ksh.'
    },
    {
      'name': 'Cayenne and Red Onion Nyamachoma Dry Fry',
      'timeTaken': '20 minutes',
      'servings' : '3',
      'cost' : '500 Ksh.'
    },
    {
      'name': 'Chilli and Ginger Githeri',
      'timeTaken': '30 minutes',
      'servings' : '3',
      'cost' : '200 Ksh.'
    },

  ];
});
