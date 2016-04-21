define('templating/parser',{load: function(id){throw new Error("Dynamic load not allowed: " + id);}});

define('templating/parser!navBar/_navBar.html',["coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e11","tagName":"style","data":{"style":".navbar-default.tid_14612376833981{background:#fff;border:0;border-radius:0;border-bottom:5px solid #E44D26}.navbar-default.tid_14612376833981 .navbar-brand.tid_14612376833981{font-size:3rem;line-height:4rem}.navbar-default.tid_14612376833981 .navbar-brand.tid_14612376833981 span.tid_14612376833981{color:#E44D26}.navbar-default.tid_14612376833981 .navbar-nav.tid_14612376833981>li.tid_14612376833981 a.tid_14612376833981{border-top:solid 4px #fff;font-size:1.6rem;padding:22px;font-weight:400}.navbar-default.tid_14612376833981 .navbar-nav.tid_14612376833981>li.active.tid_14612376833981>a.tid_14612376833981,.navbar-default.tid_14612376833981 .navbar-nav.tid_14612376833981>li.tid_14612376833981 a.tid_14612376833981:focus,.navbar-default.tid_14612376833981 .navbar-nav.tid_14612376833981>li.tid_14612376833981 a.tid_14612376833981:hover{border-top:4px solid #E44D26;background:#E44D26;color:#fff}@media (max-width:768px){.navbar-default.tid_14612376833981 .navbar-brand.tid_14612376833981{font-size:2rem;line-height:3rem}.navbar-default.tid_14612376833981 .navbar-collapse.tid_14612376833981{opacity:1;height:205px;transition:all 1s}.navbar-default.tid_14612376833981 .navbar-collapse.collapse.tid_14612376833981{opacity:0;display:block;height:0}}"},"template":"<div></div>","children":[]},{"id":"e12","tagName":"pl","data":{"dataset":{},"tplSet":{"type":"pl","name":"navbarBtn"},"attribs":{"type":"button","class":"tid_14612376833981 navbar-toggle collapsed"},"name":"navbarBtn","type":"pl","tag":"button"},"template":"<button>\n                <span class=\"tid_14612376833981 sr-only\">Toggle navigation</span>\n                <span class=\"tid_14612376833981 icon-bar\"></span>\n                <span class=\"tid_14612376833981 icon-bar\"></span>\n                <span class=\"tid_14612376833981 icon-bar\"></span>\n            </button>","children":[]},{"id":"e15","data":{"dataset":{},"tplSet":{"name":"navBar"},"attribs":{"class":"tid_14612376833981 collapse navbar-collapse"},"name":"navBar","type":"div"}},{"id":"e14","tagName":"bd","data":{"dataset":{},"tplSet":{"tag":"li","update":"true","bind":{"class":"class"}},"attribs":{"class":"tid_14612376833981"},"name":"links","type":"bd","tag":"li","bind":"links"},"template":"<li>\n                    <a id=\"e13\" style=\"display:none\"></a>\n                </li>","children":[{"id":"e13","tagName":"bd","data":{"dataset":{},"tplSet":{"tag":"a","bind":{"href":"href"}},"attribs":{"class":"tid_14612376833981"},"name":"link","type":"bd","tag":"a","bind":"link"},"template":"<a></a>","children":[]}]}],"template":"<nav class=\"tid_14612376833981 navbar navbar-default\" role=\"navigation\">\n    \n    <div class=\"tid_14612376833981 container\">\n        <div class=\"tid_14612376833981 navbar-header\">\n            <button id=\"e12\" style=\"display:none\"></button>\n            <a class=\"tid_14612376833981 navbar-brand\" href=\"index.html\">Stone<span class=\"tid_14612376833981\">Wall</span>.</a>\n        </div>\n\n        <div class=\"tid_14612376833981 collapse navbar-collapse\" id=\"e15\">\n            <ul class=\"tid_14612376833981 nav navbar-right navbar-nav\">\n                <li id=\"e14\" style=\"display:none\"></li>\n            </ul>\n        </div>\n    </div>\n</nav>","templateId":"tid_14612376833981"};});

/**
 * Created by guntars on 28/02/15.
 */
define('navBar/NavBar',[
    'widget/Constructor',
    'templating/parser!./_navBar.html'
], function (Constructor, template) {
    'use strict';

    return Constructor.extend({
        template: template,
        match: function (match) {
            match('/:id').to(function (id) {
                this.data.links.forEach(function (link) {
                    if (link.name === id) {
                        link.class = 'active';
                    } else {
                        link.class = 'inactive';
                    }
                });
            }.bind(this))
        },
        elReady: {
            navBar: function (el) {
                var colapsed = true;
                this.eventBus.subscribe('collapse', function () {
                    if (colapsed) {
                        el.removeClass('collapse');
                        colapsed = false;
                    } else {
                        el.addClass('collapse');
                        colapsed = true;
                    }
                }.bind(this));
            }
        },
        events: {
            navbarBtn: [
                {
                    name: 'click',
                    action: function () {
                        this.eventBus.publish('collapse');
                    }
                }
            ]
        }
    });
});

