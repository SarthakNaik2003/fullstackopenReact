const express = require("express")
const router = express.Router()
const authcs = require("../controller/auth-controller.js")

router.route("/").get(authcs.home);

router.route("/persons").get(authcs.persons)

router.route("/info").get(authcs.info)

router.route("/person").post(authcs.addPerson)

router.route("/persons/:id").get(authcs.onePerson)

module.exports = router;