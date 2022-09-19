// let input;
const btn = document.querySelector("#convert-btn");
const camelPara = document.querySelector("#camel-case");
const pascalPara = document.querySelector("#pascal-case");
const snakePara = document.querySelector("#snake-case");
const screamingSnakePara = document.querySelector("#screaming-snake-case");
const kebabPara = document.querySelector("#kebab-case");
const screamingKebabPara = document.querySelector("#screaming-kebab-case");

btn.addEventListener("click", getInputValue);

const camelCase = (value) => {
    let words = value.split(" ");
    let camelWord = words.map((word, index) => {
        if(index !== 0) {
            return word[0].toUpperCase() + word.slice(1);
        } else {
             return word
        }
    })
    camelWord = camelWord.join("");
    camelPara.textContent = camelWord;
}

const pascalCase = (value) => {
    let words = value.split(" ");
    let pascalWord = words.map(word => word[0].toUpperCase() + word.slice(1));
    pascalWord = pascalWord.join("");
    pascalPara.textContent = pascalWord;
}

const snakeCase = (value) => {
    let words = value.split(" ");
    snakePara.textContent = words.join("_");
}

const screamingSnakeCase = (value) => {
    let words = value.split(" ");
    let capital = words.map(word => word.toUpperCase())
    screamingSnakePara.textContent = capital.join("_");
}

const kebabCase = (value) => {
    let words = value.split(" ");
    kebabPara.textContent = words.join("-");
}

const screamingKababCase = (value) => {
    let words = value.split(" ");
    let capital = words.map(word => word.toUpperCase());
    screamingKebabPara.textContent = capital.join("-");
}

function getInputValue() {
    // Getting the input value
    let input = document.querySelector("#text").value;

    // Removing whitespaces from both side
    input = input.trim()

    // Calling function to change words according to name conversion
    camelCase(input);
    pascalCase(input);
    snakeCase(input);
    screamingSnakeCase(input);
    kebabCase(input);
    screamingKababCase(input);

    // Clearing the input space
    document.querySelector("#text").value = "";

    // console.log(input)
    // return input;
}


