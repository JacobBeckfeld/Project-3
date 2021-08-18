const router = require('express').Router();

const {
    createUser,
    getUser,
} = require("../../controllers/user-controller");

router.route("/dashboard").get(getUser);
router.route("/login").post(createUser);