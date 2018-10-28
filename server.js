// Load the express module and store it in the variable express (Where do you think this comes from?)
const express = require("express");
const parser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const index = require('./routes/index');
const main = require('./routes/main');
const names = require('./routes/names');
const users = require('./routes/users');

const port = process.env.PORT || 3001;
// invoke express and store the result in the variable app
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));

app.use(parser.urlencoded({ extended: true }));

// console.log("Let's find out what express is", express);
// console.log("Let's find out what app is", app);

app.use('/', main);            // mount the index route at the '/' path
app.use('/main', main);         // mount the main route at the '/main' path
app.use('/names', names);       // mount the names route at the '/names' path
app.use('/users', users);    // mount the users route at the '/users' path

// catch 404 and forward to error handler
app.use(function (req, res, next){
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// use app's get method and pass it the base route '/' and a callback
// app.get('/', (request, response) => {
//     // just for fun, take a look at the request and response objects
//     console.log("The request object", request);
//     console.log("The response object", response);
//     response.render('index');
//     // use the response object's .send() method to respond with an h1
//     // response.send("<h1>Hello Express</h1>");
// });

// app.post('/names', (request, response) => {
//     console.log('sent to names', request.body);
//     names.push(request.body.name);
//     // response.render('names', { name: request.body.name, names });
//     response.redirect('/');
// });

// app.get('/names/:id', (request, response) => {
//     console.log('sending name', request.params);
//     response.send(names[request.params.id]);
// });

// app.get('/users', (request, response) => {
//     // hard-coded user data
//     var users_array = [
//         { id: 1, name: "Michael", email: "michael@codingdojo.com"}, 
//         { id: 2, name: "Jay", email: "jay@codingdojo.com"}, 
//         { id: 3, name: "Brendan", email: "brendan@codingdojo.com"}, 
//         { id: 4, name: "Andrew", email: "andrew@codingdojo.com"}
//     ];
//     response.render('users', {users: users_array}, {title: request.params.id });
// });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    // render the error page
    res.render('error', {title: 'Express Error page'});
  });

// tell the express app to listen on port 3001, always put this at the end of your server.js file
// app.listen(3001, function() { console.log("listening on port 3001"); });         // ES5 way
app.listen(port, () => console.log(`Express server listening on port ${port}`));    // ES6 way

module.exports = app;