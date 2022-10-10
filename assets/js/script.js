// Paralax
$(window).scroll(function () {

    let wScroll = $(this).scrollTop();
    // console.log(wScroll);

    $('.jumbroton img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbroton h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbroton p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });

});