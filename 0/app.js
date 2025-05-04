//  ---- Log the path in the browser console ----
var pathName = window.location.pathname;
function returnPathName() {
    return pathName;
}
console.log('Directory: ' + returnPathName() + ' TypeScript 0');
// -- 0 -- SIMPLE CONSTANT INITIALIZATION & TYPE INFERENCE
var test = 1;
var inference = 2;
console.log(typeof test, ",", typeof inference);
// and OBJECT ( = INTERFACE'S INSTANCE )
var Mattia = {
    name: 'Mattia',
    age: 50,
    animals: [
        {
            name: 'Flonder',
            type: 'pesce',
            gender: false
        },
        {
            name: 'Lisa',
            type: 'lucertola',
            gender: true
        },
        {
            name: 'Otto',
            type: 'polipo',
            gender: false
        }
    ]
};
// Function that returns the Interface.Instance.name (Person.Mattia.name)
function hello(human) {
    return 'Hello ' + human.name;
}
console.log(hello(Mattia));
// Function to call a human and build a sentence with his animals
function humanAnimal() {
    return Mattia.name + ' ha: ' + Mattia.animals.map(function (animal) { return ((animal.gender === true) ? "una " : "un ") + animal.type + ', ' + animal.name; }).join(', ');
    // Mattia ha: un pesce, una lucertola
}
console.log(humanAnimal());
// -- 2 -- TYPESCRIPT SINGLE OBJECT
var user = {
    name: 'luca',
    surname: 'rossi'
};
// also you can change the Object key's value as in JavaScript
user.name = 'Leo';
console.log(user.name);
