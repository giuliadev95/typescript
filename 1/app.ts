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

// ---- Classi ----
class Persona{
    public name: string
    public surname:string
    constructor(name:string, surname:string) {
        this.name = name
        this.surname = surname
    }
}

const user1 : Persona = new Persona ('Luca', 'Rossi');
const user2 : Persona = new Persona ('Mario', 'Lenghi');
function saluta() : string {
    return ('Ciao ' + user1.surname)
}
console.log (saluta());


/* ---- ABSTRACT CLASS AS AN IMPRINTING FOR NEW CLASSES ----
        
        private, protected, public 
        
        >> Use this in your crm code to format data from json */
abstract class Sample {
    constructor (
        protected name : string,
        protected surname : string,
        public age : number,
        public isLogged: boolean
    ) {}
}
//const item : Sample = new Sample('Davide', 'Orti', 4, true );
//console.log(item);

// ---- Extends class' proeprties to a child class, and add one property with its declaration ----
class Student extends Sample {
    public hair : string;
    constructor(name: string, surname : string, age : number, isLogged :boolean, hair:string) {
        super(name, surname, age, isLogged),
        this.hair = hair
    }
};
const student1 : Student = new Student ('Myname', 'surname', 34, false, 'white');
console.log(student1);

// Static keywork to access class' property
    // *not clear where to use this
class Triangle {
    static angle = 3;
}
console.log(Triangle.angle)

    /* >> PROCEDURE:    1) CREATE AN ABSTRACTION
                        2) CREATE AN EXTENDED CLASS WITH extend
                        3) CREATE AN INSTANCE 
                        4) USE [ UseState ] hook to assign the fetched data (in json) to the Instance I've just created
    */
                    