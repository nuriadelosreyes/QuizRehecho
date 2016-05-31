var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz', url: 'https://github.com/nuriadelosreyes/QuizRehecho' });
});
router.get('/author', function(req, res, next) {
  res.render('author', { author:'Nuria de los Reyes' , url:'https://github.com/nuriadelosreyes/QuizRehecho' });
});

/* GET question */
 router.get('/question', quizController.question);
 
 /* GET check */
 router.get('/check', quizController.check);
module.exports = router;
