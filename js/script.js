$("body").toggleClass("loaded");
setTimeout(function () {
  $("#preloader").addClass("d-none");
}, 100);
$("a[href^='https://']").attr("target", "_blank");
// .scroll() creates an event when the user scrolls
$(document).on("scroll", function () {
  if ($(this).scrollTop() >= $(".sticknavi").position().top) {
    $(".navbar").addClass("nav-entry");
  } else $(".navbar").removeClass("nav-entry");
});

$(document).ready(function () {
  $(".accordion-list > li > .answer").hide();

  $(".accordion-list > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
});

$(function () {
  "use strict";
  /* ================================================
        Back to top
        ================================================ */

  /* ================================================
        Video popup
        ================================================ */

  /* ================================================
        Banner Slider
        ================================================ */

  var $bannerSlider = $(".banner-slider");

  if ($bannerSlider.length && $.fn.slick) {
    $bannerSlider.slick({
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      infinite: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: false,
            verticalSwiping: false,
          },
        },
      ],
    });
  }

  /* ================================================
        Main Slider
        ================================================ */

  /* ================================================
      Before After Slider
      ================================================ */
  if ($.fn.twentytwenty) {
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
      default_offset_pct: 0.3,
    });
    $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({
      default_offset_pct: 0.3,
      orientation: "vertical",
    });
  }
});

$(".webform").submit(function (e) {
  e.preventDefault();
  $(
    ".submit"
  ).html(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Please Wait`);
  $.ajax({
    url: "https://api.web3forms.com/submit",
    type: "post",
    data: $(".webform").serialize(),
    success: function () {
      $(".submit").html("Submitted");
    },
  });
});

function serviceDetail(service) {
  $(".tab-pane").addClass("d-none");
  $(service).removeClass("d-none");
}
const vidya = `<p class="text-secondary">“Everyone loves to be beautiful. 
Many people spend a lifetime in the fear that 
their flaws are permanent and beyond repair. As
 part of my job, I have helped many people achieve 
 confidence and thereby become stronger. Such
  moments make my life happier and career fruitful.
   I hope to continue helping people be confident 
   and beautiful”</p> <span>Dr Vidya S</span>`;
const arun = ` <p class="text-secondary">
   “The current lifestyle has led to people suffering from
   many kinds of gastrological ailments. But these issues are
   often overlooked and ignored. At our clinic, we hope to
   help people overcome their gastrological problems and lead
   fuller and better lives”
 </p>
 <span>Dr ANUSH MOHAN</span>`;

$(document).ready(function () {
  $("#vidya").mouseenter(function () {
    $("#drquote").hide().html(vidya).fadeIn("slow");
  });
  $("#anush").mouseenter(function () {
    $("#drquote").hide().html(arun).fadeIn("slow");
  });
});

$(".button_su_inner").mouseenter(function (e) {
  var parentOffset = $(this).offset();

  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({ left: relX, top: relY });
  $(this).prev(".su_button_circle").removeClass("desplode-circle");
  $(this).prev(".su_button_circle").addClass("explode-circle");
  $(this).css("text-decoration", "none");
});

$(".button_su_inner").mouseleave(function (e) {
  var parentOffset = $(this).offset();

  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({ left: relX, top: relY });
  $(this).prev(".su_button_circle").removeClass("explode-circle");
  $(this).prev(".su_button_circle").addClass("desplode-circle");
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(".service-thumbnail", {
  scrollTrigger: {
    trigger: ".booking-form",
    start: "top bottom",
    end: "top 100px",
    markers: false,
    scrub: 2,
  },
  y: 400,
  opacity: 0,
  duration: 1,
});
// gsap.from("#services", {
//   textContent: 0,
//   duration: 4,
//   ease: "power1.in",
//   snap: { textContent: 1 },
//   stagger: {
//     each: 1.0,
//     onUpdate: function() {
//       this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
//     },
//   }
// });
gsap.from(".service-box2", {
  scrollTrigger: {
    trigger: "#services",
    start: "top bottom",
    end: "top 30%",
    markers: false,
    scrub: true,
  },
  y: 200,
  opacity: 0,
  duration: 3,
  ease: "none",
  stagger: 0.5,
});
gsap.from(".heading-style1", {
  scrollTrigger: {
    trigger: "#services",
    start: "top bottom",
    end: "top 30%",
    markers: false,
    scrub: true,
  },
  x: -200,
  opacity: 0,
  duration: 3,
  ease: "none",
  stagger: 0.5,
});
gsap.from(".sub-title_center", {
  scrollTrigger: {
    trigger: ".sub-title_center",
    start: "top center",
    end: "top 10%",
    markers: false,
    scrub: true,
  },
  y: -200,
  opacity: 0,
  duration: 3,
  ease: "none",
  stagger: 0.5,
});
gsap.from(".service-block", {
  scrollTrigger: {
    trigger: ".sub-title_center",
    start: "top bottom",
    end: "top 30%",
    markers: false,
    scrub: true,
  },
  y: 200,
  opacity: 0,
  duration: 3,
  ease: "none",
  stagger: 0.5,
});

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });
});

function counterfn() {
  $(".facilities h3 strong").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
            console.log(now);
          },
        }
      );
  });
}

ScrollTrigger.create({
  trigger: ".facilities",
  onEnter: function () {
    counterfn();
  },
  onLeave: function () {
    hide();
  }, // assure that the element is hidden when scrolled into view
});
