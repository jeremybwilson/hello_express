const express = require('express');
const router = express.Router();

/* GET home page. */
let results = [];
router.get('/', function(req, res, next){
    res.render('main.ejs', {title: 'Express Home' });
});

module.exports = router;