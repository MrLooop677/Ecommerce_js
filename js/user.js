// start header 
let nameofuser = localStorage.getItem("username")
if (nameofuser) {
    links.style.display = "None";
    user_info.style.display = "flex"
    user.innerHTML = nameofuser
}

logout.addEventListener("click", () => {
        localStorage.clear();
        setInterval(() => {
            window.location = "register.html"
        }, 1500)
    })
    // end header