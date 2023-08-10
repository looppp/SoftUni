const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "345efdawd2dawgfd";

async function register(firstname, lastname, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstname,
    lastname,
    email,
    hashedPassword,
  });

  console.log(user);
  return createSession(user);
}

async function getAuthor(ownerId) {
  const user = await User.findById(ownerId).lean();
  return user.firstname + " " + user.lastname;
}

async function login(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (!user) {
    throw new Error("Incorect email or password");
  }

  const hasMatch = await bcrypt.compare(password, user.hashedPassword);

  if (hasMatch == false) {
    throw new Error("Incorect email or password");
  }

  return createSession(user);
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

function createSession({ _id, firstname, lastname, email }) {
  const payload = {
    _id,
    firstname,
    lastname,
    email,
  };

  return jwt.sign(payload, JWT_SECRET);
}

module.exports = {
  register,
  login,
  verifyToken,
  getAuthor,
};
