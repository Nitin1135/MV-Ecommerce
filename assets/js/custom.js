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

// product cart plus minus 
// $(document).ready(function() {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
//   });



// products view slide zoom 

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 8,
        },
    }
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    },
});
// change carousel item height
// gallery-top
let productCarouselTopWidth = $('.gallery-top').outerWidth();
$('.gallery-top').css('height', productCarouselTopWidth);

// gallery-thumbs
let productCarouselThumbsItemWith = $('.gallery-thumbs .swiper-slide').outerWidth();
$('.gallery-thumbs').css('height', productCarouselThumbsItemWith);

// activation zoom plugin
var $easyzoom = $('.easyzoom').easyZoom();




// coustomer review 

let rateBox = Array.from(document.querySelectorAll(".rate-box"));
let globalValue = document.querySelector(".global-value");
let two = document.querySelector(".two");
let totalReviews = document.querySelector(".total-reviews");
let reviews = {
  5: 0,
  4: 0,
  3: 0,
  2: 0,
  1: 0,
};
updateValues();

function updateValues() {
  rateBox.forEach((box) => {
    let valueBox = rateBox[rateBox.indexOf(box)].querySelector(".value");
    let countBox = rateBox[rateBox.indexOf(box)].querySelector(".count");
    let progress = rateBox[rateBox.indexOf(box)].querySelector(".progress");
    console.log(typeof reviews[valueBox.innerHTML]);
    countBox.innerHTML = nFormat(reviews[valueBox.innerHTML]);

    let progressValue = Math.round(
      (reviews[valueBox.innerHTML] / getTotal(reviews)) * 100
    );
    progress.style.width = `${progressValue}%`;
  });
  totalReviews.innerHTML = getTotal(reviews);
  finalRating();
}
function getTotal(reviews) {
  return Object.values(reviews).reduce((a, b) => a + b);
}

document.querySelectorAll(".value").forEach((element) => {
  element.addEventListener("click", () => {
    let target = element.innerHTML;
    reviews[target] += 1;
    updateValues();
  });
});

function finalRating() {
  let final = Object.entries(reviews)
    .map((val) => val[0] * val[1])
    .reduce((a, b) => a + b);
    // console.log(typeof parseFloat(final / getTotal(reviews)).toFixed(1));
  let ratingValue = nFormat(parseFloat(final / getTotal(reviews)).toFixed(1));
  globalValue.innerHTML = ratingValue;
  two.style.background = `linear-gradient(to right, #FFD600 ${
    (ratingValue / 5) * 100
  }%, transparent 0%)`;
}
// #66bb6a

function nFormat(number) {
  if (number >= 1000 && number < 1000000) {
    return `${number.toString().slice(0, -3)}k`;
  } else if (number >= 1000000 && number < 1000000000) {
    return `${number.toString().slice(0, -6)}m`;
  } else if (number >= 1000000000) {
    return `${number.toString().slice(0, -9)}md`;
  } else if (number === "NaN") {
    return `0.0`;
  } else {
    return number;
  }
}
