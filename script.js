document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Example: Make API call to login
    console.log("Logging in with:", email, password);
    alert("Login successful!");
});