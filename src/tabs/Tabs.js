/**
 * Created by guntars on 27/02/15.
 */
define([
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