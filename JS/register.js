let userName = document.getElementById("name");
window.onload = function() {
    userName.focus();
}

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = userName.value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let message = document.getElementById('message');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let isEmailRegistered = users.find(user => user.email === email);

    if (isEmailRegistered) {
        message.textContent = "Email is already registered!";
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    message.textContent = "";
    Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Registration successful!",
    showConfirmButton: false,
    timer: 1500
    }).then(() => {
        document.getElementById("goToLogin").click();
    });
});
