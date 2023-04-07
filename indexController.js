var app = angular.module("myApp", []);

app.controller("myController", function ($scope, $http) {
  $scope.title = "Welcome to JS";

  $scope.inputValue = {
    name: "",
    gender: "",
    birthday: "",
    level: "",
    hour: "",
  };

  $scope.getData = function () {
    console.log($scope.inputValue);
    $http.get("http://localhost:3000/home").then(function (response) {
      console.log(response);
      $scope.data = response.data;
    });
  };

  $scope.getData();

  $scope.handleSubmit = function () {
    console.log($scope.inputValue);
    $http
      .post("http://localhost:3000/home", $scope.inputValue)
      .then(function (response) {
        console.log(response);
      });
  };

  $scope.handleDelete = function (id) {
    console.log(id);
    $http.delete(`http://localhost:3000/home/${id}`).then(function (response) {
      console.log(response);
    });
  };
});
