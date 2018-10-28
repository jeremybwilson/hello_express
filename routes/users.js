const express = require('express');
const router = express.Router();

// hard-coded user data
var users_array = [
    { id: 1, name: "Michael", email: "michael@codingdojo.com"}, 
    { id: 2, name: "Jay", email: "jay@codingdojo.com"}, 
    { id: 3, name: "Brendan", email: "brendan@codingdojo.com"}, 
    { id: 4, name: "Andrew", email: "andrew@codingdojo.com"}
];

/* route for main users page */
router.get('/', function(request, response){
    response.render('users', {
        users: users_array, 
        title: 'Express User(s) page' 
    });
});

/* route for showing individual users */
router.get('/:id', function(request, response){
    response.render('users', {users: request.params.id, title: 'Express User page' });
    // response.send(users[request.params.id], 'users', {title: 'Express User page' });
});

module.exports = router;