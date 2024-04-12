function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var statusMessage = document.getElementById('statusMessage');

    if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
        statusMessage.innerHTML = 'Please fill out all fields.';
        statusMessage.style.color = 'red';
        return false;
    }

    // Validate email format using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        statusMessage.innerHTML = 'Invalid email address.';
        statusMessage.style.color = 'red';
        return false;
    }

    // If all validations pass, clear the form and show success message
    document.getElementById('contactForm').reset();
    statusMessage.innerHTML = 'Message sent successfully!';
    statusMessage.style.color = 'green';

    return false; // Prevent form submission
    function toggleDescription(item) {
        var description = item.querySelector('.project-description');
        description.style.display = (description.style.display === 'none' || description.style.display === '') ? 'block' : 'none';
    }
    
}
