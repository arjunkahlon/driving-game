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

// function turnUp() {
//   switch (car.direction) {
//     case 'left':
//       car.$image.style.transform = 'rotate(90deg)';
//       break;
//     case 'right':
//       car.$image.style.transform = 'rotate(-90deg)';
//       break;
//     case 'down':
//       car.$image.style.transform = 'rotate(180deg)';
//       break;
//     case 'up':
//       car.$image.style.transform = 'rotate(0)';
//   }
//   car.direction = 'up';
// }

// function turnDown() {
//   switch (car.direction) {
//     case 'left':
//       car.$image.style.transform = 'rotate(-90deg)';
//       break;
//     case 'right':
//       car.$image.style.transform = 'rotate(90deg)';
//       break;
//     case 'down':
//       car.$image.style.transform = 'rotate(0deg)';
//       break;
//     case 'up':
//       car.$image.style.transform = 'rotate(180deg)';
//   }
//   car.direction = 'down';
// }

// function turnLeft() {
//   switch (car.direction) {
//     case 'left':
//       car.$image.style.transform = 'rotate(0deg)';
//       break;
//     case 'right':
//       car.$image.style.transform = 'rotate(180deg)';
//       break;
//     case 'down':
//       car.$image.style.transform = 'rotate(90deg)';
//       break;
//     case 'up':
//       car.$image.style.transform = 'rotate(-90deg)';
//   }
//   car.direction = 'left';
// }

// function turnRight() {
//   switch (car.direction) {
//     case 'left':
//       car.$image.style.transform = 'rotate(180deg)';
//       break;
//     case 'right':
//       car.$image.style.transform = 'rotate(0eg)';
//       break;
//     case 'down':
//       car.$image.style.transform = 'rotate(0)';
//       break;
//     case 'up':
//       car.$image.style.transform = 'rotate(90deg)';
//   }
//   car.direction = 'right';
// }
