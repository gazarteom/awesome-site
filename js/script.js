// Ждем полной загрузки страницы
$(document).ready(function() {

    // --- 1. МОБИЛЬНОЕ МЕНЮ ---
    $('#hamburger').click(function() {
        $('#myTopnav').toggleClass('responsive');
    });

    // --- 2. ПЛАВНЫЙ СКРОЛЛ (обновлено под 6 лабу) ---
    const menuList = document.querySelectorAll('.menu-element');

    menuList.forEach(function(element) {
        element.addEventListener('click', function(event) {
            const elementLink = element.dataset.link;

            if (elementLink) {
                event.preventDefault();
                const targetElement = document.getElementById(elementLink);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }

            $('#myTopnav').removeClass('responsive');
        });
    });

    // --- 3. МОДАЛЬНОЕ ОКНО (ПОРТФОЛИО) ---
    $('.portfolio-item').click(function() {
        let bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $('#modal-img').attr('src', bg);
        $('#modal-overlay').fadeIn();
    });

    $('.close-btn, #modal-overlay').click(function(event) {
        if(event.target.id !== 'modal-img') {
            $('#modal-overlay').fadeOut();
        }
    });

    // --- 4. СЛАЙДЕР (ОТЗЫВЫ) ---
    $('.control-item').click(function() {
        let index = $(this).index();
        $('.control-item').removeClass('active');
        $(this).addClass('active');
        $('.review-card').removeClass('active').eq(index).addClass('active');
    });

});
