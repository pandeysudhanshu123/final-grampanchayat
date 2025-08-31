const mongoose = require("mongoose")

const PanchayatSchema = new mongoose.Schema({
  slug: String,
  name: String,
  about: String,
  gallery: [String],
  news: [{ title: String, description: String }],
  members: [{ name: String, role: String }],
  contact: {
    phone: String,
    email: String,
    address: String
  },
  social: {
    facebook: String,
    twitter: String,
    youtube: String
  }
});

module.exports= mongoose.model("Panchayat", PanchayatSchema);
