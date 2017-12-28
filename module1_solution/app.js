(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', LunchCheckerController)

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.dish = "";
  $scope.sayLunchCheck = "";



  $scope.checkIfTooMuch = function () {

    var dishes = (splitDishes($scope.dish));
    var numDishes = countDishes(dishes);
    if (numDishes == 0){
      $scope.sayLunchCheck = "Empty";
    }
    else if (numDishes >= 1 && numDishes <= 3) {
      $scope.sayLunchCheck = "Enjoy!";
    }
    else if (numDishes > 3 ) {
      $scope.sayLunchCheck = "Too much!";
    }
  };
}
function splitDishes (dishes) {
  var arrayOfDishes = dishes.split(',');
  return arrayOfDishes;

};

function countDishes (arrayDishes) {
  if (arrayDishes.length == 1){
    if (arrayDishes[0] == ""){
        var totalDishesValue = 0;
    }
    else {
      var totalDishesValue = arrayDishes.length;
    }
}

else {
  var totalDishesValue = arrayDishes.length;
}
    return totalDishesValue;

};
})();
