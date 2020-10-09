var path = require("path");
var express = require("express");
var hbs = require("hbs");
var geocode = require("./utils/geocode");
var forecast = require("./utils/forecast");
var app = express();
var port = process.env.PORT || 3000;
// Define paths for Express config
var publicDirectoryPath = path.join(__dirname, "../public");
var viewsPath = path.join(__dirname, "../templates/views");
var partialsPath = path.join(__dirname, "../templates/partials");
// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
// Setup static directory to serve
app.use(express.static(publicDirectoryPath));
app.get("", function (req, res) {
    res.render("index", {
        title: "Weather",
        name: "Dimas Bagus Susilo"
    });
});
app.get("/about", function (req, res) {
    res.render("about", {
        title: "About Me",
        name: "Dimas Bagus Susilo"
    });
    console.log(req.query);
});
app.get("/help", function (req, res) {
    res.render("help", {
        helpText: "This is some helpful text.",
        title: "Help",
        name: "Dimas Bagus Susilo"
    });
});
app.get("/weather", function (req, res) {
    return !req.query.address
        ? res.send({
            error: "Please provide an address"
        })
        : geocode(req.query.address, function (error, _a) {
            var _b = _a === void 0 ? {} : _a, latitude = _b.latitude, longitude = _b.longitude, location = _b.location;
            if (error) {
                return res.send({ error: error });
            }
            forecast(latitude, longitude, function (error, forecastData) {
                if (error) {
                    return res.send({ error: error });
                }
                res.send({
                    forecast: forecastData,
                    location: location,
                    address: req.query.address
                });
            });
        });
});
app.get("/help/*", function (req, res) {
    res.render("404", {
        title: "404",
        name: "Dimas Bagus Susilo",
        errorMessage: "Help article not found."
    });
});
app.get("*", function (req, res) {
    res.render("404", {
        title: "404",
        name: "Dimas Bagus Susilo",
        errorMessage: "Page not found."
    });
});
app.listen(3000, function () {
    console.log("Server is up on port " + port + ".");
});
