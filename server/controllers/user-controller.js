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
    }
}