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
  });

  $(".search button").on("click", () => {
    $(".search-section").toggleClass("open");
    $(".search button").toggleClass("dark");
  });

  let typed = new Typed(".typed", {
    strings: ["With love", "for Life"]
  });
});

$(document).scroll(() => {
  if ($(document).scrollTop() > 100) {
    $("nav").addClass("shrink");
  } else {
    $("nav").removeClass("shrink");
  }
});
