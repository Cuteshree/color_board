const container = document.getElementById("container");

var colors = ["#264E70", "#679186", "#FFB4AC", "#FFEBD3", "#CF4647", "#A44444", "#230444"];

var squares = 400;

for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    var color = RandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = "0 0 3px";
}

function RandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
