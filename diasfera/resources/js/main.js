$(document).ready(function () {
    $('.gotowiec-galeria__slider').slick({
        variableWidth: true,
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    variableWidth: true,
                    slidesToShow: 1
                }
            }
        ]
    });
});