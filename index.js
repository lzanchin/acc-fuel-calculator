var headerResults = document.getElementById("totalFuelNeeded");
var btnCalculate = document.getElementById("btnCalculate");


// Event listener on click of the button
btnCalculate.onclick = function(){
    var txtRaceDuration = parseFloat(document.getElementById("raceDuration").value);
    var txtAvgLapTime = parseFloat(document.getElementById("avgLapTime").value);
    var txtfuelPerLap = parseFloat(document.getElementById("fuelPerLap").value);
    //console.log(txtRaceDuration);
    calculateFuel(txtRaceDuration, txtAvgLapTime, txtfuelPerLap);
}

function calculateFuel(raceDuration, avgLapTime, fuelPerLap) {
    var lapsLeft = raceDuration / avgLapTime;    
    var fuelTotal = Number.parseFloat(lapsLeft * fuelPerLap).toFixed(2);
    console.log(fuelTotal);
    updateResult(fuelTotal);    
}

function updateResult(totalLiters){
    headerResults.innerHTML = totalLiters;
}