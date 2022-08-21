const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    thoughts: [],
    friends: [this],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

// get total count of friends on retrieval
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const user = model("User", userSchema);

module.exports = user;
