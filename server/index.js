const express = require('express');
const mongoose = require('mongoose');
const Job = require('./models/Job');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors({
  origin:process.env.VITE_FRONTEND_URL,
}));

// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
mongoose.connect(process.env.DATABASE_URL, {
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log('MongoDB connection error:', err);
});


// API to fetch all or filtered jobs
app.get('/api/jobs', async (req, res) => {
  const { location } = req.query;

  try {
    const query = location
      ? { location: { $regex: location, $options: 'i' } }
      : {};

    const jobs = await Job.find(query);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch jobs', error });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
