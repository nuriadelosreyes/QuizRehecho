var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz', url: 'https://github.com/nuriadelosreyes/QuizRehecho' });
});
router.get('/author', function(req, res, next) {
  res.render('author', { title: 'Creditos', author:'Nuria de los Reyes', foto: 'https://avatars3.githubusercontent.com/u/18210986?v=3&s=460' , url:'https://github.com/nuriadelosreyes/QuizRehecho' });
});

/* GET question 
router.get('/question', quizController.question);
*/

/* GET check */
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/check', quizController.check);
module.exports = router;
