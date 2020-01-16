var app8 = angular.module('app8',[]);

app8.controller('mainCtrl',function($scope){

    $scope.students = [
        {name: 'Vikram T', gpa: 3.5},
        {name: 'John Doe', gpa: 3.6},
        {name: 'Jane Doe', gpa: 3.2},
        {name: 'Mark Smith', gpa: 3.8}
    ]

    $scope.student = {
        gpas:[
            {name: 'Vikram T', gpa: 3.5},
            {name: 'John Doe', gpa: 3.6},
            {name: 'Jane Doe', gpa: 3.2},
            {name: 'Mark Smith', gpa: 3.8}
        ]
    }

    $scope.currDate = new Date();

    $scope.randomStr = "Lorem Ipsum dolor sit amet";

    $scope.randArr = [
        "Potato",
        "Tomato",
        "Bread",
        "Pickle",
        "Raisins"
    ];

    $scope.weather = [
        {
            day:'Monday',
            rain: true
        },
        {
            day: 'Tuesday',
            rain: false
        }
    ]
});