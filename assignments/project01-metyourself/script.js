let searchButton = document.getElementById('search-button');
let searchName;
let objectID;

window.addEventListener('load', () => {
    console.log('Page is loaded');

    // When button pressed, make searchName the input value of the field
    searchButton.addEventListener('click', () => {
        searchName = document.getElementById('search-name').value;
        console.log(searchName);

        objectID = getObjectID();
        console.log(objectID);





        // Fetch all Object IDs that match the Name
        // Next steps: Prioritise isHighlight, then isOnView

        // fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=searchName")
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data => {
        //         console.log(data);
        //     })

        // Prioritised search



        // }
    });

});

// Function to get an array of object IDs in order of priority
async function getObjectID() {

    // Fetch all objects with isHighlight = true, isOnView = true, hasImages = true and searchName
    const data = await searchArtworks(true, true, true);
    if (data) return data;

    // Fetch all objects with isHighlight = false, isOnView = true, hasImages = true and searchName
    const data2 = await searchArtworks(false, true, true);
    if (data2) return data2;

    // Fetch all objects with isHighlight = false, isOnView = false, hasImages = true and searchName
    const data3 = await searchArtworks(false, false, true);
    if (data3) return data3;

    // Fetch all objects with isHighlight = false, isOnView = false, hasImages = false and searchName
    const data4 = await searchArtworks(false, false, false);
    if (data4) return data4;

    return null;
}

async function searchArtworks(isHighlight, isOnView, hasImages) {
    const url = new URL('https://collectionapi.metmuseum.org/public/collection/v1/search?');

    if (isHighlight) {
        url.searchParams.append('isHighlight', 'true')
    }

    if (hasImages) {
        url.searchParams.append('hasImages', 'true')
    }

    if (isOnView) {
        url.searchParams.append('isOnView', 'true')
    }

    url.searchParams.append('q', searchName)




    return fetch(url).then(res => res.json())
        .then(data => {
            console.log(data);
            // if array length > 1, return random object ID from array
            if (data.objectIDs.length > 1) {
                let randomIndex = Math.floor(Math.random() * data.objectIDs.length);
                return data.objectIDs[randomIndex];
            }

            // if array length = 1, return object ID
            if (data.objectIDs.length === 1) {
                return data.objectIDs[0];
            }

            // if array length = 0, return null
            if (data.objectIDs.length === 0) {
                return null;
            }

            // check if any object IDs
            // if no object ids return null
            // if object ids, fetch full object data for id and return it
        })
}

// Function to get metadata from object ID
async function getObjectInfo(objectID) {
    const url = new URL('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + objectID);
    return fetch(url).then(res => res.json())
        .then(data => {
            console.log(data);
            // return data;

            // Create a new Div for the metadata
            let artworkInfo = document.createElement('div');
            artworkInfo.setAttribute('class', 'artwork-info');

            // Grab primaryImage and make it BG Image
            console.log(data.primaryImage);
            let bgImage = document.getElementById('bg-image');
            bgImage.style.backgroundImage = `url(${data.primaryImage})`;

            console.log(data.title);
            console.log(data.artistDisplayName);
            console.log(data.artistDisplayBio);
            console.log(data.objectDate);
            console.log(data.medium);

            // Create a h1 element for the title
            let title = document.createElement('h1');
            title.setAttribute('class', 'title')
            title.innerHTML = data.title;

            // Create a p element for artist name and bio{
            let artistInfo = document.createElement('div');
            artistInfo.setAttribute('class', 'artist-info');

            let artistName = document.createElement('p');
            artistName.innerHTML = data.artistDisplayName;

            let artistBio = document.createElement('p');
            artistBio.innerHTML = data.artistDisplayBio;

            // Create a div element for the medium and date
            let didactic = document.createElement('div');
            didactic.setAttribute('class', 'didactic');

            let objectDate = document.createElement('p');
            objectDate.innerHTML = data.objectDate;

            let medium = document.createElement('p');
            medium.innerHTML = data.medium;

            // Create learn more button linking to objectURL
            let learnMore = document.createElement('a');
            learnMore.setAttribute('class', 'btn-outline');
            learnMore.setAttribute('href', data.objectURL);

            //create button to refresh page
            let refresh = document.createElement('button');
            refresh.setAttribute('class', 'button');
            refresh.setAttribute('onclick', 'refresh()');
        }

}

// Function to remove search elements before displaying results
function removeSearch() {
    const element = document.getElementById("main");
    element.remove();
}

function refresh {
    location.reload();
}


