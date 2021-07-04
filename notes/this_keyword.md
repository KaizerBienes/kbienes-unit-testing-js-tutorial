## this keyword
- in global scope, we can refer to it

```js
console.log(this);
this.foo = 1;
console.log(this.foo); // 1
console.log(window.foo); // 1
console.log(foo); // 1
```

- for functions
```js
function checkThis() {
    console.log(this); // points to the global object
}

checkThis();
```

```js
var foo = {
    checkThis: function() {
        console.log(this); // will point to the object (foo)
    }
};

foo.checkThis();

var func = foo.checkThis;
func(); // this will point to window
```

## Basically
- `this` is determined by the `caller`
- thus `foo.checkThis();` - here, `this` is `foo`
- thus `checkThis();` - here, `this` is `window`

## How to make it clearer??
- use `use strict`
- stabilize inside the function
```js
var asim = {
    checkThis: function() {
        var self = this; // should point to asim object
        console.log(self);

        function checkOther() {
            console.log(self);
            self.moo = 1;
        }

        checkOther();
        console.log(self.moo);
        console.log(window.moo);
    }
}