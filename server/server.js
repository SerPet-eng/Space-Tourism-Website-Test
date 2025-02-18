require('dotenv').config(); // ✅ Load environment variables first

const express = require('express');
const cors = require('cors');
const connectDB = require('./database/connectDB');
const connectCloudinary = require('./database/connectCloudinary');
const app = express();
const PORT = process.env.PORT || 5000;

const destinationRouter = require('./routes/destinationRoutes');
const crewRouter = require('./routes/crewRoutes');
const technologyRouter = require('./routes/technologyRoutes');
const dataRouter = require('./routes/dataRoutes');

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.use('/api/data', dataRouter);

app.use('/api/destinations', destinationRouter);
app.use('/api/crews', crewRouter);
app.use('/api/technologies', technologyRouter);

connectDB()
  .then(() => {
    connectCloudinary();
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });
