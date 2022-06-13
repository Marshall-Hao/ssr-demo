const express = require("express");

const router = express.Router();

router.get("/home", function (req, res, next) {
  res.json({
    title: "Home",
    desc: "Welcome to HEll!",
  });
});

router.get("/user", function (req, res, next) {
  res.json({ name: "Mclovin", age: "21", id: "007" });
});

module.exports = router;
