const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const articlesSubSchema = mongoose.Schema({
    title:{
        type: String,
        require: [true,"Please enter title"]
    },
    description: {
        type: String,
        required: false,
    },
    urlToImage:{
        type: String,
        require: false
    },
    publishedAt:{
        type: String,
        required: true
    }
},{
    Timestamp: true
});

const articlesSchema = mongoose.Schema({
    version : {type : Number, require : true },
    category : {type : String, require : true },
    author : {type : String, require : true },
    publishedAt : {type : String, require : true},
    description: {type: String, require: true},
    articles : [articlesSubSchema]
},{
    Timestamp: true
});

const articles = mongoose.model('articles', articlesSchema);

module.exports = articles;