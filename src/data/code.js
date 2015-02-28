/**
 * Created by guntars on 27/02/15.
 */
define({
    app: {
        code: {
            type: "javascript",
            text: "define([\n\
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
            text: "&lt;div class=&quot;panel panel-default&quot;&gt;\n \
    &lt;div class=&quot;panel-heading&quot;&gt;Basic Example&lt;/div&gt;\n \
        &lt;div class=&quot;panel-body&quot;&gt;\n \
            &lt;cp-val data-image=&quot;images/board.png&quot; src=&quot;widget/parser!./cmp/Cmp&quot;&gt;\n \
                &lt;pl-header&gt;Header From Parent Container&lt;/pl-header&gt;\n \
                &lt;pl-body&gt;\n\
                    &lt;p class=&quot;testCustom&quot;&gt;Body From Parent Container&lt;/p&gt;\n \
                &lt;/pl-body&gt;\n \
            &lt;/cp-val&gt;\n \
    &lt;/div&gt;\n \
&lt;/div&gt;"
        }
    },
    component: {
        code: {
            type: "html",
            text: "&lt;div class=&quot;container-fluid cmp&quot;&gt;\n \
    &lt;pl-header tp-tag=&quot;h4&quot;&gt;&lt;/pl-header&gt;\n \
    &lt;img tp-name=&quot;image&quot; tp-type=&quot;pl&quot; tp-bind-src=&quot;image&quot; alt=&quot;Image&quot;/&gt;\n \
    &lt;p&gt;sample text&lt;/p&gt;\n \
    &lt;pl-body&gt;&lt;/pl-body&gt;\n \
&lt;/div&gt;"
        }
    }
});