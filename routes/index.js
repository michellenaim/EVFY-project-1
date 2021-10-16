const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const auth = require("http-auth");
const { check, validationResult } = require("express-validator");

const router = express.Router();
const Contact = mongoose.model("Contact");

router.get("/", (req, res) => {
  //res.send("it works!");
  res.sendFile("./index.html");
});

router.get("/contact", (req, res) => {
  res.send("it works!");
});

router.post(
  "/",
  [check("firstname").isLength({ min: 1 }).withMessage("Please enter a name")],
  async (req, res) => {
    console.log("it works");
    //   const errors = validationResult(req);
    //   if (errors.isEmpty()) {
    //     const contact = new Contact(req.body);

    //     contact
    //       .save()
    //       .then(() => {
    //         // res.sendFile("index.html");
    //         res.render("Contact form saved in db!");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         res.send("Sorry! Something went wrong.");
    //       });
    //   } else {
    //     res.render("contact", {
    //       title: "Contact form",
    //       errors: errors.array(),
    //       data: req.body,
    //     });
    //   }
  }
);

module.exports = router;
