const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }, 
  techStack: [{ type: String }], 
  metrics: { type: String }, 
  links: {
    github: { type: String }, 
    live: { type: String }
  },
  category: { type: String, enum: ['ML', 'Web Dev', 'Fullstack'], default: 'Web Dev' },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);