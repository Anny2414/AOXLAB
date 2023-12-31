const { Router } = require("express");
const {
  getApplication,
  getApplications,
  postApplication,
  putApplication,
  deleteApplication,
} = require("../controllers/applicationController");
const router = Router();
router.get("/:id", getApplication);
router.get("/", getApplications);
router.post("/", postApplication);
router.put("/:id", putApplication);
router.delete("/:id", deleteApplication);
module.exports = router;
