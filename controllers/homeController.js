const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Options = mongoose.model('Options');

exports.details = (req, res) => {
  Options.find()
    .sort({ name: -1 })
    .then((options) => {
    if (options == 'educacao'){
      res.status(200).send(options);
    }
      if (options == 'atividades culturais'){
      res.status(200).send(options);
    }
      if (options == 'agentes culturais'){
      res.status(200).send(options);
    }
      if (options == 'espaços'){
      res.status(200).send(options);
    }
      if (options == 'voluntarios'){
      res.status(200).send(options);
    }
      if (options == 'evento'){
      res.status(200).send(options);
    }})
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};

