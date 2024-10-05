const marsrover = require("../../../../controllers/v1/marsrover/marsrover.controller");

const router = require("express").Router();

router.get("/",marsrover);

module.exports = router;
