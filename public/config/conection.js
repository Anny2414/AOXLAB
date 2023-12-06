const mongoose = require("mongoose");

mongoDbconnection = () => {
  try {
    mongoose.connect(process.env.CNN);
    console.log("conexion exitosa");
  } catch (error) {
    console.log("error de conexion" + error);
  }
};

module.exports = { mongoDbconnection };
