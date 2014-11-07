'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: 'stacks2.js', //['stacks*.js', 'queues*.js', 'llists*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: 'stacks2.js', //['stacks*.js', 'queues*.js', 'llists*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/**/*.js']
    }
  });
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
