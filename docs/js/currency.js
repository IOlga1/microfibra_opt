
async function getCurrency() {
    let response = await fetch('http://api.currencylayer.com/live?access_key=65f8b79a723c5f7649962c65f1c3bec5&format=1')
    let content = await response.text();
    let UsdByn = await JSON.parse(content).quotes.USDBYN;
    // console.log(UsdByn)
    document.querySelector('.actual_currency').innerHTML = `1 USD = ${UsdByn.toFixed(2)} BYN`
}
getCurrency()