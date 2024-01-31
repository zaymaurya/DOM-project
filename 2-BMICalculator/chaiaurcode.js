const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const summary = document.querySelector('#summary');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height ${height}';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please give a valid height ${weight}';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // display result
    results.innerHTML = `<span>${bmi}</span>`;
    // display summary from bmi
    if (bmi < 18.6) {
      summary.innerHTML = 'You are underweight';
    } else if (bmi > 18.6) {
      summary.innerHTML = 'You are normal weight';
    } else {
      summary.innerHTML = 'You are overweight';
    }
  }
});
