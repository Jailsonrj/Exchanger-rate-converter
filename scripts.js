const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrency =document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    
    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2

    const convertedValue = inputCurrency / dolarToday

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)
        
    }
   
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "brl"
    }).format(inputCurrency)

}


function changeCurrency(){

    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar"
        currencyImg.src = "./assets/Dolar.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"
    }

    convertValues()
    
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

