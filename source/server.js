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
    this.app.use(cors({
      origin: 'https://aoxlab-zim0.onrender.com',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
      credentials: true,
    }));
    this.conection();
  }

  conection() {
    mongoDbconnection();
  }

  routes() {
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
