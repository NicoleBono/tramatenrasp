const mongoose = require('mongoose');
const Evento = mongoose.model('Evento');

exports.create = function (req, res, next) {
let evento = new Evento(
 {
 nomeEvento: req.body.nomeEvento,
 data: req.body.data,
 local: req.body.local,
 descricao: req.body.descricao,
 classificacao: req.body.classificacao,
 gratuito: req.body.gratuito
 }
 );
 evento.save(function (err) {
if (err) {
return next(err);
 }
 res.send('Registo de evento criado com sucesso')
 })
}

exports.details = (req, res) => {
  Evento.find()
    .sort({ name: -1 })
    .then((evento) => {
      res.status(200).send(evento);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};

