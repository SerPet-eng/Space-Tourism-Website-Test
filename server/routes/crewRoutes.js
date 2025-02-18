const express = require('express');
const {
  getAllCrew,
  getCrewById,
  createCrew,
  updateCrewById,
  deleteCrewById,
} = require('../controllers/crewController');
const router = express.Router();

router.get('/', getAllCrew);
router.get('/:id', getCrewById);
router.post('/', createCrew);
router.put('/:id', updateCrewById);
router.delete('/:id', deleteCrewById);

module.exports = router;
