import './scss/index.scss';
// import { pingPong } from './ping-pong.js';
import $ from 'jquery';




$(document).ready(function(){

  // $("#nav-burger-line-container").click(function() {



  // $(window).scroll(function() {
      // var iCurScrollPos = $(this).scrollTop();

      $("#nav-burger-line-container").click(function() {
        $(".nav-toggle").toggleClass("active");
        $(".nav-logo, .nav-burger").toggleClass("nav-bar-white");
        $(".nav-toggle").toggleClass("nav-toggle-white");
        $(".rectangle").toggle();
        $("#menu").fadeToggle();
        $("#menu-bg-tilt").toggleClass("slideOutUp");
        $(".menu-col").toggleClass("fadeOutDown");
      });


      // if (iCurScrollPos > 10) {
      //   $(".navBar").addClass("scrolled");
      //   $(".bar").addClass("rectangle animated fadeInDown");
      // } else if (iCurScrollPos < 10){
      //   $(".navBar").removeClass("scrolled");
      //   $(".bar").removeClass("rectangle animated fadeInDown");
      //   $("#h").show();
      // }
      // $("#nav-burger-line-container").click(function() {
      //   $(".nav-toggle").toggleClass("active");
      //   $("#menu").fadeToggle();
      //   $("#menu-bg-tilt").toggleClass("slideOutUp");
      //   $(".menu-col").toggleClass("fadeOutDown");
      // });
      //
      // if ($("#menu").is('hidden')) {
      //   $(".navBar").removeClass("scrolled");
      //   $(".bar").removeClass("rectangle animated fadeInDown");
      //   $("body").removeClass("noscroll");
      // } else if (iCurScrollPos > 10) {
      //   $(".navBar").addClass("scrolled");
      //   $(".bar").addClass("rectangle animated fadeInDown");
      // }
    // });


  // Hamburger to X Animation


}); //document close
