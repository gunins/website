/**
 * Created by guntars on 20/04/2016.
 */
define([
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