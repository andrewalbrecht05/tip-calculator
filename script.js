// Рахуємо чайові
function calculateTip()
{
    const billAmount = document.getElementById("billamount").value
    const serviceQuality = document.getElementById("servicequality").value
    const peopleCount = document.getElementById("peoplecount").value

    let total = (billAmount * serviceQuality) / peopleCount
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2)

    document.getElementById("totalTip").style.display = "block"
    document.getElementById("tip").innerHTML = total;
}

console.log("JS file successfully connected")

document.getElementById("calculate").onclick = function()
{
    calculateTip();
    console.log("Calculation completed")
}