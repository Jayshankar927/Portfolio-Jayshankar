const messageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'] 
  },
  subject: { type: String, default: "New Portfolio Inquiry" },
  message: { type: String, required: true, maxLength: 1000 },
  status: { 
    type: String, 
    enum: ['unread', 'read', 'replied'], 
    default: 'unread' 
  },
}, { timestamps: true });