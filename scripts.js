

const convertButton = document.querySelector(".converter-button")
const  targetSelect = document.querySelector(".target-select")

function convertValues (){
    const inputValue = document.querySelector(".input-value").value
    const targetValue = document.querySelector(".target-value")
    const baseValue = document.querySelector(".base-value")

    const dolarToday = 6
    const ieneToday = 26



    if (targetSelect.value == "dolar") {
        targetValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format( inputValue/dolarToday)
    }

    if (targetSelect.value == "iene") {
        targetValue.innerHTML = new  Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"  
        }).format(inputValue*ieneToday)
    }

    baseValue.innerHTML = new  Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"  
    }).format(inputValue)


}

function changeValue(){
    const textTarget = document.querySelector(".text-target")
    const targeLogo = document.querySelector(".target-logo")

    if (targetSelect.value == "dolar") {
        textTarget.innerHTML = "Dólar americano"
        targeLogo.src = "./assets/usd.png"
    }
    if (targetSelect.value == "iene") {
        textTarget.innerHTML = "Iene Japones"
        targeLogo.src = "./assets/iene.png"
    }

    convertValues ()
}

targetSelect.addEventListener("change", changeValue)
convertButton.addEventListener("click", convertValues)
