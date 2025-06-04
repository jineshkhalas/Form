
const login = document.querySelector(".Login");

function Login() {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const uid = document.querySelector("#luid").value.trim();
    const pswd = document.querySelector("#lpswd").value.trim();

    if (savedUser && uid === savedUser.uid && pswd === savedUser.pswd) {
        alert("Access Granted");
    } else {
        alert("Access Denied. Username or Password is incorrect");
    }
}

login.addEventListener("click", Login);