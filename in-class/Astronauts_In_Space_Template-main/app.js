console.log("Page is loading...");

//Make sure page is loaded
window.addEventListener('load', () => {
    console.log("Page is loaded");
})

//Send a request for data
fetch('http://api.open-notify.org/astros.json')
    .then(function (response) { // can shorten to .then(response => response.json())
        console.log(response);
        return response.json(); // return json inside the response object
    })
    .then(function (data) { // access the data
        console.log(data);
        //Do something with the data
        let astronautsNum = data.number;
        let astronauts = data.people;

        console.log(astronautsNum);
        console.log(astronauts);

        // create a p element to display the number of astronauts
        let numberPar = document.createElement('p');
        numberPar.innerHTML = astronautsNum;

        // access section container and append to it
        let container = document.getElementById('data_container');
        container.appendChild(numberPar);

        // add styling
        numberPar.setAttribute('class', 'astronaut_number');

        //Display the number of astronauts

        //Display the names of the astronauts
        for (let i = 0; i < astronauts.length; i++) {
            console.log(astronauts[i]);

            let astronaut = astronauts[i];

            // For every astronaut, create a p element
            let astronautPar = document.createElement('p');
            astronautPar.innerHTML = astronaut.name;

            // attach the name of the astronaut to the p element
            container.appendChild(astronautPar);

            // add styling to the p element
            astronautPar.setAttribute('class', 'astronaut_name');

            // .catch (function(error) {
            //     console.log(error);
            // })
        })
