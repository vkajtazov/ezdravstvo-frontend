/**
 * Created by Bojana on 5/19/2015.
 */


iktProekt.controller('indexController', function($scope){


    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function(i) {

        slides.push({
            image: 'web/images/carousel/slider-'+i+".jpg"

        });
    };
    for (var i=1; i<4; i++) {
        $scope.addSlide(i);
    }






});