define('templating/parser!banner/_banner.html',["coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e16","tagName":"style","data":{"style":".da-slider.tid_14612376834262{width:100%;height:450px;position:relative;overflow:hidden;box-shadow:0 3px 3px rgba(0,0,0,.2)}.da-slider-frame.tid_14612376834262{width:100%;height:100%;position:relative;background:url(images/main-banner.jpg);transition:background-position 1s ease-out .3s}.da-slide.tid_14612376834262{position:absolute;width:100%;height:100%;top:0;left:0;font-family:BebasNeueRegular,'Arial Narrow',Arial,sans-serif;text-align:left}.da-slide-current.tid_14612376834262{z-index:1000}.da-slider-fb.tid_14612376834262 .da-slide.tid_14612376834262{left:100%}.da-slider-fb.tid_14612376834262 .da-slide.da-slide-current.tid_14612376834262{left:0}.da-slide.tid_14612376834262 .da-img.tid_14612376834262,.da-slide.tid_14612376834262 .da-link.tid_14612376834262,.da-slide.tid_14612376834262 h2.tid_14612376834262,.da-slide.tid_14612376834262 p.tid_14612376834262{position:absolute;opacity:0;left:110%}.da-slide.tid_14612376834262 h2.tid_14612376834262,.da-slide.tid_14612376834262 p.tid_14612376834262{background:rgba(0,0,0,.6);padding:5px 10px}.da-slider-fb.tid_14612376834262 .da-slide.tid_14612376834262 .da-link.tid_14612376834262,.da-slider-fb.tid_14612376834262 .da-slide.tid_14612376834262 h2.tid_14612376834262,.da-slider-fb.tid_14612376834262 .da-slide.tid_14612376834262 p.tid_14612376834262{left:10%;opacity:1}.da-slider-fb.tid_14612376834262 .da-slide.tid_14612376834262 .da-img.tid_14612376834262{left:60%;opacity:1}.da-slide.tid_14612376834262 h2.tid_14612376834262{color:#fff;font-size:66px;top:60px;white-space:nowrap;z-index:10;text-shadow:1px 1px 1px rgba(0,0,0,.1);font-family:Economica,Arial,sans-serif;font-weight:700}.da-slide.tid_14612376834262 p.tid_14612376834262{width:45%;top:175px;color:#fff;font-size:24px;line-height:30px;overflow:hidden;font-family:Economica,Arial,sans-serif;font-weight:400;font-style:italic}.da-slide.tid_14612376834262 .da-img.tid_14612376834262{text-align:center;width:30%;top:40px;height:320px;line-height:320px;left:110%}.da-slide.tid_14612376834262 .da-img.tid_14612376834262 img.tid_14612376834262{height:100%}.da-slide.tid_14612376834262 .da-link.tid_14612376834262{bottom:30px;border-radius:30px;box-shadow:0 1px 1px rgba(0,0,0,.1);color:#fff;text-shadow:1px 1px 1px rgba(0,0,0,.2);border:8px solid rgba(255,255,255,.8);padding:2px 20px 0;font-size:18px;line-height:30px;text-align:center;background:rgba(255,255,255,.2)}.da-slide.tid_14612376834262 .da-link.tid_14612376834262:hover{background:rgba(255,255,255,.3)}.da-dots.tid_14612376834262{width:100%;position:absolute;text-align:center;left:0;bottom:20px;z-index:2000;-moz-user-select:none;-webkit-user-select:none}.da-dots.tid_14612376834262 span.tid_14612376834262{display:inline-block;position:relative;width:12px;height:12px;border-radius:50%;background:#333;margin:3px;cursor:pointer;box-shadow:1px 1px 1px rgba(0,0,0,.1) inset,1px 1px 1px rgba(255,255,255,.6)}.da-dots.tid_14612376834262 span.da-dots-current.tid_14612376834262:after{content:'';width:8px;height:8px;position:absolute;top:2px;left:2px;border-radius:50%;background:#fff;background:linear-gradient(top,#fff 0,#f6f6f6 47%,#ededed 100%)}.da-arrows.tid_14612376834262{-moz-user-select:none;-webkit-user-select:none}.da-arrows.tid_14612376834262 span.tid_14612376834262{position:absolute;top:50%;height:30px;width:30px;border-radius:50%;background:#333;cursor:pointer;z-index:2000;opacity:0;box-shadow:1px 1px 1px rgba(0,0,0,.1) inset,1px 1px 1px rgba(255,255,255,.1);transition:opacity .4s ease-in-out}.da-slider.tid_14612376834262:hover .da-arrows.tid_14612376834262 span.tid_14612376834262{opacity:1}.da-arrows.tid_14612376834262 span.tid_14612376834262:after{content:'';position:absolute;width:20px;height:20px;top:5px;left:5px;background:url(images/arrows.png) top left no-repeat;border-radius:50%;box-shadow:1px 1px 2px rgba(0,0,0,.1)}.da-arrows.tid_14612376834262 span.tid_14612376834262:hover:after{box-shadow:1px 1px 4px rgba(0,0,0,.3)}.da-arrows.tid_14612376834262 span.tid_14612376834262:active:after{box-shadow:1px 1px 1px rgba(255,255,255,.1)}.da-arrows.tid_14612376834262 span.da-arrows-next.tid_14612376834262:after{background-position:top right}.da-arrows.tid_14612376834262 span.da-arrows-prev.tid_14612376834262{left:15px}.da-arrows.tid_14612376834262 span.da-arrows-next.tid_14612376834262{right:15px}.da-slide-current.tid_14612376834262 .da-link.tid_14612376834262,.da-slide-current.tid_14612376834262 h2.tid_14612376834262,.da-slide-current.tid_14612376834262 p.tid_14612376834262{left:10%;opacity:1}.da-slide-current.tid_14612376834262 .da-img.tid_14612376834262{left:60%;opacity:1}.da-slide-fromright.tid_14612376834262 h2.tid_14612376834262{-webkit-animation:fromRightAnim1_tid_14612376834262 .6s ease-in-out .8s both;animation:fromRightAnim1_tid_14612376834262 .6s ease-in-out .8s both}.da-slide-fromright.tid_14612376834262 p.tid_14612376834262{-webkit-animation:fromRightAnim2_tid_14612376834262 .6s ease-in-out .8s both;animation:fromRightAnim2_tid_14612376834262 .6s ease-in-out .8s both}.da-slide-fromright.tid_14612376834262 .da-link.tid_14612376834262{-webkit-animation:fromRightAnim3_tid_14612376834262 .4s ease-in-out 1.2s both;animation:fromRightAnim3_tid_14612376834262 .4s ease-in-out 1.2s both}.da-slide-fromright.tid_14612376834262 .da-img.tid_14612376834262{-webkit-animation:fromRightAnim4_tid_14612376834262 .6s ease-in-out .8s both;animation:fromRightAnim4_tid_14612376834262 .6s ease-in-out .8s both}.da-slide-fromleft.tid_14612376834262 h2.tid_14612376834262{-webkit-animation:fromLeftAnim1_tid_14612376834262 .6s ease-in-out .6s both;animation:fromLeftAnim1_tid_14612376834262 .6s ease-in-out .6s both}.da-slide-fromleft.tid_14612376834262 p.tid_14612376834262{-webkit-animation:fromLeftAnim2_tid_14612376834262 .6s ease-in-out .6s both;animation:fromLeftAnim2_tid_14612376834262 .6s ease-in-out .6s both}.da-slide-fromleft.tid_14612376834262 .da-link.tid_14612376834262{-webkit-animation:fromLeftAnim3_tid_14612376834262 .4s ease-in-out 1.2s both;animation:fromLeftAnim3_tid_14612376834262 .4s ease-in-out 1.2s both}.da-slide-fromleft.tid_14612376834262 .da-img.tid_14612376834262{-webkit-animation:fromLeftAnim4_tid_14612376834262 .6s ease-in-out .6s both;animation:fromLeftAnim4_tid_14612376834262 .6s ease-in-out .6s both}.da-slide-toright.tid_14612376834262 h2.tid_14612376834262{-webkit-animation:toRightAnim1_tid_14612376834262 .6s ease-in-out .6s both;animation:toRightAnim1_tid_14612376834262 .6s ease-in-out .6s both}.da-slide-toright.tid_14612376834262 p.tid_14612376834262{-webkit-animation:toRightAnim2_tid_14612376834262 .6s ease-in-out .3s both;animation:toRightAnim2_tid_14612376834262 .6s ease-in-out .3s both}.da-slide-toright.tid_14612376834262 .da-link.tid_14612376834262{-webkit-animation:toRightAnim3_tid_14612376834262 .4s ease-in-out both;animation:toRightAnim3_tid_14612376834262 .4s ease-in-out both}.da-slide-toright.tid_14612376834262 .da-img.tid_14612376834262{-webkit-animation:toRightAnim4_tid_14612376834262 .6s ease-in-out both;animation:toRightAnim4_tid_14612376834262 .6s ease-in-out both}.da-slide-toleft.tid_14612376834262 h2.tid_14612376834262{-webkit-animation:toLeftAnim1_tid_14612376834262 .6s ease-in-out both;animation:toLeftAnim1_tid_14612376834262 .6s ease-in-out both}.da-slide-toleft.tid_14612376834262 p.tid_14612376834262{-webkit-animation:toLeftAnim2_tid_14612376834262 .6s ease-in-out .3s both;animation:toLeftAnim2_tid_14612376834262 .6s ease-in-out .3s both}.da-slide-toleft.tid_14612376834262 .da-link.tid_14612376834262{-webkit-animation:toLeftAnim3_tid_14612376834262 .6s ease-in-out .6s both;animation:toLeftAnim3_tid_14612376834262 .6s ease-in-out .6s both}.da-slide-toleft.tid_14612376834262 .da-img.tid_14612376834262{-webkit-animation:toLeftAnim4_tid_14612376834262 .6s ease-in-out .5s both;animation:toLeftAnim4_tid_14612376834262 .6s ease-in-out .5s both}@media (max-width:768px){.da-slider.tid_14612376834262{height:300px}}@media (max-width:768px){.da-slide.tid_14612376834262 .da-img.tid_14612376834262 img.tid_14612376834262{display:none}}@media (max-width:768px){.da-slide.tid_14612376834262 h2.tid_14612376834262{font-size:30px;top:15px}}@media (max-width:1200px){.da-slide.tid_14612376834262 p.tid_14612376834262{font-size:18px;line-height:24px}}@media (max-width:768px){.da-slide.tid_14612376834262 p.tid_14612376834262{top:100px;width:80%}}@media (max-width:768px){.da-slide.tid_14612376834262 .da-link.tid_14612376834262{font-size:12px;border:3px solid rgba(255,255,255,.8);border-radius:8px;line-height:20px;padding:2px 10px 0;bottom:15px}}@-webkit-keyframes fromRightAnim1_tid_14612376834262{0%{left:110%;opacity:0}100%{left:10%;opacity:1}}@-webkit-keyframes fromRightAnim2_tid_14612376834262{0%{left:110%;opacity:0}100%{left:10%;opacity:1}}@-webkit-keyframes fromRightAnim3_tid_14612376834262{0%{left:110%;opacity:0}1%{left:10%;opacity:0}100%{left:10%;opacity:1}}@-webkit-keyframes fromRightAnim4_tid_14612376834262{0%{left:110%;opacity:0}100%{left:60%;opacity:1}}@keyframes fromRightAnim1_tid_14612376834262{0%{left:110%;opacity:0}100%{left:10%;opacity:1}}@keyframes fromRightAnim2_tid_14612376834262{0%{left:110%;opacity:0}100%{left:10%;opacity:1}}@keyframes fromRightAnim3_tid_14612376834262{0%{left:110%;opacity:0}1%{left:10%;opacity:0}100%{left:10%;opacity:1}}@keyframes fromRightAnim4_tid_14612376834262{0%{left:110%;opacity:0}100%{left:60%;opacity:1}}@-webkit-keyframes fromLeftAnim1_tid_14612376834262{0%{left:-110%;opacity:0}100%{left:10%;opacity:1}}@-webkit-keyframes fromLeftAnim2_tid_14612376834262{0%{left:-110%;opacity:0}100%{left:10%;opacity:1}}@-webkit-keyframes fromLeftAnim3_tid_14612376834262{0%{left:-110%;opacity:0}1%{left:10%;opacity:0}100%{left:10%;opacity:1}}@-webkit-keyframes fromLeftAnim4_tid_14612376834262{0%{left:-110%;opacity:0}100%{left:60%;opacity:1}}@keyframes fromLeftAnim1_tid_14612376834262{0%{left:-110%;opacity:0}100%{left:10%;opacity:1}}@keyframes fromLeftAnim2_tid_14612376834262{0%{left:-110%;opacity:0}100%{left:10%;opacity:1}}@keyframes fromLeftAnim3_tid_14612376834262{0%{left:-110%;opacity:0}1%{left:10%;opacity:0}100%{left:10%;opacity:1}}@keyframes fromLeftAnim4_tid_14612376834262{0%{left:-110%;opacity:0}100%{left:60%;opacity:1}}@-webkit-keyframes toRightAnim1_tid_14612376834262{0%{left:10%;opacity:1}100%{left:100%;opacity:0}}@-webkit-keyframes toRightAnim2_tid_14612376834262{0%{left:10%;opacity:1}100%{left:100%;opacity:0}}@-webkit-keyframes toRightAnim3_tid_14612376834262{0%{left:10%;opacity:1}99%{left:10%;opacity:0}100%{left:100%;opacity:0}}@-webkit-keyframes toRightAnim4_tid_14612376834262{0%{left:60%;opacity:1}30%{left:55%;opacity:1}100%{left:100%;opacity:0}}@keyframes toRightAnim1_tid_14612376834262{0%{left:10%;opacity:1}100%{left:100%;opacity:0}}@keyframes toRightAnim2_tid_14612376834262{0%{left:10%;opacity:1}100%{left:100%;opacity:0}}@keyframes toRightAnim3_tid_14612376834262{0%{left:10%;opacity:1}99%{left:10%;opacity:0}100%{left:100%;opacity:0}}@keyframes toRightAnim4_tid_14612376834262{0%{left:60%;opacity:1}30%{left:55%;opacity:1}100%{left:100%;opacity:0}}@-webkit-keyframes toLeftAnim1_tid_14612376834262{0%{left:10%;opacity:1}30%{left:15%;opacity:1}100%{left:-50%;opacity:0}}@-webkit-keyframes toLeftAnim2_tid_14612376834262{0%{left:10%;opacity:1}30%{left:15%;opacity:1}100%{left:-50%;opacity:0}}@-webkit-keyframes toLeftAnim3_tid_14612376834262{0%{left:10%;opacity:1}100%{left:-50%;opacity:0}}@-webkit-keyframes toLeftAnim4_tid_14612376834262{0%{left:60%;opacity:1}70%{left:30%;opacity:0}100%{left:-50%;opacity:0}}@keyframes toLeftAnim1_tid_14612376834262{0%{left:10%;opacity:1}30%{left:15%;opacity:1}100%{left:-50%;opacity:0}}@keyframes toLeftAnim2_tid_14612376834262{0%{left:10%;opacity:1}30%{left:15%;opacity:1}100%{left:-50%;opacity:0}}@keyframes toLeftAnim3_tid_14612376834262{0%{left:10%;opacity:1}100%{left:-50%;opacity:0}}@keyframes toLeftAnim4_tid_14612376834262{0%{left:60%;opacity:1}70%{left:30%;opacity:0}100%{left:-50%;opacity:0}}"},"template":"<div></div>","children":[]},{"id":"e22","data":{"dataset":{},"tplSet":{"name":"slider"},"attribs":{"class":"tid_14612376834262 da-slider-frame"},"name":"slider","type":"div"}},{"id":"e21","tagName":"bd","data":{"dataset":{},"tplSet":{"bind":{"class":"class"},"update":"true"},"attribs":{"class":"tid_14612376834262 da-slide"},"name":"slides","type":"bd","tag":"div","bind":"slides"},"template":"<div>\n            <h2 id=\"e17\" style=\"display:none\"></h2>\n\n            <p id=\"e18\" style=\"display:none\"></p>\n            <a id=\"e19\" style=\"display:none\"></a>\n\n            <div class=\"tid_14612376834262 da-img\"><img id=\"e20\" style=\"display:none\"></div>\n        </div>","children":[{"id":"e17","tagName":"bd","data":{"dataset":{},"tplSet":{"tag":"h2"},"attribs":{"class":"tid_14612376834262"},"name":"header","type":"bd","tag":"h2","bind":"header"},"template":"<h2></h2>","children":[]},{"id":"e18","tagName":"bd","data":{"dataset":{},"tplSet":{"tag":"p"},"attribs":{"class":"tid_14612376834262"},"name":"body","type":"bd","tag":"p","bind":"body"},"template":"<p></p>","children":[]},{"id":"e19","tagName":"bd","data":{"dataset":{},"tplSet":{"tag":"a","bind":{"href":"href"}},"attribs":{"class":"tid_14612376834262 da-link"},"name":"link","type":"bd","tag":"a","bind":"link"},"template":"<a></a>","children":[]},{"id":"e20","tagName":"bd","data":{"dataset":{},"tplSet":{"name":"image","type":"bd","bind":{"src":"src","alt":"alt"}},"attribs":{"class":"tid_14612376834262"},"name":"image","type":"bd","tag":"img","bind":"image"},"template":"<img>","children":[]}]},{"id":"e23","tagName":"pl","data":{"dataset":{},"tplSet":{"tag":"span"},"attribs":{"class":"tid_14612376834262 da-arrows-prev"},"name":"prev","type":"pl","tag":"span"},"template":"<span></span>","children":[]},{"id":"e24","tagName":"pl","data":{"dataset":{},"tplSet":{"tag":"span"},"attribs":{"class":"tid_14612376834262 da-arrows-next"},"name":"next","type":"pl","tag":"span"},"template":"<span></span>","children":[]},{"id":"e25","tagName":"bd","data":{"dataset":{},"tplSet":{"tag":"span","bind":{"class":"class"},"update":"true"},"attribs":{"class":"tid_14612376834262"},"name":"dots","type":"bd","tag":"span","bind":"dots"},"template":"<span></span>","children":[]}],"template":"<div class=\"tid_14612376834262 da-slider\">\n    \n\n    <div class=\"tid_14612376834262 da-slider-frame\" id=\"e22\">\n        <div id=\"e21\" style=\"display:none\"></div>\n    </div>\n    <nav class=\"tid_14612376834262 da-arrows\">\n        <span id=\"e23\" style=\"display:none\"></span>\n        <span id=\"e24\" style=\"display:none\"></span>\n    </nav>\n    <nav class=\"tid_14612376834262 da-dots\"><span id=\"e25\" style=\"display:none\"></span></nav>\n\n</div>","templateId":"tid_14612376834262"};});

