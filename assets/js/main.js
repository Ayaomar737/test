$(function () {

    'use strict';

     // services carousel

        var $carousel = $(".owl-carousel");
        var totalItems = $carousel.find(".card-hover").length;
        var visibleItems = 3;
        var totalSteps = totalItems - visibleItems + 1;
      
        var indicatorStep = 100 / totalSteps;
      
        $(".services .owl-carousel").owlCarousel({
            autoplay: true,
            autoplayhoverpause: true,
            autoplaytimeout: 100,
            items: 3,
            nav: true,
            loop: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                485: {
                    items: 1
                },
                728: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
      
        $carousel.on("changed.owl.carousel", function (event) {
          var currentSlide = event.item.index;
          var step = Math.min(currentSlide, totalSteps - 1); 
          var percentage = (step / (totalSteps - 1)) * 100;
          $(".progress-indicator").css("left", percentage + "%");
        });
      

    

    // project carousel

    $(".project .owl-carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 2,
        nav: false,
        loop: true,
        dots: true,
        dotsData: true,
        responsive: {
            0: {
                items: 1
            },
            485: {
                items: 1
            },
            728: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    });

    // testimonial carousel

    $(".testimonial .owl-carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            485: {
                items: 1
            },
            728: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    // partner carousel

    $(".partner .owl-carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 7,
        nav: false,
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 3
            },
            485: {
                items: 5
            },
            728: {
                items: 6
            },
            1200: {
                items: 7
            }
        }
    });

    // scroll to top

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 700) {
            $('.scroll-top').fadeIn(400);
        } else {
            $('.scroll-top').fadeOut(400);
        }
    });
    $('.scroll-top').click(function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

});
