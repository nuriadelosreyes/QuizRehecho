var models = require('../models');

// Get /quizes
exports.index = function(req, res, next) {
  models.Quiz.findAll().then(function(quizes) {
    res.render('quizes/index.ejs', { quizes: quizes });
  }).catch(function(error) {
    next(error);
  });
};

// GET /quizes/:id
exports.show = function(req, res, next) {
  models.Quiz.findById(req.params.quizId).then(function(quiz) {
    if (quiz) {
      var answer = req.query.answer || '';
      res.render('quizes/show', { npregunta: req.params.quizId, quiz: quiz, answer: answer });
    } else {
      throw new Error('No hay preguntas en la BBDD.');
    }
  }).catch(function(error) {
    next(error);
  });
};

// GET /check
exports.check = function(req, res, next) {
  models.Quiz.findById(req.params.quizId).then(function(quiz) {
    if (quiz) {
      var answer = req.query.answer || '';
      var result = answer === quiz.answer ? 'correcta' : 'incorrecta';
      res.render('quizes/result', { npregunta: req.params.quizId, quiz: quiz, result: result, answer: answer });
    } else {
      throw new Error('No hay preguntas en la BBDD.');
    }
  }).catch(function(error) {
    next(error);
  });
};