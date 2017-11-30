var app = angular.module('RestaurantApp', []);

app.controller('FoodController', ['$http', function ($http) {
    console.log('FoodController has been loaded');
    var self = this;
    self.message = 'Hello World';
    self.foodArray = [];  //empty array for food to go into

    self.newFood = { is_hot: false };

    self.getFood = function () {
        $http({
            method: 'GET',
            url: '/food',
        }).then(function (response) {
            console.log('response', response.data); ///response.data will just send back the array of objects, not all the extra info
            self.foodArray = response.data;
            // self.foodArray={}
        });
    };

    self.addNewFood = function (newFood) {
        $http({
            method: 'POST',
            url: '/food',
            data: newFood,
        }).then(function (response) {
            console.log('response', response);
            self.newFood = { is_hot: false }; //this clears our the input fields 
            self.getFood();
        });
    }

    self.deleteFood = function (foodToDelete) {
        $http({
            method: 'DELETE',
            url: '/food/' + foodToDelete.id,// will end up as something like /food/3
        }).then(function (response) {
            console.log('response', response);
            self.getFood();
        });
    };

    self.editFood = function (foodToEdit) { //this foodToEdit will be the data we'll pass through
        $http({
            method: 'PUT',
            url: '/food/',
            data: foodToEdit,
        }).then(function (response) {
            console.log('response', response);
            self.getFood();
        });
    }

    self.getFood();

}]);
