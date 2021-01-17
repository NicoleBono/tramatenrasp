const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Options = mongoose.model('Options');

exports.details = (req, res) => {
  Options.find()
    .sort({ name: -1 })
    .then((options) => {
    const result = options.filter((item) => {
        const  descricao = item.descrição;
      if(req.body.options == descricao){
       return item }
    })
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};

