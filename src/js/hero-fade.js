(function () {
  var image = document.querySelector(".hero-image");
  var overlay = document.querySelector(".hero-overlay");
  var text = document.querySelector(".hero-text");
  var hero = document.querySelector(".hero");
  if (!image || !overlay || !text || !hero) return;

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  var ticking = false;

  function update() {
    var fadeDistance = window.innerHeight * 0.7;
    var linear = Math.min(Math.max(window.scrollY / fadeDistance, 0), 1);
    var eased = easeOutCubic(linear);

    image.style.transform = "scale(" + (1 + eased * 0.06) + ")";
    image.style.filter = "blur(" + eased * 4 + "px)";

    overlay.style.opacity = String(eased);
    overlay.style.transform = "translateY(" + (1 - eased) * 4 + "%)";

    text.style.opacity = String(1 - eased);
    text.style.transform = "translateY(" + eased * -16 + "px)";

    hero.style.pointerEvents = linear > 0.9 ? "none" : "auto";
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  update();
})();
