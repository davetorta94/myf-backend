const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');


const crearUsuario = async(req, res) => {

    const {name, email, password} = req.body;

    try {

        let usuario = await Usuario.findOne({email});

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            });
        }

         usuario = new Usuario(req.body);

         //encriptar contraseña

         const salt = bcrypt.genSaltSync();
         usuario.password = bcrypt.hashSync( password, salt);

        await usuario.save();

    

    return res.status(201).json({
        ok: true,
        uid: usuario.id,
        name: usuario.name
    });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'por favor hable con el administrador'
        })
    }

    
}

module.exports = {crearUsuario}


// el return se pone en todos menos el ultimo pero se puede poner por si acaso como aqui.

//if(name.length < 5) { EN LA LECCION 383 TIENES COMO VALIDAR UN USUARIO
    //    return res.status(400).json({
    //        ok: false,
    //        message: "el nombre debe de tener más de 5 letras"
    //    })
    //}

    //manejo de errores

    //const errors = validationResult(req); ESTO LO LLEVO AL CUSTOM MIDDLEWARE DE VALIDAR-CAMPOS
    //if(!errors.isEmpty()) {
    //    return res.status(400).json({
    //        ok: false,
    //        errors: errors.mapped()
    //    })
    //}