const express = require('express');
const {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestinationById,
  deleteDestinationById,
} = require('../controllers/destinationController');
const router = express.Router();

router.get('/', getAllDestinations);
router.get('/:id', getDestinationById);
router.post('/', createDestination);
router.put('/:id', updateDestinationById);
router.delete('/:id', deleteDestinationById);

module.exports = router;
