const { Schema, model, Types } = require("mongoose");

const URL_PATTERN = /https?:\/\/./i;

const creatureSchema = new Schema({
  name: {
    type: String,
    minlength: [2, "Name must be at least 2 characters long"],
  },
  species: {
    type: String,
    minlength: [3, "Species must be at least 3 characters long"],
  },
  image: {
    type: String,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: "Invalid URL",
    },
  },
  skincolor: {
    type: String,
    minlength: [3, "Skin color must be at least 3 characters long"],
  },
  eyecolor: {
    type: String,
    minlength: [3, "Eye color must be at least 3 characters long"],
  },
  description: {
    type: String,
    minlength: [5, "Description must be at least 5 characters long"],
    maxlength: [500, "Description must be at most 500 characters long"],
  },
  votes: { type: [Types.ObjectId], ref: "User" },
  owner: { type: [Types.ObjectId], ref: "User" },
});

creatureSchema.index(
  { name: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const Creature = model("Creature", creatureSchema);

module.exports = Creature;
