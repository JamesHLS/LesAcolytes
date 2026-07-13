import { writeFileSync } from "fs";

function svg(w, h, label, bg = "#1c1c1c", fg = "#e8e4da") {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <text x="50%" y="50%" fill="${fg}" font-family="Georgia, serif" font-size="${Math.round(h / 14)}" text-anchor="middle" dominant-baseline="middle" opacity="0.85">${label}</text>
</svg>`;
}

const dir = "src/images/placeholders";
const files = [
  ["hero.svg", 1600, 900, "Les Acolytes — hero photo placeholder"],
  ["about.svg", 1000, 1200, "Ensemble group photo placeholder"],
  ["gallery-1.svg", 800, 800, "Concert photo 1"],
  ["gallery-2.svg", 800, 800, "Concert photo 2"],
  ["gallery-3.svg", 800, 800, "Concert photo 3"],
  ["gallery-4.svg", 800, 800, "Concert photo 4"],
  ["event-cambridge.svg", 900, 600, "French Baroque Cantatas — Cambridge"],
];

for (const [name, w, h, label] of files) {
  writeFileSync(`${dir}/${name}`, svg(w, h, label));
}
console.log("Placeholders written to", dir);
