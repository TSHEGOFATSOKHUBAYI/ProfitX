document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform authentication logic (replace with your actual authentication mechanism)
    if (username === 'your_username' && password === 'your_password') {
        // Successful login, redirect to dashboard or home page
        window.location.href = 'dashboard.html'; // Replace with the desired URL
    } else {
        // Invalid credentials, display an error message
        alert('Invalid username or password.');
    }
});