//  ---- Log the path in the browser console ----
const pathName : string = window.location.pathname;
function returnPathName() : string{
    return pathName
}
console.log('Directory: ' + returnPathName() + ' TypeScript 0');

// -- 0 -- SIMPLE CONSTANT INITIALIZATION & TYPE INFERENCE
const test: number = 1;
const inference = 2;
console.log(typeof test, ",", typeof inference)

// -- 1 -- TYPESCRIPT INTERFACE
// INTERFACE ( = CLASS )
interface Animal {
   name: string,
   type: string,
   gender: boolean // false = male, true = female
}

 interface Person {
    name : string,
    age : number,
    animals: Animal[]
 }

// and OBJECT ( = INTERFACE'S INSTANCE )
 let Mattia : Person = {
    name : 'Mattia',
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
 }
// Function that returns the Interface.Instance.name (Person.Mattia.name)
 function hello(human : Person) :string {
    return 'Hello ' + human.name;
 }
 console.log(hello(Mattia));

// Function to call a human and build a sentence with his animals
 function humanAnimal() : string {
    return Mattia.name + ' ha: ' + Mattia.animals.map(animal =>(( animal.gender === true)? "una " : "un ") + animal.type + ', ' + animal.name).join(', ')
     // Mattia ha: un pesce, una lucertola
 }
 console.log(humanAnimal());

 // -- 2 -- TYPESCRIPT SINGLE OBJECT
 let user : {name : string, surname: string} = {
    name:'luca',
    surname:'rossi'
 };
 // also you can change the Object key's value as in JavaScript
user.name = 'Leo';
console.log(user.name);


