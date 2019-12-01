const mongoose = require("mongoose");
let count = 0;
var DB_URL = 'mmongodb://localhost:27017/yeplink'; 
const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true 
};

const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
  mongoose
    .connect(DB_URL, options)
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch(err => {
      console.log(
        "MongoDB connection unsuccessful, retry after 5 seconds. ",
        ++count
      );
      setTimeout(connectWithRetry, 5000);
    });
  mongoose.connection.on("connected", function() {
    console.log("Mongoose connection open to " + DB_URL);
  });

  mongoose.connection.on("error", function(err) {
    console.log("Mongoose connection error: " + err);
  });

  mongoose.connection.on("disconnected", function() {
    console.log("Mongoose connection disconnected");
  });
};

connectWithRetry();

exports.mongoose = mongoose;
