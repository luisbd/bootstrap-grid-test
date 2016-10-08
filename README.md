Grid-based layout development performance
=========================================

A series of solutions to implement a basic grid-based layout: from using Bootstrap linked from the CDN to the most customized use of Bootstrap grid mixins and CSS Grid Layout Module.

This repo gathers the source files - as well as compiled both non-minimized and minimized CSS- used in this series of articles with a focus on cross-checking the performance of each implementation.

Installing instructions
-----------------------

*Clone this repo.
*Go into the test folder and install dependecies doing npm install
*To compile non-minified Sass do gulp sass. It is saved into the public/styles/non-min folder
*To compile minified Sass go gulp sass-prod. It is saved into the public/styles/min folder

Note: The html has a link to the minified version of the stylesheet
