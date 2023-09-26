const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,                                                 //ES REQUIRED, EN GITHUB ESTARÁ SIN LA D
        unique: true
    },
    number: {
        type: String,
        required: true
    },
    method: {
        type: String,
        enum: ['whatsapp','llamada','email'],
        required: true,
    }
});

module.exports = model('usuario', UsuarioSchema);