import { setAnimals, animalBuilder, getAnimalz }from '../components/animals.js'

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setAnimals(data.animals);
    animalBuilder(getAnimalz);
}

function executeThisCodeIfXhrFails () {
    console.log('You make baby Jesus cry!');
}

const getAnimals = () => {
 let myRequest = new XMLHttpRequest();
 myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
 myRequest.addEventListener('error', executeThisCodeIfXhrFails);
 myRequest.open('GET', './db/animals.json');
 myRequest.send();
};

export {
    getAnimals
};