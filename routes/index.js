const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const auth = require("http-auth");

const router = express.Router();
const Contact = mongoose.model("Contact");

router.get("/", (req, res) => {
  //res.send("it works!");
  res.sendFile("./index.html");
});

// // router.post("/", async (req, res) => {
// //   //console.log(req.body);
// //   const errors = validationResult(req);
// //   if (errors.isEmpty()) {
// //     const contact = new Contact(req.body);

// //     contact
// //       .save()
// //       .then(() => {
// //         res.sendFile("index.html");
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //         res.send("Sorry! Something went wrong.");
// //       });
// //   } else {
// //     res.render("contact", {
// //       title: "Contact form",
// //       errors: errors.array(),
// //       data: req.body,
// //     });
// //   }
// // });

module.exports = router;
