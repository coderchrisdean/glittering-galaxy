const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');


// const routes = require('./controllers/api');
const helpers = require('./utils/helpers');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  partialsDir: [path.join(__dirname, 'views/partials')],
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require ('./controllers/'));

// app.get('/', (req, res) => {
//   res.render('main');
// });

// app.get('/login', (req, res) => {
// res.render('login', { body : 'Test' });
// });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

