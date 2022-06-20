const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partiaksDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
