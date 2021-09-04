const mongoose = require("mongoose");

const connectDB = async () => {
  const mongooseDb = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  });

  console.log(`MongoDB Connected, ${mongooseDb.connection.host}`); // eslint-disable-line no-console
};

module.exports = connectDB;
