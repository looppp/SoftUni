const authController = require("express").Router();
const { isGuest } = require("../middlewares/guards");
const { register, login } = require("../services/userService");
const { parseError } = require("../util/parser");
const { body, validationResult } = require("express-validator");

authController.get("/login", (req, res) => {
  res.render("login", {
    title: "Login Page",
  });
});

authController.post("/login", isGuest(), async (req, res) => {
  try {
    if (req.body.email == "" || req.body.password == "") {
      throw new Error("All fields are required");
    }
    const token = await login(req.body.email, req.body.password);

    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    const errors = parseError(error);
    res.render("login", {
      title: "Login Page",
      errors,
      body: {
        email: req.body.email,
      },
    });
  }
});

authController.get("/register", isGuest(), (req, res) => {
  res.render("register", {
    title: "Register Page",
  });
});

authController.post(
  "/register",
  isGuest(),
  body("firstname")
    .isLength({ min: 3 })
    .withMessage("Firstname must be at least 3 characters long")
    .isAlphanumeric()
    .withMessage("Firstname may contain only letters and numbers"),
  body("lastname")
    .isLength({ min: 5 })
    .withMessage("Lastname must be at least 3 characters long")
    .isAlphanumeric()
    .withMessage("Lastname may contain only letters and numbers"),
  body("email")
    .isLength({ min: 10 })
    .withMessage("Email must be at least 10 characters long")
    .isEmail()
    .withMessage("Email is not in the corect format"),
  body("password")
    .isLength({ min: 4 })
    .withMessage("Password must be at least 4 characters long")
    .isAlphanumeric()
    .withMessage("Password may contain only letters and numbers"),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        throw errors;
      }
      if (req.body.username == "" || req.body.password == "") {
        throw new Error("All fields are required");
      }
      if (req.body.password != req.body.repass) {
        throw new Error("Passwords dont match");
      }

      const token = await register(
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password
      );

      res.cookie("token", token);
      res.redirect("/");
    } catch (error) {
      const errors = parseError(error);
      res.render("register", {
        title: "Register Page",
        errors,
        body: {
          username: req.body.username,
        },
      });
    }
  }
);

authController.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = authController;
