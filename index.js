const express = require('express');
// const mongoose = require('mongoose');
const messagesRouter = require("./routers/messages");

// mongoose.connect('mongodb+srv://alejandrodewolf:Alejandro123@cluster0.xgqbm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'pug'); //engine om makkelijk templates te bouwen

app.use(express.json());
app.use("/", messagesRouter);

// REST
app.get('/', (req, res) => {
    res.render("index", { title: "Node.js api", message: "Welcome to my basic node.js api!" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});