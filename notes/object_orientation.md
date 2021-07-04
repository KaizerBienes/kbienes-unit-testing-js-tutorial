# Object Orientation

## Prototype chain
- every object has a prototype
- try to attempt to search in the object itself, then in the prototype
- works similar to single parent inheritance
- `proto` property
- shouldn't use it in `production` code

```js
var animal = {
    kind: 'human'
};

var asim = {};
asim.__proto__ = animal;

// or
var asim = Object.create(animal); // will also assign animal to the prototype

console.log(asim.kind); // human
console.log(animal.isPrototypeOf(asim)); // true

asim.kind = 'rabbit';
console.log(asim.kind); // rabbit
console.log(animal.kind); // human

animal.kind = 'rabbit';
console.log(asim.kind); // rabbit
console.log(animal.kind); // rabbit
```


```js
var asim = Object.create(animal, {food: {value: "mango"}});
// will result to {food: "mango"}
// because the Object.create second parameter describes the properties object
// can add other values such as writable:, configurable:, etc.
```

## Difference between Prototypal and Classical Inheritance
- classical inheritance
  - classic inheritance / class inheritance
  - class - blueprint / design; object - instance
  - create a class then create an instance of the class
- prototypal inheritance
  - new objects are created from existing objects
  - method in js that looks in code, a classical
  - pseudo-classical pattern and prototypal pattern
  - no we don't have classical inheritance in JS

## Constructor OO pattern?
- constructor pattern
```js
'use strict';

function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.full_name = function() {
        return this.first_name + ' ' + this.last_name;
    }
}

var dude = new Person('foo', 'bar');
console.log(dude.full_name()); // "foo bar"
```

- classes as a `prototype` property
    - that `prototype` property is pointing into an empty object that has a constructor and `__proto__` which points to null

- person_instance (first_name, last_name, `__proto__`)
    - `__proto__` points to `Person` (constructor, `prototype`)
    - `prototype` points to {} (constructor, `__proto__`)
    - `__proto__` points to null

- multiple instances of the class can call on the `prototype` function
```js
Person.prototype.full_name_prototype = function() {
    return this.first_name + ' ' + this.last_name;
}

var dude = new Person("foo", "bar");
console.log(dude.full_name_prototype());
// returns the prototype
// all new instances will share the function
// saves on memory, but is it readable??
```
- to set private variable, take advantage of closures
```js
function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.full_name = function() {
        return first_name + ' ' + last_name;
    }
}

var dude = new Person('foo', 'bar');
dude.first_name = "Moo";
console.log(dude.full_name()); // still "foo bar"; because scope is in closure
```

## Inheritance
- to set the prototype of the base class to the child class, we will need to set the prototype of the child class of the base class
```js
// inheritance magic
Professional.prototype = Object.create(Person.prototype);
```

## Prototype OO Pattern
- prototypal inheritance / more natural OO
- working with the tools that JS provides us

```js
// first method
var Person = {
    init: function(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
        return this;
    },
    full_name: function() {
        return this.first_name + ' ' + this.last_name;
    }
}

var asim = Object.create(Person);
asim.init("foo", "bar");
console.log(asim.full_name()); // foo bar

// second method
var Person = {
    full_name: function() {
        return this.first_name + ' ' + this.last_name;
    }
}

var asim = Object.create(Person, {
    first_name: {
        value: 'foo'
    },
    last_name: {
        value: 'bar'
    }
});
console.log(asim.full_name());

// third method
var Person = {
    full_name: function() {
        return this.first_name + ' ' + this.last_name;
    }
}

function PersonFactory(first_name, last_name) {
    var person = Object.create(Person);
    person.first_name = first_name;
    person.last_name = last_name;
    return person;
}

var asim = PersonFactory("foo", "bar");
console.log(asim.full_name());
```

- inheritance via prototype
```js
var Person = {
    full_name: function() {
        return this.first_name + ' ' + this.last_name;
    }
}

var Professional = Object.create(Person, {
    professional_name: {
        value: function () {
            return this.honorific + " " + this.first_name + " " + this.last_name;
        }
    }
});

function ProfessionalFactory(honorific, first_name, last_name) {
    var professional = Object.create(Professional);
    professional.honorific = honorific;
    professional.first_name = first_name;
    professional.last_name = last_name;

    return professional;
}

var foo = ProfessionalFactory("dr.", "foo", "bar")
console.log(foo.full_name()); // foo bar
console.log(foo.professional_name()); // dr. foo bar
```

## Classes and Extends
- introduced in ES6
```js
class Person {
    firstName = '';
    lastName = '';

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // getters
    get firstName() {
        return this.firstName;
    }

    get lastName() {
        return this.lastName;
    }

    // setters
    set firstName(firstName) {
        this.firstName = firstName;
    }

    // normal function
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

## Extends
- call `super` first
- you can extend an ES5-syntax class
```js
class Person {
    firstName = "";
    lastName = "";

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName() {
        return this.firstName;
    }

    get lastName() {
        return this.lastName;
    }

    set firstName(firstName) {
        this.firstName = firstName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = course;
    }

    fullName() {
        let parentFullName = super.fullName();
        return `${parentFullName} with course ${this.course}`;
    }
}

let asim = new Student("foo", "bar", "math");
asim.fullName();
```