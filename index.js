
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());


//----------------ROUTES-----------------
let images = require('path').join(__dirname,'/hamsters');
app.use("/", express.static("public"));
app.use("/assets", express.static(images));

const hamstersRoute = require("./routes/hamsters");
app.use("/hamsters", hamstersRoute);
// const assetsRoute = require("./routes/assets");
// app.use("/assets", assetsRoute);
const chartsRoute = require("./routes/charts");
app.use("/charts", chartsRoute);
const gamesRoute = require("./routes/games");
app.use("/games", gamesRoute);
const statsRoute = require("./routes/stats");
app.use("/stats", statsRoute);


app.listen(3000, () => {
    console.log("Server is up and running!");
    
})