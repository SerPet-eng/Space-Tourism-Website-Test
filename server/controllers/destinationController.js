const Destination = require('./../models/destinationModel');

const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(201).json(destinations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destinations' });
  }
};

const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destination' });
  }
};

const createDestination = async (req, res) => {
  try {
    const newDestination = await Destination.create(req.body);
    res.status(201).json(newDestination);
  } catch (error) {
    res.status(500).json({ message: 'Error creating destination' });
  }
};

const updateDestinationById = async (req, res) => {
  try {
    const updateDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );

    res.status(200).json(updateDestination);
  } catch (error) {
    res.status(500).json({ message: 'Error updating destination' });
  }
};

const deleteDestinationById = async (req, res) => {
  try {
    await Destination.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Destination deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting destination' });
  }
};

module.exports = {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestinationById,
  deleteDestinationById,
};
