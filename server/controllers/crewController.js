const Crew = require('../models/crewModel');

const getAllCrew = async (req, res) => {
  try {
    const crew = await Crew.find();
    res.status(201).json(crew);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching crew' });
  }
};

const getCrewById = async (req, res) => {
  try {
    const crew = await Crew.findById(req.params.id);
    if (!crew) return res.status(404).json({ message: 'Crew not found' });
    res.status(201).json(crew);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching crew' });
  }
};

const createCrew = async (req, res) => {
  try {
    const newCrew = await Crew.create(req.body);
    if (!newCrew)
      return res.status(401).json({ message: 'Error creating crew' });
    res.status(201).json(newCrew);
  } catch (error) {
    res.status(500).json({ message: 'Error creating crew' });
  }
};

const updateCrewById = async (req, res) => {
  try {
    const updateCrew = await Crew.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateCrew);
  } catch (error) {}
};

const deleteCrewById = async (req, res) => {
  try {
    await Crew.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Crew deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting crew' });
  }
};

module.exports = {
  getAllCrew,
  getCrewById,
  createCrew,
  updateCrewById,
  deleteCrewById,
};
