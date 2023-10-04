const firstInput = document.querySelector("#firstInput");
const secondInput = document.querySelector("#secondInput");
var firstCurrencyOption = document.querySelector("#firstCurrencyOption");
var secondCurrencyOption = document.querySelector("#secondCurrencyOption");
const calculate = document.querySelector("#calculate");

const currency = new Currency(); //currency.js de oluşturduğumuz metodlara erişim sağladık

//nesne türeterek diğer js sayfasındaki class a erişim sağlanır

runEventListeners();

function runEventListeners(){
    calculate.addEventListener("click",exchange);
   
}


function exchange(){
    const firstInputValue = Number(firstInput.value.trim());
    const firstCurrency = firstCurrencyOption.options[firstCurrencyOption.selectedIndex].textContent;

    const secondCurrency = secondCurrencyOption.options[secondCurrencyOption.selectedIndex].textContent;


    currency.exchange(firstInputValue,firstCurrency,secondCurrency)
    .then((result)=>{
        secondInput.value = result.toFixed(3)
    })

}
