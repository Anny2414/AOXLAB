const { Router } = require("express");
const {getprograms,postProgram,getProgrambyid,getProgrambyiduser} = require("../controllers/programController");
const router = Router();
router.get("/", getprograms);
router.get('/user/:id', getProgrambyiduser);
router.get('/:id',getProgrambyid);
router.post("/",postProgram);

module.exports = router;
