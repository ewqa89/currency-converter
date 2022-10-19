let formElement = document.querySelector(".js-form");
let valueElement = document.querySelector(".js-value");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let value = valueElement.value;
    let currency = currencyElement.value;

    let result = value * currency;

    resultElement.innerText = result;
});

