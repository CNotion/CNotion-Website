const express = require('express');
const {readFile} = require('fs').promises;

const app = express();

// server will live on url
app.get('/', async (request, response) => {
    // request = incoming data
    // response = your outgoing data

    response.send( await readFile('./client/home.html', 'utf8'));

    console.log("request handled");

});

const port = process.env.PORT || 8080;


app.listen(port, () => console.log(`http://localhost:${port}`));

