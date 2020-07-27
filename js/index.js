

$(function () {
    $('.hero__iconnav, .icon__close').on('click', function () {
        $('.header__intro').toggleClass('open');
        $('.background--body').toggleClass('opacity');
    })
});
