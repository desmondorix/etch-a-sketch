const container = document.querySelector(".container");

var size = 16;
var newSize = 0;
gridMaker(size);
const gridButton = document.querySelector(".grid-size");
gridButton.addEventListener("click", () => {
  newSize = prompt("Masukkan Jumlah Grid : (max 100)");
  newSize = parseInt(newSize);
  if (!isNaN(newSize) && newSize <= 100) {
    container.innerHTML = "";
    size = newSize;
    gridMaker(size);
  }
});

function gridMaker(size) {
  for (var i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.dataset.hover = 0;
    box.style.width = `calc(100% / ${size})`;
    box.style.height = `calc(100% / ${size})`;
    container.appendChild(box);
    box.addEventListener("mouseenter", () => {
      changeColor(box);
    });
  }
}

var changeColor = (box) => {
  let countHover = parseInt(box.dataset.hover);

  // Jika pertama kali di-hover
  if (countHover === 0) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    box.dataset.rgb = `${r},${g},${b}`;
    box.style.backgroundColor = `rgb(${r},${g},${b})`;

    box.dataset.hover = 1;
  }

  // Jika sudah pernah dihover dan kurang dari 10x
  else if (countHover < 10) {
    const [r, g, b] = box.dataset.rgb.split(",").map(Number);
    const factor = 1 - countHover * 0.1;

    const darkR = Math.floor(r * factor);
    const darkG = Math.floor(g * factor);
    const darkB = Math.floor(b * factor);

    box.style.backgroundColor = `rgb(${darkR},${darkG},${darkB})`;
    box.dataset.hover = countHover + 1;
  }
};
