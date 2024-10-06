const neoWs = require("../../../../controllers/v1/neoWs/neoWs.controller");

const router = require("express").Router();

router.get("/",neoWs);

module.exports = router;
