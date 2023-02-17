// Header top sticky 
$(window).scroll(function(){
    if ($(this).scrollTop() > 120) {
        $('.header-section').addClass('sticky');
    } else {
        $('.header-section').removeClass('sticky');
    }
});


// home page main_slider

$('.main_slider').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// Best saler slider 
$('.best_saler').owlCarousel({
    loop:true,
    dots:false,
    margin:20,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})


// trends_season slider
$('.trends_season').owlCarousel({
    loop:true,
    dots:false,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
})

