const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
const characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = '~!@#$%^&*';

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    // On click the resultEl's text content will be copied to the clipboard.
    navigator.clipboard.writeText(resultEl.textContent)
})

generateEl.addEventListener('click', () => {
    // Getting the values form the user.
    let [length, lower, upper, number, symbol] = [lengthEl.value, lowercaseEl, uppercaseEl, numbersEl, symbolsEl]

    // Invoking the generatePassword function and passing all the values of user
    generatePassword(lower, upper, number, symbol, length);
})

function generatePassword(lower, upper, number, symbol, length) {
    // To hold the generated password
    let password = '';

    // Array to keep track of check boxes
    let checkedvalues = [];

    // Validating the check box and pushing the value in the array according to user selection
    if(lower.checked === true) checkedvalues.push("lower")
    if(upper.checked === true) checkedvalues.push("upper")
    if(number.checked === true) checkedvalues.push("number")
    if(symbol.checked === true) checkedvalues.push("symbol")

    // Looping according to the password length provided by the user
    for(let i = 0; i < length; i++){

        // Creating a random number according to the length of the checkvalues array
        let randomFunCall = checkedvalues[Math.floor(Math.random() * checkedvalues.length)];

        // Calling the random function using the randomeFunCall value and adding to the password.
        password = `${password}${randomFunc[randomFunCall]()}`;
    }

    // Setting the password into the resultEl.
    resultEl.textContent = password;
}

function getRandomLower() {
    // Creating random number upto 26 
    let randomVal = Math.floor(Math.random() * 26)

    // Returning a charactor from the charactors string and converting it to lowercase
    return characters[randomVal].toLowerCase();
}

function getRandomUpper() {
    // Creating random number upto 26 
    let randomVal = Math.floor(Math.random() * 26)

    // Returning a charactor from the charactors string
    return characters[randomVal];
}

function getRandomNumber() {
    // Returning a random number and converting it to string.
    return Math.floor(Math.random() * 10).toString();
}

function getRandomSymbol() {
    // Creating a random number upto 9
    let randomVal = Math.floor(Math.random() * 9)

    // Returning a symbol from the symbols string
    return symbols[randomVal]
}