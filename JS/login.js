let userEmail =document.getElementById("email");
window.onload = function(){
    userEmail.focus();
}
document.getElementById('loginForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    let email = userEmail.value.trim().toLowerCase();
    let password = document.getElementById("password").value.trim();
    let message =document.getElementById('message');

    let users=JSON.parse(localStorage.getItem('users')) || [];
    let userInfo = users.find(user => user.email ===email && user.password === password);
    if (userInfo) {
        message.textContent = "";
        localStorage.setItem("currentUser", JSON.stringify(userInfo));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successful!",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = "/Authentication/HTML/profile.html";
        });
    }else{
        message.textContent = "Invalid email or password!";
        return
    }
})