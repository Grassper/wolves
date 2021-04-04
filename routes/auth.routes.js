const express = require("express");
const router = express.Router();

// importing models
const userModel = require("../models/user.model");

// importing middleware
const authMiddleWare = require("../middlewares/auth.middleware");

/* authentication routes*/

// Register user
router.post("/register", async (req, res) => {
  try {
    const user = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// allow register users to login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findByCredentials(email, password);
    if (!user) {
      return res
        .status(401)
        .json({ error: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken();
    res.json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get user profile if logged in
router.get("/profile", authMiddleWare, async (req, res) => {
  res.json(res.user);
});

// logout the user
router.post("/logout", authMiddleWare, async (req, res) => {
  try {
    res.user.tokens = res.user.tokens.filter((token) => {
      return token.token != res.token;
    });
    await res.user.save();
    res.json({ message: "user logout successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// logout from all devices

router.post("/logoutall", authMiddleWare, async (req, res) => {
  try {
    res.user.tokens.splice(0, res.user.tokens.length);
    await res.user.save();
    res.json({ message: "user logout successfully in all devices" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
