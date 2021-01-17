const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.login = (req, res) => {
  User.find()
    .sort({ name: -1 })
    .then((options) => {
    const result = options.filter((item) => {
        const  email = item.email;
        const senha = item.senha;
      if(req.body.email == email && req.body.senha == senha){
       return 'login ok' }
    })
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};

