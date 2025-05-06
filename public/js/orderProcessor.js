/*
Add an event handler for the submit event on the form with id "orderForm" in
    the file "order.html.
This event handler must:
1. Prevent submission of the form (which is the default action for the submit
    event on a form).
2. Get the values of the 2 input elements in the form. The value of an input
    element in a form is available as the attribute "value" of the element.
3. Append a new row to the table with the id "orderTable" in the file 
    "order.html." This row must contain the values entered by the user in the 2 input elements.
*/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm')
    const table = document.getElementById('orderTable').getElementsByTagName('tbody')[0]
  
    form.addEventListener('submit', (event) => {
      event.preventDefault() // Prevent default form submission and page reload

      const companyInput = document.getElementById('company')
      const quantityInput = document.getElementById('quantity')
  
      // Skip if either input is empty after trimming (prevents blank rows)
      const company = companyInput.value.trim()
      const quantity = quantityInput.value.trim()
      if (!company || !quantity) return // just in case
  
      const newRow = table.insertRow()
      const companyCell = newRow.insertCell()
      const quantityCell = newRow.insertCell()
  
      companyCell.textContent = company
      quantityCell.textContent = quantity
  
      // Clear the inputs after adding
      form.reset()
    })
  })
  