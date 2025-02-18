// document.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;

//     // Retrieve stored user data from localStorage
//     const storedUsername = localStorage.getItem('username');
//     const storedPassword = localStorage.getItem('password');

//     // Check if the login is correct
//     if (username === storedUsername && password === storedPassword) {
//         // Redirect to index page after successful login
//         window.location.href = 'index.html';
//     } else {
//         alert('Invalid username or password!');
//     }
// });