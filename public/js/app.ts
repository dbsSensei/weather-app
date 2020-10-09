const weatherForm = document.querySelector("form")!;
const search = document.querySelector("input")!;
const messageOne: any = document.querySelector("#messageOne");
const messageTwo: any = document.querySelector("#messageTwo");

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const location = search.value;

    messageOne.textContent = `Loading...!`
    messageTwo.textContent = "";

    fetch(`/weather?address=${location}`).then(
        (response) =>
            response.json().then((data) => {
                if (data.error) {
                    // console.log("Please provide an address!");
                    messageOne.textContent = data.error;
                    messageTwo.textContent = "";
                } else {
                    console.log(data.location);
                    console.log(data.forecast);
                    messageOne.textContent = data.location;
                    messageTwo.textContent = data.forecast;
                }
            })
    );
});
