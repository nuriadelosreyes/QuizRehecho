var models = require('../models');

// GET /question
exports.question = function(req, res, next) {
  models.quiz.findOne().then(function(quiz) {
    if (quiz) {
      var answer = req.query.answer || '';
      res.render('quizes/question', {question: 'Capital de Italia', answer: answer});
    } else {
      throw new Error('No hay preguntas en la BBDD.');
    }
  }).catch(function(error) {
    next(error);
  });
};

// GET /check
exports.check = function(req, res, next) {
  models.quiz.findOne().then(function(quiz) {
    if (quiz) {
      var answer = req.query.answer || '';
      var result = answer === quiz.answer ? 'correcta' : 'incorrecta';
      res.render('quizes/result', {result: result, answer: answer});
    } else {
      throw new Error('No hay preguntas en la BBDD.');
    }
  }).catch(function(error) {
    next(error);
  });
};