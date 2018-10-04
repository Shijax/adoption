const printToDom = (stringToPrint) => {
    const printHere = document.getElementById('animals');
    printHere.innerHTML = stringToPrint;
};

export {
    printToDom
}