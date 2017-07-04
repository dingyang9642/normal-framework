'use strict';
var gulp = require('gulp');

// 非proxy
var browserSync = require('browser-sync');
// proxy
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');


// 本地服务器【无代理】
gulp.task('dev', function() {
	browserSync({
        server: {
            // 指定服务器启动根目录
            baseDir: './'
        },
        port: 8080,
        ui: {
            port: 9090
        }
	});
});

// 本地服务器【代理】
gulp.task('dev2', function () {
    connect.server({
        port: 8081,
        livereload: true,
        middleware: function (connect, opt) {
            return [
                proxy('/food/xxx',  {
                    target: 'http://localhost:8888',
                    changeOrigin: true
                })
            ];
        }
    });
});


