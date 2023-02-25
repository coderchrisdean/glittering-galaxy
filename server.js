const express = require('express');
const path = require('path');
const session = require('express-session');
const expHandlebars = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { User, Post, Comment } = require('./models');
const routes = require('./controllers/api');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const app = express();
const dotenv = require('dotenv');
const PORT = 3001 || process.env.DB_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

User.associate({ Post, Comment });
Post.associate({ User, Comment });
Comment.associate({ User, Post });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
