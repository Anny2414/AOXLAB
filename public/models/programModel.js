const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  start: String,
  display: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  Info: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Servicios',
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;