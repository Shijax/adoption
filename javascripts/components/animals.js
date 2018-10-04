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
        domString += `<div class="col-2 animal-card" id="${animals.id}">`
        domString += `<div class="card">`;
        domString += `<img class="card-img-top" src="${animals.imageUrl}" alt="${animals.name}">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${animals.name}</h5>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    });
    printToDom(domString);
    createEvents();
};

export {
    animalBuilder,
    setAnimals,
    getAnimalz,
    sortEvents
};