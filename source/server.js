const express = require("express");
const cors = require("cors");
const { mongoDbconnection } = require("../public/config/conection");

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  
  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(express.json());
    this.app.use(cors());
    this.conection();
  }

  conection() {
    mongoDbconnection();
  }

  routes() {
    res.header('Access-Control-Allow-Origin', 'https://aoxlab-zim0.onrender.com'); // Permitir solicitudes desde este origen
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    this.app.use("/aoxlab/user/", require("../public/routes/userRouter"));
    this.app.use("/aoxlab/application/", require("../public/routes/applicationRouter"));
    this.app.use("/aoxlab/role/", require("../public/routes/roleRouter"));
    this.app.use("/aoxlab/program/", require("../public/routes/programRouter"));
    this.app.use("/aoxlab/", require("../public/routes/authRouter"));
  }
  
  listen() {
    this.app.listen(process.env.PORT);
    console.log("corriendo en http://localhost:" + process.env.PORT);
  }
}

module.exports = Server;
