"use strict";
// 0 ---- Log the path in the browser console ----
const path = window.location.pathname;
function returnPath() {
    return path;
}
console.log('Directory: ' + returnPath() + ' TypeScript 1');
// 1 ---- Exercises from Edoardo Midaly YouTube course ----
// type | type | type
const casual = [1, 2, 'hi', true];
// tuple
const tupla = [1, 2, 'string'];
// 2 ---- Functions ----
function multiply(num1, num2) {
    return (num1 * num2);
}
console.log(multiply(5, 20));
let prova = function () {
    console.log('I\'m a function');
};
prova();
// Classi
class Persona {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
const user1 = new Persona('Luca', 'Rossi');
const user2 = new Persona('Mario', 'Lenghi');
function saluta() {
    return ('Ciao ' + user1.name);
}
saluta();
//# sourceMappingURL=app.js.map