const {Schema, model, mongoose} = require('mongoose');
const serviceSchema = new mongoose.Schema({
   title: {type: String, required: true},
   description: {type: String, required: true},
   duration: {type: String, required: true},
   img: {type: String, required: true},
});

const Service = new model('Services', serviceSchema);
module.exports = Service;


