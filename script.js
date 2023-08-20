document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simulate a network request to the backend
        authenticateUser(username, password);
    });
    
    function authenticateUser(username, password) {
        // Simulate a successful login
        if (username === 'user' && password === 'password') {
            window.location.href = 'secured.html';
        } else {
            alert('Invalid username or password');
        }
    }
});
