# USE TSC WATCH + NODEMON

"scripts": {
  "dev": "tsc -w & nodemon -q -w dist dist/app.js"
}

# USE NESTED INTERFACES
map
// Funzione per salutare una persona
function hello(human: Person) {
    console.log('Hello', human.name, human.surname);
    console.log('Animals:', human.animals.map(animal => `${animal.name} (${animal.type})`).join(', '));
}
