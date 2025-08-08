let logout = document.querySelector(".logout");
let cardBody = document.querySelector('.card-body');
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
    window.location.href = "../HTML/login.html";
} else {
    cardBody.innerHTML = `
        <p class="card-text"><strong>Name:</strong> ${currentUser.name}</p> 
        <p class="card-text"><strong>Email:</strong> ${currentUser.email}</p>
    `;
}

logout.addEventListener("click", function() {
    localStorage.removeItem("currentUser");
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logout successful!",
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        window.location.href = "../index.html";
    });
});
