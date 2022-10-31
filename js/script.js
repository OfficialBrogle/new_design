/*var triple = $('.triple'),
    style = {
        position: 'relative'
    };




triple.css(style);

triple.on('click', function() {
    $(this).animate({ left: 1000 }, 2000).fadeOut(),
        

});*/





var treti = $('.left li').eq(2);
var posledni = $('.left li:last-child');

$('.left li').addClass('oznaceny');

var selected = $('.left li a')

$(selected).on('click', function() {
    $(selected).removeClass('active');
    $(this).toggleClass('active');
    event.preventDefault();
})

//MENU BUTTON

function myFunction(x) {
    x.classList.toggle("change");
}

//MENU DROPDOWN

var menu = $('.hidden-menu');
var menuClick = $('.container');
var menuLi = $('.hidden-content');

menuClick.on('click', function() {
    menuLi.toggleClass('function')
});

// IMG CLICK

var overlay = $('<div/>', { id: 'overlay' });
overlay.appendTo('body').hide();

$('.float-right').find('a').on('click', function(event) {

    var href = $(this).attr('href'),
        image = $('<img>', { src: href, alt: 'SVG meh' });

    overlay.html(image).show();

    event.preventDefault();
});

overlay.on('click', function() {
    overlay.hide()
});

$(document).on('keyup', function() {
    if (event.which === 27) overlay.hide();
});