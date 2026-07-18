(function () {
  var hero = document.querySelector(".hero");
  if (!hero) return;

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  var ticking = false;

  function update() {
    var fadeDistance = window.innerHeight * 0.85;
    var progress = Math.min(Math.max(window.scrollY / fadeDistance, 0), 1);
    hero.style.opacity = String(1 - progress);
    hero.style.transform = "translateY(" + (progress * 40) + "px) scale(" + (1 - progress * 0.06) + ")";
    hero.style.pointerEvents = progress > 0.85 ? "none" : "auto";
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
