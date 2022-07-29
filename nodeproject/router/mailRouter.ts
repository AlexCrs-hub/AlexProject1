const express = require("express");
const router = express.Router();

const controller = require("../controller/mailController");

router.get("/:id", controller.get);
router.patch("/mail", controller.patch);
router.delete("/:name", controller.delete);
router.post("/create", controller.post);

module.exports = router;