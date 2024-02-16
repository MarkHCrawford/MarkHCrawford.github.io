document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('assignment-form');
    const assignmentList = document.getElementById('assignment-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const description = document.getElementById('description').value;
      const dueDate = document.getElementById('due-date').value;
  
      if (name && description && dueDate) {
        addAssignment(name, description, dueDate);
        form.reset();
      } else {
        alert('Please fill in all fields');
      }
    });
  
    assignmentList.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
      } else if (event.target.classList.contains('complete')) {
        event.target.parentElement.classList.toggle('completed');
      }
    });
  
    function addAssignment(name, description, dueDate) {
      const assignmentItem = document.createElement('li');
      assignmentItem.className = 'assignment-item';
      assignmentItem.innerHTML = `
        <strong>${name}</strong>
        <p>${description}</p>
        <p>Due Date: ${dueDate}</p>
        <button class="delete">Delete</button>
        <button class="complete">Mark as Complete</button>
      `;
      assignmentList.appendChild(assignmentItem);
    }
  });
  