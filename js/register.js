// Register User
let username = document.querySelector("#username"),
    email = document.querySelector("#email"),
    password = document.querySelector("#password"),
    subbtt = document.querySelector("#sign_up");

subbtt.addEventListener("click", register)

function register(e) {
    e.preventDefault()
    if (username.value === "" || email.value === "" || password.value === "") {
        alert("Please Enter Your Data")
    } else {
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
        setInterval(() => {
            window.location = "login.html"
        }, 1500)

    }
}