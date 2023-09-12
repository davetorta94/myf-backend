const {Router} = require('express');
const router = Router()
const {check} = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')
const {crearUsuario} = require('../controllers/auth');


router.post('/new', 
[
    //middlewares
    check('name','El nombre es obligatorio').not().isEmpty(), //salta esto si no esta el nombre y si está vacio. 
    check('email','El email es obligatorio').isEmail(),
    check('password','El password debe de tener mínimo 6 caracteres').isLength({ min : 6 }),
    validarCampos
] 
,crearUsuario);



module.exports = router;