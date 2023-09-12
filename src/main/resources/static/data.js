const data = document.getElementById("data");

let arr = [];

axios.get("http://16.171.0.40/get-forms").then((res) => {
    arr = res.data;
    showdata();
});

function showdata() {
    console.log(arr);
    arr.forEach((val, index) => {
        data.innerHTML += `
        <div style=" margin : 2px solid balck; ">
            <h1><span>${index + 1}</span>${val.name}</h1>
            <h1>${val.email}</h1><br>
        </div>
        `;
    });
}