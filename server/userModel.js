const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 5, "Password needs to be longer."]
    },

    email: {
        type: String,
        unique: true,
        required: "Email is Required",
        match: [/.+@.+\..+/, "Please enter a valid email address"]
    },

    boolean: Boolean,
    array: Array
    
});

const User = mongoose.model("User", UserSchema);

module.exports = User;