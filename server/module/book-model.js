const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;
const bcrypt = require('bcrypt');


const AppointmentSchema = new mongoose.Schema({
    name: {
         type: String, required: true 
        },
    phone: { 
        type: String, required: true 
    },
    services: [{
         type: [String], required: true 
        }],
    date: {
         type: Date, required: true 
        },
    userId: {
         type: mongooseSchema.Types.ObjectId,
         ref: 'user',
         required: true 
        },
    createdAt: {
         type: Date, default: Date.now 
        }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
