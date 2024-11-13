const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "build")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
