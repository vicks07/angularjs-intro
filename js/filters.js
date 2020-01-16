//Transform data in the view without altering it in the scope.

angular.module('weatherFilters',[]).filter('raining',
function(){
    return function(input){
        //console.log(input);
        return input ? '\u2602':'\u2600'
    }
});