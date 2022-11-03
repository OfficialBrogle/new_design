/*var triple = $('.triple'),
    style = {
        position: 'relative'
    };

triple.css(style);

triple.on('click', function() {
    $(this).animate({ left: 1000 }, 2000).fadeOut(),  

});*/

/*Překlikávání stránek*/
/*var treti = $('.left li').eq(2);
var posledni = $('.left li:last-child');

$('.left li').addClass('oznaceny');

var selected = $('.left li a')

$(selected).on('click', function() {
    $(selected).removeClass('active');
    $(this).toggleClass('active');
    //event.preventDefault();
})*/


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

// MEH SVG CLICK

var overlay = $('<div/>', { id: 'overlay' });
overlay.appendTo('body').hide();

$('.float-right').find('a').on('click', function(event) {

    var href = $(this).attr('href'),
        image = $('<img>', { src: href, alt: 'SVG meh' });

    overlay.html(image).fadeIn(300);

    event.preventDefault();
});

overlay.on('click', function() {
    overlay.fadeOut(300)
});

$(document).on('keyup', function() {
    if (event.which === 27) overlay.fadeOut(300);
});

/*SCROLL SLOWER*/

var menu = $('.inline-flex'),
    menuLinks = menu.find('a');

menuLinks.on('click', function(event) {

    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    event.preventDefault();
});

/*BACK TO TOP*/

var backToTop = $('<a>', {
    href: '#home',
    class: 'back-to-top',
    html: ' <img src="img/up-arrow.png" alt="">'
});

backToTop
    .hide()
    .appendTo('body')
    .on('click', function() {
        $('html,body').animate({ scroollTop: 0 }, 1000);

    });

var win = $(window);
win.on('scroll', function(event) {
    if (win.scrollTop() >= 1000) backToTop.fadeIn();
    else backToTop.hide();

});

/*PŘILÉTNUTÍ ZE STRAN V ABOUT*/

var newGallery = $('.inline-flex');
//fadeClass = 'fadeIn' + aside.data('from').capitalize();

newGallery.hide();


$('.inline-flex:odd').show().addClass('fadeInRight');
$('.inline-flex:even').show().addClass('fadeInLeft')