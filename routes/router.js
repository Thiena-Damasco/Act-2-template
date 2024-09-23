const express = require('express');
const router = express.Router();
const con = require('../controller/ConTroller')

router.get('/', con.troll);
router.get('/a', con.about);
router.get('/b', con.products);
router.get('/c', con.offer);
router.get('/d', con.categories);
module.exports = router;