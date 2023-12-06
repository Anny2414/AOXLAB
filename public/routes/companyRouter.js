const { Router } = require("express");
const {
  getCompany,
  getCompanys,
  postCompany,
  putCompany,
  deleteCompany,
} = require("../controllers/companyController");
const router = Router();

router.get("/:nit", getCompany);
router.get("/", getCompanys);
router.post("/", postCompany);
router.put("/:id", putCompany);
router.delete("/:id", deleteCompany);
module.exports = router;
