(function () {
  var left = document.querySelector(".hero-image-left");
  var right = document.querySelector(".hero-image-right");
  var text = document.querySelector(".hero-text");
  var hero = document.querySelector(".hero");
  if (!left || !right || !text || !hero) return;

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

    var driftVw = eased * 5; // small horizontal drift, not a full slide
    var scale = 1 + eased * 0.06;
    var blur = eased * 6;

    left.style.transform = "translateX(-" + driftVw + "vw) scale(" + scale + ")";
    left.style.opacity = String(1 - eased);
    left.style.filter = "blur(" + blur + "px)";

    right.style.transform = "translateX(" + driftVw + "vw) scale(" + scale + ")";
    right.style.opacity = String(1 - eased);
    right.style.filter = "blur(" + blur + "px)";

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
