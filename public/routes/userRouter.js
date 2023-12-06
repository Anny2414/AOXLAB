const { Router } = require("express");
const {
  getUserByid,
  getUsers,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/userController");
const router = Router();

router.get("/:id", getUserByid);
router.get("/", getUsers);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

module.exports = router;
