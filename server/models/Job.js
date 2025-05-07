const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  jobId: { type: Number, required: true, unique: true },
  title: String,
  company: String,
  location: String,
  job_link: String,
  employment_type: String,
  experience: String,
  source: String,
  country: String,
  postedDateTime: {
    $date: { type: Date }
  },
  companyImageUrl: String,
  min_exp: Number,
  max_exp: Number
});

module.exports = mongoose.model('Job', JobSchema);
