// Рахуємо чайові
document.addEventListener("DOMContentLoaded", () => {
    function calculateTip() {
        const billAmount = document.getElementById("billamount").value
        const serviceQuality = document.getElementById("servicequality").value
        const peopleCount = document.getElementById("peoplecount").value
        //console.log(peopleCount)
        if (billAmount === '' || serviceQuality == 0 || peopleCount === '') {
            alert("Будь ласка введіть значення");
            return;
        }

        if (billAmount <= 0 || peopleCount <= 0) {
            alert("Ви ввели некоректні значення");
        }
        let total = (billAmount * serviceQuality) / peopleCount
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2)

        document.getElementById("totalTip").style.display = "block"
        document.getElementById("tip").innerHTML = total;
    }

    console.log("JS file successfully connected")
    document.getElementById("totalTip").style.display = "none"

    document.getElementById("calculate").onclick = () => {
        calculateTip();
        console.log("Calculation completed")
    }
})
