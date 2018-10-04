import { sortEvents } from './components/animals.js';
import { getAnimals } from './data/animalsData.js';

const initializeApp = () => {
    sortEvents ();
    getAnimals();
};

initializeApp ();