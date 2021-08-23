const router = require('express').Router();

const {
    createUser,
    getUser,
    login,
    saveProfile,
    updateUserUsername,
    updateUserEmail
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser);
router.route('/dashboard').get(authMiddleware, getUser).post(saveProfile);
router.route('/dashboard/username').get(authMiddleware, getUser).put(updateUserUsername);
router.route('/dashboard/email').get(authMiddleware, getUser).put(updateUserEmail);
router.route('/login').post(login);
// router.route('/saved').put(saveProfile);

module.exports = router;