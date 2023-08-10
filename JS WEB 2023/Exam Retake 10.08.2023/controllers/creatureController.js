const creatureController = require("express").Router();
const {
  createCreature,
  getAll,
  getById,
} = require("../services/creatureService");
const { getAuthor } = require("../services/userService");
const { parseError } = require("../util/parser");

creatureController.get("/create", (req, res) => {
  res.render("create", {
    title: "Create Creature",
  });
});

creatureController.post("/create", async (req, res) => {
  const creature = {
    name: req.body.name,
    species: req.body.species,
    skincolor: req.body.skincolor,
    eyecolor: req.body.eyecolor,
    image: req.body.image,
    description: req.body.description,
    owner: req.user._id,
  };

  console.log(creature);

  try {
    await createCreature(creature);
    res.redirect("/");
  } catch (error) {
    res.render("create", {
      errors: parseError(error),
      body: creature,
    });
  }
});

creatureController.get("/allpost", async (req, res) => {
  let creatures = await getAll();

  res.render("allpost", {
    title: "All Creatures",
    creatures,
  });
});

creatureController.get("/:id", async (req, res) => {
  const creatures = await getById(req.params.id);
  creatures.creator = await getAuthor(creatures.owner.toString());
  creatures.isOwner = creatures.owner.toString() == req.user._id;

  const hasVoted = creatures.votes.keys();
  console.log(hasVoted);

  res.render("details", {
    title: "Creature Details",
    creatures,
  });
});

module.exports = creatureController;
