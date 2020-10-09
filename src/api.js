const fetch = require("node-fetch");

// fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
//     response.json().then((posts) => {
//         let counter = 0;
//         posts.map((post) => {
//             console.log(`${counter += 1} ` + post.title);
//         });
//     })
// );

// const forecast = (latitude, longitude, callback) => {
//     const url =
//         "http://api.weatherstack.com/current?access_key=2b702dcc8f3d3d3d2ba85617b94c1224&query=" +
//         latitude +
//         "," +
//         longitude;

//     fetch(url).then(
//         (response) =>
//             response
//                 .json()
//                 .then((data) =>
//                     data.location
//                         ? console.log(
//                               data.location.timezone_id +
//                                   " It is currently " +
//                                   data.current.temperature +
//                                   " degress out. There is a " +
//                                   data.current.weather_descriptions +
//                                   "."
//                           )
//                         : console.log("Error")
//                 )
//         // .catch(err => console.log(err))
//     );

//     // request({ url, json: true }, (error, { body }) => {
//     //     if (error) {
//     //         callback('Unable to connect to weather service!', undefined)
//     //     } else if (body.error) {
//     //         callback('Unable to find location', undefined)
//     //     } else {
//     //         callback(undefined, body.location.timezone_id + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.weather_descriptions+'.')
//     //     }
//     // })
// };

// forecast(42.3601,71.0589)
// forecast(102901, 120390123);

// fetch("http://localhost:3000/weather?address=Jakarta").then((response) =>
//     response.json().then((data) => console.log(data))
// );
