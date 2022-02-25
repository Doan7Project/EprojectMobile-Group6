// let app = angular.module("myApp", ["ngRoute"]);

app.run(function($rootScope, $http) {
    $http.get("../datajson/data.json").then(function(response) {
        $rootScope.cart = response.data.brands;
        console.log($rootScope.cart);

    });

});

app.controller("myCtrl", function($scope, $rootScope) {

    //add to cart
    $scope.addCart = function(id) {
        let item = $rootScope.listitems[id];
        console.log(item);
        for (let i = 0; i < $rootScope.cart.length; ++i) {
            if ($rootScope.cart[i].id == id) {
                $rootScope.cart[i].qty++;
                $rootScope.total += $rootScope.cart[i].price
                return;
            }
        }


        var newEle = {
            "name": item.name,
            "dispercent": item.dispercent,
            "price": item.price,
            "qty": 1
        }
        $rootScope.total += item.price - (item.price * (item.dispercent / 100));
        $rootScope.cart.push(newEle);
        console.log($rootScope.cart);
    }

});



app.controller("nameCtrl", function($scope) {


    $scope.remove = function(index) {

        let yes = confirm("Do you want to delete data?");
        //xoa san pham neu cau tra loi la yes
        if (yes) {
            $scope.cart.splice(index, 1);

        }
    }

});