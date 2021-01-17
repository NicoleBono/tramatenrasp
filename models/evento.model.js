const mongoose = require('mongoose');

var eventoSchema = new mongoose.Schema({
    nomeEvento: {
        type: String,
    },
    data: {
        type: Date
    },
    local: {
        type: String
    },
       descricao: {
        type: String
    },
       classificacao: {
        type: String
    },
       gatuito: {
        type: Boolean
    },
});

mongoose.model('Evento', eventoSchema);