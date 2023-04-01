const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const sequelize = require('../config/connection');


// Define the associations
User.hasMany(Post, {  //user has many posts
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
  User.hasMany(Comment, { //user can make many comments
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
  Post.belongsTo(User, { // post belongs to user
    foreignKey: 'user_id',
  });
  
  Post.hasMany(Comment, { // post has many comments
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
  });
  
  Comment.belongsTo(User, { // comment belongs to user
    foreignKey: 'user_id',
  });
  
  Comment.belongsTo(Post, { // comment belongs to Post
    foreignKey: 'post_id',
  });
  


module.exports = { User, Post, Comment, sequelize };