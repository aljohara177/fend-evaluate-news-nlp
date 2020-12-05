let dataInfo = {};

var path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cors = require('cors');
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
    console.log(`Your API key is ${process.env.API_KEY}`);

})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
const apiKey = process.env.API_KEY
const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiTxt = '&of=json&txt=';
const model = '&model=Restaurants&lang=en'
app.get('/getTextAnalysis', (req, res) => {
    res.send(getTextAnalysis(req.body));
  
});

const getTextAnalysis = async (textInput) => {
    const res = await fetch(apiUrl + apiKey + apiTxt + textInput + model);
    try {
      const result = await res.json();
      return result;
    } catch (error) {
      console.log("error", error);
    }
};

module.exports=app
 
