const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true }, 
  role: { type: String, required: true }, 
  location: { type: String, default: "Remote" },
  highlights: [{ type: String }], 
  startDate: { type: String }, 
  endDate: { type: String }
});

module.exports = mongoose.model('Experience', experienceSchema);