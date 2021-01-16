const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Options = mongoose.model('Options');

router.get('/', (req, res) => {
    res.render("option/addOrEdit", {
        viewTitle: "Insert Option"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});

router.get('/list', (req, res) => {
    Options.find((err, docs) => {
        if (!err) {
            res.render("options/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving options list :' + err);
        }
    });
});

module.exports = router;