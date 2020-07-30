/*global jQuery:false */
jQuery(document).ready(function ($) {
  "use strict"

  $("#services")
    .find(".col-features-text-box")
    .each(function () {
      $(this).css("height", $("#imageLoad").height() + "px")
    })
})
