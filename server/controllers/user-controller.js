const { User } = require("../models");

module.exports = {
    async createUser({ body }, res) {
        const user = await User.createUser(body);

        if (!user) {
            return res.status(400).json({ message: "Unable to create user" });
        }

        res.status(200).json(user);
    },
    async getUser({ params }, res) {
        const user = await User.findOne({ username: params.username });

        if (!user) {
            return res.status(400).json({ message: "Unable to find user" });
        }

        res.status(200).json(user);
    },
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
}