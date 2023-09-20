const {Router} = require('express');
const router = Router()
const {check} = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')
const {crearUsuario} = require('../controllers/auth');
//const {validarJWT} = require('../middlewares/validar-jwt');


router.post('/new', 
[
    //middlewares
    check('name','El nombre es obligatorio').not().isEmpty(), //salta esto si no esta el nombre y si está vacio. 
    check('email','El email es obligatorio').isEmail(),
    check('number','El número de teléfono debe de tener mínimo 9 caracteres').isLength({ min : 9 }),
    validarCampos
] 
,crearUsuario);

//router.get('/renew',validarJWT, revalidarToken); NO SIRVE FALTAN COSAS



module.exports = router;