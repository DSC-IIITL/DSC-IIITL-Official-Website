$(document).ready(function () {
  $(".main-carousel").flickity({
    wrapAround: true,
    autoPlay: true,
    autoPlay: 3000,
  });
  $(".main-page .nav-item a").click(function () {
    const hr = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(hr).offset().top - 50 }, 500);
  });
});
(function ($) {
  "use strict";
  $(window).on("load", function () {
    if ($(".preloader").length > 0) {
      $(".preloader").fadeOut("slow");
    }
  });
})(jQuery);

const anchor = document.getElementById("dropdownMenuLinkArchive");
console.log(anchor);
const divTag = document.getElementById("dropdownContentLink");
console.log(divTag);
function clickEvent() {
  const classes = anchor.className;
  console.log(classes, typeof classes);
  if (classes == "dropdown-toggle nav-link ml-2 pl-3") {
    divTag.style.display = "block";
  } else {
    divTag.style.display = "none";
  }
}
