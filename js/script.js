{
    const currencyElement = document.querySelector(".js-currency");
    const exchangeChoose = document.querySelector(".js-exchangeChoose");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const valueElement = document.querySelector(".js-value");
        const resultElement = document.querySelector(".js-result");

        const value = valueElement.value;
        const currency = currencyElement.value;

        const result = value * currency;

        resultElement.innerText = result.toFixed(2);
    }

    const showChangedCurrency = () => {
        const currencyElement2 = document.querySelector(".js-currency");

        exchangeChoose.innerText = (`*Kurs: ${currencyElement2.value}`);
    }

    const showCurrencyCourse = () => {
        
        exchangeChoose.innerText = (`*Kurs: ${currencyElement.value}`);

        currencyElement.addEventListener("change", showChangedCurrency);

    }
    
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

        showCurrencyCourse();
        
    }

    init();
}
