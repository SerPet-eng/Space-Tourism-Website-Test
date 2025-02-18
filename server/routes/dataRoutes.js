const express = require('express');
const router = express.Router();
const { getAllData } = require('../controllers/dataController');

router.get('/', getAllData);

module.exports = router;
