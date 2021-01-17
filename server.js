
require('./models/db');

const express = require('express');
const bodyparser = require('body-parser');
const user = require('../project/routes')

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use('/', user);

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});
