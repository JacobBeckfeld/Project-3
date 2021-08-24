const router = require('express').Router();

const {
    getSavedBattletags,
    createUser,
    getUser,
    login,
    saveProfile,
    updateUserUsername,
    updateUserEmail,
    deleteUser
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser);
router.route("/dashboard/:id").get(getSavedBattletags);
router.route('/dashboard').get(authMiddleware, getUser).post(saveProfile).delete(deleteUser);
router.route('/dashboard/username').get(authMiddleware, getUser).put(updateUserUsername);
router.route('/dashboard/email').get(authMiddleware, getUser).put(updateUserEmail);
router.route('/login').post(login);

module.exports = router;