## Different scopes in javascript

- all global variables are properties of the `window` object
```js
var asim = 1;
console.log(window.asim); // 1
window.moo = 5;
console.log(moo); // 5
```

- function scope
```js
function test() {
    var testVar = "abc";
}

console.log(testVar); // undefined
```

## Let and Const
- `let`
    - block-level scope
    - make the variables visible within the block
- `const`
    - same behavior as `let`
    - but cannot be reassign the variable

## Variable hoisting
- automatic hoisting of the variable declaration to the top of the enclosing scope
```js
console.log(a); // will not be undefined
var a = 1; 

function foo() {
    // b will be hoisted here
    console.log(b);
    var b = 1;
}

// functions are also hoisted
foo();

function foo() {
    console.log("hoist me!");
}

// however, variables assigned are not hoisted

foo(); // will become undefined
var foo = function foot() {
    console.log("hoist me!");
}
// only variable declaration is hoisted but assigned below
```

## Scope Chain
- go outer and outer until it reaches the global scope
- defined lexically - defined by the way the program is written sequentially
```js
function foo() {
    console.log(myvar); // will return undefined!
}
function goo() {
    var myvar = 1;
    foo();
}

goo();
```

to fix the scope chain
```js
function goo() {
    var myvar = 1;
    function foo() {
        console.log(myvar); // will return undefined!
    }
    foo();
}

goo();
```

## IIFE - immediately invoked function expression
- pronounced iffy
- based on order of script imported
- if both variables are declared on multiple strings, the last declaration will override the other ones
- to solve this problem, declare as a function block
- or invoke via brackets via IIFE to immediately invoke and to avoid pseudo global variables
```js
// IIFE!
(function() {
    ...
})();
```

## Function closures
- `Closure` has its own scope different from `Local` and `Global`
- closures can refer to variables in outer scope
- can refer to outer functions even if they are returned
```js
function sayHello(name) {
    var text = 'Hello ' + name;
    return function() {
        console.log(text);
        // function returned keeps reference to the variables used inside closures
    };
}

var sayAsim = sayHello("Asim");
sayAsim(); // invokes the returned function
```

```js
var foo = [];
for (var i = 0; i < 10; i++) {
    foo[i] = function() { return i };
}

console.log(foo[0]()); // prints 10
console.log(foo[1]()); // prints 10
console.log(foo[1]()); // prints 10
// to fix, use IIFE
var foo = [];
for (var i = 0; i < 10; i++) {
    (function() {
        var y= i;
        foo[i] = function() { return y };
        // limits the value of y on the scope inside
    })();
    // or
    (function(y) {
        foo[y] = function() { return y };
        // since we are passing by value instead of reference, this will not change
    })(i);
}

console.log(foo[0]()); // prints 10
console.log(foo[1]()); // prints 10
console.log(foo[1]()); // prints 10
```