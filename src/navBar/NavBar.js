/**
 * Created by guntars on 28/02/15.
 */
define([
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
                console.log(el);
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