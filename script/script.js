const formElement = document.querySelector(".form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
const resetButton = document.querySelector(".js-reset");


const EUR = 4.41;
const USD = 3.80;

formElement.addEventListener('submit', (event) => {
    event.preventDefault();


    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            resultElement.innerHTML = `${result.toFixed(2)} EUR`;
            break;
        case "USD":
            result = amount / USD;
            resultElement.innerHTML = `${result.toFixed(2)} USD`;
            break;
    }


})

resetButton.addEventListener('click', () => {
    resultElement.innerHTML = "N/A";
})