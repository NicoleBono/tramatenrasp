const mongoose = require('mongoose');

var optionsSchema = new mongoose.Schema({
    educacao: {
        type: String,
    },
    equipamentosCulturais: {
        type: String
    },
    atividadesCulturais: {
        type: String
    },
    agentesCulturais: {
        type: String
    },
    pulbicoGeral: {
        type: String
    }
});


mongoose.model('Options', optionsSchema);