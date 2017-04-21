## Website Performance Optimization portfolio project

The objective for this project is to optimize this template online portfolio for speed. In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

The original unoptimized repository is available at  https://github.com/udacity/frontend-nanodegree-mobile-portfolio

##How to run

Download or use git to clone this repository to local, then transfer the entire dest folder to your web server document root folder. Then access the URL http://yourserveraddress/.

###Recommended approach

You are recommended to use SimpleHTTPServer if Python has been installed (Mac OS X and Linux should have pre-installed version). Decompress the file in Explorer (Windows) or Finder (Mac), open a terminal window, use cd  command to get in the file folder and run the following command:

* cd dest
* python -m SimpleHTTPServer

After it starts, a web browser window should be jump up. If you don't see the window, then type http://localhost:8000 into web browser address line and press Enter.

##How did I carry out the optimization?

####Part 1: Optimize PageSpeed Insights score for index.html

* Specified attribute media="print" for printing stylesheet file
* Added async attribute to the Google Analytics script
* Removed unnecessary HTML tags
* Rewrite HTML with semantic tags
* Relocated external JS file link
* Resized and compressed all images
* Replaced the link to external CSS file with JS WebFont.load function
* Embedded Data URI rather than image links to improve PageSpeed score

####Part 2: Optimize Frames per Second in pizza.html

####Optimizations in views/pizza.html:

* Removed unnecessary HTML tags
* Updated HTML with semantic tags
* Re-write the navigation menu code
* Inlined CSS file

####Optimizations in views/js/main.js:

* Compressed and resized pizza image (images/pizza.png) and created a small version (pizza-xs.png) for background pizzas
* Replaced querySelector with getElementById
* Replaced querySelectorAll with getElementsByClassName
* Saved the array length to local variable to avoid check at each iteration
* Updates in the changePizzaSizes function:
  * created new array outside loop to store all Pizza containers
  * Followed Cam's lecture to change Pizza size values from pixels to percent, and removed unnecessary function
* Updates in the updatePositions function:
  * Created valueArray variable to hold the 5 values in a separate for-loop
  * Cached scrollTop and items.length in variables outside loop
  * Replaced the style.left with the transform attribute and translateX value as recommended in the course video
* Updates in the function for DOMContentLoaded event listener:
  * created variables for the width and height of the viewport
  * Calculated the number of pizzas based on viewport size rather 200, and stored in the new variable backgroundPizzas
  * Cached pizza container in the variable movingContainer outside the for-loop
  * As Cam's suggestion, used requestAnimationFrame (updatePositions) to speed performance
* Updates to resolve all warning messages given by JSLint
  * Updated code format
  * Moved all variable declaration outside for-loop
  * Added "use strict" for each function
* Added window.onload function rather than run for-loop without event trigger

####Optimizations in views/css/style.css:

* Added settings to mover class for performance purpose
  * -webkit-transform: translateZ(0);
  *        transform: translateZ(0);
  * -webkit-transform: translate3d(0,0,0);
  *        transform: translate3d(0,0,0);
  * -webkit-backface-visibility: hidden;
  *        backface-visibility: hidden;
  * will-change:transform;
* Created nav-menu class to polish the navigation menu
* Removed the minus symbol ahead of "box-sizing: border-box;"

###Use of the task-runner Grunt
Grunt is a task-runner that for this project was used to:

* Minify CSS files [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
* Minify JavaScript files [uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* Compress images [imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
* Minify HTML files after above tasks [htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)

