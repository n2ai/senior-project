const router = require("express").Router();
const {handleCredentials} = require("../controllers/credentialsController")
//This section wil add controller

router.post("/",handleCredentials);

module.exports = router;