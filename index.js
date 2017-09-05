const express = require('express');
var exphbs  = require('express-handlebars');
const RegisRoutes = require('./registration');
const models = require('./models');
const app = express();

var bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const regisRoutes = RegisRoutes(models);

app.use(express.static('public'));
// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000  * 30}}))
app.use(flash());


app.get('/reg_number', regisRoutes.addScreen);
app.post('/reg_number', regisRoutes.add)
const port = 3001;
app.listen(port, function() {

  console.log("web app started on: " + port);
});
