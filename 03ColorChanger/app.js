const canvas = document.querySelector("#canvas");
const button = document.querySelector("#button");

button.addEventListener("click", changeColor);

function changeColor() {
    let char = "0123456789ABCDEF";
    let value = "#";

    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * 16);
        value += char[random];
    }
    canvas.style.backgroundColor = value;
}