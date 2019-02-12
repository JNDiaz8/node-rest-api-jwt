const express = require('express');
const router = express.Router();
const carController = require('../app/api/controllers/cars');

router.get('/', carController.getAll);
router.post('/create/', carController.create);
router.get('/findId/:carId', carController.getById);
router.put('/update/:carId', carController.updateById);
router.delete('/delete/:carId', carController.deleteById);

module.exports = router;