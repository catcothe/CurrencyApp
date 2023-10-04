class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_QrOsTs26X5SsShvFyQauW5PP15aWvNhZMlWBHIp5&base_currency="
    }

    async exchange(value, firstCurrency, secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}&currencies=${secondCurrency}`);

        const result = await response.json()
        const exchangedResult =  value * result.data[secondCurrency];
        
        return exchangedResult;
    }
}