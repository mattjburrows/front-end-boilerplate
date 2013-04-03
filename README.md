Essence Digital Front-end Boilerplate
=====================================

* [Introduction](#introduction)
* [Usage](#usage)
    * [Grunt](#grunt)
        * [Sass](#sass)
        * [Uglify](#uglify)
        * [Watching files](#watching-files)

# Introduction

Welcome to the Essence Digital front-end development boilerplate. The thought behind this repository is to provide a framework to quickly build front-end solutions harnessing the power of [Grunt js](http://gruntjs.com/) and [SASS](http://sass-lang.com/).

# Usage

* Download the project and un-zip the project in your folder structure on your development environment.
* Open up __package.json__ and edit the _name_ property to the name of your project.

## Grunt

* Open up Terminal (or whatever interface you use to use to access the command line) and locate the root directory of your new project.
* Make sure you can see the __Gruntfile.js__ and __package.json__ files in the folder and then type in _grunt_

What this will do is run the tasks that have been set up in __Gruntfile.js__, you can see by default it has SASS, Uglify and Watch setup by default.

### Sass

In the Gruntfile.js you can see that we reference the [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) package which will compile our SASS scripts into native CSS.

To run the SASS tasks separately type _"grunt sass"_ into your terminal window.

### Uglify

In the Gruntfile.js you can see we reference the [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) package which will minify and concatenate the JavaScript files we declare.

To run the Uglify tasks separately type _"grunt uglify"_ into your terminal window.

### Watching files

In the Gruntfile.js you can see we reference the [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) package which will run the tasks that we specify, namely the SASS and Uglify tasks.

To watch changes on the files specified in the Gruntfile.js script type _"grunt watch"_ into your terminal window.