/**
 * Created by guntars on 16/02/15.
 */
define('banner/Banner',[
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
define('widget/parser',{load: function(id){throw new Error("Dynamic load not allowed: " + id);}});

define('templating/parser!quote/Quote.html',["coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e26","tagName":"style","data":{"style":"blockquote.tid_14612376834823{margin:20px 0;border-left:4px solid #E44D26;background:url(images/bg.png) #efefef}"},"template":"<div></div>","children":[]},{"id":"e27","tagName":"pl","data":{"dataset":{},"tplSet":{"tag":"p"},"attribs":{"class":"tid_14612376834823"},"name":"body","type":"pl","tag":"p"},"template":"<p></p>","children":[]},{"id":"e28","tagName":"pl","data":{"dataset":{},"tplSet":{"tag":"footer"},"attribs":{"class":"tid_14612376834823"},"name":"footer","type":"pl","tag":"footer"},"template":"<footer></footer>","children":[]}],"template":"<blockquote class=\"tid_14612376834823\">\n    \n    <p id=\"e27\" style=\"display:none\"></p>\n    <footer id=\"e28\" style=\"display:none\"></footer>\n</blockquote>","templateId":"tid_14612376834823"};});


define("widget/parser!quote/Quote", ["templating/parser!quote/Quote.html","widget/Constructor"], function(template, Constructor){ return Constructor.extend({template: template});});


define('templating/parser!mediablock/MediaBlock.html',["coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e38","tagName":"style","data":{"style":".media.tid_14612376834885{margin:20px 0;padding:10px 0;border:1px solid #fff}.media.tid_14612376834885:hover{border:1px solid #efefef;background:#f7f7f7}.media-object.tid_14612376834885{width:100px;height:100px;line-height:100px;border-radius:50%;background:#ff642a;text-align:center;font-size:35px;margin-left:10px}.media-object.tid_14612376834885 .glyphicon.tid_14612376834885{top:5px;color:#fff}"},"template":"<div></div>","children":[]},{"id":"e39","tagName":"pl","data":{"dataset":{},"tplSet":{"tag":"i","bind":{"class":"icon"}},"attribs":{"class":"tid_14612376834885 glyphicon"},"name":"icon","type":"pl","tag":"i"},"template":"<i></i>","children":[]},{"id":"e40","tagName":"pl","data":{"dataset":{},"tplSet":{"tag":"h4"},"attribs":{"class":"tid_14612376834885 media-heading"},"name":"heading","type":"pl","tag":"h4"},"template":"<h4></h4>","children":[]},{"id":"e41","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834885"},"name":"body","type":"pl","tag":"div"},"template":"<div></div>","children":[]}],"template":"<div class=\"tid_14612376834885 media\">\n    \n    <div class=\"tid_14612376834885 media-left\">\n        <div class=\"tid_14612376834885 media-object\">\n            <i id=\"e39\" style=\"display:none\"></i>\n        </div>\n    </div>\n    <div class=\"tid_14612376834885 media-body\">\n        <h4 id=\"e40\" style=\"display:none\"></h4>\n        <div id=\"e41\" style=\"display:none\"></div>\n    </div>\n</div>","templateId":"tid_14612376834885"};});


define("widget/parser!mediablock/MediaBlock", ["templating/parser!mediablock/MediaBlock.html","widget/Constructor"], function(template, Constructor){ return Constructor.extend({template: template});});


define('templating/parser!threeblock/ThreeBlock.html',["widget/parser!../mediablock/MediaBlock","coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e31","tagName":"cp","data":{"dataset":{"icon":"glyphicon-link"},"tplSet":{},"attribs":{"class":"tid_14612376834864"},"name":"col1","type":"cp","tag":"div","src":arguments[0]},"template":"<div><div id=\"e29\" style=\"display:none\"></div><div id=\"e30\" style=\"display:none\"></div></div>","children":[{"id":"e29","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834864"},"name":"heading","type":"pl","tag":"div"},"template":"<div>Reusable Components</div>","children":[]},{"id":"e30","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834864"},"name":"body","type":"pl","tag":"div"},"template":"<div>Templating supports reuse same modules in same app, or multiple applications.</div>","children":[]}]},{"id":"e34","tagName":"cp","data":{"dataset":{"icon":"glyphicon-option-horizontal"},"tplSet":{},"attribs":{"class":"tid_14612376834864"},"name":"col2","type":"cp","tag":"div","src":arguments[0]},"template":"<div><div id=\"e32\" style=\"display:none\"></div><div id=\"e33\" style=\"display:none\"></div></div>","children":[{"id":"e32","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834864"},"name":"heading","type":"pl","tag":"div"},"template":"<div>Scoped CSS</div>","children":[]},{"id":"e33","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834864"},"name":"body","type":"pl","tag":"div"},"template":"<div>Integrated Less parser. Generates Scoped CSS \"Shadow DOM\" concept.\n            </div>","children":[]}]},{"id":"e37","tagName":"cp","data":{"dataset":{"icon":"glyphicon-phone"},"tplSet":{},"attribs":{"class":"tid_14612376834864"},"name":"col3","type":"cp","tag":"div","src":arguments[0]},"template":"<div><div id=\"e35\" style=\"display:none\"></div><div id=\"e36\" style=\"display:none\"></div></div>","children":[{"id":"e35","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834864"},"name":"heading","type":"pl","tag":"div"},"template":"<div>Data First Approach</div>","children":[]},{"id":"e36","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834864"},"name":"body","type":"pl","tag":"div"},"template":"<div>DOM elements generated only when data object is created.\n                This makes application very fast and responsive on changes.\n            </div>","children":[]}]}],"template":"<div class=\"tid_14612376834864 row\">\n    <div class=\"tid_14612376834864 col-md-4\">\n        <div id=\"e31\" style=\"display:none\"></div>\n    </div>\n    <div class=\"tid_14612376834864 col-md-4\">\n        <div id=\"e34\" style=\"display:none\"></div>\n    </div>\n    <div class=\"tid_14612376834864 col-md-4\">\n        <div id=\"e37\" style=\"display:none\"></div>\n    </div>\n</div>","templateId":"tid_14612376834864"};});


define("widget/parser!threeblock/ThreeBlock", ["templating/parser!threeblock/ThreeBlock.html","widget/Constructor"], function(template, Constructor){ return Constructor.extend({template: template});});


