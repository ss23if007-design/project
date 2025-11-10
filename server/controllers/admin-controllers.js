const userModel = require("../module/user-model")
const appointmentModel = require("../module/book-model")

const getAllUsers = async (req, res) => {
     try{
        const users = await userModel.find({},{password : 0 });
        console.log(users);
        if(!users || users.length === 0){
         return res.status(404).json({ message: "No Users Found" });
        }
        return res.status(200).json(users);
     }catch(err){
        res.status(500).json({message: err.message});
     }
}

const getAllappointments = async (req, res) => {
    try{
        const appointments = await appointmentModel.find({});
        console.log(appointments);
        if(!appointments || appointments.length === 0){
         return res.status(404).json({ message: "No appointments Found" });
        }
        return res.status(200).json(appointments);
     }catch(err){
        res.status(500).json({message: err.message});
     }
}

const getUserbyId = async (req, res) => {
      try {
         const id = req.params.id;
         const data = await userModel.findOne({_id: id},{password : 0 });
         return res.status(200).json(data);
      }catch (error) {
         next(error);
      }
};

const deleteUserbyId = async (req, res) => {
      try {
         const id = req.params.id;
         await userModel.deleteOne({_id: id});
         return res.status(200).json({ message:"User Deleted Successfully"});
      }catch (error) {
         next(error);
      }
};

module.exports = {
    getAllUsers,
    getAllappointments,
    deleteUserbyId,
    getUserbyId,
};
