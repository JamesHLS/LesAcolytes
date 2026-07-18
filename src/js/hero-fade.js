(function () {
  var left = document.querySelector(".hero-image-left");
  var right = document.querySelector(".hero-image-right");
  var text = document.querySelector(".hero-text");
  var hero = document.querySelector(".hero");
  if (!left || !right || !text || !hero) return;

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  var ticking = false;

  function update() {
    var fadeDistance = window.innerHeight * 0.9;
    var progress = Math.min(Math.max(window.scrollY / fadeDistance, 0), 1);
    var textProgress = Math.min(progress * 1.6, 1);

    left.style.transform = "translateX(" + -progress * 100 + "%)";
    right.style.transform = "translateX(" + progress * 100 + "%)";

    text.style.opacity = String(1 - textProgress);
    text.style.transform = "translateY(" + textProgress * -24 + "px)";

    hero.style.pointerEvents = progress > 0.9 ? "none" : "auto";
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
