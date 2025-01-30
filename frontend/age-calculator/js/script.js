import { DateTime } from 'https://cdn.skypack.dev/luxon';

const calculateBtn = document.querySelector('.calculate-btn');

calculateBtn.addEventListener('click', () => {
  const inputElm = document.querySelector('.date-input');
  const result = document.querySelector('.result');

  const birthDateObj = DateTime.fromJSDate(new Date(inputElm.value));
  const now = DateTime.now();

  if(!birthDateObj) {
    result.innerText = 'Please enter your birthday!';
    return;
  }
  else if((birthDateObj.year > now.year || birthDateObj.month > now.month) && (birthDateObj.year === now.year || birthDateObj.month === now.month)) {
    result.innerText = 'Birthday cannot be greater than or the same as the current year.';
    return;
  }

  const { years, months} = now.diff(birthDateObj, ['years', 'months']).toObject();
  result.innerHTML = ` You are <strong>${Math.floor(years)} years and ${Math.floor(months)} months</strong> old.`;
});
