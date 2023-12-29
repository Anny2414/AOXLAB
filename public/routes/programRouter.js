const { Router } = require("express");
const {getprograms,postProgram,getProgrambyid,getProgrambyiduser,deleteProgram} = require("../controllers/programController");
const router = Router();
router.get("/", getprograms);
router.get('/user/:id', getProgrambyiduser);
router.get('/:id',getProgrambyid);
router.post("/",postProgram);
router.delete("/:id",deleteProgram);

module.exports = router;
