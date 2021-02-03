// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1+2}`);

console.log("ellie\'s book");

// 2. Numeric operators
// + - * / % **...

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// 먼저 할당한 이후에 값을 증가
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// 4. Assignment operators += -=...
// 5. Comparison operators < > <= ...

// 6. Logical operators : ||, &&, !
const value1 = true;
const value2 = 4<2;

console.log(`or: ${value1 || value2 || check()}`);
//실행순서상 앞에 true가 나오면 뒤에 조건문은 아예 실행 안시킴
function check() {
    for(let i = 0; i<10; i++){
        console.log('qwewqe');
    }
    return true;
}

// 7.Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive ==numberFive);
console.log(stringFive!=numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0==false);  //t 
console.log(0===false); //f
console.log(''==false); //t
console.log(''===false); //f
console.log(null==undefined);   //t
console.log(null===undefined);   //f

//8. Conditional operators: if
//if, else if, else

//9. Ternary operator: ?
// condition ? value1 : value2;
const name = 'ellie';
console.log(name==='ellie'?'yes':'no');
//10. Switch statement

//11. Loops
let i =3;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}

//do while
//for
for(let i=3; i>0; i=i-2){
    console.log(`inline variable for: ${i}`);
}
//nested loops
for(let i=0; i<10; i++){
    for (let j=0; j<10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}