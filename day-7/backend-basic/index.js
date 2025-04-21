const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/abc', (req, res) => {
  res.send('Path ABC')
});

app.get("/getData",(req,res)=>{
  res.json({
    succcess:true,
    message:"Data fetched successfully",
    myData:data,
  });
});

app.post("/sum1", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const sum = parseInt(a) + parseInt(b);
  res.send("Method post" + sum);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



const data = [
  {
    Id:1,
    name:"John",
  },
{
    Id:2,
    name:"Doe",
  },
  {
    Id:3,
    name:"Smith",
  },
  {
    Id:4,
    name:"Jane",
  },
];