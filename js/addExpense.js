//Testing connection
// alert("Hello world");

//Load all HTML Document before Js script
document.addEventListener('DOMContentLoaded', () => {

    //Get all expenses from localStorage or get an empty array 
    let storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    // console.log(storedExpenses);

    //Get all inputs fields
    const id = document.querySelector('#expenseId');
    const category = document.querySelector('#expenseCategory');
    const description = document.querySelector('#expenseDescription');
    const amount = document.querySelector('#expenseAmount');
    const date = document.querySelector('#expenseDate');

    //Get the table body and modal
    let tableBody = document.querySelector('#tableBody');
    let bootstrapModal = new bootstrap.Modal(document.querySelector('#add-expense-entry-modal'));

    //Get form element
    let form = document.querySelector('#expenseEntryForm');

    //Display all expenses into HTML table
    function displayExpenses(){
        //set table body to empty string
        tableBody.innerHTML = '';

        //Loop through the stored data (in localStorage)  if there is any and display each
        storedExpenses.forEach((expense, index) => {

            // create new row (table row) in the table
            let row = document.createElement('tr');

            //Set the new row data to table data using template litrary
            row.innerHTML = ` <td>${index + 1}</td>
                            <td>${expense.expenseCategory}</td>
                            <td>${expense.expenseDescription}</td>
                            <td>${expense.expenseAmount}</td>
                            <td>${expense.expenseDate}</td>
                            
                            <td>
                                <button class="btn btn-success sm" onclick="editData(${index})"><i class="fa fa-pencil-square"></i></button>
                                <button class="btn btn-danger sm" onclick="deleteData(${index})"><i class="fa fa-trash"></i></button>
                            </td>`;

            //Now add the new table row to the table body
            tableBody.appendChild(row);
        });
    }

    //eventlistener for form submission
    form.addEventListener('submit', (e1) => {

        //prevent form submission default behavior - so as not to lead to another page
        e1.preventDefault();

        //Now get the values of all the variable decleared above assigning them to new variable
        let expenseId = id.value;
        let expenseCategory = category.value.trim();
        let expenseDescription = description.value.trim();
        let expenseAmount = amount.value;
        let expenseDate = date.value;

        //Converting amount to decimal - making it two decimal value
        // const expenseAmount = expenseAmount1.toFixed(2);

        //Store values to localStorage
        if(expenseId === ''){
            storedExpenses.push({expenseCategory, expenseDescription, expenseAmount, expenseDate});
        }else{
            storedExpenses[expenseId] = {expenseCategory, expenseDescription, expenseAmount, expenseDate};
        }

        //Store data back into localStorage
        localStorage.setItem('expenses', JSON.stringify(storedExpenses));

        //Reset form - clearing all input fields
        form.reset();

        //Hide form (Bootstrap modal)
        bootstrapModal.hide()

        //Invoke displayed data function
        displayExpenses();
    })

    //Function to edit table data in form
    window.editData = (index) => {

        //assign storedExpenses index to a variable
        const expense = storedExpenses[index];

        //assigning existing value into input fields
        id.value = index;
        date.value = expense.expenseDate;
        category.value = expense.expenseCategory;
        description.value = expense.expenseDescription;
        amount.value = expense.expenseAmount;
        bootstrapModal.show();

    }

    //function to delete active row in table
    window.deleteData = function (index) {
        if(confirm("Are you sure you want to delete this expense?")){
            //Remove active row if true
            storedExpenses.splice(index, 1);
            
            //Send the remeaning expenses back into localStorage
            localStorage.setItem('expenses', JSON.stringify(storedExpenses));

            //Invoke table display function after expense is deleted
            displayExpenses();
            
        }
    }

    //display data into table upon when the page reload
    displayExpenses();
})


    

