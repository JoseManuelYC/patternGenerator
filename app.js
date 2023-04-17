const btn = document.querySelector(".btn-generate");

const drawns = [
  "quad-circle-1",
  "quad-circle-2",
  "quad-circle-3",
  "quad-circle-4",
  "triangle-1",
  "triangle-2",
  "triangle-3",
  "triangle-4",
  "circle",
];

const color = ["#FFFF00", "#0404B4", "#DF0101", "#3ADF00"];

const boxes = document.querySelectorAll(".container div");

let drawnPattern = () => {
  boxes.forEach((box) => {
    box.className = "";
    let i = Math.floor(Math.random() * drawns.length);
    let j = Math.floor(Math.random() * color.length);

    box.classList.add(drawns[i]);
    box.style.backgroundColor = color[j];
  });
};
btn.addEventListener("click", drawnPattern);
window.addEventListener("load", drawnPattern);
