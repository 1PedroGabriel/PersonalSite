const express = require("express");

const app = express();
const PORT = 5000;
app.set("view engine", "ejs");


app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);

})
app.get("/", (req, res) => {


    res.render("index.ejs");
}) 