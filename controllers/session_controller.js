var models = require ('../models');
var Sequelize = require ('sequelize');

// GET /session - Formulario de login
exports.new = function (req, res, next) {
  var redir = req.query.redir || url.parse(req.headers.referer || "/").pathname;
  if (redir === '/session' || redir === '/users/new') {
    redir = '/';
  }
  res.render ('session/new', { redir: redir });
};

// Promise que comprueba que la autenticación es correcta
var authenticate = function(login, password) {
  return models.User.findOne({where: {username: login}}).then(function(user) {
    if (user && user.verifyPassword(password)) { // Si autenticación correcta
      return user;
    } else {
      return null;
    } // Autenticación incorrecta
  });
};

// POST /session - Crear session
exports.create = function (req, res, next) {
  var redir = req.body.redir || '/';
  var login = req.body.login;
  var password = req.body.password;
  authenticate(login, password).then(function(user) {
    if (user) { //Autenticacion correcta se crea la propiedad user en req.session
      req.session.user = {id:user.id , username: user.username};
      res.redirect(redir);
    } else {
      var emsg = "Error, la autentificación ha fallado. Por favor, inténtelo de nuevo.";
      req.flash('error',emsg);
      res.redirect('/session?redir=' + redir);
    }
  }).catch(function(error) {
    req.flash('error', 'Se ha producido un error:' + error);
    next(error);
  });
};

// DELETE /session - Destruir session 
exports.destroy = function(req, res, next) {
  delete req.session.user;
  res.redirect('/session');
};