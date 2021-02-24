let username = document.querySelector("#username"),
    password = document.querySelector("#password"),
    subbtt = document.querySelector("#sign_up");

let getuser = localStorage.getItem("username"),
    getpassword = localStorage.getItem("password")

subbtt.addEventListener("click", login)


function login(e) {
    e.preventDefault()
    if (username.value === "" || password.value === "") {
        alert("Please Enter Your Data")
    } else {
        if (getuser && getuser.trim() == username.value.trim() && getpassword && getpassword.trim() == password.value.trim()) {
            setInterval(() => {
                window.location = "index.html"
            }, 1500)
        } else { alert("Not Eslam Mahmoud") }


    }
}