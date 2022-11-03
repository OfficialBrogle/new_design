/*CAROUSEL*/

Slider.start({
    fadeSpeed: 700,
    delayTime: 2500
});

/* ZVĚTŠENÍ PRVNÍHO PÍSMENA VE SLOVĚ */

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}