define('templating/parser!quoterblock/QuoterBlock.html',["coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e52","tagName":"style","data":{"style":".block-panel.tid_14612376834947{border:1px solid #efefef;margin:15px 0;min-height:350px}.block-title.tid_14612376834947{border-bottom:solid 2px #efefef;margin:0 15px 15px}.block-title.tid_14612376834947 h5.tid_14612376834947{border-bottom:solid 4px #E44D26;color:#E44D26;display:inline-block;margin:10px 0 -3px;padding:0 0 5px}.block-body.tid_14612376834947{margin:0 15px 15px}img.tid_14612376834947{width:100%}"},"template":"<div></div>","children":[]},{"id":"e53","tagName":"pl","data":{"dataset":{},"tplSet":{"name":"image","type":"pl","bind":{"src":"img","alt":"alt"}},"attribs":{"src":"images/board.png","alt":"Board","class":"tid_14612376834947"},"name":"image","type":"pl","tag":"img"},"template":"<img>","children":[]},{"id":"e54","tagName":"pl","data":{"dataset":{},"tplSet":{"tag":"h5"},"attribs":{"class":"tid_14612376834947"},"name":"title","type":"pl","tag":"h5"},"template":"<h5></h5>","children":[]},{"id":"e55","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834947 block-body"},"name":"body","type":"pl","tag":"div"},"template":"<div>\n    </div>","children":[]}],"template":"<div class=\"tid_14612376834947 block-panel\">\n    \n    <img id=\"e53\" style=\"display:none\">\n    <div class=\"tid_14612376834947 block-title\">\n        <h5 id=\"e54\" style=\"display:none\"></h5>\n    </div>\n    <div id=\"e55\" style=\"display:none\"></div>\n</div>","templateId":"tid_14612376834947"};});


define("widget/parser!quoterblock/QuoterBlock", ["templating/parser!quoterblock/QuoterBlock.html","widget/Constructor"], function(template, Constructor){ return Constructor.extend({template: template});});


define('templating/parser!list/List.html',["coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e56","tagName":"style","data":{"style":".block-list.tid_14612376834998{position:relative;margin:15px 0;min-height:350px}.block-panel.tid_14612376834998{position:absolute;bottom:0;left:0;right:0;top:30px;margin:15px 0 0;border:1px solid #efefef;background:#f7f7f7;overflow:auto}.block-panel.tid_14612376834998 li.tid_14612376834998{margin:15px 0;color:#666}.block-title.tid_14612376834998{border-bottom:solid 2px #efefef;margin:0 15px 15px}.block-title.tid_14612376834998 h5.tid_14612376834998{border-bottom:solid 4px #E44D26;color:#E44D26;display:inline-block;margin:10px 0 -3px;padding:0 0 5px}"},"template":"<div></div>","children":[]}],"template":"<div class=\"tid_14612376834998 block-list\">\n    \n    <div class=\"tid_14612376834998 block-title\">\n        <h5 class=\"tid_14612376834998\">Features</h5>\n    </div>\n    <div class=\"tid_14612376834998 block-panel\">\n        <ul class=\"tid_14612376834998\">\n            <li class=\"tid_14612376834998\">Open Source</li>\n            <li class=\"tid_14612376834998\">Pure JavaScript, no server Side code</li>\n            <li class=\"tid_14612376834998\">MVVM (Model View, View Model) Pattern</li>\n            <li class=\"tid_14612376834998\">Works With Other Frameworks.</li>\n            <li class=\"tid_14612376834998\">Reusable Components</li>\n            <li class=\"tid_14612376834998\">Declarative Bindings</li>\n            <li class=\"tid_14612376834998\">Event based applications</li>\n        </ul>\n    </div>\n</div>","templateId":"tid_14612376834998"};});


define("widget/parser!list/List", ["templating/parser!list/List.html","widget/Constructor"], function(template, Constructor){ return Constructor.extend({template: template});});


define('templating/parser!fourblock/FourBlock.html',["widget/parser!../quoterblock/QuoterBlock","widget/parser!../list/List","coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e44","tagName":"cp","data":{"dataset":{"img":"images/route.jpg"},"tplSet":{},"attribs":{"class":"tid_14612376834926"},"name":"block2","type":"cp","tag":"div","src":arguments[0]},"template":"<div><div id=\"e42\" style=\"display:none\"></div><div id=\"e43\" style=\"display:none\"></div></div>","children":[{"id":"e42","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834926"},"name":"title","type":"pl","tag":"div"},"template":"<div>Routing</div>","children":[]},{"id":"e43","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834926"},"name":"body","type":"pl","tag":"div"},"template":"<div>\n                <p class=\"tid_14612376834926\">You can create multi page application, with friendly URLs, without refreshing page.</p>\n            </div>","children":[]}]},{"id":"e47","tagName":"cp","data":{"dataset":{"img":"images/uiUpdate.jpg"},"tplSet":{},"attribs":{"class":"tid_14612376834926"},"name":"block3","type":"cp","tag":"div","src":arguments[0]},"template":"<div><div id=\"e45\" style=\"display:none\"></div><div id=\"e46\" style=\"display:none\"></div></div>","children":[{"id":"e45","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834926"},"name":"title","type":"pl","tag":"div"},"template":"<div>Auto UI update</div>","children":[]},{"id":"e46","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834926"},"name":"body","type":"pl","tag":"div"},"template":"<div>\n                <p class=\"tid_14612376834926\">Automatically updating Template elements, when Object data is changed.</p>\n            </div>","children":[]}]},{"id":"e50","tagName":"cp","data":{"dataset":{"img":"images/binding.jpg","alt":"Some Alt Text"},"tplSet":{},"attribs":{"class":"tid_14612376834926"},"name":"block4","type":"cp","tag":"div","src":arguments[0]},"template":"<div><div id=\"e48\" style=\"display:none\"></div><div id=\"e49\" style=\"display:none\"></div></div>","children":[{"id":"e48","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834926"},"name":"title","type":"pl","tag":"div"},"template":"<div>Declarative Bindings</div>","children":[]},{"id":"e49","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834926"},"name":"body","type":"pl","tag":"div"},"template":"<div>\n                <p class=\"tid_14612376834926\">Easy associate Template Elements to Object data.</p>\n            </div>","children":[]}]},{"id":"e51","tagName":"cp","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376834926"},"name":"list","type":"cp","tag":"div","src":arguments[1]},"template":"<div></div>","children":[]}],"template":"<div class=\"tid_14612376834926 row\">\n    <div class=\"tid_14612376834926 col-md-3\">\n        <div id=\"e44\" style=\"display:none\"></div>\n    </div>\n    <div class=\"tid_14612376834926 col-md-3\">\n        <div id=\"e47\" style=\"display:none\"></div>\n    </div>\n    <div class=\"tid_14612376834926 col-md-3\">\n        <div id=\"e50\" style=\"display:none\"></div>\n    </div>\n    <div class=\"tid_14612376834926 col-md-3\">\n        <div id=\"e51\" style=\"display:none\"></div>\n    </div>\n</div>","templateId":"tid_14612376834926"};});


define("widget/parser!fourblock/FourBlock", ["templating/parser!fourblock/FourBlock.html","widget/Constructor"], function(template, Constructor){ return Constructor.extend({template: template});});


