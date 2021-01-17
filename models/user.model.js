const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    nomeCompleto: {
        type: String,
    },
    email: {
        type: String,
    },
    senha: {
        type: String ,
        },
    celular: {
        type: String
    },
    endereco: {
        type: String
    },
    voluntario: {
        type: Boolean}
});



// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('User', userSchema);