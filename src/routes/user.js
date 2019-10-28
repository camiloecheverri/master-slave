const { Router } = require('express');
const {createUser, main} = require('../controllers/userController')
const router = Router();
router.route('/')
    .get(main)
    .post(createUser)
module.exports = router