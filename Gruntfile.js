module.exports = function(grunt) {
    var coders = {
        templateCoders:   [
            'coders/component/cpCoder',
            'coders/placeholders/plCoder',
            'coders/databind/bdCoder',
            'coders/router/routerCoder',
            'coders/style/styleCoder'
        ],
        templateDecoders: [
            'coders/component/cpDecoder',
            'coders/placeholders/plDecoder',
            'coders/databind/bdDecoder',
            'coders/router/routerDecoder',
            'coders/style/styleDecoder'
        ],
        exclude:          [
            'coders/component/cpCoder',
            'coders/component/cpDecoder',
            'coders/placeholders/plCoder',
            'coders/placeholders/plDecoder',
            'coders/databind/bdDecoder',
            'coders/databind/bdCoder',
            'coders/router/routerDecoder',
            'coders/router/routerCoder',
            'coders/style/styleCoder',
            'coders/style/styleDecoder',
            'widget/Constructor',
            'widget/Mediator',
            'widget/App',
            'templating/Decoder',
            'templating/dom'

        ]
    };
    var appPaths = {
        coders:      '../node_modules/richtemplate/es5/dev/coders',
        templating:  '../node_modules/richtemplate/es5/dev/templating',
        'widget':    '../node_modules/stonewalljs/es6/dev/widget',
        'widget/Mediator':    '../node_modules/stonewalljs/es6/dev/widget/App',
        'highlight':'../node_modules/highlight.js/lib/highlight',
        'babel/polyfill': '../node_modules/babel-polyfill/dist/polyfill'

    };
    var stubModules = ['templating/parser', 'widget/parser'];

    grunt.initConfig({
        pkg:       grunt.file.readJSON('package.json'),
        clean:     ['target', 'dist'],
        requirejs: {
            basic: {
                options: {
                    baseUrl:          'src',
                    removeCombined:   true,
                    optimize:         'none',
                    templateCoders:   coders.templateCoders,
                    templateDecoders: coders.templateDecoders,
                    stubModules:      stubModules,
                    exclude:          coders.exclude,
                    dir:              "target/es6",
                    paths:            appPaths,
                    modules:          [
                        {
                            name:    'App',
                            exclude: coders.exclude

                        },
                        {
                            name: 'babel/polyfill'

                        }
                    ]
                }
            }
        },
        babel:     {
            options:  {
                presets: ['es2015'],
                compact: false
            }, basic: {
                options: {
                    sourceMap: false
                },
                files:   [
                    {
                        expand: true,
                        cwd:    'target/es6/',
                        src:    '**/*.js',
                        dest:   'target/es5/'
                    }
                ]
            }
        },
        uglify:          {
            options:  {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            prod:     {
                files: [{
                    expand: true,
                    cwd:    'target/es5/',
                    src:    'App.js',
                    dest:   'target/es5/'
                }]
            }

        },
        copy: {
            resources: {
                files: [
                    {
                        expand: true, cwd: './', src: [
                        'bower_components/requirejs/require.js',
                        'bower_components/bootstrap/dist/css/bootstrap.min.css',
                        'bower_components/bootstrap/dist/fonts/*',
                        'bower_components/highlight/src/styles/googlecode.css'
                    ], dest:    'dist'
                    }
                ]
            },
            app:       {
                expand: true, 
                cwd: './target', 
                src: [
                    'es6/App.js',
                    'es5/App.js'
                    
                ], dest: 'dist/target'
            },
            constructores6:       {
                expand: true, 
                cwd: './node_modules/stonewalljs/es6/prod', 
                src: [
                    'widget/App.js'
                    
                ], dest: 'dist/target/es6'
            },
            constructores5:       {
                expand: true, 
                cwd: './node_modules/stonewalljs/es5/prod', 
                src: [
                    'babel/polyfill.js',
                    'widget/App.js'
                    
                ], dest: 'dist/target/es5'
            },
            loader:       {
                expand: true, 
                cwd: './node_modules/stonewalljs/', 
                src: [
                    'loader.js'
                    
                ], dest: 'dist/target/'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['clean', 'requirejs', 'babel','uglify', 'copy']);

};