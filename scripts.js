

const convertButton = document.querySelector(".converter-button")

function convertValues (){
    const inputValue = document.querySelector(".input-value").value
    const baseValue = document.querySelector(".base-value")
    const targetValue = document.querySelector(".target-value")

    const dolarToday = 6

    const convertedValue = inputValue / dolarToday

    baseValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
    targetValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)
    
}

convertButton.addEventListener("click", convertValues)
