"use strict";

var cover = $('#cover'),
    covers = $('.fadecovers');
covers.children(':not(:last)').hide();
var Slider = {
  intervalID: null,
  running: false,
  config: {
    fadeSpeed: 1500,
    delayTime: 3000
  },
  set: function set(id) {
    this.intervalID = id;
  },
  get: function get() {
    return this.intervalID;
  },
  start: function start(settings) {
    $.extend(Slider.config, settings);
    this.intervalID = setInterval(function () {
      covers.children(':last').fadeOut(Slider.config.fadeSpeed, function () {
        $(this).prependTo(covers);
      }).prev().fadeIn(Slider.config.fadeSpeed);
    }, Slider.config.delayTime);
    this.running = true;
  },
  pause: function pause() {
    clearInterval(this.intervalID);
    this.intervalID = null;
    this.running = false;
  },
  resume: function resume() {
    if (!this.intervalID) this.start();
  },
  toggle: function toggle() {
    if (this.running) this.pause();else this.resume();
  }
};
covers.on('click', function () {
  Slider.toggle();
});
/*ŠIPKY*/

/*
var arrowRight = $('.controls a');


*/

var arrows = $('.controls'),
    arrowRight = $('.rightArrow a'),
    arrowLeft = $('.leftArrow a');
arrowRight.on('click', function (event) {
  covers.children(':last').fadeOut(750).prev().fadeIn();
  event.preventDefault();
});
arrowLeft.on('click', function (event) {
  //covers.children(':first-child').prepend().fadeOut(750) && covers.children(':first-child').fadeIn(750);
  event.preventDefault();
  covers.children(':first-child').appendTo(covers).fadeIn(750);
});