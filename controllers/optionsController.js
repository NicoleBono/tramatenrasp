const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Options = mongoose.model('Options');


exports.create = function (req, res, next) {
let options = new Options(
 {
 nomeCompleto: req.body.nomeCompleto,
 email: req.body.email,
 celular: req.body.celular,
 endereco: req.body.endereco,
 descrição: req.body.descricao,
 site: req.body.redesSociais,
 voluntarios: req.body.voluntarios,
 }
 );
 options.save(function (err) {
if (err) {
return next(err);
 }
 res.send('Registo de opções criado com sucesso')
 })
};

exports.details = (req, res) => {
  Options.find()
    .sort({ name: -1 })
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};

