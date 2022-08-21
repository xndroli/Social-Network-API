const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const reactionSchema = require("./reaction");

const thoughtSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    thoughtText: {
      type: String,
      required: true,
      validate: [
        ({ length }) => length > 0 && length <= 280,
        "Thoughts can only be between 1 and 280 characters long!",
      ],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    // use reactionSchema to validate data for a reaction
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const thought = model("Thought", thoughtSchema);

module.exports = thought;
