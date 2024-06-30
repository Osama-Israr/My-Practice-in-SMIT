document.addEventListener('DOMContentLoaded', function() {
    const editForm = document.getElementById('editForm');
    const messageDiv = document.getElementById('message');
  
    editForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Retrieve form data
      const username = editForm.elements['username'].value;
      const email = editForm.elements['email'].value;
      const age = editForm.elements['age'].value;
  
      // Here you can perform validation if needed
  
      // Example of displaying the edited details (you might want to send this to a server)
      messageDiv.textContent = `Username: ${username}, Email: ${email}, Age: ${age}`;
    });
});