define('templating/parser!code/_code.html',["coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e76","tagName":"style","data":{"style":".hljs.tid_146123768352211{display:block;overflow-x:auto;padding:.5em;background:#fff;color:#000}.hljs-comment.tid_146123768352211,.hljs-quote.tid_146123768352211{color:#800}.hljs-keyword.tid_146123768352211,.hljs-name.tid_146123768352211,.hljs-section.tid_146123768352211,.hljs-selector-tag.tid_146123768352211,.hljs-title.tid_146123768352211{color:#008}.hljs-template-variable.tid_146123768352211,.hljs-variable.tid_146123768352211{color:#660}.hljs-regexp.tid_146123768352211,.hljs-selector-attr.tid_146123768352211,.hljs-selector-pseudo.tid_146123768352211,.hljs-string.tid_146123768352211{color:#080}.hljs-bullet.tid_146123768352211,.hljs-link.tid_146123768352211,.hljs-literal.tid_146123768352211,.hljs-meta.tid_146123768352211,.hljs-number.tid_146123768352211,.hljs-symbol.tid_146123768352211{color:#066}.hljs-attr.tid_146123768352211,.hljs-built_in.tid_146123768352211,.hljs-builtin-name.tid_146123768352211,.hljs-doctag.tid_146123768352211,.hljs-params.tid_146123768352211,.hljs-title.tid_146123768352211,.hljs-type.tid_146123768352211{color:#606}.hljs-attribute.tid_146123768352211,.hljs-subst.tid_146123768352211{color:#000}.hljs-formula.tid_146123768352211{background-color:#eee;font-style:italic}.hljs-selector-class.tid_146123768352211,.hljs-selector-id.tid_146123768352211{color:#9B703F}.hljs-addition.tid_146123768352211{background-color:#baeeba}.hljs-deletion.tid_146123768352211{background-color:#ffc8bd}.hljs-doctag.tid_146123768352211,.hljs-strong.tid_146123768352211{font-weight:700}.hljs-emphasis.tid_146123768352211{font-style:italic}pre.tid_146123768352211{background:#fff}"},"template":"<div></div>","children":[]},{"id":"e77","tagName":"bd","data":{"dataset":{},"tplSet":{"tag":"code","bind":{"class":"type"}},"attribs":{"class":"tid_146123768352211 code"},"name":"code","type":"bd","tag":"code","bind":"code"},"template":"<code></code>","children":[]}],"template":"<div class=\"tid_146123768352211\">\n    \n    <pre class=\"tid_146123768352211\"><code id=\"e77\" style=\"display:none\"></code></pre>\n</div>","templateId":"tid_146123768352211"};});

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function(factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window == 'object' && window ||
                     typeof self == 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  if(typeof exports !== 'undefined') {
    factory(exports);
  } else if(globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});

    // Finally register the global hljs with AMD.
    if(typeof define === 'function' && define.amd) {
      define('highlight',[], function() {
        return globalObject.hljs;
      });
    }
  }

}(function(hljs) {

  /* Utility functions */

  function escape(value) {
    return value.replace(/&/gm, '&amp;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index == 0;
  }

  function isNotHighlighted(language) {
    return (/^(no-?highlight|plain|text)$/i).test(language);
  }

  function blockLanguage(block) {
    var i, match, length,
        classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = (/\blang(?:uage)?-([\w-]+)\b/i).exec(classes);
    if (match) {
      return getLanguage(match[1]) ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);
    for (i = 0, length = classes.length; i < length; i++) {
      if (getLanguage(classes[i]) || isNotHighlighted(classes[i])) {
        return classes[i];
      }
    }
  }

  function inherit(parent, obj) {
    var result = {}, key;
    for (key in parent)
      result[key] = parent[key];
    if (obj)
      for (key in obj)
        result[key] = obj[key];
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType == 3)
          offset += child.nodeValue.length;
        else if (child.nodeType == 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset != highlighted[0].offset) {
        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:

      if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;

      ... which is collapsed to:
      */
      return highlighted[0].event == 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value) + '"';}
      result += '<' + tag(node) + Array.prototype.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event == 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substr(processed, stream[0].offset - processed));
      processed = stream[0].offset;
      if (stream == original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream == original && stream.length && stream[0].offset == processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event == 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords) {
        var compiled_keywords = {};

        var flatten = function(className, str) {
          if (language.case_insensitive) {
            str = str.toLowerCase();
          }
          str.split(' ').forEach(function(kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          });
        };

        if (typeof mode.keywords == 'string') { // string
          flatten('keyword', mode.keywords);
        } else {
          Object.keys(mode.keywords).forEach(function (className) {
            flatten(className, mode.keywords[className]);
          });
        }
        mode.keywords = compiled_keywords;
      }
      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin)
          mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance === undefined)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      var expanded_contains = [];
      mode.contains.forEach(function(c) {
        if (c.variants) {
          c.variants.forEach(function(v) {expanded_contains.push(inherit(c, v));});
        } else {
          expanded_contains.push(c == 'self' ? mode : c);
        }
      });
      mode.contains = expanded_contains;
      mode.contains.forEach(function(c) {compileMode(c, mode);});

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators =
        mode.contains.map(function(c) {
          return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
        })
        .concat([mode.terminator_end, mode.illegal])
        .map(reStr)
        .filter(Boolean);
      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};
    }

    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:

  - relevance (int)
  - value (an HTML string with highlighting markup)

  */
  function highlight(name, value, ignore_illegals, continuation) {

    function subMode(lexeme, mode) {
      for (var i = 0; i < mode.contains.length; i++) {
        if (testRe(mode.contains[i].beginRe, lexeme)) {
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function isIllegal(lexeme, mode) {
      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan    = '<span class="' + classPrefix,
          closeSpan   = leaveOpen ? '' : '</span>';

      openSpan += classname + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      if (!top.keywords)
        return escape(mode_buffer);
      var result = '';
      var last_index = 0;
      top.lexemesRe.lastIndex = 0;
      var match = top.lexemesRe.exec(mode_buffer);
      while (match) {
        result += escape(mode_buffer.substr(last_index, match.index - last_index));
        var keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage == 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ?
                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += (top.subLanguage !== undefined ? processSubLanguage() : processKeywords());
      mode_buffer = '';
    }

    function startNewMode(mode, lexeme) {
      result += mode.className? buildSpan(mode.className, '', true): '';
      top = Object.create(mode, {parent: {value: top}});
    }

    function processLexeme(buffer, lexeme) {

      mode_buffer += buffer;

      if (lexeme === undefined) {
        processBuffer();
        return 0;
      }

      var new_mode = subMode(lexeme, top);
      if (new_mode) {
        if (new_mode.skip) {
          mode_buffer += lexeme;
        } else {
          if (new_mode.excludeBegin) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
            mode_buffer = lexeme;
          }
        }
        startNewMode(new_mode, lexeme);
        return new_mode.returnBegin ? 0 : lexeme.length;
      }

      var end_mode = endOfMode(top, lexeme);
      if (end_mode) {
        var origin = top;
        if (origin.skip) {
          mode_buffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            mode_buffer = lexeme;
          }
        }
        do {
          if (top.className) {
            result += '</span>';
          }
          if (!top.skip) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top != end_mode.parent);
        if (end_mode.starts) {
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }

      if (isIllegal(lexeme, top))
        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexemes should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexeme;
      return lexeme.length || 1;
    }

    var language = getLanguage(name);
    if (!language) {
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '', current;
    for(current = top; current != language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match)
          break;
        count = processLexeme(value.substr(index, match.index - index), match[0]);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for(current = top; current.parent; current = current.parent) { // close dangling modes
        if (current.className) {
          result += '</span>';
        }
      }
      return {
        relevance: relevance,
        value: result,
        language: name,
        top: top
      };
    } catch (e) {
      if (e.message.indexOf('Illegal') != -1) {
        return {
          relevance: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).forEach(function(name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value) {
    if (options.tabReplace) {
      value = value.replace(/^((<[^>]+>|\t)+)/gm, function(match, p1 /*..., offset, s*/) {
        return p1.replace(/\t/g, options.tabReplace);
      });
    }
    if (options.useBR) {
      value = value.replace(/\n/g, '<br>');
    }
    return value;
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result   = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var language = blockLanguage(block);
    if (isNotHighlighted(language))
        return;

    var node;
    if (options.useBR) {
      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    var text = node.textContent;
    var result = language ? highlight(language, text, true) : highlightAuto(text);

    var originalStream = nodeStream(node);
    if (originalStream.length) {
      var resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    Array.prototype.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded', initHighlighting, false);
    addEventListener('load', initHighlighting, false);
  }

  var languages = {};
  var aliases = {};

  function registerLanguage(name, language) {
    var lang = languages[name] = language(hljs);
    if (lang.aliases) {
      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
    }
  }

  function listLanguages() {
    return Object.keys(languages);
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.inherit = inherit;

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit(
      {
        className: 'comment',
        begin: begin, end: end,
        contains: []
      },
      inherits || {}
    );
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' +
      '%|em|ex|ch|rem'  +
      '|vw|vh|vmin|vmax' +
      '|cm|mm|in|pt|pc|px' +
      '|deg|grad|rad|turn' +
      '|s|ms' +
      '|Hz|kHz' +
      '|dpi|dpcm|dppx' +
      ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return hljs;
}));

define('code/hljsLanguages/javascript',[],function() {
    return function(hljs) {
        return {
            aliases:  ['js', 'jsx'],
            keywords: {
                keyword:  'in of if for while finally var new function do return void else break catch ' +
                          'instanceof with throw case default try this switch continue typeof delete ' +
                          'let yield const export super debugger as async await static ' +
                          // ECMAScript 6 modules import
                          'import from as'
                ,
                literal:  'true false null undefined NaN Infinity',
                built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
                          'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
                          'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
                          'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
                          'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
                          'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
                          'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
                          'Promise'
            },
            contains: [
                {
                    className: 'meta',
                    relevance: 10,
                    begin:     /^\s*['"]use (strict|asm)['"]/
                },
                {
                    className: 'meta',
                    begin:     /^#!/, end: /$/
                },
                hljs.APOS_STRING_MODE,
                hljs.QUOTE_STRING_MODE,
                { // template string
                    className: 'string',
                    begin:     '`', end: '`',
                    contains:  [
                        hljs.BACKSLASH_ESCAPE,
                        {
                            className: 'subst',
                            begin:     '\\$\\{', end: '\\}'
                        }
                    ]
                },
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE,
                {
                    className: 'number',
                    variants:  [
                        {begin: '\\b(0[bB][01]+)'},
                        {begin: '\\b(0[oO][0-7]+)'},
                        {begin: hljs.C_NUMBER_RE}
                    ],
                    relevance: 0
                },
                { // "value" container
                    begin:     '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
                    keywords:  'return throw case',
                    contains:  [
                        hljs.C_LINE_COMMENT_MODE,
                        hljs.C_BLOCK_COMMENT_MODE,
                        hljs.REGEXP_MODE,
                        { // E4X / JSX
                            begin:       /</, end: /(\/\w+|\w+\/)>/,
                            subLanguage: 'xml',
                            contains:    [
                                {begin: /<\w+\s*\/>/, skip: true},
                                {begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true, contains: ['self']}
                            ]
                        }
                    ],
                    relevance: 0
                },
                {
                    className:     'function',
                    beginKeywords: 'function', end: /\{/, excludeEnd: true,
                    contains:      [
                        hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),
                        {
                            className:    'params',
                            begin:        /\(/, end: /\)/,
                            excludeBegin: true,
                            excludeEnd:   true,
                            contains:     [
                                hljs.C_LINE_COMMENT_MODE,
                                hljs.C_BLOCK_COMMENT_MODE
                            ]
                        }
                    ],
                    illegal:       /\[|%/
                },
                {
                    begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
                },
                hljs.METHOD_GUARD,
                { // ES6 class
                    className:     'class',
                    beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
                    illegal:       /[:"\[\]]/,
                    contains:      [
                        {beginKeywords: 'extends'},
                        hljs.UNDERSCORE_TITLE_MODE
                    ]
                },
                {
                    beginKeywords: 'constructor', end: /\{/, excludeEnd: true
                }
            ],
            illegal:  /#(?!!)/
        };
    }
});
define('code/hljsLanguages/xml',[],function() {
    return function(hljs) {
        var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
        var TAG_INTERNALS = {
            endsWithParent: true,
            illegal:        /</,
            relevance:      0,
            contains:       [
                {
                    className: 'attr',
                    begin:     XML_IDENT_RE,
                    relevance: 0
                },
                {
                    begin:     /=\s*/,
                    relevance: 0,
                    contains:  [
                        {
                            className:  'string',
                            endsParent: true,
                            variants:   [
                                {begin: /"/, end: /"/},
                                {begin: /'/, end: /'/},
                                {begin: /[^\s"'=<>`]+/}
                            ]
                        }
                    ]
                }
            ]
        };
        return {
            aliases:          ['html', 'xhtml', 'rss', 'atom', 'xsl', 'plist'],
            case_insensitive: true,
            contains:         [
                {
                    className: 'meta',
                    begin:     '<!DOCTYPE', end: '>',
                    relevance: 10,
                    contains:  [{begin: '\\[', end: '\\]'}]
                },
                hljs.COMMENT(
                    '<!--',
                    '-->',
                    {
                        relevance: 10
                    }
                ),
                {
                    begin:     '<\\!\\[CDATA\\[', end: '\\]\\]>',
                    relevance: 10
                },
                {
                    begin:       /<\?(php)?/, end: /\?>/,
                    subLanguage: 'php',
                    contains:    [{begin: '/\\*', end: '\\*/', skip: true}]
                },
                {
                    className: 'tag',
                    /*
                     The lookahead pattern (?=...) ensures that 'begin' only matches
                     '<style' as a single word, followed by a whitespace or an
                     ending braket. The '$' is needed for the lexeme to be recognized
                     by hljs.subMode() that tests lexemes outside the stream.
                     */
                    begin:     '<style(?=\\s|>|$)', end: '>',
                    keywords:  {name: 'style'},
                    contains:  [TAG_INTERNALS],
                    starts:    {
                        end:         '</style>', returnEnd: true,
                        subLanguage: ['css', 'xml']
                    }
                },
                {
                    className: 'tag',
                    // See the comment in the <style tag about the lookahead pattern
                    begin:     '<script(?=\\s|>|$)', end: '>',
                    keywords:  {name: 'script'},
                    contains:  [TAG_INTERNALS],
                    starts:    {
                        end:         '\<\/script\>', returnEnd: true,
                        subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
                    }
                },
                {
                    className: 'meta',
                    variants:  [
                        {begin: /<\?xml/, end: /\?>/, relevance: 10},
                        {begin: /<\?\w+/, end: /\?>/}
                    ]
                },
                {
                    className: 'tag',
                    begin:     '</?', end: '/?>',
                    contains:  [
                        {
                            className: 'name', begin: /[^\/><\s]+/, relevance: 0
                        },
                        TAG_INTERNALS
                    ]
                }
            ]
        };
    }
});
/**
 * Created by guntars on 26/02/15.
 */
define('code/Code',[
    'widget/Constructor',
    'templating/parser!./_code.html',
    'highlight',
    './hljsLanguages/javascript',
    './hljsLanguages/xml'
], function(Constructor, template, hljs, js, xml) {
    'use strict';

    hljs.configure({
        classPrefix: template.templateId + ' hljs-'
    });
    hljs.registerLanguage('javascript', js);
    hljs.registerLanguage('html', xml);


    return Constructor.extend({
        template: template,
        elReady:  {
            code(el, data) {
                el.el.innerHTML = hljs.highlight(data.type, data.src).value;
            }
        }
    });
});

define('templating/parser!basic/cmp/Cmp.html',["coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e81","tagName":"style","data":{"style":"img.tid_146123768365313{border:2px solid #337ab7;width:100%}"},"template":"<div></div>","children":[]},{"id":"e82","tagName":"pl","data":{"dataset":{},"tplSet":{"tag":"h4"},"attribs":{"class":"tid_146123768365313"},"name":"header","type":"pl","tag":"h4"},"template":"<h4></h4>","children":[]},{"id":"e83","tagName":"pl","data":{"dataset":{},"tplSet":{"name":"image","type":"pl","bind":{"src":"image"}},"attribs":{"alt":"Image","class":"tid_146123768365313"},"name":"image","type":"pl","tag":"img"},"template":"<img>","children":[]},{"id":"e84","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_146123768365313"},"name":"body","type":"pl","tag":"div"},"template":"<div></div>","children":[]}],"template":"<div class=\"tid_146123768365313 container-fluid cmp\">\n    \n    <h4 id=\"e82\" style=\"display:none\"></h4>\n    <img id=\"e83\" style=\"display:none\">\n\n    <p class=\"tid_146123768365313 cmpP\">sample text</p>\n    <div id=\"e84\" style=\"display:none\"></div>\n</div>","templateId":"tid_146123768365313"};});


define("widget/parser!basic/cmp/Cmp", ["templating/parser!basic/cmp/Cmp.html","widget/Constructor"], function(template, Constructor){ return Constructor.extend({template: template});});


define('templating/parser!basic/Basic.html',["widget/parser!./cmp/Cmp","coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e80","tagName":"cp","data":{"dataset":{"image":"images/board.png"},"tplSet":{},"attribs":{"class":"tid_146123768365212"},"name":"val","type":"cp","tag":"div","src":arguments[0]},"template":"<div><div id=\"e78\" style=\"display:none\"></div><div id=\"e79\" style=\"display:none\"></div></div>","children":[{"id":"e78","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_146123768365212"},"name":"header","type":"pl","tag":"div"},"template":"<div>Header From Parent Container</div>","children":[]},{"id":"e79","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_146123768365212"},"name":"body","type":"pl","tag":"div"},"template":"<div>\n                <p class=\"tid_146123768365212 testCustom\">Body From Parent Container</p>\n            </div>","children":[]}]}],"template":"<div class=\"tid_146123768365212 panel panel-default\">\n    <div class=\"tid_146123768365212 panel-heading\">Basic Example</div>\n    <div class=\"tid_146123768365212 panel-body\">\n        <div id=\"e80\" style=\"display:none\"></div>\n    </div>\n</div>","templateId":"tid_146123768365212"};});


define("widget/parser!basic/Basic", ["templating/parser!basic/Basic.html","widget/Constructor"], function(template, Constructor){ return Constructor.extend({template: template});});


define('templating/parser!tabs/_tabs.html',["../code/Code","widget/parser!../basic/Basic","coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e65","tagName":"style","data":{"style":".nav.tid_146123768351710{margin-bottom:15px}.container.tid_146123768351710{margin-bottom:30px;margin-top:30px}"},"template":"<div></div>","children":[]},{"id":"e67","tagName":"bd","data":{"dataset":{},"tplSet":{"tag":"li","bind":{"class":"class"},"update":"true"},"attribs":{"role":"presentation","class":"tid_146123768351710"},"name":"links","type":"bd","tag":"li","bind":"links"},"template":"<li>\n                    <a id=\"e66\" style=\"display:none\"></a>\n                </li>","children":[{"id":"e66","tagName":"bd","data":{"dataset":{},"tplSet":{"tag":"a","update":"true","bind":{"href":"href"}},"attribs":{"class":"tid_146123768351710"},"name":"anchor","type":"bd","tag":"a","bind":"anchor"},"template":"<a>App.js</a>","children":[]}]},{"id":"e74","tagName":"bd","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_146123768351710"},"name":"code","type":"bd","tag":"div","bind":"code"},"template":"<div>\n                <div id=\"e69\" style=\"display:none\"></div>\n                <div id=\"e71\" style=\"display:none\"></div>\n                <div id=\"e73\" style=\"display:none\"></div>\n            </div>","children":[{"id":"e69","tagName":"rt","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_146123768351710"},"name":"app","type":"rt","tag":"div","route":"/app"},"template":"<div>\n                    <div id=\"e68\" style=\"display:none\"></div>\n                </div>","children":[{"id":"e68","tagName":"cp","data":{"dataset":{"bind":"app"},"tplSet":{},"attribs":{"class":"tid_146123768351710"},"name":"app","type":"cp","tag":"div","src":arguments[0]},"template":"<div></div>","children":[]}]},{"id":"e71","tagName":"rt","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_146123768351710"},"name":"container","type":"rt","tag":"div","route":"/container"},"template":"<div>\n                    <div id=\"e70\" style=\"display:none\"></div>\n\n                </div>","children":[{"id":"e70","tagName":"cp","data":{"dataset":{"bind":"container"},"tplSet":{},"attribs":{"class":"tid_146123768351710"},"name":"container","type":"cp","tag":"div","src":arguments[0]},"template":"<div></div>","children":[]}]},{"id":"e73","tagName":"rt","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_146123768351710"},"name":"component","type":"rt","tag":"div","route":"/component"},"template":"<div>\n                    <div id=\"e72\" style=\"display:none\"></div>\n                </div>","children":[{"id":"e72","tagName":"cp","data":{"dataset":{"bind":"component"},"tplSet":{},"attribs":{"class":"tid_146123768351710"},"name":"component","type":"cp","tag":"div","src":arguments[0]},"template":"<div></div>","children":[]}]}]},{"id":"e75","tagName":"cp","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_146123768351710"},"name":"basic","type":"cp","tag":"div","src":arguments[1]},"template":"<div></div>","children":[]}],"template":"<div class=\"tid_146123768351710 row\">\n    \n    <div class=\"tid_146123768351710 col-md-8\">\n        <div class=\"tid_146123768351710 row\">\n            <ul class=\"tid_146123768351710 nav nav-tabs\">\n                <li id=\"e67\" style=\"display:none\"></li>\n            </ul>\n            <div id=\"e74\" style=\"display:none\"></div>\n        </div>\n    </div>\n    <div class=\"tid_146123768351710 col-md-4\">\n        <ul class=\"tid_146123768351710 nav nav-tabs\">\n            <li role=\"presentation\" class=\"tid_146123768351710 active\"><a href=\"#/app\" class=\"tid_146123768351710\">Live Example</a></li>\n        </ul>\n        <div id=\"e75\" style=\"display:none\"></div>\n    </div>\n</div>","templateId":"tid_146123768351710"};});

