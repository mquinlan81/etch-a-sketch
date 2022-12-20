let random = false;
const container = document.getElementById('container');
const setGrid = document.getElementById('set-grid');
const resetGrid = document.getElementById('reset-grid');
const standardBtn = document.getElementById('color-black');
const randomBtn = document.getElementById('color-random');

//Get user grid size
function getUserGridSize () {
  const userGrid = prompt('Create your grid size (2-100): ')
  if (userGrid >= 2 && userGrid <= 100) {
    createGrid(userGrid);
  } else {
    alert('Please enter a number between 2-100')
  }   
}

//Reset Grid
function resetGridSize () {
  location.reload();
}

//Create grid of divs
function createGrid(userGrid) {
  container.style.setProperty('--grid-rows', userGrid);
  container.style.setProperty('--grid-cols', userGrid);
    for (i = 0; i < (userGrid * userGrid); i++) {
      const gridDiv = document.createElement('div');
      gridDiv.classList.add('grid-item');
      gridDiv.addEventListener('mouseover', colorGrid)
      container.appendChild(gridDiv);
    } 
}

// //Change background color of hovered grid
function colorGrid () {
  if (random === true) {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  } else {
    this.style.backgroundColor = '#444';
  }
}

//Set color option
randomBtn.addEventListener('click', function() {
  random = true;
  console.log(random);
  randomBtn.style.backgroundColor = '#aaa';
  standardBtn.style.backgroundColor = 'buttonface';

  });
  
standardBtn.addEventListener('click', function() {
  random = false;
  console.log(random);
  standardBtn.style.backgroundColor = '#aaa';
  randomBtn.style.backgroundColor = 'buttonface';


});


setGrid.addEventListener('click', getUserGridSize);
resetGrid.addEventListener('click', resetGridSize);


