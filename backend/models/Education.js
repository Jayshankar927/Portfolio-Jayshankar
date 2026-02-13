const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  institution: { type: String, required: true }, 
  degree: { type: String, required: true }, 
  score: { type: String }, 
  fieldOfStudy: { type: String },
  order: { type: Number } 
});

module.exports = mongoose.model('Education', educationSchema);