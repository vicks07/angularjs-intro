var app11 = angular.module('app1',[]);

app11.controller('ctrl1',function($scope){
    $scope.first = 1;
    $scope.second = 2;

    $scope.updateValue = function(){
        $scope.calculation = $scope.first + ' + ' + $scope.second + ' = '+ (+$scope.first + +$scope.second);
    }

});