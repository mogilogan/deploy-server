const express = require('express');
const cors = require('cors');
const data = require('./data/data.json');
const PORT = process.env.PORT || 8000;

app = express();

app.use(cors({
  origin:'http://localhost:3000/'
}));
app.use(express.json());


app.get('/', async (req, res)=>{
  res.send(data);
})




app.listen(PORT,()=>{console.log(`listening on port ${PORT}`)});