$(function(){
  $("[data-tooltip]").mousemove(function (eventObject) {
      $data_tooltip = $(this).attr("data-tooltip");
      $("#tooltip").html($data_tooltip)
          .css({ 
            "top" : eventObject.pageY + 10,
            "left" : eventObject.pageX + 10
          })
          .show();
      }).mouseout(function () {
        $("#tooltip").hide()
          .html("")
          .css({
              "top" : 0,
              "left" : 0
          });
  });
});

let swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

let topNavMenu = document.querySelectorAll('.topNav');
topNavMenu.forEach(function (topNav) {
  topNav.addEventListener('click', function (event) {
    event.target.closest('.topNav').classList.toggle('active');
  });
});
