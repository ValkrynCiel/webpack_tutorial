import Minesweeper from './minesweeper.jpg';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'Minesweeper';
  img.width = 500;
  img.src = Minesweeper;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;