require.config({
    baseUrl: './src',
    templateCoders: [
        'coders/component/CpCoder',
        'coders/placeholders/plCoder',
        'coders/databind/bdCoder',
        'coders/router/RouterCoder'
    ],
    templateDecoders: [
        'coders/component/CpDecoder',
        'coders/placeholders/plDecoder',
        'coders/databind/bdDecoder',
        'coders/router/RouterDecoder'
    ],
    paths: {
        'coders': '../node_modules/richtemplate/dev/coders',
        'templating': '../node_modules/richtemplate/dev/templating',
        'widget': '../node_modules/stonewalljs/dev/widget',
        'watch': '../bower_components/watch/src/watch'
    }
});