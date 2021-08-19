const router = require('express').Router();

const {
    createUser,
    getUser,
    login,
} = require("../../controllers/user-controller");

const { authMiddleware } = require('../../utils/auth');

router.route("/dashboard").get(authMiddleware, getUser);
router.route("/login").post(login);
router.route("/signup").post(createUser);

module.exports = router;