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

// NAVBAR
const toggle = document.getElementById("homeToggle");
const menu = document.getElementById("homeMenu");
const items = menu.querySelectorAll(".home-item");
const caret = document.getElementById("homeCaret");

let isOpen = false;

gsap.set(menu, { autoAlpha: 0, y: -10, display: "none" });
gsap.set(items, { opacity: 0, y: -8 });

toggle.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isOpen) {
    menu.classList.remove("hidden");

    gsap.to(menu, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.05,
    });

    gsap.to(caret, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });

    isOpen = true;
  } else {
    closeMenu();
  }
});

function closeMenu() {
  gsap.to(items, {
    opacity: 0,
    y: -8,
    duration: 0.2,
    stagger: 0.05,
    ease: "power2.in",
  });

  gsap.to(menu, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => menu.classList.add("hidden"),
  });

  gsap.to(caret, {
    rotate: 0,
    duration: 0.25,
  });

  isOpen = false;
}

document.addEventListener("click", () => {
  if (isOpen) closeMenu();
});

const mobileToggle = document.getElementById("mobileHomeToggle");
const mobileMenu = document.getElementById("mobileHomeMenu");
const mobileItems = mobileMenu.querySelectorAll(".mobile-home-item");
const mobileCaret = document.getElementById("mobileCaret");

let isMobileOpen = false;

gsap.set(mobileMenu, {
  autoAlpha: 0,
  y: -10,
  display: "none",
});

gsap.set(mobileItems, {
  opacity: 0,
  y: -12,
});

mobileToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isMobileOpen) {
    mobileMenu.classList.remove("hidden");

    gsap.to(mobileMenu, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(mobileItems, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.05,
    });

    gsap.to(mobileCaret, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });

    isMobileOpen = true;
  } else {
    closeMobileMenu();
  }
});

function closeMobileMenu() {
  gsap.to(mobileItems, {
    opacity: 0,
    y: -12,
    duration: 0.25,
    stagger: 0.06,
    ease: "power2.in",
  });

  gsap.to(mobileMenu, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => mobileMenu.classList.add("hidden"),
  });

  gsap.to(mobileCaret, {
    rotate: 0,
    duration: 0.25,
    ease: "power2.in",
  });

  isMobileOpen = false;
}

document.addEventListener("click", () => {
  if (isMobileOpen) closeMobileMenu();
});

// ROUNDED NAVBAR ANIMATION JS
const navbar = document.getElementById("navbar");

let lastScroll = 0;
let isHidden = false;

// INITIAL STYLE
gsap.set(navbar, {
  color: "black",
});

// SCROLL DIRECTION
window.addEventListener("scroll", () => {
  let current = window.scrollY;

  const mainNav = document.getElementById("navbar");

  if (current > lastScroll && current > 120 && !isHidden) {
    gsap.to(mainNav, { y: -220, duration: 1.3, ease: "power2.out" });
    isHidden = true;
  }

  if (current < lastScroll && isHidden) {
    gsap.to(mainNav, { y: 0, duration: 1.3, ease: "power2.out" });
    isHidden = false;
  }

  lastScroll = current;
});

// HOME SECTION STYLE CHANGE

ScrollTrigger.create({
  trigger: "#home", // TRIGGER
  start: "top top",

  onEnter: () => {
    gsap.to(navbar, {
      duration: 0.5,
    });
  },

  onLeaveBack: () => {
    gsap.to(navbar, {
      duration: 0.5,
    });
  },
});

// MOBILE MENU JS WITH JQUERY
gsap.set(".menu-link", {
  opacity: 0,
  y: 30,
});

$(".ham-icon").click(function () {
  $(".mobile-menu").removeClass("translate-x-full").addClass("translate-x-0");

  gsap.to(".menu-link", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.15,
    delay: 0.3,
  });
});