/**
 * Created by guntars on 27/02/15.
 */
define('tabs/Tabs',[
    'widget/Constructor',
    'templating/parser!./_tabs.html'
], function(Constructor, template) {
    'use strict';

    return Constructor.extend({
        template: template,
        init:     function() {
        },
        match:    function(match) {
            match('(/:id)').to(function(id, route) {
                var links = this.data.links,
                    location = '/' + route.getLocation('/');
                if (id) {
                    links.forEach(function(link) {
                        if (link.name === id) {
                            link.class = 'active';
                        } else {
                            link.class = 'inactive';
                        }
                        var curr = '#' + location.replace(id, '');
                        var indexOf = link.anchor.href.indexOf(curr);
                        if (indexOf === -1 || indexOf !== 0) {
                            link.anchor.href = curr + link.anchor.href.replace('#/', '');
                        }
                    });
                }

            }.bind(this));
        }
    });
});

define('templating/parser!body/Body.html',["widget/parser!quote/Quote","../tabs/Tabs","widget/parser!../quote/Quote","coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e57","tagName":"style","data":{"style":".title-h2.tid_14612376835079{border-bottom:solid 4px #efefef;margin:0 0 15px}.title-h2.tid_14612376835079>.tid_14612376835079{border-bottom:solid 6px #E44D26;display:inline-block;margin:10px 0 -5px;padding:0 0 10px}.title-h3.tid_14612376835079,.title-h4.tid_14612376835079{border-bottom:solid 2px #efefef;margin:0 0 15px}.title-h3.tid_14612376835079>.tid_14612376835079,.title-h4.tid_14612376835079>.tid_14612376835079{border-bottom:solid 4px #E44D26;display:inline-block;margin:10px 0 -3px;padding:0 0 10px}"},"template":"<div></div>","children":[]},{"id":"e60","tagName":"cp","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376835079"},"name":"quoteone","type":"cp","tag":"div","src":arguments[0]},"template":"<div><div id=\"e58\" style=\"display:none\"></div><div id=\"e59\" style=\"display:none\"></div></div>","children":[{"id":"e58","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376835079"},"name":"body","type":"pl","tag":"div"},"template":"<div>Stonewall is component based application, and all components are not aware about each other.\n        </div>","children":[]},{"id":"e59","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376835079"},"name":"footer","type":"pl","tag":"div"},"template":"<div>\n            Makes easy to create common structure, and use same components in different applications.\n        </div>","children":[]}]},{"id":"e61","tagName":"cp","data":{"dataset":{"bind":"tabs"},"tplSet":{},"attribs":{"class":"tid_14612376835079"},"name":"code","type":"cp","tag":"div","src":arguments[1]},"template":"<div></div>","children":[]},{"id":"e64","tagName":"cp","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376835079"},"name":"quote","type":"cp","tag":"div","src":arguments[2]},"template":"<div><div id=\"e62\" style=\"display:none\"></div><div id=\"e63\" style=\"display:none\"></div></div>","children":[{"id":"e62","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376835079"},"name":"body","type":"pl","tag":"div"},"template":"<div>Maintainable code works for many years.</div>","children":[]},{"id":"e63","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376835079"},"name":"footer","type":"pl","tag":"div"},"template":"<div>it is - Intuitive, Understandable, Adaptable, Extendable, Debuggable, Testable.</div>","children":[]}]}],"template":"<div class=\"tid_14612376835079 container\">\n    \n    <div class=\"tid_14612376835079 title-h2\">\n        <h2 class=\"tid_14612376835079\">StoneWall Javascript MVVM Framework</h2>\n    </div>\n    <p class=\"tid_14612376835079\">Write less code, and keep in control. Stonewall is framework for creating large scalable single page\n        applications. This framework includes features such as - Reusable Components, Routing, Data Binding to DOM\n        Elements, UI auto updates and much more.</p>\n    <div class=\"tid_14612376835079 title-h4\">\n        <h4 class=\"tid_14612376835079\">Standard HTML</h4>\n    </div>\n    <p class=\"tid_14612376835079\">Rich templating structure is very close to standard html, plus all css in template is generated in unique way,\n        and it's valid for this component only. Also in css can use less functionality, which is nice benefit.\n        It's very easy to use for designers with no js knowledge. </p>\n    <p class=\"tid_14612376835079\">Also this making benefit, any component has own unique html, and css, and it's valid in any application,\n        and not destructing other components.</p>\n    <div class=\"tid_14612376835079 title-h4\">\n        <h4 class=\"tid_14612376835079\">Data First</h4>\n    </div>\n    <p class=\"tid_14612376835079\">Data first approach allow framework to generate only required visible dom parts.\n        This save initialisation time for application.\n    </p>\n    <p class=\"tid_14612376835079\">Any response data, first is transformed to valid format and then compared with existing data,\n        after changes are applied to existing dom elements, removed are removed, and missing is generated.\n        Because only missing elements created and all the rest just change, this makes application very fast.\n    </p>\n    <div class=\"tid_14612376835079 title-h4\">\n        <h4 class=\"tid_14612376835079\">No direct Dom Access</h4>\n    </div>\n    <p class=\"tid_14612376835079\">Stonewall not use direct dom access. All necessary dom elements is stored in object, and can be accessed in\n        different stages.\n        Like (elReady, when element is created, elOnChange when element binded data is changed, and adding events).\n        This approach, allow to access only component elements, and components communicate to another components, by\n        using eventBus.\n    </p>\n\n    <div id=\"e60\" style=\"display:none\"></div>\n\n    <div class=\"tid_14612376835079 title-h3\">\n        <h3 class=\"tid_14612376835079\">Prerequisites</h3>\n    </div>\n    <p class=\"tid_14612376835079\">Before you start, you need some knowledge about <a href=\"http://requirejs.org\" target=\"_blank\" class=\"tid_14612376835079\">Requirejs</a>, <a href=\"https://css-tricks.com/modular-future-web-components/\" class=\"tid_14612376835079\">Web Components</a>, HTML5 custom Element,\n        shadow DOM Concept. For Build environment you need basic knowledge about <a href=\"http://nodejs.org\" target=\"_blank\" class=\"tid_14612376835079\">Nodejs</a>, NPM,\n        Bower and\n        <a href=\"http://gruntjs.com/\" class=\"tid_14612376835079\">Grunt</a></p>\n\n    <div class=\"tid_14612376835079 title-h4\">\n        <h4 class=\"tid_14612376835079\">How to Start</h4>\n    </div>\n    <p class=\"tid_14612376835079\">Below is code example for very basic Application\n        Detailed tutorial you can find <a href=\"https://github.com/gunins/stonewall/tree/master/examples/basic\" class=\"tid_14612376835079\">there.</a>\n        Source Code <a href=\"https://github.com/gunins/stonewall\" class=\"tid_14612376835079\">there.</a>\n        API Docs are <a href=\"https://rawgit.com/gunins/stonewall/master/dist/docs/loader.html\" class=\"tid_14612376835079\">there.</a></p>\n    <div id=\"e61\" style=\"display:none\"></div>\n    <p class=\"tid_14612376835079\">This framework contains everything, you need. There is tools and extensions, which ones will give to your\n        application structure.</p>\n\n    <div id=\"e64\" style=\"display:none\"></div>\n    <div class=\"tid_14612376835079 title-h2\">\n        <h3 class=\"tid_14612376835079\">App Structure</h3>\n    </div>\n\n    <p class=\"tid_14612376835079\">Application has two main classes, App and Constructor (Widget). App class will run application, and store\n        context.\n        Also creates EventBus, Router, and models. App handling all communication with Server. App also has access to\n        Container(DOM Element). Important part is, in any Application only one </p>\n    <p class=\"tid_14612376835079\">Constructor (Widget) Class handling all DOM activities. For widgets are no limitations, they can be as many you\n        want, and nested. Each Wdget has to be at least one DOM Element, or more. Any Widget can contain helpers, such\n        as Styles, Components, Placeholders, Bindings and Routes. Below is detailed information about these\n        components.</p>\n\n    <div class=\"tid_14612376835079 title-h4\">\n        <h4 class=\"tid_14612376835079\">Styles</h4>\n    </div>\n    <p class=\"tid_14612376835079\"><strong class=\"tid_14612376835079\">Style:</strong> In each template has Less css support. Any <code class=\"tid_14612376835079\">&lt;style&gt;&lt;/style&gt;</code> tag\n        supports any css or less. @import tags also supported, just need to use code <code class=\"tid_14612376835079\">@{import-url}</code> before.\n        Full example <code class=\"tid_14612376835079\">>&lt;style&gt; @import \"@{import-url}/_path_to_css.css\"; &lt;/style&gt;</code>. Full info\n        about Less\n        <a href=\"http://lesscss.org/\" class=\"tid_14612376835079\">there</a>. The key feature in templates is, your css are converted to unique\n        classes,\n        which ones applies only to your component. in this way you ne need to worrying about repeatable css class names.\n        This approach is similar to HTML5 Shadow DOM.\n    </p>\n\n    <div class=\"tid_14612376835079 title-h4\">\n        <h4 class=\"tid_14612376835079\">Components</h4>\n    </div>\n    <p class=\"tid_14612376835079\"><strong class=\"tid_14612376835079\">Components</strong> is AMD modules, means you can define in templates dynamic components.\n        <code class=\"tid_14612376835079\">&lt;cp-cpname src=\"pathtoCMP/Component\" &gt;&lt;/cp-cpname&gt;</code> Where <code class=\"tid_14612376835079\">Component</code> is AMD\n        Javascript file.\n        If Javascript file not necessary there is helper requirejs plugin <code class=\"tid_14612376835079\">widget/parser!pathToComponent</code>\n        in this case component can be plain javascript file.\n    </p>\n\n    <div class=\"tid_14612376835079 title-h4\">\n        <h4 class=\"tid_14612376835079\">Placeholders</h4>\n    </div>\n    <p class=\"tid_14612376835079\"><strong class=\"tid_14612376835079\">Placeholders</strong> are elements which are define location in template. In template you use\n        <code class=\"tid_14612376835079\">&lt;pl-name&gt;&lt;/pl-name&gt;</code> There is two usages for placeholders.\n        <strong class=\"tid_14612376835079\">First:</strong> In Constructor you have access to this element by name.<br class=\"tid_14612376835079\">\n        <strong class=\"tid_14612376835079\">Second:</strong> You can define custom content for this placeholder from other templates. <br class=\"tid_14612376835079\">\n        For example\n        <code class=\"tid_14612376835079\">&lt;cp-cpname src=\"pathtoCMP/Component\" &gt;&lt;pl-name&gt;My custom content&lt;/pl-name&gt;&lt;/cp-cpname&gt;</code>\n    </p>\n\n    <div class=\"tid_14612376835079 title-h4\">\n        <h4 class=\"tid_14612376835079\">Bindings</h4>\n    </div>\n    <p class=\"tid_14612376835079\"><strong class=\"tid_14612376835079\">Bindings</strong> Are used for bind Object data to dom element. in template you will use\n        <code class=\"tid_14612376835079\">&lt;bd-name tp-bind=\"bindName\" &gt;&lt;/bd-name&gt;</code>. Bindings can be nested, also you can bind\n        attributes as well <code class=\"tid_14612376835079\">tp-bind-attrname=\"dataName\"</code>. Bindings also support automatic object updates.\n        In this case you need to add attribute <code class=\"tid_14612376835079\">tp-update=\"true\"</code>\n    </p>\n\n    <div class=\"tid_14612376835079 title-h4\">\n        <h4 class=\"tid_14612376835079\">Routing</h4>\n    </div>\n    <p class=\"tid_14612376835079\"><strong class=\"tid_14612376835079\">Routing</strong> are used to handle urls. Routing use <a href=\"https://github.com/gunins/urlmanager\" class=\"tid_14612376835079\">UrlManager</a>\n        to make single page applications easy to work with urls. Usage for routes\n        <code class=\"tid_14612376835079\">&lt;rt-rtname route=\"/home\" &gt;&lt;div&gt;My custom content&lt;/div&gt;&lt;/rt-rtname&gt</code></p>\n\n    <div class=\"tid_14612376835079 title-h2\">\n        <h3 class=\"tid_14612376835079\">How to Start</h3>\n    </div>\n    <p class=\"tid_14612376835079\">Live examples you can see in examples section. For see how to start, go in <a href=\"https://github.com/gunins/stonewall/tree/master/examples/basic\" class=\"tid_14612376835079\">examples/basic</a>.\n        For easier to start project, there is <a href=\"https://github.com/gunins/skeleton\" class=\"tid_14612376835079\">Skeleton for Application</a>.\n    </p>\n</div>","templateId":"tid_14612376835079"};});


