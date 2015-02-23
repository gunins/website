/**
 * Created by guntars on 09/10/2014.
 */
define([
    'widget/App',
    'widget/parser!container/Container',
], function (App, Container) {

    return App.extend({
        AppContainer: Container,
        setContext: function () {
            return {
                data: {
                    navbar: {
                        links: [
                            {
                                link: {
                                    href: '#/home',
                                    text: 'Home'
                                },
                                class:'active'
                            },
                            {
                                link: {
                                    href: '#/about',
                                    text: 'About'
                                }
                            },
                            {
                                link: {
                                    href: '#/Features',
                                    text: 'Features'
                                }
                            },
                            {
                                link: {
                                    href: '#/api',
                                    text: 'API Docs'
                                }
                            }
                        ]
                    }
                }
            }
        }
    });
});