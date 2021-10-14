const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  LastName: {
    type: String,
    trim: true,
  },
  Street: {
    type: String,
  },
  City: {
    type: String,
  },
  State: {
    type: String,
  },
  Country: {
    type: String,
  },
  Zip: {
    type: Number,
  },
  CellPhone: {
    type: Number,
  },
  Email: {
    type: String,
  },
  Code: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
