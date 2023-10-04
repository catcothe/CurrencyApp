const currencies = 
["USD",
"EUR",
"JPY",
"GBP",
"CNY",
"AUD",
"CAD",
"CHF",
"HKD",
"SGD",
"SEK",
"KRW",
"NOK",
"NZD",
"INR",
"MXN",
"TWD",
"ZAR",
"BRL",
"DKK",
"PLN",
"THB",
"ILS",
"IDR",
"CZK",
"AED",
"TRY",
"HUF",
"CLP",
"SAR",
"PHP",
"MYR",
"COP",
"RUB",
"RON"]


var firstCurrencyOption = document.querySelector("#firstCurrencyOption");
var secondCurrencyOption = document.querySelector("#secondCurrencyOption");

currencies.forEach((currency)=>{
    var option = document.createElement("option");
    option.innerHTML = `${currency}`;
    firstCurrencyOption.add(option);

});

currencies.forEach((currency)=>{
    var option = document.createElement("option");
    option.innerHTML = `${currency}`;
    secondCurrencyOption.add(option);

});


