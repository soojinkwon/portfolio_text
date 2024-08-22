$(document).ready(function () {

    $('#fullpage').fullpage({
        anchors: ['menu1', 'menu2', 'menu3', 'menu4', 'menu5'],
        /* navigation: true, */
        /* navigationPosition: 'left', */
        /* navigationTooltips: ['intro', 'Works', 'Graphic', 'Technology'], */
        showActiveTooltip: true,
        responsiveWidth: 1024, //반응형 옵션 1024이하에서 기본 스크롤
        autoScrolling: true,
        scrollHorizontally: true,
        onLeave: function (origin, destination, direction, trigger) {
            //var origin = this;

            //구역 5에 도착
            /* if (destination == 5) {
                $("#fp-nav").fadeOut();
            } else {
                $("#fp-nav").fadeIn();
            } */


        }
    });


    //work

    const work = new Swiper(".work", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20, // 슬라이드 사이 여백
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼
            prevEl: '.swiper-button-prev', // 이전 버튼
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });

    //graphic
    const graphic = new Swiper(".graphic", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20, // 슬라이드 사이 여백
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼
            prevEl: '.swiper-button-prev', // 이전 버튼
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });



});