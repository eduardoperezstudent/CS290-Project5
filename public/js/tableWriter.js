import data from './data.js';

// Don't change anything above this comment


// Feel free to define more functions if you want.


/**
 * Create and return an HTML table element using the value of variable 'data.'
 * The value of data is an array in which each element in turn is an array.
 * The top level array can have any number of elements greater than 1.
 * Each nested array will have the same number of elements.
 * This number will always be greater tha 0.
 * The HTML element created by this function will have as many columns
 * as the length of each nested array.
 * The elements in the first nested array (i.e., the array at index 0 in "data")
 * will be used to create <th> elements in the <thead> element of the table
 * The values of all other nested arrays will be used to create rows in the table,
 * one row for each of the other nested arrays, and using the value in a
 * nested array to create <td> elements in that row of the table.
 * @return HTML table element
 */
function createTableElement() {
    const table = document.createElement('table')
    const thead = table.createTHead()
    const tbody = table.createTBody()
  
    const [headers, ...rows] = data
  
    // Create table header row
    const headRow = thead.insertRow()
    headers.forEach(header => {
      const th = document.createElement('th')
      th.textContent = header
      headRow.appendChild(th)
    })
  
  
    // Populate the <tbody> of the table.
    rows.forEach(rowData => {
      const row = tbody.insertRow()
      rowData.forEach(cellData => {
        const td = row.insertCell()
        td.textContent = cellData
      })
    })
  
    return table
  }
  

// Don't change anything below this comment
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dynamicTable').appendChild(createTableElement())
})