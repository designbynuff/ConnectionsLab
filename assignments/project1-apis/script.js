document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;

        // Call the function to fetch data from the API
        searchArtworksByName(name);
    });

    async function searchArtworksByName(name) {
        // Construct the API URL with your API key
        // const apiKey = 'YOUR_API_KEY';
        // const apiUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${name}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Check if the API returned results
            if (data.objectIDs.length === 0) {
                resultsDiv.innerHTML = 'No results found.';
                return;
            }

            // Display the results
            const objectID = data.objectIDs[0];
            const artworkUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;
            const artworkResponse = await fetch(artworkUrl);
            const artworkData = await artworkResponse.json();

            resultsDiv.innerHTML = `
                <h2>Artwork Title: ${artworkData.title}</h2>
                <p>Artist: ${artworkData.artistDisplayName}</p>
                <p>Medium: ${artworkData.medium}</p>
                <p>Date: ${artworkData.objectDate}</p>
                <img src="${artworkData.primaryImage}" alt="${artworkData.title}">
            `;
        } catch (error) {
            console.error('Error fetching data:', error);
            resultsDiv.innerHTML = 'An error occurred while fetching data.';
        }
    }
});
