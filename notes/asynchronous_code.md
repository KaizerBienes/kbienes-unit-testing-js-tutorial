# Asynchronous

## Callbacks
- function that calls another function passed into it
```js
function doAsyncTask(cb) {
    cb(); // synchronous; will fail
    setTimeout(cb, 0); // asynchronous since it will be executed after setting everything
}

doAsyncTask(() => console.log(message));
let message = "Callback Called";

// error-first
function doAsyncTask(cb) {
    setTimeout(() => {
        cb(null, "The correct data");
    }, 0);
}

doAsyncTask((err, data) => {
    if (err) {
        throw err;
    } else {
        console.log(data);
    }
});
```

## Callback hell
- if there are multiple dependencies, will become a callback hell
```js
doAsyncTask(() => {
    doAsyncTask(() => {
        doAsyncTask(() => {
            ...
        });
    });
});
```

## Promises
- around for a very very long time
- asynchronously and solves callback hell
- `resolve()` is called if we want to "resolve" the promise
- `reject()` to "reject" the result of the promise
- asynchronous by default; callbacks are not

```js
function doAsyncTask() {
  const promise = new Promise((resolve, reject) => {
    console.log("Async Work Complete");
    if (false) {
      resolve({x: 1});
    } else {
      reject("Error");
    }
  });

  return promise;
}

// first parameter is handling resolve()
// second parameter is handling reject()
doAsyncTask().then(
  (val) => console.log("Task Complete!" + val), // [Object object]
  (err) => console.log("Task Rejected" + err) // "Error"
);
```
- immediate resolve  reject
```js
let resolvedPromise = Promise.resolve("done");
let rejectedPromise = Promise.reject("rejected");
// can still attach to then handler after resolved / rejected
let resolvedPromise = Promise.resolve("done");
resolvedPromise.then(_ => console.log("Then!"));
```

## Chaining Promises together
- must be returned to chain
```js
let resolvedPromise = Promise.resolve("done");
resolvedPromise.then(val => {
    console.log(val);
    // must `return` a value so that we can chain it
    return "done2";
}).then(val => {
    console.log(val);
})
// forking is separating it
let resolvedPromise = Promise.resolve("done");
resolvedPromise.then(val => {
    console.log(val);
    return "done2";
})

resolvedPromise.then(val => {
    console.log(val); // will be "done"
})
```

- only needs one err handler down the line
```js
Promise.reject("fail")
    .then(val => console.log(val))
    .then(val => console.log(val), err => console.error("ERROR: " + err));

// or `catch` at the end anywhere in the chain
Promise.resolve("done")
    .then(val => {throw "fail"; })
    .catch(err => console.error("ERROR: " + err));

// `finally` for cleaning up / anything to do after
Promise.resolve("done")
    .then(val => {throw "fail"; })
    .catch(err => console.error("ERROR: " + err))
    .finally(_ => console.log("Cleaning up!"));
```

## Promise.all function
- waiting for everything to finish
```js
const doAsyncTask = (delay) => {
    return new Promise(resolve => setTimeout(() => resolve(delay), delay))
}

let promises = [doAsyncTask(1000), doAsyncTask(2000), doAsyncTask(500)];

// waits until the last one finishes before it goes to the `then`
Promise.all(promises).then(values => console.log(values));
```

## async/await vs Promises
- async/await waits for the value before moving to the next line
```js
const doAsyncTask = () => Promise.resolve("done");

// named function
async function asim() {
    let value = await doAsyncTask();
    console.log(value); // will get printed after waiting for doAsyncTask() to finish
}
asim();

// or shortcut
(async function() {
    let value = await doAsyncTask();
    console.log(value);
})();

console.log("here");
```
- potential expense of performance when using async/await
```js
const doAsyncTask = (delay) => {
    return new Promise(resolve => setTimeout(() => resolve(delay), delay))
}

let tasks = [doAsyncTask(1000), doAsyncTask(2000), doAsyncTask(500)];

(async () => {
    for (let task of tasks) {
        console.log(await task); // will still wait
    }
})();
```
- async/await makes it synchronous for asynchronous
- requires balance between async/await and promises
- async keyword on its own does nothing; must use `await`
```js
async function print1() {
    console.log("1");
}

async function print2() {
    console.log("2");
}

async function main() {
    print1();
    print2();
}

main();
console.log("finshed");
// will still print 1,2,finished
```
