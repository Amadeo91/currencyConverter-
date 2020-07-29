const formElement = document.querySelector(".form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
const resetButton = document.querySelector(".js-reset");

const EUR = 4.41;
const USD = 3.80;


formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = +amountElement.value;

    let result;

    if (currency === "EUR") {
        result = amount / EUR;
        resultElement.innerHTML = `${result.toFixed(2)} EUR`;
    } else if (currency === "USD") {
        result = amount / USD;
        resultElement.innerHTML = `${result.toFixed(2)} USD`;
    }




})

resetButton.addEventListener('click', () => {
    resultElement.innerHTML = "N/A";
})