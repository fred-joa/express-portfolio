const article_news = require('../models/articles-news-model.js');
//Get all articles

const getArticles = async (req, res)=>{
    const general = await article_news.find({category: "general"},null , {limit : 5});
    const entertainment =await article_news.find({category: "entertainment"},null , {limit : 5});
    const business =await article_news.find({category: "business"},null , {limit : 5});
    const health =await article_news.find({category: "health"},null , {limit : 5});
    const science =await article_news.find({category: "science"},null , {limit : 5});
    const sports =await article_news.find({category: "sports"},null , {limit : 5});
    const technology =await article_news.find({category: "technology"},null , {limit : 5});
    const articles = [general, entertainment, business, health, sports, science, technology];
    try{
        res.status(200).json(articles);
    }
    catch (error){
        res.status(500).json({message: error.message});

    }
}
//Get all Articles news by category
const getArticlesByCategory = async (req,res)=>{
    try{
        const {category} = req.params
        const articles = await article_news.find({category: category},null , {limit : 1});
        res.status(200).json(articles);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}
//Create a new article news
const postArticle = async (req, res)=>{
    try{
        const article = await article_news.create(req.body);
        res.status(200).json(article);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


module.exports = {getArticles, getArticlesByCategory, postArticle};