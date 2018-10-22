import './scss/index.scss';
// import { pingPong } from './ping-pong.js';
import $ from 'jquery';

import fourfeatured from './assets/images/fourfeatured.mov';


$(document).ready(function(){


      $("#nav-burger-line-container").click(function() {
        $(".nav-toggle").toggleClass("active");
        $(".nav-logo, .nav-burger").toggleClass("nav-bar-white");
        $(".nav-toggle").toggleClass("nav-toggle-white");
        $(".rectangle").toggle();
        $("#menu").fadeToggle();
        $("#menu-bg-tilt").toggleClass("slideOutUp");
        $(".menu-col").toggleClass("fadeOutDown");
      });



}); //document close
