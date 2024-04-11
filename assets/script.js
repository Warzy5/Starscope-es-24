$(window).scroll(function() {

    var scrollPos = $(this).scrollTop() / 15;
    //console.log(scrollPos);
    $('.acceuil').css({
        'background-size': 100 + scrollPos + '%'
    })
})