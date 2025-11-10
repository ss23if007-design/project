const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    phone:{
        type : String,
        required : true,
    },
    password: {
        type : String,
        required : true,
    },
    isAdmin:{
        type : Boolean,
        default : false
    },
    
});

userSchema.pre('save', async function (next)  {
    const users = this;
    if(!users.isModified('password')){
        next();
    }

    try{
        const saltRounds = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(users.password, saltRounds);
        users.password = hash_password;
    } catch(error){
        next(error);
    }
});


// joson web token 

userSchema.methods.generateToken = async function (){

    try{
        return jwt.sign({
            userId : this._id.toString(),
            email: this.email,
            isAdmin : this.isAdmin,
        },
        process.env.JWT_SECRET,{
            expiresIn : '30d',
        }
    );

    } catch(error){
        console.error(error);
    }

}

const User = new mongoose.model("user", userSchema);
module.exports = User;
