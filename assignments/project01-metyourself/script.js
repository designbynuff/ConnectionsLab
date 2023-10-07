let searchButton = document.getElementById('search-button');
let searchName;
let objectID;

window.addEventListener('load', () => {
    console.log('Page is loaded');

    // When button pressed, make searchName the input value of the field
    searchButton.addEventListener('click', () => {
        searchName = document.getElementById('search-name').value;
        console.log(searchName);

        // objectID = getObjectID();
        // console.log(objectID);

        getObjectID(searchName)
            .then((id) => {
                console.log(id);
                if (id) {
                    getObjectInfo(id);
                } else {
                    console.log('No matching objects found.');
                    displayNoMatchMessage(searchName);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    });

});

// Function to get an array of object IDs in order of priority
async function getObjectID(searchName) {

    // Fetch all objects with isHighlight = true, isOnView = true, hasImages = true, title = true and searchName
    const data = await searchArtworks(true, true, true, true);
    if (data) return data;

    // Fetch all objects with isHighlight = false, isOnView = true, hasImages = true, title = true and searchName
    const data2 = await searchArtworks(false, true, true, true);
    if (data2) return data2;

    // Fetch all objects with isHighlight = false, isOnView = false, hasImages = true, title = true and searchName
    const data3 = await searchArtworks(false, false, true, true);
    if (data3) return data3;

    // Introduce tags if nothing matches title
    const data4 = await searchArtworks(true, true, true, false, true);
    if (data4) return data4;

    // Tags but no highlight
    const data5 = await searchArtworks(false, true, true, false, true);
    if (data5) return data5;

    // Tags but no highlight or on view
    const data6 = await searchArtworks(false, false, true, false, true);
    if (data6) return data6;

    // Title but no image
    const data7 = await searchArtworks(false, false, false, true);
    if (data7) return data7;

    // Only tags
    const data8 = await searchArtworks(false, false, false, false, true);
    if (data8) return data8;

    // Nothing but still a match?
    const data9 = await searchArtworks(false, false, false, false, false);
    if (data9) return data9;


    // return null;
}

async function searchArtworks(isHighlight, isOnView, hasImages, title, tags) {
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

    if (title) {
        url.searchParams.append('title', 'true')
    }

    if (tags) {
        url.searchParams.append('tags', 'true')
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
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            // Create a new Div for the metadata
            let artworkInfo = document.createElement('div');
            artworkInfo.setAttribute('class', 'artwork-info');

            // Grab primaryImage and make it BG Image
            console.log(data.primaryImage);
            let bgImage = document.getElementById('bg-image');
            bgImage.style.backgroundImage = `url(${data.primaryImage})`;

            // Create a div element for artist name and bio
            let artistInfo = document.createElement('div');
            artistInfo.setAttribute('class', 'artist-info');

            let artistName = document.createElement('h2');
            artistName.innerHTML = data.artistDisplayName;
            artistInfo.appendChild(artistName); // Append artistName to artistInfo div

            let artistBio = document.createElement('p');
            artistBio.innerHTML = data.artistDisplayBio;
            artistInfo.appendChild(artistBio); // Append artistBio to artistInfo div

            artworkInfo.appendChild(artistInfo); // Append artistInfo div to artworkInfo div

            // Create a h1 element for the title
            let title = document.createElement('h1');
            title.setAttribute('class', 'title')
            title.innerHTML = data.title;
            artworkInfo.appendChild(title); // Append the title to the artworkInfo div


            // Create a div element for the medium and date
            let didactic = document.createElement('div');
            didactic.setAttribute('class', 'didactic');

            let objectDate = document.createElement('p');
            objectDate.innerHTML = data.objectDate;
            didactic.appendChild(objectDate); // Append objectDate to didactic div

            let medium = document.createElement('p');
            medium.innerHTML = data.medium;
            didactic.appendChild(medium); // Append medium to didactic div

            artworkInfo.appendChild(didactic); // Append didactic div to artworkInfo div

            // Create learn more button linking to objectURL
            let learnMore = document.createElement('a');
            learnMore.setAttribute('class', 'btn-outline');
            learnMore.setAttribute('href', data.objectURL);
            learnMore.innerHTML = 'Learn More'; // Set the button text
            artworkInfo.appendChild(learnMore); // Append learnMore to artworkInfo div

            //create button to refresh page
            let refresh = document.createElement('button');
            refresh.setAttribute('class', 'button');
            refresh.setAttribute('onclick', 'refresh()');
            refresh.innerHTML = '← Start Again'; // Set the button text
            artworkInfo.appendChild(refresh); // Append refresh to artworkInfo div

            // Append the artworkInfo div the 'results' section
            let resultsSection = document.getElementById('results');
            resultsSection.appendChild(artworkInfo);


            // Remove the search elements
            removeSearch();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


// Function to remove search elements before displaying results
function removeSearch() {
    const element = document.getElementById('main');
    element.remove();
}

function refresh() {
    location.reload();
}

function displayNoMatchMessage(searchName) {
    // Create a new Div for the message
    let noMatchMessage = document.createElement('div');
    noMatchMessage.setAttribute('class', 'no-match-message');

    // Create a message element
    let message = document.createElement('p');
    message.innerHTML = `I'm afraid ${searchName} is not in the Met... yet. Maybe it'll be you? We're waiting patiently for your masterpiece.`;

    noMatchMessage.appendChild(message); // Append the message to the noMatchMessage div

    // Append the noMatchMessage div to the 'results' section
    let resultsSection = document.getElementById('results');
    resultsSection.appendChild(noMatchMessage);

    // Remove the search elements
    removeSearch();
}
