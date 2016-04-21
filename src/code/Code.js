/**
 * Created by guntars on 26/02/15.
 */
define([
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