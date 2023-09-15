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
    password: {
        type: String,
        required: true
    }
});

module.exports = model('usuario', UsuarioSchema);