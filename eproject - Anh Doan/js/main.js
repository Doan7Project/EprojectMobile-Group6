// homeview
let app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/brand", {
            templateUrl: "categories.html"
        })
        .when("/login", {
            templateUrl: "login.html"
        })
        .when("/comparision", {
            templateUrl: "comparision.html"
        })
        .when("/register", {
            templateUrl: "register.html"
        })
        .when("/contactus", {
            templateUrl: "contactus.html"
        })
        .when("/aboutus", {
            templateUrl: "aboutus.html"
        })
        .when("/feedback", {
            templateUrl: "feedback.html"
        })
        .when("/apple", {
            templateUrl: "categories.html"
        })
        .when("/samsung", {
            templateUrl: "categories.html"
        })
        .when("/google", {
            templateUrl: "categories.html"
        })
        .when("/motorola", {
            templateUrl: "categories.html"
        })
        .when("/nokia", {
            templateUrl: "categories.html"
        })


});

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
        document.getElementById("menubar-cropdow").style.top = "0";
    } else {
        document.getElementById("menubar-cropdow").style.top = "-100px";
    }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        mybutton.style.transition = "all linear 0.4s";
    } else {
        mybutton.style.display = "none";
        mybutton.style.transition = "all linear 0.4s";
    }
}

function topFunction() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

// Link data
app.run(function($rootScope, $http) {
    $http.get("../datajson/data.json").then(function(response) {
        $rootScope.listitems = response.data.brands;
        console.log($rootScope.listitems);
    });

    $http.get("../datajson/data.json").then(function(response) {
        $rootScope.product = response.data.brands;
        console.log($rootScope.product);

        $rootScope.product = [];
    });

});

app.controller("myCtrl", function($scope, $rootScope) {
    $scope.view = function(ID) {
        // alert(ID);
        let phone = $scope.listitems.find(el => el.ID == ID);
        // console.log(phone);
        $scope.pic = phone.pic;
        $scope.pic1 = phone.pic1;
        $scope.pic2 = phone.pic2;
        $scope.pic3 = phone.pic3;
        $scope.pic4 = phone.pic4;
        $scope.brandName = phone.brandName;
        $scope.brandID = phone.brandID;
        $scope.name = phone.name;
        $scope.price = phone.price;
        $scope.discount = phone.price - (phone.price * (phone.dispercent / 100));
        $scope.body = phone.body;
        $scope.screen = phone.screen;
        $scope.chipset = phone.chipset;
        $scope.memory = phone.memory;
        $scope.os = phone.os;
        $scope.camera = phone.camera;
        $scope.selfie = phone.selfie;
        $scope.video = phone.video;
        $scope.battery = phone.battery;
        $scope.misc = phone.misc;
        $('#myModal').modal('show');
    }

    $scope.compareProduce = function(ID) {
        let items = $rootScope.listitems[ID];
        var newEle = {

            "pic": items.pic,
            "name": items.name,
            "price": items.price,
            "memory": items.memory,
            "camera": items.camera,
            "battery": items.battery,
            "dis": items.price - (items.price * ((items.dispercent) / 100))

        }

        $rootScope.product.push(newEle);
        console.log(newEle);




    };


});

// compare product
app.controller("productCTR", function($scope) {


    $scope.remove = function(index) {

        $scope.product.splice(index, 1);

    }

})

function selectbox() {

    var Seall = document.getElementById('checkall').checked;

    if (Seall == false) {
        document.getElementById('selectall').style.display = "inline-flex";
        document.getElementById('unselect').style.display = "none";


    } else {
        document.getElementById('selectall').style.display = "none";
        document.getElementById('unselect').style.display = "inline-flex";

    }

}

{
    var smallImg = document.getElementsByClassName('small-img');
    smallImg[0].onclick = function() {
        MainImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function() {
        MainImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function() {
        MainImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function() {
        MainImg.src = smallImg[3].src;
    }
    smallImg[4].onclick = function() {
        MainImg.src = smallImg[4].src;
    }
}