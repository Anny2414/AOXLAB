const { Router } = require("express");
const { getRole, getRolebyid, postRole } = require("../controllers/roleController");
const router = Router();
router.get("/", getRole);
router.get("/:id", getRolebyid);
router.post("/", postRole);

module.exports = router;
