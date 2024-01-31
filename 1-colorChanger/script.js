const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) =>
  // console.log(button)
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'aqua') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  })
);
