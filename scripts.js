

const convertButton = document.querySelector(".converter-button")
const targetSelect = document.querySelector(".target-select")

function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const baseValue = document.querySelector(".base-value")
    const targetValue = document.querySelector(".target-value")
    
    const dolar = 6
    const iene = 25

    if (targetSelect.value === "dolar") {
        targetValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolar)
    }
    
    if (targetSelect.value ==="iene"){

        targetValue.innerHTML = new Intl.NumberFormat("jp-JA", {
            style: "currency",
            currency: "JPY"
        }).format(inputValue * iene)
    }

    baseValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
 
}

function changeTarget (){
    const textTarget = document.querySelector(".text-target")
    const targetLogo = document.querySelector(".target-logo")

    if (targetSelect.value === "dolar"){
        textTarget.innerHTML = "Dólar Americano"
        targetLogo.src = "./assets/usd.png"
    }

    if (targetSelect.value === "iene"){
        textTarget.innerHTML = "Iene Japones"
        targetLogo.src = "./assets/iene.png"
    }
    convertValues()
}


targetSelect.addEventListener("change", changeTarget)
convertButton.addEventListener("click", convertValues)