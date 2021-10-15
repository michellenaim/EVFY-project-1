const emailRe =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      if (
        this.firstname &&
        this.lastname &&
        this.street &&
        this.city &&
        this.state &&
        this.country &&
        this.zip &&
        this.phone &&
        this.email
      )
        return true;
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
      if (this.email && emailRe.test(this.email))
        this.errors.push("Please enter a valid email.");
      if (this.phone && this.phone.length >= 1 && this.phone.length < 10)
        this.errors.push("Phone number should be 10 digits.");
      if (this.zip && this.zip.length != 5)
        this.errors.push("Zip code should be 5 digits.");
    },
  },
});
