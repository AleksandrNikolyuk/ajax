var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  
  res.send('Alex page');
});
module.exports = router;
