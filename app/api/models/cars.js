const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const CarSchema = new Schema({
 Make: {
  type: String,
  trim: true,  
  required: true,
 },
 Model: {
  type: String,
  trim: true,
  required: true
 },
 Color: {
     type: String,
     trim: true,
     required: true
 }
});

module.exports = mongoose.model('Car', CarSchema)