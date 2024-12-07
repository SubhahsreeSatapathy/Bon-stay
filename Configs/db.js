const mongoose = require("mongoose");

const connectDB = async() => {
    try{
      const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

      console.log(`MongoDB connected : ${connection.connection.host}`);
    }catch(error){
        console.log(`Error occurred : ${error.message}`);
        process.exit(1);
    }   
}

module.exports = connectDB;