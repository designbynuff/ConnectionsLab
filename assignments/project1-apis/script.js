console.log("Page is loading");

//Make sure the page has loaded
window.addEventListener('load', () => {
    console.log("Page has loaded");

    // Listen for submit button and get date from picker

    //Send a request for data

    // Return Holidays Matching Date

    // Display Holidays Matching Date

    // Get references to the input field and the right-side result container
    const birthdayInput = document.getElementById("birthday");
    const resultContainer = document.getElementById("right");
    const submitButton = document.getElementById("submit-date");

    submitButton.addEventListener("click", () => {
        // Get the selected date from the input field
        const selectedDate = birthdayInput.value;

        // Call the function to retrieve and display holidays
        getHolidays(selectedDate);
    });

    async function getHolidays(selectedDate) {
        try {
            const response = await fetch(`https://api.checkiday.com/${selectedDate}`);
            const data = await response.json();

            // Call a function to display the holidays
            displayHolidays(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    function displayHolidays(data) {
        // Clear previous results
        resultContainer.innerHTML = "";

        if (data.holidays.length === 0) {
            resultContainer.textContent = "No holidays found for this date.";
            return;
        }

        const list = document.createElement("ul");

        data.holidays.forEach((holiday) => {
            const listItem = document.createElement("li");
            listItem.textContent = holiday.name;
            list.appendChild(listItem);
        });

        resultContainer.appendChild(list);
    }
