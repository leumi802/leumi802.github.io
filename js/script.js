$(document).ready(function() {
    $('#main').addClass('active');

    $('.navbar li a').click(function(event) {
        event.preventDefault(); 

        var target = $(this).attr('href');

        $('.content > div').removeClass('active');
        $(target).addClass('active');

        $('.navbar li a').removeClass('active');
        $(this).addClass('active');

        if ($(window).width() <= 700) {
            $('.navbar').slideUp();
        }
    });

    $('a.home-link').click(function(event) {
        event.preventDefault();

        $('.content > div').removeClass('active');
        $('#main').addClass('active');

        $('.navbar li a').removeClass('active');
        $('.navbar li:nth-child(1) a').addClass('active');

        if ($(window).width() <= 700) {
            $('.navbar').slideUp();
        }
    });

    $('.navbar-toggle').click(function() {
        $('.navbar').slideToggle();
    });

    $(window).resize(function() {
        if ($(window).width() > 700) {
            $('.navbar').show(); 
        } else {
            $('.navbar').hide(); 
        }
    });
});