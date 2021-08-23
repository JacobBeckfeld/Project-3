const router = require('express').Router();

const {
    createUser,
    getUser,
    login,
    saveProfile
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser);
router.route('/dashboard').get(authMiddleware, getUser).put(saveProfile);
router.route('/login').post(login);
// router.route('/saved').put(saveProfile);

module.exports = router;