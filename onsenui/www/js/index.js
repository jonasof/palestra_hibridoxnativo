document.addEventListener('deviceready', function() {

    console.log("O dispositivo está pronto!");

}, false);


app.controller("HomepageController", function($scope) {

    $scope.numero1 = 0;
    $scope.numero2 = 0;
    $scope.resultado = 0;

    $scope.calcular = function()
    {
        $scope.resultado = parseInt($scope.numero1) + parseInt($scope.numero2);
    }

});
