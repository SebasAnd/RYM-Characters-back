const express = require('express')

var bodyParser = require('body-parser');
const axios = require('axios');

const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/admin', (req, res) => {
  res.send('HelloWorld!')
})

app.get('/characters', async (req, res) => {
  try {
    let apiUrl = "https://rickandmortyapi.com/api/character";
    if(req.query.page){
      apiUrl = apiUrl +  "?page="+  req.query.page;
      console.log(apiUrl);
    }
      await axios.get(apiUrl)
      .then(ret => {

        console.log(ret.data);
        res.send(JSON.stringify(ret.data))
      })
      .catch(err => {
        console.log('Error: ', err);
      });    
  } catch (error) {
    res.send({'error':error}); 
  }
})

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, POST"
}

app.use(cors(corsOptions));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})