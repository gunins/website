/**
 * Created by guntars on 27/02/15.
 */
define({
    app:       {
        code: {
            type: "javascript",
            src:  "define([\n\
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
            src:  '<div class="panel panel-default">\n \
    <div class="panel-heading">Basic Example</div>\n \
        <div class="panel-body">\n \
            <cp-val data-image="images/board.png" src="widget/parser!./cmp/Cmp">\n \
                <pl-header>Header From Parent Container</pl-header>\n \
                <pl-body>\n \
                    <p class="testCustom">Body From Parent Container</p>\n \
                </pl-body>\n \
            </cp-val>\n \
        </div>\n \
    </div>\n\
</div>'
        }
    },
    component: {
        code: {
            type: "html",
            src:  '<div class="container-fluid cmp">\n \
    <style>\n\
        img {\n\
            border: solid 2px #337ab7;\n\
            width: 100%;\n\
        }\n\
    </style>\n\
    <pl-header tp-tag="h4"></pl-header>\n \
    <img tp-name="image" tp-type="pl" tp-bind-src="image" alt="Image"/>\n \
    <p>sample text</p>\n \
    <pl-body></pl-body>\n \
</div>'
        }
    }
});