const express = require('express');
const cors = require('cors');
const data = require('./data/data.json');
const PORT = process.env.PORT || 8000;

app = express();

app.use(cors({
  origin:'*'
}));
app.use(express.json());


app.get('/', async (req, res)=>{
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.send(data);
})




app.listen(PORT,()=>{console.log(`listening on port ${PORT}`)});