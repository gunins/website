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
        }
    });
});