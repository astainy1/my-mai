document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('expenseEntryForm');
  const tableBody = document.getElementById('tableBody');
  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  // Function to render the expense table
  function renderTable() {
      tableBody.innerHTML = '';
      expenses.forEach((expense, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${index + 1}</td>
              <td>${expense.category}</td>
              <td>${expense.description}</td>
              <td>${expense.amount}</td>
              <td>${expense.date}</td>
              <td>
                  <button class="btn btn-success btn-sm" onclick="editExpense(${index})"><i class="fa fa-pencil-square"></i></button>
                  <button class="btn btn-danger btn-sm" onclick="deleteExpense(${index})"><i class="fa fa-trash"></i></button>
              </td>
          `;
          tableBody.appendChild(row);
      });
  }

  // Add expense
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      const expense = {
          date: form.date.value,
          category: form.categoryEntry.value,
          description: form.descriptionEntry.value,
          amount: form.expenseAmountEntry.value
      };
      expenses.push(expense);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      renderTable();
      form.reset();
      $('#add-expense-entry-modal').modal('hide');
  });

  // Edit expense
  window.editExpense = function(index) {
      const expense = expenses[index];
      form.date.value = expense.date;
      form.categoryEntry.value = expense.category;
      form.descriptionEntry.value = expense.description;
      form.expenseAmountEntry.value = expense.amount;
      $('#add-expense-entry-modal').modal('show');
      
      form.onsubmit = function(event) {
          event.preventDefault();
          expenses[index] = {
              date: form.date.value,
              category: form.categoryEntry.value,
              description: form.descriptionEntry.value,
              amount: form.expenseAmountEntry.value
          };
          localStorage.setItem('expenses', JSON.stringify(expenses));
          renderTable();
          form.reset();
          $('#add-expense-entry-modal').modal('hide');
          form.onsubmit = addExpense;
      };
  };

  // Delete expense
  window.deleteExpense = function(index) {
      expenses.splice(index, 1);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      renderTable();
  };

  // Initialize table
  renderTable();
});
