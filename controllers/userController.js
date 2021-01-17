const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.create = function (req, res, next) {
let user = new User(
 {
 nomeCompleto: req.body.nomeCompleto,
 email: req.body.email,
 celular: req.body.celular,
 endereco: req.body.endereco,
 voluntario: req.body.voluntario
 }
 );
 user.save(function (err) {
if (err) {
return next(err);
 }
 res.send('Registo de usuario criado com sucesso')
 })
}

exports.details = (req, res) => {
  User.find()
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

