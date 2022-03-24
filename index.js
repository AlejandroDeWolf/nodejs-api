const express = require('express');
const mongoose = require('mongoose');
const messagesRouter = require("./routers/messages");

mongoose.connect('mongodb://localhost:27017/test');
const app = express();
const port = 3000;
app.set('view engine', 'pug'); //engine om makkelijk templates te bouwen

app.use(express.json());
app.use("/", messagesRouter);

// REST
app.get('/', (req, res) => {
    res.render("index", { title: "cool", message: "yoyo" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});