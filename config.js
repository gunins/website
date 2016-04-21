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
        'coders': '../node_modules/richtemplate/es6/dev/coders',
        'templating': '../node_modules/richtemplate/es6/dev/templating',
        'widget': '../node_modules/stonewalljs/es6/dev/widget',
        'highlight':'../node_modules/highlight.js/lib/highlight'
    }
});