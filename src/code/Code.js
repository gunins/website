/**
 * Created by guntars on 26/02/15.
 */
define([
    'widget/Constructor',
    'templating/parser!./_code.html',
    'highlight'
], function (Constructor, template) {
    'use strict';

    return Constructor.extend({
        template: template,
        init: function () {
            this.loadCss(require.toUrl('../bower_components/highlight/src/styles/googlecode.css'));

        },
        elReady: {
            code: function (el) {
                hljs.highlightBlock(el.el);

            }
        }
    });
});