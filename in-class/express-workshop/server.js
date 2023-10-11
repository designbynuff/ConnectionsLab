console.log('This is my server file');

//Data
let astronauts = {
    "data": [
        {
            "key": "lindgren",
            "name": "Kjell Lindgren",
            "craft": "ISS",
            "wikipedia": "https://en.wikipedia.org/wiki/Kjell_N._Lindgren"
        },
        {
            "key": "hines",
            "name": "Bob Hines",
            "craft": "ISS",
            "wikipedia": "https://en.wikipedia.org/wiki/Robert_Hines_(astronaut)"
        },
        {
            "key": "yang",
            "name": "Liu Yang",
            "craft": "Tiangong",
            "wikipedia": "https://en.wikipedia.org/wiki/Liu_Yang_(taikonaut)"
        }
    ]
}

//Step 5. Require express
let express = require('express');
const { request } = require('http');
console.log(express);

//Step 6. Create an app object
let app = express();
console.log(app);

//Step 12. Serve static files
app.use('/', express.static('public'));

// Step 7. First Routes
// app.get('/', (request, response) => {
//     response.send('This is the main page!');
// });

app.get('/about', (request, response) => {
    response.send('This is the About page!');
});

app.get('/astronauts', (request, response) => {
    // response.send('This is the Astronauts page!');
    response.json(astronauts);
});

//Step 10. Get Individual Astronaut
app.get('/astronauts/:astronaut', (request, response) => {
    console.log(request.params);
    let astronaut = request.params.astronaut;
    let astronaut_obj; // will hold the value that we'll send back to the client
    for (let i = 0; i < astronauts.data.length; i++) {
        if (astronaut === astronauts.data[i].key) {
            astronaut_obj = astronauts.data[i];
        }
    }
    // console.log(astronaut_obj);

    if (astronaut_obj) {
        //send back the specific object to the client side
        response.json(astronaut_obj);
    } else {
        response.json({ "status": "Data doesn't exist" });
    }

    //response.json(astronauts);
});

// Step 8. Listen
app.listen(3000, () => {
    console.log('The server is listening on localhost:3000');
});