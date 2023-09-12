const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (name.value !== "" && email.value !== "") {
        postData();
    }
})

async function postData() {
    const data = {
        name: name.value,
        email: email.value,
    };

    await axios
        .post("http://16.171.0.40/postForms", data)
        .then((res) => {
            window.location.href = "/data";
        })
        .catch((err) => alert(err));
}