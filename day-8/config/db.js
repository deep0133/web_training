const mongoose = require('mongoose');

// main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://cs9944667:chirag2006@chirag151.cmxoz6f.mongodb.net/');
  console.log("db connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = main;
