var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
});

router.post('/abc', (req, res) => {
res.send('Birds home page post method')
});
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
});

router.post("/login")
module.exports = router