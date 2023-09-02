/* Object Oriented Programming

Pillars = Abstraction (hide complexity by large overview), 
          Encapsulation (hiding the details of how a method works), 
          Inheritance (allows objects to inherit properties from other classes or above class), and 
          Polymorphism (something can take many different forms)


Classes can help group objects together. Object is an 'instance' of a class.

Objects can contain both data (properties) and methods (functions).

A class is a template for objects, and an object is an instance of a class.  When we create 
an object from a class, that object will inherit everything in the class, 
including the properties and functionality.

JavaScript and OOP
n JavaScript, objects are often created without any separate class definition, by either using a 
function or an object literal.

Class:  Animal
  Properties: 
    name
    weight
    height
    type
    location
  Functionality:
    describe()

Object:  dog 

When you create an instance (object) of a class, you use the word 'new' to instantiate it.

new Object() ---- the paranthesis invokes the construction                     */ 

class Student {
  constructor(firstName, lastName, phoneNumber, grade) {
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.phoneNumber = phoneNumber; 
    this.grade = grade; 
  }
  introduce() {
    console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`); 
  }
}
let Student1 = new Student('Tom', 'Hood', '4256459877', 'A'); 
let Student2 = new Student('Mo', 'Nope', '7148905541', 'C');

Student1.introduce();
Student2.introduce(); 


class Animal {
  constructor(name, type, weight, height, location) {
  this.name = name;
  this.type = type;
  this.weight = weight;
  this.height = height;
  this.location = location;
  }
  
  describe() {
  console.log("Animal Description");
  console.log("------------------");
  console.log("\tName: " + this.name);
  console.log("\tType: " + this.type);
  console.log("\tWeight: " + this.weight + " lb.");
  console.log("\tHeight: " + this.height + " in.");
  console.log("\tLocation: " + this.location);
  }
  }
  
  let elephant = new Animal("Dumbo", "elephant", 8000, 108, "Disneyland");
  elephant.describe();

  class Person {
    constructor (newName) {
    this.name = newName;
    }
    introduce() {
    return `My name is ${this.name}.`;
    }
    }
    class Teacher extends Person {
    constructor (name, courseName) {
    super(name);
    this.courseName = courseName;
    }
    introduceSelf() {
    console.log(`My name is ${this.name}, and I will be teaching your ${this.courseName} class.`);
    }
    }
    let teacher = new Teacher('Ms. Angle', 'Trigonometry');
    console.log(teacher.introduce());
    teacher.introduceSelf();