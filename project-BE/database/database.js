const mongoose = require("mongoose");
async function connect(){
    try{
        let connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('connect mongoose successfull');
        return connection
    }catch(error){
        if(error.code == 8000){
            throw new Error("Cannot connect to MongoDB")
        }
    }
}

module.exports = connect;