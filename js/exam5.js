var app5 = angular.module('app5',[]);

app5.controller('gListCtrl', function($scope){

    $scope.groceries = [];

    $scope.addItem = function(newItem){

        if(!!newItem){
            $scope.groceries.push({
                item:newItem,
                purchased: false
            });
            $scope.missingItemError = '';
        }
        else{
            $scope.missingItemError = 'Please Enter a valid grocery item.'
        }
        
    }
});

app5.controller('userCtrl',function($scope,$http){
    $scope.user = [{
        fName: 'Vikram',
        lName:'T',
        street:'Mumbai',
        subscribe: 'Subscribe',
        delivery:'Email'
    }];

    $scope.saveUser = function(userInfo){

        var onSuccess = function(data){
            console.log('data',data);

        }

        var prom = $http.get('https://cat-fact.herokuapp.com/facts/random');

            prom.success(onSuccess);

        console.log(userInfo);
        if($scope.userForm.$valid){
            $scope.user.push(userInfo);
        }
        else{
            console.log('Error');
        }
    }
})