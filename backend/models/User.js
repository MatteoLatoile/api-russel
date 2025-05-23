
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userId : {
      type: Number,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("post", userSchema);
