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
    hljs.registerLanguage('less', less);
    hljs.configure({
        classPrefix: template.templateId + ' hljs-'
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