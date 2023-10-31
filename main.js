
const container = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
    box = document.createElement('div') // creaiamo un div chimandolo elemento
    if (i % 3 === 0 && i % 5 === 0) {
        //console.log('fizzbuzz');
        box.className = 'fizzbuzz'; // associamo al div creato una classe
        box.innerHTML = 'fizzbuzz'; // inserendo fizzbuzz come testo all'interno del div
    } else if (i % 3 === 0) {
        //console.log('fizz');
        box.className = 'fizz';
        box.innerHTML = 'fizz';
    } else if (i % 5 === 0) {
        box.className = 'buzz';
        box.textContent = 'buzz';
    } else {
        box.className = 'normal';
        box.innerHTML = i;
    }
    container.append(box);
}

