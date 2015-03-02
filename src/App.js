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
        init: function () {
            if (window.location.hash === '') {
                window.location.hash = '/home/app';
            }
        },
        setContext: function () {
            return {
                data: {
                    navbar: navbar,
                    banner: banner,
                    tabs:{
                        code:code
                    }
                }
            }
        }
    });
});