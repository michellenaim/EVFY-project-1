// const emailRe =
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const start = require("../../start");
// const db = start.db;

// const axios = require("axios");

const form = new Vue({
  el: "#form",
  data: {
    errors: [],
    firstname: null,
    lastname: null,
    street: null,
    city: null,
    state: null,
    country: null,
    zip: null,
    phone: null,
    email: null,
    catcha: null,
    randomcode: null,
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      this.errors = [];
      if (!this.firstname) this.errors.push("Please enter your first name.");
      if (!this.lastname) this.errors.push("Please enter your last name.");
      if (!this.street) this.errors.push("Please enter your street.");
      if (!this.city) this.errors.push("Please enter your city.");
      if (!this.state) this.errors.push("Please enter your state.");
      if (!this.country) this.errors.push("Please enter your country.");
      if (!this.zip) this.errors.push("Please enter your zip code.");
      if (!this.phone) this.errors.push("Please enter your phone number.");
      if (!this.email) this.errors.push("Please enter your email.");
      if (this.phone && this.phone.length >= 1 && this.phone.length < 10)
        this.errors.push("Phone number should be 10 digits.");
      if (this.zip && this.zip.length != 5)
        this.errors.push("Zip code should be 5 digits.");

      // axios
      //   .post("http://localhost:3000/contact", newContact)
      //   .then((response) => console.log(response))
      //   .catch((error) => console.log(error));
      // if (this.errors.length == 0) {
      //   const custData = {
      //     firstname: this.firstname,
      //     lastname: this.lastname,
      //     street: this.street,
      //     city: this.city,
      //     state: this.state,
      //     country: this.country,
      //     zip: this.zip,
      //     phone: this.phone,
      //     email: this.email,
      //   };
      // }
    },
  },
});
