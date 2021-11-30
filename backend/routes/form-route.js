const router = require("express").Router();
let formData = require("../models/form-model");

router.route("/login").get((req, res) => {
  formData
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/CreateAccount").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailOrPhone = req.body.emailOrPhone;
  const password = req.body.password;
  const gender = req.body.gender;
  const dayOfBirth = req.body.dayOfBirth;
  const monthOfBirth = req.body.monthOfBirth;
  const yearOfBirth = req.body.yearOfBirth;

  const newAccount = new formData({
    firstName,
    lastName,
    emailOrPhone,
    password,
    gender,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth,
  });

  newAccount
    .save()
    .then(() => res.json("Account Created"))
    .catch((err) => res.status(400).json("ERROR:" + err));
});
module.exports = router;
