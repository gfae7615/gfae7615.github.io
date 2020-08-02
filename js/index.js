/*global jQuery:false */
jQuery(document).ready(function ($) {
  "use strict"

  //add some elements with animate effect

  var mySwiper = new Swiper("#swiper", {
    autoplay: true, //可选选项，自动滑动
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })
  $(".big-cta").hover(
    function () {
      $(".cta a").addClass("animated shake")
    },
    function () {
      $(".cta a").removeClass("animated shake")
    }
  )
  $(".box").hover(
    function () {
      $(this).find(".icon").addClass("animated fadeInDown")
      $(this).find("p").addClass("animated fadeInUp")
    },
    function () {
      $(this).find(".icon").removeClass("animated fadeInDown")
      $(this).find("p").removeClass("animated fadeInUp")
    }
  )
})
