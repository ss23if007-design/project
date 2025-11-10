const mongoose =  require('mongoose');

const URI = process.env.MONGODB_URI;

const ConnectionDB = async () => {
    try {

       await mongoose.connect(URI);
       console.log("DB is connected");

    } catch (error){
        console.log(" Error conneting database ", );
        process.exit(0);

    }
};

module.exports = ConnectionDB;