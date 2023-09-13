import { buttons, places } from "../utils/constants.js";

let mainPage = document.getElementById("page");

function toggleButton(button) {
  if (!button.classList.contains("button_open")) {
    button.classList.add("button_open");
  } else {
    button.classList.remove("button_open");
  }
}

buttons.map((b) => {
  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttondiv");

  let button = document.createElement("button");
  button.classList.add("button");
  button.style.backgroundColor = b.color;

  buttonDiv.style.gridColumn = places.find((p) => p.name === b.text).gridcolumn;
  buttonDiv.style.gridRow = places.find((p) => p.name === b.text).gridrow;

  let text = document.createTextNode(`${b.text}`);
  let textDiv = document.createElement("div");
  textDiv.classList.add("text");
  textDiv.append(text);

  let icon = document.createElement("div");
  icon.classList.add("icon");

  button.append(icon);
  button.append(textDiv);

  buttonDiv.appendChild(button);
  mainPage.appendChild(buttonDiv);
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("overlay")) {
    toggleButton(e.target.closest("button"));
  } else {
    let openButtons = document.querySelectorAll('.button_open');
    openButtons.forEach((b) => toggleButton(b));
  }
});
