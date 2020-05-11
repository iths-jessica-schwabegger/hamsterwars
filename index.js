
const express = require("express");
const app = express();

app.use(express.static("public"));

//----------------ROUTES-----------------
const hamstersRoute = require("./routes/hamsters");
app.use("/hamsters", hamstersRoute);
const assetsRoute = require("./routes/assets");
app.use("/assets", assetsRoute);


app.listen(3000, () => {
    console.log("Server is up and running!");
    
})