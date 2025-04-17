const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const coinSelect = document.querySelector(".coin-select")

async function convertValues(){
    const inputCurrency =document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json())
    
    console.log(data)
  
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high

    const convertedValue = inputCurrency / dolarToday

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
    }

    if(currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl"
        }).format(inputCurrency)
    }


    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)  
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency / bitcoinToday)  
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / libraToday)  
    }
   
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "brl"
    }).format(inputCurrency)
}

function changeCoinSelect(){

    const coinName = document.querySelector("#coin-name")
    const coinImg = document.querySelector(".coin-img")

    console.log(coinName)
   
    if(coinSelect.value == "coin-dolar"){
        coinName.innerHTML = "Dolar"
        coinImg.src = "./assets/Dolar.png"
    }
    if(coinSelect.value == "coin-real"){
        coinName.innerHTML = "Real"
        coinImg.src = "./assets/Real.png"
    }
    if(coinSelect.value == "coin-euro"){
        coinName.innerHTML = "Euro"
        coinImg.src = "./assets/Euro.png"
    }
    if(coinSelect.value == "coin-libra"){
        coinName.innerHTML = "Libra"
        coinImg.src = "./assets/Libra.png"
    }
    if(coinSelect.value == "coin-bitcoin"){
        coinName.innerHTML = "Bitcoin"
        coinImg.src = "./assets/Bitcoin.png"
    }

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
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/Bitcoin.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/Libra.png"
    }
    if(currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/Real.png"
    }

    convertValues()
 
}

coinSelect.addEventListener("change", changeCoinSelect)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


