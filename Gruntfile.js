module.exports = function (grunt) {
    var coders = {
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
        exclude: [
            'coders/component/CpCoder',
            'coders/component/CpDecoder',
            'coders/placeholders/plCoder',
            'coders/placeholders/plDecoder',
            'coders/databind/bdDecoder',
            'coders/databind/bdCoder',
            'widget/Constructor',
            'widget/App',
            'templating/Decoder',

        ]
    };
    var appPaths = {
        coders: '../node_modules/richtemplate/dev/coders',
        templating: '../node_modules/richtemplate/dev/templating',
        'widget': '../node_modules/stonewalljs/dev/widget',
        'widget/utils': 'widget/App',
        'router': '../bower_components/urlmanager/dist/prod/router'
    };
    var stubModules = ['templating/parser', 'widget/parser'];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['target'],
        requirejs: {

            basic: {
                options: {
                    baseUrl: 'src',
                    removeCombined: true,
                    optimize: 'none',
                    templateCoders: coders.templateCoders,
                    templateDecoders: coders.templateDecoders,
                    stubModules: stubModules,
                    exclude: coders.exclude,
                    dir: "target",
                    paths: appPaths,
                    name: 'App'

                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['clean', 'requirejs']);

};