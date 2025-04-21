const express = require('express')
const app = express()
const port = 3000
const dbconnect = require('./config/db');
const User = require('./models/userSchema');

dbconnect().catch((err) => console.log(err));

app.get('/addData', async (req, res) => {
  const data = {
    name: "chirag",
    email: "test@gamil.com",
    phone: "1234567890",
    password: "8563854",
  };
  const user = new User(data);
  await user.save();
  res.json({
    msg: "user saved",
    user,
  });
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})