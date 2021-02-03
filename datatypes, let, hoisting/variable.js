'use strict';

//2. Variable (rw read/write)
//let (added in ES6)
let globalName = 'global name';
{
    let name = 'Woo';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(globalName);

//var hoisting (move declaration from bottom to top)
//has no block scope

// 3. Constants (r read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//note!
//Immutable data types : primitive types, frozen objects
//Mutable data types : all objects by default are mutable
//favor immutable data type always for a few reasons:
//-security
//-thread safety
//-reduce human mistakes

// 4. Variable types
// primitive(값이 메모리에 저장), single item : number, string, boolean, null, undefined, symbol
// object(값을 가리키는 ref가 메모리에 저장), box container
// function, first-class function
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
const negativeinfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

//String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (stirng)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value : ' + helloBob + ' type: ' + typeof helloBob);

//boolean
//false: 0, null, undefined, NAN, ''
//true : any other value
const canRead = true;
const test = 3<1;  //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//5. Dynamic typing: dynamically typed language 
let text = 'hello';
console.log(text.charAt(0));  //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));    //runtime에서 type이 정해지므로 error가 난다.

//object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;