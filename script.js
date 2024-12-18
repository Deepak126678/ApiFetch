/**
 * `table` Storing table body
 */
var table = document.getElementById("tbody");

/**
 * Fetches character data from the Rick and Morty API
 * @returns {Promise<Array>} A promise that resolves to an array of character objects.
 */
async function getData(){
    let response = await fetch('https://rickandmortyapi.com/api/character');  // Send GET request to API
    let data = await response.json();  
    console.log(data.results);  

    return data.results;  // Return the array of character data
}

/**
 * Main function to draw the table with character data.
 */
async function loadData() {
    const array = await getData();  // Fetch the data from the API

    // Sort the array of characters by their 'id' in ascending order
    array.sort((a, b) => a.id - b.id);

    // Iterate through the sorted array and add each character's details to the table
    array.forEach(e => {
        addRow(e.id, e.name, e.status, e.gender);  // Call addRow for each character
    });
}

/**
 * Adds a new row to the table with character details.
 * 
 * This function creates a new table row and inserts four cells for the character's 
 * id, name, status, and gender. These cells are populated with the corresponding 
 * information and appended to the table.
 * 
 * @param {number} id - The character's unique identifier.
 * @param {string} name - The character's name.
 * @param {string} status - The character's current status (e.g., Alive, Dead).

 */
function addRow(id, name, status) {
    // Create a new table row and append it to the tbody
    var row = table.insertRow();  // Inserting at the end of the table by default

    // Insert new cells (<td> elements) into the row for the character's details
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);


    // Populate the cells with the character's information
    cell1.innerHTML = id;      // Set the first cell to the character's ID
    cell2.innerHTML = name;    // Set the second cell to the character's name
    cell3.innerHTML = status;  // Set the third cell to the character's status

}
 
