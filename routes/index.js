var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});
router.get('/author', function(req, res, next) {
  res.render('author', { author:'Nuria de los Reyes' , url:'https://github.com/nuriadelosreyes/QuizRehecho.git' });
});
module.exports = router;
