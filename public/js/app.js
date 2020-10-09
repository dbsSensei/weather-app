var weatherForm = document.querySelector("form");
var search = document.querySelector("input");
var messageOne = document.querySelector("#messageOne");
var messageTwo = document.querySelector("#messageTwo");
weatherForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var location = search.value;
    messageOne.textContent = "Loading...!";
    messageTwo.textContent = "";
    fetch("http://localhost:3000/weather?address=" + location).then(function (response) {
        return response.json().then(function (data) {
            if (data.error) {
                // console.log("Please provide an address!");
                messageOne.textContent = data.error;
                messageTwo.textContent = "";
            }
            else {
                console.log(data.location);
                console.log(data.forecast);
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        });
    });
});
