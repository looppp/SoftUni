const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = "dawdawdawd21343rawsd";

async function register(username, password) {
  const existing = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });
  if (existing) {
    throw new Error("User is taken");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    hashedPassword,
  });

  // TODO see assignment of registration creates user session
  const token = createSession(user);
  return token;
}

async function login() {}

function createSession({ _id, username }) {
  const payload = {
    _id,
    username,
  };

  const token = jwt.sign(payload, JWT_SECRET);
  return token;
}

function verifyToken() {}

module.exports = {
  register,
  login,
  verifyToken,
};