define("widget/parser!body/Body", ["templating/parser!body/Body.html","widget/Constructor"], function(template, Constructor){ return Constructor.extend({template: template});});


define('templating/parser!footer/Footer.html',["coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e85","tagName":"style","data":{"style":".footer.tid_146123768365614{background:url(images/bg.png) #efefef;margin:30px 0 0;padding:20px 0;border-top:solid 4px #E44D26;color:#ccc}.footer.tid_146123768365614 .copy.tid_146123768365614{color:#E44D26;margin:0 20px}"},"template":"<div></div>","children":[]}],"template":"<div class=\"tid_146123768365614 footer\">\n    \n    <div class=\"tid_146123768365614 container\">\n        <div class=\"tid_146123768365614 row\">\n            <p class=\"tid_146123768365614\"><strong class=\"tid_146123768365614\">Author:</strong> Guntars Simanskis <span class=\"tid_146123768365614 copy\">Copyright (c) 2014</span></p>\n        </div>\n    </div>\n</div>","templateId":"tid_146123768365614"};});


define("widget/parser!footer/Footer", ["templating/parser!footer/Footer.html","widget/Constructor"], function(template, Constructor){ return Constructor.extend({template: template});});


define('templating/parser!container/_container.html',["navBar/NavBar","banner/Banner","widget/parser!quote/Quote","widget/parser!threeblock/ThreeBlock","widget/parser!fourblock/FourBlock","widget/parser!body/Body","widget/parser!footer/Footer","coders/component/cpDecoder","coders/placeholders/plDecoder","coders/databind/bdDecoder","coders/router/routerDecoder","coders/style/styleDecoder"], function () { return {"children":[{"id":"e0","tagName":"style","data":{"style":".container-main.tid_14612376833160{animation:animation_tid_14612376833160 1s;-webkit-animation:animation_tid_14612376833160 1s}.wrapper.tid_14612376833160{margin:-20px 0 30px}@keyframes animation_tid_14612376833160{0%{opacity:0;transform:scale(.95);-moz-transform:scale(.95)}50%{opacity:.5;transform:scale(1.05);-moz-transform:scale(1.05)}100%{opacity:1;transform:scale(1);-moz-transform:scale(1)}}@-webkit-keyframes animation_tid_14612376833160{0%{opacity:0;-webkit-transform:scale(.95)}50%{opacity:.5;-webkit-transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1)}}"},"template":"<div></div>","children":[]},{"id":"e1","tagName":"cp","data":{"dataset":{"bind":"navbar"},"tplSet":{},"attribs":{"class":"tid_14612376833160"},"name":"navbar","type":"cp","tag":"div","src":arguments[0]},"template":"<div></div>","children":[]},{"id":"e2","tagName":"cp","data":{"dataset":{"current":"0","bgincrement":"30","autoplay":"true","interval":"4000","bind":"banner"},"tplSet":{},"attribs":{"class":"tid_14612376833160"},"name":"banner","type":"cp","tag":"div","src":arguments[1]},"template":"<div></div>","children":[]},{"id":"e9","tagName":"rt","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376833160"},"name":"home","type":"rt","tag":"div","route":"/home"},"template":"<div>\n        <div class=\"tid_14612376833160 container\">\n            <div id=\"e5\" style=\"display:none\"></div>\n            <div id=\"e6\" style=\"display:none\"></div>\n            <div id=\"e7\" style=\"display:none\"></div>\n            <div id=\"e8\" style=\"display:none\"></div>\n        </div>\n    </div>","children":[{"id":"e5","tagName":"cp","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376833160"},"name":"quote","type":"cp","tag":"div","src":arguments[2]},"template":"<div><div id=\"e3\" style=\"display:none\"></div><div id=\"e4\" style=\"display:none\"></div></div>","children":[{"id":"e3","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376833160"},"name":"body","type":"pl","tag":"div"},"template":"<div>Design patterns are reusable solutions to commonly occurring problems in software design.\n                    They are both exciting and a fascinating topic to explore in any programming language.\n                </div>","children":[]},{"id":"e4","tagName":"pl","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376833160"},"name":"footer","type":"pl","tag":"div"},"template":"<div><cite title=\"Source Title\" class=\"tid_14612376833160\">Addy Osmani</cite></div>","children":[]}]},{"id":"e6","tagName":"cp","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376833160"},"name":"threeblock","type":"cp","tag":"div","src":arguments[3]},"template":"<div></div>","children":[]},{"id":"e7","tagName":"cp","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376833160"},"name":"fourblock","type":"cp","tag":"div","src":arguments[4]},"template":"<div></div>","children":[]},{"id":"e8","tagName":"cp","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376833160"},"name":"body","type":"cp","tag":"div","src":arguments[5]},"template":"<div></div>","children":[]}]},{"id":"e10","tagName":"cp","data":{"dataset":{},"tplSet":{},"attribs":{"class":"tid_14612376833160"},"name":"footer","type":"cp","tag":"div","src":arguments[6]},"template":"<div></div>","children":[]}],"template":"<div class=\"tid_14612376833160 container-main\">\n    \n\n    <div id=\"e1\" style=\"display:none\"></div>\n    <div class=\"tid_14612376833160 wrapper\">\n        <div id=\"e2\" style=\"display:none\"></div>\n    </div>\n    <div id=\"e9\" style=\"display:none\"></div>\n    <div id=\"e10\" style=\"display:none\"></div>\n</div>","templateId":"tid_14612376833160"};});

