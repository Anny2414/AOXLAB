const { Router } = require("express");
const {
  getApplicationByDateAndUserId,
  getApplication,
  getApplications,
  postApplication,
  putApplication,
  deleteApplication,
} = require("../controllers/applicationController");
const router = Router();
router.get("/byDateAndUserId", getApplicationByDateAndUserId);
router.get("/:id", getApplication);
router.get("/", getApplications);
router.post("/", postApplication);
router.put("/:id", putApplication);
router.delete("/:id", deleteApplication);
module.exports = router;
