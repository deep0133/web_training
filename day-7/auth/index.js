const express = require('express')
const app = express()
const port = 3000
const authRouter = require('./routes/route.js')



app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.push('/abc', (req, res) => {
    res.send('Path ABC')
})    

app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});