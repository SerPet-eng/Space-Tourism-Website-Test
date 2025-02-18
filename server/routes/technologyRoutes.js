const express = require('express');
const {
  getAllTechnology,
  getTechnologyById,
  createTechnology,
  updateTechnologyById,
  deleteTechnologyById,
} = require('../controllers/technologyController');
const router = express.Router();

router.get('/', getAllTechnology);
router.get('/:id', getTechnologyById);
router.post('/', createTechnology);
router.put('/:id', updateTechnologyById);
router.delete('/:id', deleteTechnologyById);

module.exports = router;
