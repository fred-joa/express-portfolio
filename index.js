const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const serverless = require("serverless-http");
const app = express();
const article_news_route = require('./routes/articles-news-route.js');
//No work for serverless
const port = 3000;

app.use(cors());
app.use(express.json());//middleware
app.use(express.urlencoded({extended: false}))//Allow to sent data in FORM url Encoded

//routes
app.use('/api/articlesnews', article_news_route);

app.get("/", (req, res)=>{
    res.send('Hello world 2024');
});

// No work for serverless
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port} `);
});


mongoose.connect('mongodb+srv://fredjoabo:kL28dQus4lDGqrsu@news.agp4uns.mongodb.net/?retryWrites=true&w=majority&appName=news')
.then(()=>{
    console.log('connected to DB');
}).catch((error)=>{
    console.log('conncetion failded!');
})


/* module.exports.handler = serverless(app); */