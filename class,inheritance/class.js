'use strict';
// object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1.Class declarations
class Person {
    //constructor
    constructor(name,age) {
        //fields
        this.name = name;
        this.age = age;
    }
    
    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age =age;
    }
    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value <0 ? 0 : value;
        // get과 set을 this.age로 하면
        // 무한 recall현상 발생
    }
}
const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

// 3. Fields(public, private)
// Too soon!

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
// static은 object마다 할당이 아닌 class자체에 붙어있음.
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw(); //부모의 능력까지 사용하려면!
        console.log('▲');
    }
    getArea() {
        return (this.width * this.height)/2;
    } // overriding !! 다양성의 강력함

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);    //t
console.log(triangle instanceof Rectangle);     //f
console.log(triangle instanceof Triangle);      //t
console.log(triangle instanceof Shape);         //t
console.log(triangle instanceof Object);        //t
console.log(triangle.toString());
