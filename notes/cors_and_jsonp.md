# CORS and JSONP

## Cors
- cross-origin resource sharing
- break the same-origin policy of a browser
    - security feature
    - blocked in the "browser-level"
- selectively unblock specific requests from different origin

|__browser__|__transition__|__foo.com__|
|:----|:----|:----|
|GET Origin: moo.com|-sends a request to foo.com->|process a request|
|allows response in the browser|<-returns a response-|returns a response with "Access-Control-Allow-Origin: moo.com"|

- CORS does not block the `request`, but `response` is blocked
    - this is because, for GET, there is no changes for the cross-origin

## CORS: for PUT, POST, etc.
- OPTIONS is sent first (pre-flight request)
|__browser__|__transition__|__foo.com__|
|:----|:----|:----|
|OPTIONS Origin: moo.com<br />Access-Control-Request-Method: PUT, POST|-sends a request to foo.com->|process a request|
|allows response in the browser|<-returns a response-|returns a response with "Access-Control-Allow-Origin: moo.com"<br />Access-Controll-Allow-Methods: PUT, POST|
|PUT Origin: moo.com|-sends a request to foo.com->|process a request|
|allows response in the browser|<-returns a response-|returns a response with "Access-Control-Allow-Origin: moo.com"|

- if test succeeds, only then will the PUT proceed
- test-cors.org
  - test out request between Client and Server

## JSONP
- solution to the problem of the same-origin policy 
- pre-dates the CORS standard
- only works with GET request
````js
// callback_function.js
callbackFunction([
    {
        id: 1234,
        first_name: 'foo',
        last_name: 'bar'
    }
]);

// index.html
<body>
    <script>
        function callbackFunction(json) {
            console.log(json);
        }
    </script>

    <script src="callback_function.js"></script>
</body>
```