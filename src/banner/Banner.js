/**
 * Created by guntars on 16/02/15.
 */
define([
    'widget/Constructor',
    'templating/parser!./_banner.html'
], function(Constructor, template) {
    'use strict';
    return Constructor.extend({

        current:     2, 	// index of current slide
        bgincrement: 30,	// increment the bg position (parallax effect) when sliding
        autoplay:    true,// slideshow on / off
        interval:    4000,

        classToLeft:    'da-slide-toleft',
        classFromLeft:  'da-slide-fromleft',
        classToRight:   'da-slide-toright',
        classFromRight: 'da-slide-fromright',
        classCurrent:   'da-slide-current',
        dotsCurrent:    'da-dots-current',
        dotsDisabled:   'da-dots-disabled',

        template: template,

        init(data) {

            this.current = (data.current) ? Number(data.current) : this.current;
            this.bgincrement = (data.bgincrement) ? Number(data.bgincrement) : this.bgincrement;
            this.interval = (data.interval) ? Number(data.interval) : this.interval;
            this.autoplay = (data.autoplay) ? JSON.parse(data.autoplay) : this.autoplay;

            this.slides = this.data.slides;
            this.setDots();
            this.setDirection('toLeft');
            this.slides[this.current].class = this.classCurrent;
            this.dots[this.current].class = this.dotsCurrent;

            this.play();
        },
        setDots () {
            this.dots = this.data.dots = [];
            for (var i = 0; i < this.slides.length; i++) {
                this.dots.push({});
            }
        },
        play () {
            this.stop();
            if (this.autoplay === true) {
                this._interval = setInterval(()=> {
                    this.animateSlides();
                }, this.interval);
            }
        },
        stop () {
            if (this._interval) {
                clearInterval(this._interval);
                this._interval = false;
            }
        },
        setDirection (direction) {
            this.direction = direction;
            if (direction === 'toLeft') {
                this.classFrom = this.classToLeft;
                this.classTo = this.classFromRight;
            } else if (direction === 'toRight') {
                this.classFrom = this.classToRight;
                this.classTo = this.classFromLeft;
            }

        },
        animateSlides (next) {
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

                    this.eventBus.publish('moveBackground', next * this.bgincrement);
                    this.eventBus.once('animationEnd', function() {
                        this.slides[next].class = this.classCurrent;
                        this.slides[index].class = 'disabled';
                        this.dots[next].class = this.dotsCurrent;
                        this.current = next;
                    }.bind(this));
                }
            }
        },
        playOnce(direction, index) {
            if (direction) {
                this.setDirection(direction);
            }
            this.stop();
            this.animateSlides(index);
            this.play();
        },
        elReady: {
            slider(el) {
                this.eventBus.subscribe('moveBackground', (pos)=> {
                    el.setStyle('background-position', pos + '% 0%');
                });
            }
        },
        events:  {
            slides: [
                {
                    name: 'webkitAnimationEnd animationend',
                    action(e) {
                        if (e.animationName.indexOf('fromRightAnim3') !== -1 ||
                            e.animationName.indexOf('fromLeftAnim3') !== -1) {
                            this.eventBus.publish('animationEnd');
                            this.animation = false;
                        }
                    }
                }
            ],
            prev:   [
                {
                    name: 'click',
                    action (e) {
                        e.preventDefault();
                        this.playOnce('toRight');
                    }
                }
            ],
            next:   [
                {
                    name: 'click',
                    action (e) {
                        e.preventDefault();
                        this.playOnce('toLeft');
                    }
                }
            ],
            dots:   [
                {
                    name: 'click',
                    action (e, el, data) {
                        var index = this.dots.indexOf(data);
                        this.playOnce(false, index);

                    }
                }
            ]
        }
    });
});