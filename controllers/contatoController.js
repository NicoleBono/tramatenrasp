const mongoose = require('mongoose');
const Contato = mongoose.model('Contato');

exports.create = function (req, res, next) {
let user = new Contato(
 {
 nomeCompleto: req.body.nomeCompleto,
 email: req.body.email,
 mensagem: req.body.mensagem,
 }
 );
 user.save(function (err) {
if (err) {
return next(err);
 }
 res.send('Registo de mensagem criado com sucesso')
 })
}

exports.details = (req, res) => {
  Contato.find()
    .sort({ name: -1 })
    .then((contato) => {
      res.status(200).send(contato);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};

