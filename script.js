function converterTemperatura() {
    var tempValor = parseFloat(document.getElementById("tempValor").value);
    var tempCelsiusElement = document.getElementById("tempCelsius");
    var tempFahrenheitElement = document.getElementById("tempFahrenheit");
    var tempKelvinElement = document.getElementById("tempKelvin");
    var erroElement = document.getElementById("erro");
    
    erroElement.innerHTML = "";
    
    if (isNaN(tempValor)) {
      erroElement.innerHTML = "Por favor, insira uma temperatura válida.";
      return;
    }
    
    var tempCelsius = tempValor;
    var tempFahrenheit = (tempCelsius * 9 / 5) + 32;
    var tempKelvin = tempCelsius + 273.15;
    
    tempCelsiusElement.innerHTML = tempCelsius.toFixed(2) + " °C";
    tempFahrenheitElement.innerHTML = tempFahrenheit.toFixed(2) + " °F";
    tempKelvinElement.innerHTML = tempKelvin.toFixed(2) + " K";
    
    if (tempCelsius > 30) {
      document.body.classList.add("hot");
    } else {
      document.body.classList.remove("hot");
    }
  }