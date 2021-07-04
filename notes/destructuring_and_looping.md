## Destructuring
- object destructuring
```js
const obj = {first: 'Asim', last: 'Hussain', age: 42};
const {first: f, last: l} = obj;
console.log(f); // Asim
console.log(l); // Hussaine

const {first, last} = obj; // shortcut

console.log(first);
console.log(last);
```

- array destructuring
```js
const arr = ['a', 'b'];
// const x = arr[0];
// const y = arr[1];
const [x, y] = arr;

console.log(x);
console.log(y);
```

- function parameter destructing
```js
function f({x}) { // can be used here for destructuring
    console.log(x);
}

f({x: 1});

function g({x=0}) { // can also contain defaults
    console.log(x);
}
g({x: 1});
```

## Different ways to loop with `for` loop mechanism
- first direct for loop
  - can use `break;` to exit loop and `continue;` to move to the next loop
```js
let array = [1,2,3];
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

- second is `forEach` loop
    - can't use `break;` and `continue;`
    - return inside `forEach` is similar to `continue;`
```js
array.forEach(function(value) {
    console.log(value);
});
```

- third is `for-in` loop for object properties
```js
var obj = {a:1, b:2};
for (let prop in obj) {
    console.log(prop); // a, b
}

// however if via array
let array = [10,20,30];

for (let index in array) {
    console.log(index); // 0,1,2
    console.log(typeof(index)); // string because it tries to make it an "object" with key-value
}
```

- fourth is `for-of`
    - designed to work with arrays
    - can still do `break;` and `continue;`
```js
let array = [10,20,30];
for (let value of array) {
    console.log(value); // 10,20,30
}
```