var request = require("request");

module.exports = function (app) {

    // makes an http request to retrieve the orders from the supplied url from shopify
    app.get('/api/blink', function (req, res) {
        res.send("Hello World");
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });


};