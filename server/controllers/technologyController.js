const Technology = require('../models/technologyModel');

const getAllTechnology = async (req, res) => {
  try {
    const technology = await Technology.find();
    if (!technology)
      return res.status(404).json({ message: 'Technology not found' });
    res.status(201).json(technology);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching technology' });
  }
};

const getTechnologyById = async (req, res) => {
  try {
    const technology = await Technology.findById(req.params.id);
    if (!technology)
      return res.status(404).json({ message: 'Technology not found' });
    res.status(201).json(technology);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching technology' });
  }
};

const createTechnology = async (req, res) => {
  try {
    const newTechnology = await Technology.create(req.body);
    if (!newTechnology)
      return res.status(401).json({ message: 'Error creating technology' });
    res.status(201).json(newTechnology);
  } catch (error) {
    res.status(500).json({ message: 'Error creating technology' });
  }
};

const updateTechnologyById = async (req, res) => {
  try {
    const updateTechnology = await Technology.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    if (!updateTechnology)
      return res.status(400).json({ message: 'Bad Request' });
    res.status(200).json(updateTechnology);
  } catch (error) {}
};

const deleteTechnologyById = async (req, res) => {
  try {
    await Technology.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Technology deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting technology' });
  }
};

module.exports = {
  getAllTechnology,
  getTechnologyById,
  createTechnology,
  updateTechnologyById,
  deleteTechnologyById,
};
