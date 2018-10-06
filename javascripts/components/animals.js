import { printToDom } from "../helpers/util.js";
import { detailsBuilder } from "./detail.js";

let animals = [];

const setAnimals = (newArray) => {
    animals = newArray;
};

const getAnimalz = () => {
    return animals;
};

const animalClick = (e) => {
    const animalId = e.target.closest('.animal-card').id;
    const currentAnimal = animals.find(x => x.id === animalId);
    detailsBuilder(currentAnimal);
};

const createEvents = () => {
    const animalCards = document.getElementsByClassName('animal-card');
    for (let i = 0; i < animalCards.length; i++) {
        animalCards[i].addEventListener('click', animalClick);
    }
};

const sortPets = (e) => {
    const type = e.target.id;
    if (type === 'all') {
        animalBuilder(animals);
    } else {
        const filteredPets = animals.filter(x => x.type === type);
        animalBuilder(filteredPets);
    }
};

const sortEvents = () => {
    const allButton = document.getElementById('all');
    const catButton = document.getElementById('cat');
    const dogButton = document.getElementById('dog');
    const dinoButton = document.getElementById('dino');
    allButton.addEventListener('click', sortPets);
    catButton.addEventListener('click', sortPets);
    dogButton.addEventListener('click', sortPets);
    dinoButton.addEventListener('click', sortPets);
};

const animalBuilder = (animalsArray) => {
    let domString = '';
    animalsArray.forEach((animals) => {
        domString += `<div class="card border-success m-3 p-3 col-3 animals-card" id="${animals.id}">`;
        domString += `<div class="card-header bg-info text-white border-success font-weight-bold">${animals.name}</div>`;
        domString += `<div class="card-body text-dark h-100">`;
        domString += `<img src="${animals.imageUrl}" alt="${animals.name}" width="200px" height="250px">`
        domString += `<h5 class="card-title">${animals.color}</h5>`;
        domString += `<p class="card-text">${animals.specialSkill}</p>`;
        domString += `</div>`;
        domString += `<div class='mt-auto'>`
        if (animals.type === "dog") {
            domString += `<div class="card-footer text-center bg-success">${animals.type}`;
        } else if (animals.type === "cat") {
            domString += `<div class="card-footer text-center bg-primary">${animals.type}`;
        } else {
            domString += `<div class="card-footer text-center bg-warning">${animals.type}`;
        }
        domString += `</div>`
        // domString += `<div class="card-footer bg-transparent border-success ${animals.type}">${animals.type}</div>`
        domString += `</div>`;
        domString += `</div>`;
    });
    domString += `</div>`;
    printToDom(domString);
    createEvents();
};

export {
    animalBuilder,
    setAnimals,
    getAnimalz,
    sortEvents
};

// Thanks to Shane D. Wilson for the idea on how
// to do the color on the footer for the cards.