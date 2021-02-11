const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
//app.use(express.json());
app.use(bodyParser.json());

//const uri = process.env.ATLAS_URI //|| 'mongodb://localhost/memeinfo';
const uri = 'mongodb://localhost/memeinfo';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const memeRouter = require('./routes/meme');
app.use('/memes', memeRouter);

app.get('/',(req,res)=>{
  res.send('Hello from Xmeme API');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
