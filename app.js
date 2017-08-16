// var url = "http://api.flutrack.org/?limit=10"

// need to find location info -function getValue() var mylocation 

//function fluResponse()
//var all = document.get[0].value;
   // $.getJSON(url);
//console.log(data);



/*$.ajax({  
    url: 'http://api.flutrack.org/?limit=10',  
    type: 'GET',  
    cache: false,
        dataType: "text",
        success: function(data) {
            localStorage.setItem("cache-" + type + "-" + units, data);
            handleCache();
        },  
    error: function(xhr, textStatus, errorThrown) {  
        console.log('a' + textStatus);  
    }  
}).done(function() {}); 
*/

angular.module("FluApp", []);

angular.module("FluApp").controller("FluController", ["$scope", "$http", function MyController($scope, $http) {

    $scope.items = [];
    $scope.getItems = function() {
        $http.get('/api/flu').then(function(response) {
                $scope.items = response.data;
            })
    };
}]);
