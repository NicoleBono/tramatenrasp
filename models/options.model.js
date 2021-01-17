const mongoose = require('mongoose');

var optionsSchema = new mongoose.Schema({
    nomeCompleto: {
        type: String,
    },
    email: {
        type: String
    },
    celular: {
        type: String
    },
    endereco: {
        type: String
    },
    descrição: {
        type: String
    },
     site: {
        type: String
    },
     voluntarios: {
        type: Boolean
    }
});


mongoose.model('Options', optionsSchema);