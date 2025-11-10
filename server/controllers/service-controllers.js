
const Services = require('../module/service-model');

const services = async ( req, res) => {
 try{
    const response = await Services.find()
    if (!response || response.length === 0){
        return res.status(404).json({ msg: "No service found"});
    }
    res.status(200).json(response);
 } catch(error){
    console.log(`services: ${error.message}`);
    res.status(500).json({ msg: "Server error" });
 }

};

module.exports = services ;