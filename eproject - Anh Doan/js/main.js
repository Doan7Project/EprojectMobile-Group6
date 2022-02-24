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
        .when("/oppo", {
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
});

app.controller("myCtrl", function($scope) {
    $scope.view = function(ID) {
        // alert(ID);
        let phone = $scope.listitems.find(el => el.ID == ID);
        // console.log(phone);
        $scope.pic = phone.pic;
        $scope.brandName = phone.brandName;
        $scope.brandID = phone.brandID;
        $scope.name = phone.name;
        $scope.price = phone.price;
        $scope.discount = phone.discount;
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


});

// compare product


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
//back top
var mybutton = document.getElementById("topbtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//         mybutton.style.transition = "all linear 0.4s";
//     } else {
//         mybutton.style.display = "none";
//         mybutton.style.transition = "all linear 0.4s";
//     }
// }

// When the user clicks on the button, scroll to the top of the document