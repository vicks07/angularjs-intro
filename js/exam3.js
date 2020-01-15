var app3 = angular.module("app3",[]);

app3.controller("gListCtrl", function($scope){

    $scope.groceries = [
        {item: 'Tomato', purchased: false},
        {item: 'Milk', purchased: false},
        {item: 'Bread', purchased: false},
        {item: 'Potato', purchased: false},
        {item: 'Hummus', purchased: false},
    ];

    $scope.getList = function(){
        return $scope.showList ? "groceryListUL.html": "groceryListOL.html"
    }
})