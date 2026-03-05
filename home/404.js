gsap.registerPlugin(ScrollTrigger);

// LOADER
gsap.from("#re-loader div > div > div", {
  opacity: 0,
  y: 12,
  duration: 0.8,
  stagger: 0.35,
});

// CURSOR JS FOR HOVER
jQuery(document).ready(function ($) {
  const cursor = $(".cursor");

  $(document).on("mousemove", function (e) {
    cursor.css({
      top: e.clientY,
      left: e.clientX,
    });
  });

  $("a").on("mouseenter", function () {
    cursor.addClass("hovered");
  });

  $("a").on("mouseleave", function () {
    cursor.removeClass("hovered");
  });
  $("i").on("mouseenter", function () {
    cursor.addClass("hovered");
  });

  $("i").on("mouseleave", function () {
    cursor.removeClass("hovered");
  });
  $("button").on("mouseenter", function () {
    cursor.addClass("hovered");
  });

  $("button").on("mouseleave", function () {
    cursor.removeClass("hovered");
  });
});

// HOME GSAP

// LOADER WITH HOME
window.addEventListener("load", () => {
  const loader = document.getElementById("re-loader");

  gsap
    .timeline({
      delay: 3.1,
      onComplete: startHeroAnim,
    })
    .to(loader, {
      opacity: 0,
      duration: 1.8,
      ease: "power2.out",
    })
    .set(loader, { display: "none" });
});

// HERO ANIMATION AFTER LOADER
function startHeroAnim() {}
