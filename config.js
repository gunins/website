require.config({
    baseUrl: './src',
    templateCoders: [
        'coders/component/CpCoder',
        'coders/placeholders/plCoder',
        'coders/databind/bdCoder',
        'coders/router/RouterCoder',
        'coders/style/styleCoder'


    ],
    templateDecoders: [
        'coders/component/CpDecoder',
        'coders/placeholders/plDecoder',
        'coders/databind/bdDecoder',
        'coders/router/RouterDecoder',
        'coders/style/styleDecoder'
    ],
    paths: {
        'coders': '../node_modules/richtemplate/dev/coders',
        'templating': '../node_modules/richtemplate/dev/templating',
        'widget': '../node_modules/stonewalljs/dev/widget',
        'routerCoders': '../src/routerCoders',
        'watch':'../lib/watch/src/watch',
        'router':'../bower_components/urlmanager/dist/router',
        'jquery':'../bower_components/jquery/dist/jquery'
    }
});