const Creature = require("../models/Creature");

async function createCreature(creatureData) {
  return Creature.create(creatureData);
}

async function getAll() {
  return Creature.find({}).lean();
}
async function getById(creatureId) {
  return Creature.findById(creatureId).lean();
}
async function deleteCreature(creatureId) {
  await Creature.findOneAndDelete(creatureId);
}

module.exports = {
  getAll,
  createCreature,
  deleteCreature,
  getById,
};
