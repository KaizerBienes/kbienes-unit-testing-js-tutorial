# Javascript

### TC39
- committee that is responsible of the things that will be implemented
- ECMAScript specifications - evolved over time
- ECMAScript
    - ECMAScript 2015 - EC6 - 6th Edition
    - ECMAScript 2016 - EC7 - 7th Edition
    - ECMAScript 2017 - EC8 - 8th Edition

### Tracking what features can be used
- caniuse.com
    - for browsers; shows what versions of browsers support certain libraries / features
- node.green
    - for node
- javascript is 100% backwards compatible

### Compiler vs Polyfill
- `babeljs.io` - converts code to older specification
##### compiler
    - allows you to use latest features of javascript
    - compiles code that can be run on older versions of JS
    - one of which is Babel
    - if we can not represent into an older feature, it won't know what to do. And so, it won't convert it.
##### polyfill
    - rewrites the feature into an older version which addresses the limitation of compilers
    - e.g. promise-polyfill

### use strict
- place a program under a strict operating index
- makes debugging easier
- throws exception for "warnings"

```js
"use strict";
// since javascript is 100% compatible,
// older browsers didn't use it and so, seeing that it is a string, it will be ignored
// however, if newer browsers sees it, it will strictly implement it
// if working on legacy code, you can "use strict" in a certain scope

// not use strict
function newCode() {
    "use strict";
    // strict
}
```

- stops you from using future features e.g. `var let = 1;`
    - `let` is a reserved word
- stops from deleting variables, arguments and function
- prevents `eval`
    - can leak out outside of its scope
    - "use strict"; does not leak the executed code inside `eval`
```js
"use strict"; // will not leak a outside
eval("var a = 1");
console.log(a);
```

### Pass by reference or value
- numbers, strings, ints, etc. - primitive types are pass by value
- objects are passed by reference
- pass by value
    - inner scope changes won't affect the outer scope
    - pass a `copy` inside the function
- pass by reference
    - inner scope will change the value in the outer scope
    - pass a `reference` to the function

### Rest operators
- arguments passed will be stored in the keyword `arguments` array which can be used like an array
    - biggest problem is that `arguments` will hide the actual arguments
    - `arguments` is not an array!
- use rest operator (elipsis)!
    - called rest is because it is the "rest" of the arguments
    - rest must be the last parameter
```js
function login(method, ...options) {
    console.log(method); // facebook
    console.log(options); // [1, 2, 3, 4]
}

login("facebook",1,2,3,4);
```

### Spread operator
- similar to rest, it is an elipsis but takes on an array as arguments to functions / things
```js
var ar1 = [4,5,6];
var ar2 = [1,2,3, ...ar1, 7];
console.log(ar2); // [1, 2, 3, 4, 5, 6, 7]

var ar2 = [1,2,3, ar1];
console.log(ar2); // [1, 2, 3, Array(3), 7];

// can also be used to copy/clone array
var ar1 = [1,2,3];
var ar2 = [...ar1]; // copy via spread

// or passed into a function call
function login(method, test1, test2) {
    console.log(method); // facebook
    console.log(test1); // 'test'
    console.log(test2); // 'test2'

}

let options = ['test', 'test2'];
login("facebook", ...options);
```

### Template literals
- can be used for multiline strings or variable interpolation
```js
let name = 'slim shady';
let place = 'world';
let msg = `hello
${place}!
my name is
${name}!
${1+2+3}
${isBold ? "<b>test</b>" : "test"}
`;

console.log(msg);
```
- `tag` before a string
    - e.g. `StyledComponents` in react
    - template tags using i18n
```js
function h1(strings) {
    return "<h1>" + strings[0] + "</h1>";
}

console.log(h1`test`); // <h1>test</h1>;

const name = 'you';
const myName = 'me';
console.log(h1`hello ${name} my name is ${myName}!`); // <h1>hello</h1>;
// strings in the function will contain ["hello ", " my name is ", "!"];
// template tags will then be <function>(strings, ...values) {}
function h2(strings,  ...values) {
    console.log(strings); // ["hello ", " my name is ", "!"];
    console.log(values); // ["you", "me"]
}
console.log(h2`hello ${name} my name is ${myName}!`); // <h1>hello</h1>;
```