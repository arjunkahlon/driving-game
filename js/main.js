/* global data */

var car = {
  $image: document.querySelector('#car-img'),
  direction: 'right',
  started: false
};

data.positionLeft = 0;
window.addEventListener('keydown', handleInput);

function handleInput(event) {
  switch (event.key) {
    case 'ArrowUp':
      car.direction = 'up';
      turnCar();
      break;
    case 'ArrowDown':
      car.direction = 'down';
      turnCar();
      break;
    case 'ArrowLeft':
      car.direction = 'left';
      turnCar();
      break;
    case 'ArrowRight':
      car.direction = 'right';
      turnCar();
      break;
    case ' ':
      if (!car.started) {
        var intervalID = startCar();
      } else {
        clearInterval(intervalID);
      }

      break;
    default:
      break;
  }
}

function turnCar(direction) {
  switch (car.direction) {
    case 'left':
      car.$image.style.transform = 'rotate(-180deg)';
      break;
    case 'right':
      car.$image.style.transform = 'rotate(0)';
      break;
    case 'down':
      car.$image.style.transform = 'rotate(90deg)';
      break;
    case 'up':
      car.$image.style.transform = 'rotate(-90deg)';
  }
}

function startCar() {
  car.started = true;
  return setInterval(moveCar, 16);
}

function moveCar() {
  data.positionLeft += 1;
  car.$image.style.left = data.positionLeft.toString() + 'rem';
}
