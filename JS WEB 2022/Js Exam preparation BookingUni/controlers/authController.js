const { register, login } = require("../services/userService");
const { parseError } = require("../util/parser");
const validator = require("validator");

const authController = require("express").Router();

authController.get("/register", (req, res) => {
  res.render("register", {
    title: "Register Page",
  });
});

authController.post("/register", async (req, res) => {
  try {
    if (validator.isEmail(req.body.email) == false) {
      throw new Error("Invalid email");
    }
    if (validator.isEmail(req.body.email) == false) {
      throw new Error("Invalid email");
    }

    if (req.body.password != req.body.repass) {
      throw new Error("Passwords dont match");
    }
    if (req.body.password.length < 5) {
      throw new Error("Password must be atleast 5 characters long");
    }

    const token = await register(
      req.body.email,
      req.body.username,
      req.body.password
    );

    res.cookie("token", token);

    res.redirect("/");
  } catch (error) {
    const errors = parseError(error);
    // TODO add error display to actual template assignment
    res.render("register", {
      title: "Register Page",
      errors,
      body: {
        email: req.body.email,
        username: req.body.username,
      },
    });
  }
});

authController.get("/login", (req, res) => {
  res.render("login", {
    title: "Login page",
  });
});

authController.post("/login", async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);

    res.cookie("token", token);
    res.redirect("/"); // TODO replace with redirect by asignmet
  } catch (error) {
    const errors = parseError(error);
    res.render("login", {
      title: "Login page",
      errors,
      body: {
        email: req.body.email,
      },
    });
  }
});

authController.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});
module.exports = authController;
