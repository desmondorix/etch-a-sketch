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
    box.style.width = `calc(100% / ${size})`;
    box.style.height = `calc(100% / ${size})`;
    container.appendChild(box);
    box.addEventListener("mouseenter", () => {
      changeColor(box);
    });
  }
}

var changeColor = (box) => {
  box.style.backgroundColor = "black";
};
