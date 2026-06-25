$(document).ready(function() {
    let currentSlide = 0;
    let isBusy = false;

    // Разнообразные фото для первого слайдера
    const slides = [
        'img/nasiraboti.jpeg',      // Новое фото, которое ты сохранил
        'img/gorod.jpg',            // Город
        'img/cveti.jpg',            // Цветы
        'img/portfolio/2.jpg',      // Архитектура
        'img/portfolio/6.jpg'       // Другое фото из портфолио
    ];

    // Устанавливаем первую картинку
    $('.slider-image').css('background-image', `url('${slides[0]}')`);

    $('.slider-arrow').on('click', function(e) {
        if (isBusy) return;

        const that = $(e.currentTarget);
        const slidesCount = slides.length - 1;

        if (that.hasClass('right')) {
            currentSlide++;
            if (currentSlide > slidesCount) currentSlide = 0;
        } else {
            currentSlide--;
            if (currentSlide < 0) currentSlide = slidesCount;
        }

        isBusy = true;

        $('.slider-image').animate({ opacity: 0 }, 350, function() {
            $(this).css('background-image', `url('${slides[currentSlide]}')`);
            $(this).animate({ opacity: 1 }, 350, function() {
                isBusy = false;
            });
        });
    });
});
