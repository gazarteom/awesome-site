// Анимированный счётчик достижений
$(document).ready(function() {
    $('.counter').each(function() {
        const $this = $(this);
        const countTo = parseInt($this.attr('data-end'));

        $({ countNum: 0 }).animate(
            { countNum: countTo },
            {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            }
        );
    });
});
