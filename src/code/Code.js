/**
 * Created by guntars on 26/02/15.
 */
define([
    'widget/Constructor',
    'templating/parser!./_code.html',
    'highlight',
    './hljsLanguages/javascript',
    './hljsLanguages/xml',
    './hljsLanguages/less'
], function(Constructor, template, hljs, js, xml, less) {
    'use strict';

    hljs.registerLanguage('javascript', js);
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('css', less);
    hljs.configure({
        classPrefix: template.templateId + ' hljs-',
        languages:['html','css']
    });


    return Constructor.extend({
        template: template,
        elReady:  {
            code(el, data) {
                el.el.innerHTML = hljs.highlight(data.type, data.src).value;
            }
        }
    });
});