/**
 * Created by guntars on 20/04/2016.
 */
define('container/Container',[
    'widget/Constructor',
    'templating/parser!./_container.html'
], function(Constructor, template) {
    'use strict';

    return Constructor.extend({
        template: template,
        init(){
            var links = [];
            var tabs = this.data.tabs;
            Object.keys(tabs.code).forEach(function(key) {
                if (key !== 'links') {
                    links.push({
                        name:   key,
                        anchor: {
                            href: '#/' + key,
                            text: key
                        }
                    });
                }
            }.bind(this));

            tabs.links = links;
        },
        match(match) {
            match('/home(/:id)').to((id, route)=> {
                if (!id) {
                    var links = this.data.tabs.links,
                        location = route.getLocation('/home/');
                    window.location.hash = location + links[0].name;
                }
            });
        }
    });
});
/**
 * Created by guntars on 23/02/15.
 */
define('data/navbar',{
    links: [
        {
            name: 'home',
            link: {
                href: '#/home',
                text: 'Home'
            },
            class: 'active'
        },
        {
            name: 'GitHub',
            link: {
                href: 'https://github.com/gunins/stonewall',
                text: 'GitHub'
            }
        },
        {
            name: 'api',
            link: {
                href: 'https://rawgit.com/gunins/stonewall/master/dist/docs/loader.html',
                text: 'API Docs'
            }
        }
    ]
});
/**
 * Created by guntars on 20/02/15.
 */
define('data/banner',{
        slides: [
            {
                header: 'Templating',
                body: 'Write less code using integrated templating support. Automatic data binding, Reusable components.' +
                      ' Runtime and production environment. Easy creating Apps writing less code.',
                link: {
                    href: '#',
                    text: 'Read More'
                },
                image: {
                    src: 'images/html5.png',
                    alt: 'HTML5'
                }
            },
            {
                header: 'Scoped CSS',
                body: 'No need worried about class naming in your application any more. Templating parser automatically ' +
                      'applies css only to your module. you not braking anything else.',
                link: {
                    href: '#',
                    text: 'Read More'
                },
                image: {
                    src: 'images/css3.png',
                    alt: 'Scoped CSS'
                }
            },
            {
                header: 'Multi devices one App',
                body: 'Using responsive guidelines, your App will working on multiple devices, and supports latest HTML5 technologies.',
                link: {
                    href: '#',
                    text: 'Read More'
                },
                image: {
                    src: 'images/mobile-devices.png',
                    alt: 'Mobile'
                }
            }
        ]
});
/**
 * Created by guntars on 27/02/15.
 */
define('data/code',{
    app:       {
        code: {
            type: "javascript",
            src:  "define([\n\
      'widget/App',\n\
      'widget/parser!./container/Container'\n\
    ], function (App, Container) {\n\
        'use strict';\n\
\n\
        return App.extend({\n\
            AppContainer: Container,\n\
            setContext: function () {\n\
                return {\n\
                    data: {\n\
                        cmp: {\n\
                            item: 'Binded Item From App'\n\
                        }\n\
                    }\n\
                }\n\
            }\n\
        });\n\
    });"
        }
    },
    container: {
        code: {
            type: "html",
            src:  '<div class="panel panel-default">\n \
    <div class="panel-heading">Basic Example</div>\n \
        <div class="panel-body">\n \
            <cp-val data-image="images/board.png" src="widget/parser!./cmp/Cmp">\n \
                <pl-header>Header From Parent Container</pl-header>\n \
                <pl-body>\n \
                    <p class="testCustom">Body From Parent Container</p>\n \
                </pl-body>\n \
            </cp-val>\n \
        </div>\n \
    </div>\n\
</div>'
        }
    },
    component: {
        code: {
            type: "html",
            src:  '<div class="container-fluid cmp">\n \
    <style>\n\
        img {\n\
            border: solid 2px #337ab7;\n\
            width: 100%;\n\
        }\n\
    </style>\n\
    <pl-header tp-tag="h4"></pl-header>\n \
    <img tp-name="image" tp-type="pl" tp-bind-src="image" alt="Image"/>\n \
    <p>sample text</p>\n \
    <pl-body></pl-body>\n \
</div>'
        }
    }
});
/**
 * Created by guntars on 09/10/2014.
 */
define('App',[
    'widget/App',
    'container/Container',
    './data/navbar',
    './data/banner',
    './data/code'
], function(App, Container, navbar, banner, code) {

    return App.extend({
        AppContainer: Container,
        init() {
            if (window.location.hash === '') {
                window.location.hash = '/home/app';
            }
        },
        setContext() {
            return {
                data: {
                    navbar: navbar,
                    banner: banner,
                    tabs:   {
                        code: code
                    }
                }
            }
        }
    });
});
