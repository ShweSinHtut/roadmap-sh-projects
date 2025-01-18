const inputElement = document.querySelector('.container > input');
const fromUnitSelect = document.querySelector('.from-unit');
const toUnitSelect = document.querySelector('.to-unit');
const convertBtn = document.querySelector('.convert-btn');

convertBtn.addEventListener('click', () => {
  displayTemperature();
});

function displayTemperature() {
  const temperature = inputElement.value;
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  const result = convertTemperature(temperature, fromUnit, toUnit);

  document.querySelector('.result > p')
    .innerHTML = result;
}

function convertTemperature(temperature, from, to) {
  if(from === to) {
    return `${temperature} ${to}`;
  }

  if(from.toLowerCase() === 'fahrenheit') {
    if(to.toLowerCase() === 'celsius') {
      return `${5/9 * (temperature - 32)} Celsius`;
      
    }
    else if(to.toLowerCase() === 'kelvin') {
      return `${((temperature - 32) * 5/9) + 273.15} Kelvin`;
    }
  }
  else if(from.toLowerCase() === 'celsius') {
    if(to.toLowerCase() === 'fahrenheit') {
      return `${(9/5 * temperature) + 32} Fahrenheit`;
    }
    else if(to.toLowerCase() === 'kelvin') {
      return `${temperature + 273.15} Kelvin`;
    }
  }
  else if(from.toLowerCase() === 'kelvin') {
    if(to.toLowerCase() === 'fahrenheit') {
      return `${((temperature - 273.15) * 9/5) + 32}`;
    }
    else if(to.toLowerCase() === 'celsius') {
      return `${temperature - 273.15} Celsius`;
    }
  }
}