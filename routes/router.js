const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const auth = require("http-auth");
const { check, validationResult } = require("express-validator");

const router = express.Router();
const Contact = mongoose.model("Contact");

router.get("/", (req, res) => {
  // res.send("it works!");
  res.sendFile(path.join(__dirname, "../public/views/", "index.html"));
});

router.get("/contact", (req, res) => {
  res.send("it works!");
});

// add validation here

router.post(
  "/form",
  [check("firstname").isLength({ min: 1 }).withMessage("Please enter a name")],
  async (req, res) => {
    {
      const contact = new Contact(req.body);
      console.log(contact);

      contact
        .save()
        .then(() => {
          res.sendFile(path.join(__dirname, "../public/views/", "index.html"));
        })
        .catch((err) => {
          console.log(err);
          res.send("Sorry! Something went wrong.");
        });
    }
  }
);

module.exports = router;
