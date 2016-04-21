/**
 * Created by guntars on 09/10/2014.
 */
define([
    'widget/App',
    'container/Container',
    './data/navbar',
    './data/banner',
    './data/code'
], function(App, Container, navbar, banner, code) {

    return App.extend({
        AppContainer: Container,
        init() {
            if (window.location.hash === '') {
                window.location.hash = '/home/app';
            }
        },
        setContext() {
            return {
                data: {
                    navbar: navbar,
                    banner: banner,
                    tabs:   {
                        code: code
                    }
                }
            }
        }
    });
});