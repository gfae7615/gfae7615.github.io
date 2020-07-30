/*global jQuery:false */
jQuery(document).ready(function ($) {
  "use strict"
  $("#myModal").on("click", ".modal-flex", function (e) {
    if ($(e.target).attr("class") === "modal-flex") {
      // $("#myModal").modal("toggle")
      $("#myModal").modal("hide")

      $("body").css({
        overflow: "auto",
        "margin-right": "0",
      })
    }
  })

  $("#footer").on("click", "span[data-type]", function () {
    var type = $(this).attr("data-type")
    var img = "",
      text = ""
    var modalDom = $("#myModal")
    switch (type) {
      case "wechat":
        img = "img/contact_code.png"
        text = "扫码关注Mlecoo公众号"
        break
      case "phone":
        img = "img/contact_phone.png"
        text = "0571-8897557"
        break
      case "email":
        img = "img/contact_email.png"
        text = "Mlecoo-zb@163.com"
        break
      default:
        break
    }
    if (type === "wechat") {
      modalDom.find(".modal-dialog").addClass("wechat")
    } else {
      modalDom.find(".modal-dialog").removeClass("wechat")
    }
    modalDom.find(".body-img").attr("src", img)
    modalDom.find(".body-p").text(text)
    modalDom.modal({
      keyboard: true,
    })
    $("body").css({
      overflow: "hidden",
      "margin-right": "15px",
    })
  })

  var lastScrollTop = 0

  //scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollup").fadeIn()
    } else {
      $(".scrollup").fadeOut()
    }
    if (window.location.href.indexOf("case.html") === -1) {
      var st = $(window).scrollTop()
      if (st < lastScrollTop) {
        if (st < 10) {
          $(".header-nav").removeClass("scroll")
          $(".header-nav")
            .find('img[alt="logo"]')
            .attr("src", "img/logo_white.png")
        } else {
          $(".header-nav").addClass("scroll").slideDown()
          $(".header-nav")
            .find('img[alt="logo"]')
            .attr("src", "img/logo_color.png")
        }
      } else {
        if (st < 100) {
          $(".header-nav").addClass("scroll") //.slideDown()
          $(".header-nav")
            .find('img[alt="logo"]')
            .attr("src", "img/logo_color.png")
        } else if (st > 200) {
          $(".header-nav").slideUp()
          $(".header-nav")
            .find('img[alt="logo"]')
            .attr("src", "img/logo_color.png")
        }
      }
      lastScrollTop = st
    } else {
      var st = $(window).scrollTop()
      if (st < lastScrollTop) {
        if (st < 10) {
          $(".header-nav").removeClass("scroll")
        } else {
          $(".header-nav").addClass("scroll").slideDown()
        }
      } else {
        if (st < 100) {
          $(".header-nav").addClass("scroll")
        } else if (st > 200) {
          $(".header-nav").slideUp()
        }
      }
      lastScrollTop = st
    }
    if (getScrollHeight() - getClientHeight() - $(this).scrollTop() < 350) {
      $("#scrollup").addClass("black")
    } else {
      $("#scrollup").removeClass("black")
    }
  })
  $(".scrollup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000)
    return false
  })

  var getScrollHeight = function () {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    )
  }

  var getClientHeight = function () {
    var clientHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(
        document.body.clientHeight,
        document.documentElement.clientHeight
      )
    } else {
      clientHeight = Math.max(
        document.body.clientHeight,
        document.documentElement.clientHeight
      )
    }
    return clientHeight
  }
})
