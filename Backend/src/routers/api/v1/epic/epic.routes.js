const epic = require("../../../../controllers/v1/epic/epic.controller");
const epicImage = require("../../../../controllers/v1/epic/epicImage.controller");

const router = require("express").Router();

router.get("/",epic);
router.get("/image",epicImage)

module.exports = router;
