const { Router } = require("express");
const {getprograms,postProgram,getProgrambyid,getProgrambyiduser} = require("../controllers/programController");
const router = Router();
router.get("/", getprograms);
router.get('/programs/user/:id', getProgrambyiduser);
router.get('/programs/:id',getProgrambyid);
router.post("/",postProgram);

module.exports = router;
