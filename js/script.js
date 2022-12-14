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


/* CONFIRM password FORM*/
var submit = $('#submit'),
    notCorrect = {
        border: '2px solid #ff3d3d'
    };
var nameForm = $('#name');


$(function() {
    $(submit).click(function() {
        var password = $('#password').val(),
            confirm = $('#confirm_password').val();

        if (password != confirm) {
            $('#confirm_password').css(notCorrect);
            return false
        } else {
            $('#confirm_password').remove(notCorrect);
            return true
        }
    })
});

/*CONTACT CIRCLE SVG*/

var progress = document.querySelector('.progress'),
    textarea = document.querySelector('textarea'),
    counter = document.querySelector('.counter');

var pathLength = progress.getAttribute('r') * 2 * Math.PI,
    textLength = 500,
    warn = Math.floor(textLength * (2 / 3)),
    danger = Math.floor(textLength * (4 / 5));


progress.style.strokeDasharray = pathLength + 'px';
progress.style.strokeDashoffset = pathLength + 'px';

textarea.addEventListener('input', function(event) {

    var len = textarea.value.length,
        per = len / textLength;


    if (len <= textLength) {
        let newOffset = pathLength - (pathLength * per) + 'px';
        progress.style.strokeDashoffset = newOffset;

        progress.classList.toggle('warn', len > warn && len < danger);
        progress.classList.toggle('danger', len >= danger);
        progress.classList.toggle('tragedy', len == textLength);
    }

    counter.textContent = textLength - len;
    counter.classList.toggle('danger', len >= textLength);

})