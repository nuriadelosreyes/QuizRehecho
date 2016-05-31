var models = require('../models');

// Get /quizes
exports.index = function(req, res, next) {
if (req.query.search == undefined) {
    models.Quiz.findAll().then(function(quizes) {
      if (quizes) {
        if (req.params.format == 'json') {
          res.json(quizes);
        } else {
          res.render('quizes/index.ejs', { quizes: quizes, subtitulo: 0 });
        }
      }
    }).catch(function(error) {
      next(error);
    });
  } else {
    models.Quiz.findAll({where: {question: {$like: '%' + req.query.search + '%'}}}).then(function(quizes) {
      if (quizes) {
        if (req.params.format == 'json') {
          res.json(quizes);
        } else {
          res.render('quizes/index.ejs', { quizes: quizes, subtitulo: 1 });
        }
      }
    }).catch(function(error) {
      next(error);
    });
  }
};

// GET /quizes/:id
exports.show = function(req, res, next) {
  models.Quiz.findById(req.params.quizId).then(function(quiz) {
    if (quiz) {
      if (req.params.format == 'json') {
        res.json(quizes);
      } else {
        var answer = req.query.answer || '';
        res.render('quizes/show', { npregunta: req.params.quizId, quiz: quiz, answer: answer });
      }
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