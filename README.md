Grid-based layout performance
=============================

A series of basic grid-based layout implementations: from using Bootstrap linked from the CDN to the most customized use of Bootstrap grid mixins and CSS Grid Layout Module.

The 6 projects gathered in this repo were used [in this series of articles](http://www.sparkbit.pl/category/layout-development/ "Grid-based layout development articles in Sparkbit's blog") with a focus on cross-checking the performance of each implementation.

This repo gathers the 6 project with its source files, each one including its own gulp file, as well as compiled both non-minimized and minimized CSS.

Installing instructions
-----------------------

* Clone this repo.
* Go into the test folder and install dependecies with `npm install`
* To compile non-minified Sass do gulp sass. It is saved into the `public/styles/non-min` folder
* To compile minified Sass go gulp sass-prod. It is saved into the `public/styles/min` folder

Note: The CSS used in every project is the minified version.
