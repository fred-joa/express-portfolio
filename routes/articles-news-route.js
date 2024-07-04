const express  = require('express');
const router = express.Router();

const {getArticles, postArticle, getArticlesByCategory} = require('../controllers/articles-news-controller.js');

router.get('/', getArticles);

//Get all Articles news by category
router.get('/:category', getArticlesByCategory);

//create new artcile news
router.post('/', postArticle);


module.exports = router;