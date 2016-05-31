var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');
var userController = require('../controllers/user_controller');
var sessionController = require('../controllers/session_controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz', url: 'https://github.com/nuriadelosreyes/QuizRehecho' });
});
router.get('/author', function(req, res, next) {
  res.render('author', { title: 'Creditos', author:'Nuria de los Reyes', foto: 'https://avatars3.githubusercontent.com/u/18210986?v=3&s=460' , url:'https://github.com/nuriadelosreyes/QuizRehecho' });
});



/* GET check */
router.get('/quizes.:format?', quizController.index);
router.get('/quizes/:quizId(\\d+).:format?', quizController.show);
router.get('/quizes/:quizId(\\d+)/check', quizController.check);
/* GET users */
router.get('/users', userController.index);
router.get('/users/:userId(\\d+)', userController.show);
router.get('/users/new', userController.new);
router.post('/users', userController.create);
router.get('/users/:userId(\\d+)/edit', userController.edit);
router.put('/users/:userId(\\d+)', userController.update);
router.delete('/users/:userId(\\d+)', userController.destroy);
/* Session */
router.get('/session', sessionController.new);
router.post('/session', sessionController.create);
router.delete('/session', sessionController.destroy);
module.exports = router;
