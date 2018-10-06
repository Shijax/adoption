import { printToDom } from '../helpers/util.js';
import { animalBuilder, getAnimalz } from './animals.js';

const closeButtonEvent = () => {
  const closeButton = document.getElementById('close');
  closeButton.addEventListener('click', () => {
    animalBuilder(getAnimalz());
  });
};

const detailsBuilder = (animal) => {
  let domString = '';
  domString += `<div class="col-6 offset-md-3">`;
  domString +=   `<div class="row">`;
  domString +=     `<button class="btn btn-danger" id="close">x</button>`;
  domString +=   `</div>`;
  domString +=   `<div class="row">`;
  domString +=      `<div class="col">`;
  domString +=         `<img src="${animal.imageUrl}" alt="${animal.name}"/>`;
  domString +=      `</div>`;
  domString +=      `<div class="col">`;
  domString +=        `<h1>${animal.name}</h1>`;
  domString +=        `<h3>${animal.type}</h3>`;
  domString +=      `</div>`;
  domString +=   `</div>`;
  domString += `</div>`;

  printToDom(domString);
  closeButtonEvent();
};

export {
  detailsBuilder
};