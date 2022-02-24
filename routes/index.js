const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

const {body, check} = require('express-validator');



/* GET home page. */
router.get('/', controller.index);

router.post('/',[
  check('name').isLength({min:1}).withMessage('Debe Ingresar un nombre'),
  check('email').isEmail().withMessage('Debe Ingresar un email valido'),
  check('name').isLength({min:1}).withMessage('Debe Ingresar un color'),
  body('age').custom(value =>{
    if (isNaN(value)){
      throw new Error('el valor ingresado debe ser un numero');
    } else {
      return true;
    }
  })], controller.store);

module.exports = router;
