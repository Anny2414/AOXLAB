const { Router } = require("express");
const {getProgrambyid,getprograms,postProgram,getProgrambyiduser} = require("../controllers/programController");
const router = Router();
router.get("/", getprograms);
router.get("/:id", getProgrambyid);
router.get("/:id", getProgrambyiduser);
router.post("/", postProgram);

module.exports = router;
