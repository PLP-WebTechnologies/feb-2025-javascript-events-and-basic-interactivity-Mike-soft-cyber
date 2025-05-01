const submitButton = document.getElementById('submit');
const inputFields = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');
const keyField = document.getElementById('key');

submitButton.addEventListener('click', function() {
    let allFieldsFilled = true; // Flag to check if all fields are filled

    // Check if all input fields are filled
    inputFields.forEach(function(input) {
        if (input.value.trim() === '') { // Check individual input field value
            allFieldsFilled = false;
        }
    });

    if (!allFieldsFilled) {
        alert('Please fill in all fields before submitting!');
        return; // Stop the function if not all fields are filled
    }

    alert("Form submitted successfully!"); // Alert for successful submission

    // Clear all input fields
    inputFields.forEach(function(input) {
        input.value = ''; // Clear the input field
    });

    window.location.href = 'index.html'; // Redirect after clearing inputs
});

submitButton.onmouseover = function() {
    this.style.backgroundColor = 'white';
    this.style.color = '#4CAF50';
    this.style.border = '2px solid #4CAF50';
}
submitButton.onmouseout = function() {
    this.style.backgroundColor = '#4CAF50';
    this.style.color = 'white';
    this.style.fontSize = '16px';
}

keyField.addEventListener('keypress', (event) => {
    alert(`You pressed: ${event.key}`);
});