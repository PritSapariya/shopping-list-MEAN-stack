var express = require('express');
var mongoose = require('mongoose');
// var bodyparser = require('body-parser');
var cors = require('cors');
require('dotenv').config();

var app = express();

const route = require('./route/routes.js');

mongoose.connect('mongodb://localhost:27017/soppinglist', {
    useNewUrlParser: true,
    useCreateIndex: true,
})
.then(() => console.log("MongoDB server is connected"))
.catch((err) => console.log(err));


const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api', route);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log('Server Started at port :' + PORT);
});