const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(request, response){
    response.render('main.ejs', {title: 'Express Home' });
});

module.exports = router;