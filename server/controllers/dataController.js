const Destination = require('../models/destinationModel');
const Crew = require('../models/crewModel');
const Technology = require('../models/technologyModel');

const getAllData = async (req, res) => {
  try {
    const destination = await Destination.find();
    const crew = await Crew.find();
    const technology = await Technology.find();
    if (!destination || !Crew || !Technology) {
      res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json({ destination, crew, technology });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data' });
  }
};

module.exports = { getAllData };
