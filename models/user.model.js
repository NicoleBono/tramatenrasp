const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    nomeCompleto: {
        type: String,
        required: 'This field is required.'
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
    voluntario: {
        type: Boolean}
});



// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

userSchema.path(cpf).validate((cpf) => {
    if (!cpf) {
        throw new Error(
            `Invalid cpf received in formatCpfToPattern. Cpf: ${cpf}`
        );
    }
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
});

mongoose.model('Employee', employeeSchema);