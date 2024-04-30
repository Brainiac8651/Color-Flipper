const redBtn = document.getElementById("red-btn")
const greenBtn = document.getElementById("green-btn")
const blueBtn = document.getElementById("blue-btn")
const blackBtn = document.getElementById("black-btn")
const title = document.getElementById("title")
const randBtn = document.getElementById("rand-btn")

function changeColor(color, btn) {
    document.body.style.backgroundColor = color;
    btn.style.background = color === "black" ? "transparent" : color === "green" ? "yellow" : "pink";
    btn.style.color = "white";
}

redBtn.addEventListener("click", () => changeColor("red", redBtn));
greenBtn.addEventListener("click", () => changeColor("green", greenBtn));
blueBtn.addEventListener("click", () => changeColor("blue", blueBtn));
blackBtn.addEventListener("click", () => {
    changeColor("black", blackBtn);
    title.style.color = "white"; 
});

// function randomColor() {
//     const red = Math.round(Math.random() * 255)
//     const green = Math.round(Math.random() * 255)
//     const blue = Math.round(Math.random() * 255)

//     const red2 = Math.round(Math.random() * 255)
//     const green2 = Math.round(Math.random() * 255)
//     const blue2 = Math.round(Math.random() * 255)

//     const colorGenerator = `rgb(${red} ${green} ${blue})`
//     const colorGenerator2 = `rgb(${red2} ${green2} ${blue2})`
//     document.body.style.backgroundColor = colorGenerator
//     randBtn.style.background = colorGenerator2
// }

function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

function setRandomColors() {
    document.body.style.backgroundColor = randomColor();
    randBtn.style.background = randomColor();
}

// Set random colors initially
setRandomColors();

// Optional: Set random colors when button is clicked
randBtn.addEventListener("click", setRandomColors);






