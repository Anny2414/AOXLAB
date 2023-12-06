const { Router } = require("express");
const {getProgrambyid,getprograms,postProgram} = require("../controllers/programController");
const router = Router();
router.get("/", getprograms);
router.get("/:id", getProgrambyid);
router.post("/", postProgram);

module.exports = router;
