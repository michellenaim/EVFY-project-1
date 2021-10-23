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
  "/",
  [
    check("firstname")
      .isLength({ min: 1 })
      .withMessage("Please enter your first name"),
    check("lastname")
      .isLength({ min: 1 })
      .withMessage("Please enter your last name"),
    check("street")
      .isLength({ min: 1 })
      .withMessage("Please enter your street"),
    check("city").isLength({ min: 1 }).withMessage("Please enter your city"),
    check("state").isLength({ min: 1 }).withMessage("Please enter your state"),
    check("country")
      .isLength({ min: 1 })
      .withMessage("Please enter your country"),
    check("zip").isLength(5).withMessage("Please enter a valid zip code"),
    check("zip").isNumeric().withMessage("Please enter a valid zip code"),
    check("phone").isNumeric().withMessage("Please enter a valid phone number"),
    check("phone")
      .isLength(10)
      .withMessage("Please enter a valid phone number"),
    check("email").isLength({ min: 1 }).withMessage("Please enter your email"),
    check("email").isEmail().withMessage("Please enter a valid email"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const contact = new Contact(req.body);

      contact
        .save()
        .then(() => {
          res.status(204).send();
          // res.sendFile(path.join(__dirname, "../public/views/", "index.html"));
        })
        .catch((err) => {
          console.log(err);
          res.send("Sorry! Something went wrong.");
        });
    } else {
		// return res.json({
		// 	status: 'error',
		// 	error: errors.array(),
		// 	data: req.body,
		// })

    //   res.sendFile(path.join(__dirname, "../public/views/", "index.html"), {
    //     errors: errors.array(),
    //     data: req.body,
    //   });
    }
  }
);

module.exports = router;
