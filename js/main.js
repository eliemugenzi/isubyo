$(document).ready(() => {
  $(".toggle").on("mouseover", () => {
    $(".toggle").addClass("hovered");
  });
  $(".toggle").on("mouseleave", () => {
    $(".toggle").removeClass("hovered");
  });

  $(".toggle").on("click", () => {
    $(".toggle").toggleClass("active");
    $(".menu-wrapper").toggleClass("open");
    $(".search-section").removeClass("open");
  });

  $(".search button").on("click", () => {
    $(".search-section").toggleClass("open");
    $(".search button").toggleClass("dark");
    $(".menu-wrapper").removeClass("open");
    $(".toggle").removeClass("active");
  });

  let typed = new Typed(".typed", {
    strings: ["With love", "for Life"]
  });
});


