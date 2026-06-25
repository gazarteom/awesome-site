$(document).ready(function() {

    // ==================== ГАМБУРГЕР МЕНЮ ====================
    $('#hamburger').on('click', function() {
        $('#myTopnav').toggleClass('responsive');
        $('#myTopnav ul').toggleClass('show');
    });

    // Закрывать меню при клике на ссылку (на мобильных)
    $('#myTopnav ul li a').on('click', function() {
        if (window.innerWidth <= 992) {
            $('#myTopnav').removeClass('responsive');
            $('#myTopnav ul').removeClass('show');
        }
    });

    // ==================== СЛАЙДЕР ОТЗЫВОВ ====================
    let currentReview = 0;
    const reviews = $('.review-card');
    const controls = $('.control-item');

    function showReview(index) {
        reviews.removeClass('active');
        controls.removeClass('active');

        $(reviews[index]).addClass('active');
        $(controls[index]).addClass('active');
    }

    // Клик по точкам управления
    controls.on('click', function() {
        currentReview = $(this).index();
        showReview(currentReview);
    });

    // Автопереключение отзывов (каждые 5 секунд)
    setInterval(function() {
        currentReview = (currentReview + 1) % reviews.length;
        showReview(currentReview);
    }, 5000);

    // Показываем первый отзыв при загрузке
    if (reviews.length > 0) {
        showReview(0);
    }

});
