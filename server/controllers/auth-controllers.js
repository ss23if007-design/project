const User = require('../module/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const home = async(req, res) => { 
    try{
        
        res.status(200).send('Welcome to the Home page page!using controller');

    } catch (error){
        console.log(error);
    }
};

const register = async(req,res)=>{
    try{
        //const user = req.body;
        console.log(req.body);
        const {username,email,phone,password} = req.body;

        const userExist = await User.findOne({ email });

        if(userExist) {
            return res.status(400).json({msg: "User already exists"});
        }

    
        const userCreated = await User.create({ 
            username,
            email,
            phone,
            password,
        });
      
        res.status(200).json({
            message : userCreated,
            token : await userCreated.generateToken(),
            userId: userCreated._id.toString(),

         });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error?.message || "Internal server error" });
    }
};

// _id is in Object form so we convert it to string using toString() method


const login = async(req, res) => {
    try {
        const { email, password }= req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);
        if(!userExist){
            return res.status(400).json({msg : 'User do not exist'});
        }

        const user = await bcrypt.compare(password, userExist.password);
        if(user){
            // jab sucess ho ha tab status(400)nahi status(200) 
            // dalna hota haii mene 400 dal diya tha
            return res.status(200).json({
                msg : 'Login Successful',
                token : await userExist.generateToken(),
                userId : userExist._id.toString(),            });
        } else {
            return res.status(400).json({msg : 'Invalid Credentials'})
        }

    } catch(error){
        console.error(error);
        res.status(400).json({msg: "Error in login process"});
    }
}

const verifyToken = async (req, res) => {
    try {
        const userData = req.user;
        return res.status(200).json({ userData });
    } catch (error) {
        console.log(`error from user route ${error}`);
    }
};

const getUser = async (req, res) => {
    try {

        const userId = req.user._id;

         if (!userId) {
      return res.status(401).json({ msg: "Unauthorized: No user ID found" });
    }
    
        const user = await User.findById(userId).select("-password");
        
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};


module.exports = { home, register, login, verifyToken, getUser};
