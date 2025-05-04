// 0 ---- Log the path in the browser console ----
const path : string = window.location.pathname;
function returnPath() : string{
    return path
}


console.log('Directory: ' + returnPath() + ' TypeScript 1');
// 1 ---- Exercises from Edoardo Midaly YouTube course ----
// type | type | type
const casual:(number | string | boolean)[] = [1, 2, 'hi', true]
// tuple
const tupla: [number, number, string] = [1,2,'string']

// 2 ---- Functions ----
function multiply(num1:number, num2:number): number{
    return (num1 * num2);
}
console.log(multiply(5,20));

let prova : Function = function(){
    console.log('I\'m a function');
}
prova(); 

// Classi
class Persona{
    name: string
    surname:string
    constructor(name:string, surname:string) {
        this.name = name
        this.surname = surname
    }
}

const user1 : Persona = new Persona ('Luca', 'Rossi');
const user2 : Persona = new Persona ('Mario', 'Lenghi');
function saluta() : string {
    return ('Ciao ' + user1.name)
}
saluta()



