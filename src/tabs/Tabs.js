/**
 * Created by guntars on 27/02/15.
 */
define([
    'widget/Constructor',
    'templating/parser!./_tabs.html'
], function (Constructor, template) {
    'use strict';

    return Constructor.extend({
        template: template,
        init: function () {
            var links = [];
            Object.keys(this.data).forEach(function (key) {
                links.push({
                    name: key,
                    anchor: {
                        href: '#/' + key,
                        text: key
                    }
                });
            }.bind(this));
            this.data.links = links;
        },
        match: function (match) {
            var links = this.data.links;
            match('(/)(:id)').to(function (id, route) {
                var location = '/' + route.getLocation('/');
                if (!id) {
                    window.location.hash = location + links[0].name;
                } else {
                    links.forEach(function (link) {
                        if (link.name === id) {
                            link.class = 'active';
                        } else {
                            link.class = 'inactive';
                        }
                        var curr = '#' + location.replace(id, '');
                        var indexOf = link.anchor.href.indexOf(curr);
                        if (indexOf === -1 || indexOf !== 0) {
                            link.anchor.href = curr + link.anchor.href.replace('#/','');
                        }
                    });
                }

            }.bind(this));
        }
    });
});