const aopd = require("../../../../controllers/v1/aopd/aopd.controller");

const router = require("express").Router();

router.get("/",aopd);

module.exports = router;
