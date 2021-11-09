const container = document.querySelector('.container');
 
let colore;
let fizzbuzz;

 for (let i = 1; i < 101; i++){
    if ((i % 3 == 0) && (i % 5 == 0)) {
         colore = 'red';
         fizzbuzz = 'fizzbuzz';
    } else if (i % 3 == 0) {
        colore = 'green';
        fizzbuzz = 'fizz';
    } else if (i % 5 == 0) {
        colore = 'yellow';
        fizzbuzz = 'buzz';
    }  else {
        colore = 'blue';
        fizzbuzz = i;
    }
    container.innerHTML += `<div class="box ${colore}">${fizzbuzz}</div>`;
}