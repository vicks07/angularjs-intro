var app6 = angular.module('app6',[]);

app6.controller('heroCtrl',function($scope,$rootScope){ //$rootscope -> update information between 2 controllers
    $scope.hero = [{
        realName: 'Bruce Wayne', heroName: 'Batman'
    },{
        realName: 'Clark Kent', heroName: 'Superman'
    },{
        realName: 'Tony Stark', heroName: 'IronMan'
    }];

    $scope.getHeroData = function(){
        heroSearch($scope.heroName);
        //console.log($scope.heroName);
    }

    function heroSearch(heroName){
        $scope.heroData = 'Not Found';

        $scope.hero.forEach((hero)=>{
             if(hero.heroName === heroName){
                 $scope.heroData = hero.realName + ' is ' + hero.heroName;
             }
        })
    }

    $scope.$on('heroUpdated',function(event, args){
        $scope.hero.push({
            realName: args.realName,
            heroName: args.heroName
        });
        //console.log($scope.hero);
    });

    $scope.addHeroData = function(realName, heroName){

        $rootScope.$broadcast("heroUpdated",{
            realName: realName,
            heroName: heroName
        })

    }



});