// About
// $(window).on('load', function () {
//     $('.pLeft').addClass('pShow');
//     $('.pRight').addClass('pShow');
// });


// Parallax
$(window).scroll(function () {

    let wScroll = $(this).scrollTop();
    // console.log(wScroll);

    // About
    if (wScroll > $('#about').offset().top - 300) {
        $('.pLeft').addClass('pShow');
        $('.pRight').addClass('pShow');
    }

    // Jumbotron
    $('.jumbroton img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbroton h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbroton p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });


    // Project
    if (wScroll > $('#project').offset().top - 250) {
        $('#project .card').each(function (i) {
            setTimeout(function () {
                $('#project .card').eq(i).addClass('show');
            }, 200 * (i + 1))
        });

    }

});