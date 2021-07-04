# call, bind, and apply

### Call function
- can add properties to functions
```js
function foo(param1, param2) {
    console.log(this);
}

foo.test = 1;
console.log(foo.name); // foo
console.log(foo.toString()); // prints the function to string

foo.call(); // just calls the function, same with foo();
```
- why use call tho?
  - to stabilize the value of `this`
  - can be numbers or any value
```js
"use strict";
function foo() {
    console.log(this);
}

foo.call({});
// parameter will include the `this` as the first parameter

function foo(a,b,c) {
    console.log(this); // 1
    console.log(a); // 2
    console.log(b); // 3
    console.log(c); // 4
}

foo.call(1,2,3,4);
// parameter will include the `this` as the first parameter
```

### Apply function
- similar to `call` but passed parameters should be an array
```js
function foo(a,b,c) {
    console.log(this); // 1
    console.log(a); // 2
    console.log(b); // 3
    console.log(c); // 4
}

foo.apply(1, [2,3,4]);
```

### Bind function
- binds the values into the function
- only works with function expression
```js
var a = function() {
    console.log(this);
}.bind(1);

a(); // 1
```

## Fat arrow function
- first class functions
- functions can be passed around as argument, etc.
- solves the `this` stability problem
    - stabilizes by making sure that `this` is where it was defined
    - fat arrow uses the current lexical scope where it is called not the caller with `function ()`
```js
let cb = () => {
    console.log("setTimeout called!");
}

setTimeout(cb, 1000);

// if one line
let add = (a,b) => a + b;
add(1,2);
```

```js
let obj = {
    name: "asim",
    sayLater: function() {
        console.log(`${this.name}`);
    }
}

obj.sayLater(); // should  return asim

let obj = {
    name: "asim",
    sayLater: function() {
        setTimeout(() => {
            console.log(`${this.name}`); // should return asim
        }, 1000);
    }
}

obj.sayLater(); // should  return asim

let obj = {
    name: "asim",
    sayLater: () => {
        console.log(this); // will point to the `window`
        setTimeout(() => {
            console.log(`${this.name}`); // should return asim
        }, 1000);
    }
}

obj.sayLater(); // should  return asim
```