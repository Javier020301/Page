const btn_submit = document.getElementById("btn-submit");

btn_submit.addEventListener(
    "click", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "12345") {
            window.location.href = "index.html";
        }else {
            alert("Invalid username or password");
        }

    }
)