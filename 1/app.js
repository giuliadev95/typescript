var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 0 ---- Log the path in the browser console ----
var path = window.location.pathname;
function returnPath() {
    return path;
}
console.log('Directory: ' + returnPath() + ' TypeScript 1');
// 1 ---- Exercises from Edoardo Midaly YouTube course ----
// type | type | type
var casual = [1, 2, 'hi', true];
// tuple
var tupla = [1, 2, 'string'];
// 2 ---- Functions ----
function multiply(num1, num2) {
    return (num1 * num2);
}
console.log(multiply(5, 20));
var prova = function () {
    console.log('I\'m a function');
};
prova();
// ---- Classi ----
var Persona = /** @class */ (function () {
    function Persona(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    return Persona;
}());
var user1 = new Persona('Luca', 'Rossi');
var user2 = new Persona('Mario', 'Lenghi');
function saluta() {
    return ('Ciao ' + user1.surname);
}
console.log(saluta());
/* ---- ABSTRACT CLASS AS AN IMPRINTING FOR NEW CLASSES ----
        
        private, protected, public
        
        >> Use this in your crm code to format data from json */
var Sample = /** @class */ (function () {
    function Sample(name, surname, age, isLogged) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isLogged = isLogged;
    }
    return Sample;
}());
//const item : Sample = new Sample('Davide', 'Orti', 4, true );
//console.log(item);
// ---- Extends class' proeprties to a child class, and add one property with its declaration ----
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, age, isLogged, hair) {
        var _this = this;
        _this = _super.call(this, name, surname, age, isLogged) || this,
            _this.hair = hair;
        return _this;
    }
    return Student;
}(Sample));
;
var student1 = new Student('Myname', 'surname', 34, false, 'white');
console.log(student1);
// Static keywork to access class' property
// *not clear where to use this
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.angle = 3;
    return Triangle;
}());
console.log(Triangle.angle);
/* >> PROCEDURE:    1) CREATE AN ABSTRACTION
                    2) CREATE AN EXTENDED CLASS WITH extend
                    3) CREATE AN INSTANCE
                    4) USE [ UseState ] hook to assign the fetched data (in json) to the Instance I've just created
*/
