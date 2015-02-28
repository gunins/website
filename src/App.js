/**
 * Created by guntars on 09/10/2014.
 */
define([
    'widget/App',
    'widget/parser!./Container.html',
    './data/navbar',
    './data/banner',
    './data/code'
], function (App, Container, navbar, banner, code) {

    return App.extend({
        AppContainer: Container,
        setContext: function () {
            return {
                data: {
                    navbar: navbar,
                    banner: banner,
                    code: code
                }
            }
        }
    });
});