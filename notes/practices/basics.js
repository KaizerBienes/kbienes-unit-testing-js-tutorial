callbackFunction([
    {
        id: 1234,
        first_name: 'foo',
        last_name: 'bar'
    }
]);

<body>
    <script>
        function callbackFunction(json) {
            console.log(json);
        }
    </script>

    <script src="callback_function.js"></script>
</body>