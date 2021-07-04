## Primitive Types
- Boolean - true/false
- Number - 1 / 1.0
- String - "string"
- Null - null; defined but is null
    - `typeof(null)` is object
    - used to indicate to no value
    - only programmer can set to null; will be undefined
- Undefined - not defined
    - uninitialized values, missing parameter, unknown properties, etc.

## Non-primitive Types
Object - `{}` or `new Object();`

## Dynamic Typed vs Static Typed
- Dynamic Typed - type is defined on run-time
- Static Typed - type is defined on compile-time

## equality
- null == undefined; true
- double equals (==)
    - checks for equality
- triple equals (===)
    - checks for both type and equality
- 0 == ''
    - true
    - tries to figure and convert both if they can be equal
- 0 == '0'
    - true
    - javascript tries to convert 0 to string (String(0))
    - type coercion
- dorey.github.io/JavaScript-Equality-Table/
- always use triple equal whenever possible

## NaN
- not a number
- `typeof(NaN)` is a "number"
- "abc"/4 = NaN
- NaN compared to anything is false
- NaN compared to itself is also false
    - to check if NaN, use `isNan(NaN) // true`
    - `isNaN("1")` is false, but `isNaN("A")` becomes true
        - this is because javascript tries to coerce it into a number `Number("A")` is NaN
        - foolproof way is to compare it via double equal
            - `var a = NaN;` so we check via `a !== a` which will be true
            - this is because NaN == NaN is "false" and so, should return true