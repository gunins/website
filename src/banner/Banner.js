/**
 * Created by guntars on 16/02/15.
 */
define([
    'widget/Constructor',
    'templating/parser!./_banner.html',
    './_slideData'
], function (Constructor, template, slideData) {
    'use strict';
    var defaults = {
        current: 2, 	// index of current slide
        bgincrement: 30,	// increment the bg position (parallax effect) when sliding
        autoplay: true,// slideshow on / off
        interval: 4000  // time between transitions
    };
    return Constructor.extend({
        template: template,
        classToLeft: 'da-slide-toleft',
        classFromLeft: 'da-slide-fromleft',
        classToRight: 'da-slide-toright',
        classFromRight: 'da-slide-fromright',
        classCurrent: 'da-slide-current',
        dotsCurrent: 'da-dots-current',
        dotsDisabled: 'da-dots-disabled',
        beforeInit: function () {
            this.data = slideData;
            this.slides = this.data.slider.slides;
            this.setDots();

        },
        setDots: function () {

            this.dots = this.data.dots = [];
            this.slides.forEach(function () {
                this.dots.push({class: 'disabled'});
            }.bind(this));
        },
        init: function () {
            this.autoplay = defaults.autoplay;
            this.setDirection('toLeft');
            this.current = defaults.current;
            this.slides[this.current].class = this.classCurrent;
            this.dots[this.current].class = this.dotsCurrent;

            this.play();
        },
        play: function () {
            this.stop();
            if (this.autoplay === true) {
                this._interval = setInterval(function () {
                    this.animateSlides();
                }.bind(this), defaults.interval);
            }
        },
        stop: function () {
            if (this._interval) {
                clearInterval(this._interval);
                this._interval = false;
            }
        },
        setDirection: function (direction) {
            this.direction = direction;
            if (direction === 'toLeft') {
                this.classFrom = this.classToLeft;
                this.classTo = this.classFromRight;
            } else if (direction === 'toRight') {
                this.classFrom = this.classToRight;
                this.classTo = this.classFromLeft;
            }

        },
        animateSlides: function (next) {
            if (!this.animation) {
                this.animation = true;
                var index = this.current;
                if (!next) {
                    if (this.direction === 'toLeft') {
                        next = (this.slides.length > index + 1) ? index + 1 : 0;
                    } else {
                        next = (index - 1 >= 0) ? index - 1 : this.slides.length - 1;

                    }
                }
                if (index !== next) {
                    this.slides[index].class = this.classFrom;
                    this.slides[next].class = this.classTo;

                    this.dots[index].class = this.dotsDisabled;
                    this.dots[next].class = this.dotsCurrent;

                    this.eventBus.publish('moveBackground', next * defaults.bgincrement);
                    this.eventBus.once('animationEnd', function () {
                        this.slides[next].class = this.classCurrent;
                        this.slides[index].class = 'disabled';
                        this.current = next;
                    }.bind(this));
                }
            }
        },
        playOnce: function (direction, index) {
            if (direction) {
                this.setDirection(direction);
            }
            this.stop();
            this.animateSlides(index);
            this.play();
        },
        elReady: {
            slider: function (el) {
                this.eventBus.subscribe('moveBackground', function (pos) {
                    el.setStyle('background-position', pos + '% 0%');
                }.bind(this))
            }
        },
        events: {
            slides: [
                {
                    name: 'webkitAnimationEnd animationend',
                    action: function (e) {
                        if (e.animationName.indexOf('fromRightAnim3') !== -1 ||
                            e.animationName.indexOf('fromLeftAnim3') !== -1) {
                            this.eventBus.publish('animationEnd');
                            this.animation = false;
                        }
                    }
                }
            ],
            prev: [
                {
                    name: 'click',
                    action: function (e) {
                        e.preventDefault();
                        this.playOnce('toRight');
                    }
                }
            ],
            next: [
                {
                    name: 'click',
                    action: function (e) {
                        e.preventDefault();
                        this.playOnce('toLeft');
                    }
                }
            ],
            dots: [
                {
                    name: 'click',
                    action: function (e, el, data) {
                        var index = this.dots.indexOf(data);
                        this.playOnce(false, index);

                    }
                }
            ]
        }
    });
});