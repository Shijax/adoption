import { printToDom } from "../helpers/util.js"
import { animalBuilder } from "./animals.js"

const closeButtonEvent = () => {
    const closeButton = document.getElementById('close');
    closeButton.addEventListener('click', animalBuilder);
}

const detailsBuilder = (animal) => {
    let domString = '';
    domString += `<div class="col-6 offset-md-3">`;
    domString += `<div class="row">`;
    domString += `<button class="btn btn-danger" id="close">X</button>`;
    domString += `</div>`
    domString += `<div class="row">`;
    domString += `<div class="col">`;
    domString += `<img src="${animal.imgUrl}" alt="${animal.name}"/>`;
    domString += `</div>`;
    domString += `<div class="col">`;
    domString += `<h1>${animal.name}</h1>`;
    domString += `<h3>Type of Animal: ${animal.type}</h3>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;

    printToDom(domString);
    closeButtonEvent();
};

export {detailsBuilder};