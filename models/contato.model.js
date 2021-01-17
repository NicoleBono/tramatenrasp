const mongoose = require('mongoose');

var contatoSchema = new mongoose.Schema({
    nomeCompleto: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String
    },
    mensagem: {
        type: String
    },
});

mongoose.model('Contato', contatoSchema);