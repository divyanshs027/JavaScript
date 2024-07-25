const form = document.querySelector('form');

// this use case will give you empty
// const height = pareseInt(document.queryselector('#height).vlaue)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const guide = document.querySelector('#guide');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi <= 18.6) {
      guide.style.color = 'white';
      guide.style.fontSize = '35px';
      guide.style.marginLeft = '90px';
      guide.style.marginTop = '20px';

      guide.innerHTML = 'Under Weight';
    } else if (bmi < 24.9) {
      guide.style.color = 'white';
      guide.style.fontSize = '35px';
      guide.style.marginLeft = '90px';
      guide.style.marginTop = '20px';

      guide.innerHTML = 'Normal Weight';
    } else {
      guide.style.color = 'white';
      guide.style.fontSize = '35px';
      guide.style.marginLeft = '90px';
      guide.style.marginTop = '20px';

      guide.innerHTML = 'Over Weight';
    }
  }
});
