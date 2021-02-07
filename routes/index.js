var express = require('express');
const mongoose = require('../database/db-conn');

const cDModel = require('../database/models/companyData');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main Infotech' });
});

router.post('/entry', function(req, res, next) {
  var data = req.body;
  // const obj = JSON.parse(JSON.stringify(req.body));
  var companyDetails = new cDModel(data.viewedProfiles);
  companyDetails.save((err, doc) => {
    if (err) {
      throw err;
    } else {
      console.log(doc);
      res.send('data inserted successfully');
    }
  });
});

module.exports = router;
