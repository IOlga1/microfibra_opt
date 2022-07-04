
async function getCurrency() {
    try {
        let response = await fetch('http://api.currencylayer.com/live?access_key=65f8b79a723c5f7649962c65f1c3bec5&format=1');
        let content = await response.text();
        let UsdByn = await JSON.parse(content).quotes.USDBYN;
        let usdRub = await JSON.parse(content).quotes.USDRUB;
        document.querySelector('.actual_currency').innerHTML = `1 USD &#8776; ${usdRub.toFixed(2)} RUB &#8776; ${UsdByn.toFixed(2)} BYN`
    
    } catch (error) {
        console.log('Загрузка курсов валют невозможна. Небезопасное соединение с ресурсом, предоставляющим api');
        document.querySelector('.currency_wrap').remove();
    }

}
getCurrency()