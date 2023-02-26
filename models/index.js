const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const sequelize = require('../config/connection');

module.exports = { User, Post, Comment, sequelize };