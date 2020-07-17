const express = require('express');
const router = express.Router();

// @route       POST api/users
//@description  REGISTER USER
//@access       Public
router.post('/', function (req, res) {
  console.log(req.body);

  res.send('User Route');
});

module.exports = router;
