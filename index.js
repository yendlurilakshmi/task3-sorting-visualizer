let btn = document.querySelector("#newArray");
btn.addEventListener("click", show, { once: true });

function show() {
  let parent = document.querySelector(".flex-container");
  let arr = [];
  for (let i = 0; i < 101; i++) {
    arr.push(Math.floor(Math.random() * 101) + 1);
    let createDiv = document.createElement("div");
    createDiv.style.height = `${arr[i] * 5}px`;
    parent.appendChild(createDiv);
    createDiv.classList.add("height");
  }
}