$(".close-menu").click(function () {
  gsap.to(".menu-link", {
    opacity: 0,
    y: 30,
    duration: 0.4,
    ease: "power3.in",
    stagger: 0.1,
  });

  setTimeout(() => {
    $(".mobile-menu").removeClass("translate-x-0").addClass("translate-x-full");
  }, 400);
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

// STATE NEWS

// -------------------------------
// DATA
// -------------------------------

const politicalNews = {
  tamilnadu: [
    {
      title:
        "Party is bigger than individuals, says Congress MP Manickam Tagore",
      image: "./src/assets/tamil1.webp",
      author: "Political Bureau",
    },
    {
      title: "TVK supporters target media outlets online, draw ire",
      image: "./src/assets/tamil2.webp",
      author: "Chennai Correspondent",
    },
    {
      title: "Solve confusion in delivering postal items addressed to the dead",
      image: "./src/assets/tamil3.webp",
      author: "State Desk",
    },
    {
      title:
        "T.N. Chief Minister Stalin inaugurates auditorium at Presidency College",
      image: "./src/assets/tamil4.webp",
      author: "State Desk",
    },
    {
      title:
        "DMK to hold seat-sharing talks with Kamal Haasan’s MNM on March 4",
      image: "./src/assets/tamil5.webp",
      author: "State Desk",
    },
  ],

  telangana: [
    {
      title:
        "Passengers stranded in West Asia land in Hyderabad on special flights",
      image: "./src/assets/tel1.webp",
      author: "Hyderabad Bureau",
    },
    {
      title:
        "Census 2027 to be first fully digital exercise, says Telangana CS",
      image: "./src/assets/tel2.webp",
      author: "Political Desk",
    },
    {
      title: "Peak power demand crosses 18K MW as summer approaches",
      image: "./src/assets/tel3.webp",
      author: "Political Desk",
    },
    {
      title: "Congress pushes governance reforms ahead of assembly debate",
      image: "./src/assets/tel4.webp",
      author: "Political Desk",
    },
    {
      title: "Hyderabad urban development plan sparks policy debate",
      image: "./src/assets/tel5.webp",
      author: "Political Desk",
    },
  ],

  karnataka: [
    {
      title:
        "Karnataka cabinet reviews irrigation projects amid rural protests",
      image: "./src/assets/kar1.webp",
      author: "Bengaluru Bureau",
    },
    {
      title:
        "Opposition questions budget allocations for infrastructure corridor",
      image: "./src/assets/kar2.webp",
      author: "State Politics Desk",
    },
    {
      title: "Education reforms spark heated debate in assembly",
      image: "./src/assets/kar3.webp",
      author: "State Politics Desk",
    },
    {
      title: "Farm policy revisions trigger statewide consultations",
      image: "./src/assets/kar4.webp",
      author: "State Politics Desk",
    },
    {
      title: "Infrastructure budget receives mixed reactions",
      image: "./src/assets/kar5.webp",
      author: "State Politics Desk",
    },
  ],

  kerala: [
    {
      title: "Kerala assembly debate intensifies over economic policy reforms",
      image: "./src/assets/ker1.webp",
      author: "Thiruvananthapuram Bureau",
    },
    {
      title: "State budget focuses on healthcare expansion",
      image: "./src/assets/ker2.webp",
      author: "Policy Desk",
    },
    {
      title: "Tourism development strategy unveiled by Kerala government",
      image: "./src/assets/ker3.webp",
      author: "State Desk",
    },
    {
      title: "Infrastructure modernization plan debated in assembly",
      image: "./src/assets/ker4.webp",
      author: "State Desk",
    },
    {
      title: "Education funding proposal sparks discussion",
      image: "./src/assets/ker5.webp",
      author: "Policy Desk",
    },
  ],
};

let politicalStatesSwiper;

// --------------------------
// INIT SWIPER
// --------------------------

function initPoliticalSwiper() {
  politicalStatesSwiper = new Swiper(".politicalStatesSwiper", {
    loop: true,
    speed: 900,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      1040: { slidesPerView: 3, spaceBetween: 15 },
    },

    pagination: {
      el: ".politicalStatesPagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".statesNext",
      prevEl: ".statesPrev",
    },
  });
}

// --------------------------
// RENDER SLIDES
// --------------------------

function renderSlides(state) {
  const wrapper = document.querySelector(".politicalStatesWrapper");
  const articles = politicalNews[state];

  wrapper.innerHTML = "";

  articles.forEach((article) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
      <div class="grid gap-4">

        <img src="${article.image}" class="w-full h-60 object-cover">

        <h3 class="text-lg font-semibold leading-snug">
          ${article.title}
        </h3>

        <span class="text-xs text-gray-500">
          ${article.author}
        </span>

      </div>
    `;

    wrapper.appendChild(slide);
  });
}

// --------------------------
// TAB SWITCH
// --------------------------

document.querySelectorAll(".stateTab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const state = tab.dataset.state;

    document
      .querySelectorAll(".stateTab")
      .forEach((t) => t.classList.remove("active"));

    tab.classList.add("active");

    if (politicalStatesSwiper) {
      politicalStatesSwiper.destroy(true, true);
    }

    renderSlides(state);

    initPoliticalSwiper();

    gsap.from(".politicalStatesWrapper .swiper-slide", {
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.6,
    });
  });
});

// --------------------------
// INITIAL LOAD
// --------------------------

renderSlides("tamilnadu");
initPoliticalSwiper();

// HERO SECTION

gsap.defaults({ ease: "power3.out" });

const newsHeroMainSwiper = new Swiper(".newsHeroMainSwiper", {
  loop: true,
  speed: 1200,
  effect: "fade",
  fadeEffect: { crossFade: true },

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".newsHeroPagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".newsHeroNext",
    prevEl: ".newsHeroPrev",
  },

  on: {
    init: function () {
      animateHero(this.slides[this.activeIndex]);
    },

    slideChangeTransitionStart: function () {
      animateHero(this.slides[this.activeIndex]);
    },
  },
});

function animateHero(slide) {
  const bg = slide.querySelector(".newsHeroBg");
  const title = slide.querySelector(".newsHeroTitle");
  const overlay = slide.querySelector(".newsHeroOverlay");
  const meta = slide.querySelector(".newsHeroMeta");

  gsap.killTweensOf([bg, title, overlay, meta]);

  const tl = gsap.timeline();

  tl.fromTo(bg, { scale: 1.2 }, { scale: 1, duration: 1.6 })

    .from(
      overlay,
      {
        y: 80,
        opacity: 0,
        duration: 0.9,
      },
      "-=.9",
    )

    .from(
      title,
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
      },
      "-=.6",
    )

    .from(
      meta,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
      },
      "-=.6",
    );
}

/* dynamic copyright year */
document.getElementById("copyrightYear").textContent = new Date().getFullYear();

// SMOOTH SCROLL

const lenis = new Lenis({
  duration: 1,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  smoothTouch: false,
});

lenis.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length
      ? lenis.scrollTo(value, { immediate: true })
      : lenis.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ScrollTrigger.addEventListener("refresh", () => lenis.resize());
ScrollTrigger.refresh();

// SCROLL TOP
const btn = document.querySelector(".scrollTopBtn");
const progress = document.querySelector(".progress-bar");

const radius = 24;
const circumference = 2 * Math.PI * radius;

progress.style.strokeDasharray = circumference;
progress.style.strokeDashoffset = circumference;

function updateProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progressValue = scrollTop / height;
  const offset = circumference - progressValue * circumference;
  progress.style.strokeDashoffset = offset;

  if (scrollTop > 200) {
    gsap.to(btn, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
  } else {
    gsap.to(btn, { opacity: 0, scale: 0.7, duration: 0.3, ease: "power2.out" });
  }

  requestAnimationFrame(updateProgress);
}
updateProgress();

btn.onclick = () => {
  gsap.to(window, {
    scrollTo: 0,
    duration: 1.1,
    ease: "power3.inOut",
  });
};

// NAV HOVER
document.querySelectorAll(".nav-hover").forEach((link) => {
  let text = link.querySelector("span");

  link.addEventListener("mouseenter", () => {
    gsap.to(text, { y: "-100%", duration: 0.3 });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(text, { y: "0%", duration: 0.3 });
  });
});
