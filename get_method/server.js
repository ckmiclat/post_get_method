var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.post('/process_post', urlencodedParser, function (req, res) {
    var response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };

    console.log(response);

    const htmlRes = `<html>
        <head>
            <style>
                body {
                    background-color: pink;
                }
                h1 {
                    color: maroon;
                }
                * {
                    font-family: Arial, Helvetica, sans-serif;
                }
            </style>
        </head>
        <body>
            <h1>User Information</h1>
            <p><strong>First Name:</strong> ${response.first_name}</p>
            <p><strong>Last Name:</strong> ${response.last_name}</p>
        </body>
        </html>`;

    res.send(htmlRes); 
});

app.listen(3000, () => {
    console.log('Server now Listening!');
});
