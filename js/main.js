var car = {
  $image: document.querySelector('#car-img'),
  direction: 'right'
};

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
      // console.log('space');
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
