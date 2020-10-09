const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req: any, res: any) => {
    res.render("index", {
        title: "Weather",
        name: "Dimas Bagus Susilo",
    });
});

app.get("/about", (req: any, res: any) => {
    res.render("about", {
        title: "About Me",
        name: "Dimas Bagus Susilo",
    });
    console.log(req.query);
});

app.get("/help", (req: any, res: any) => {
    res.render("help", {
        helpText: "This is some helpful text.",
        title: "Help",
        name: "Dimas Bagus Susilo",
    });
});

app.get("/weather", (req: any, res: any) =>
    !req.query.address
        ? res.send({
              error: "Please provide an address",
          })
        : geocode(
              req.query.address,
              (error: any, { latitude, longitude, location }: any = {}) => {
                  if (error) {
                      return res.send({ error });
                  }

                  forecast(
                      latitude,
                      longitude,
                      (error: any, forecastData: any) => {
                          if (error) {
                              return res.send({ error });
                          }

                          res.send({
                              forecast: forecastData,
                              location,
                              address: req.query.address,
                          });
                      }
                  );
              }
          )
);

app.get("/help/*", (req: any, res: any) => {
    res.render("404", {
        title: "404",
        name: "Dimas Bagus Susilo",
        errorMessage: "Help article not found.",
    });
});

app.get("*", (req: any, res: any) => {
    res.render("404", {
        title: "404",
        name: "Dimas Bagus Susilo",
        errorMessage: "Page not found.",
    });
});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});
