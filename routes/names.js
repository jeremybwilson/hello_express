const express = require('express');
const router = express.Router();

const names = ['Jeremy', 'Alex', 'Anika'];

/* All routes in this file will be pre-pended with the word 'names' */
router.post('/', function(request, response){
    console.log('sent to names', request.body);
    names.push(request.body.name);
    response.render('names', { name: request.body.name, title: 'Express Names', names });
    // res.render('names', {title: 'Express Names' });
    // res.redirect('/');
});

router.get('/:id', function(request, response){
    console.log('sending name', request.params);
    response.send(names[request.params.id]);
});

module.exports = router;