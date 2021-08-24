const { User } = require("../models");
const { signToken } = require('../utils/auth');

module.exports = {
    async createUser({ body }, res) {

        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: "Unable to create user" });
        }

        const token = signToken(user)
        res.json({ token, user })
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

    async updateUserUsername(req, res) {
        console.log("body", req.body)
        try {
            const updateUsername = await User.findOneAndUpdate(
                { _id: req.body._id },
                { $set: { username: req.body.username } },
                { new: true }
            )
            return res.json(updateUsername)
        } catch (err) {
            console.log("newUsername", err)
            return res.status(400).json(err)
        }
    },

    async updateUserEmail(req, res) {
        try {
            const updateEmail = await User.findOneAndUpdate(
                { _id: req.body._id },
                { $set: { email: req.body.email } },
                { new: true }
            )
            return res.json(updateEmail)
        } catch (err) {
            console.log("newEmail", err)
            return res.status(400).json(err)
        }
    },
    
    async saveProfile(req, res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.body._id },
                { $addToSet: { savedBattletags: req.body.battletag } },
                { new: true }
            )
            return res.json(updatedUser)
        } catch (err) {
            console.log("save profile", err)
            return res.status(400).json(err)
        }
    },

    async deleteUser(req, res) {
        try {
            const deletedUser = await User.findOneAndDelete(
                { _id: req.body._id },
                function (err, docs) {
                    if (err){
                        console.log(err)
                    }
                    else{
                        console.log("Deleted : ", docs);
                    }
                }
            )
            return res.json(deletedUser)
        } catch (err) {
            console.log("delete profile", err)
            return res.status(400).json(err)
        }
    }
}