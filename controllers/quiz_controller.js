exports.question = function(req, res) {
 	var answer = req.query.answer || '';
 	res.render('quizes/question', {question: 'Capital de Italia', answer: answer});
 };
 
 // GET /check
 exports.check = function(req, res) {
 	var answer = req.query.answer || '';
 	var result = req.query.answer === 'Roma' ? 'correcta' : 'incorrecta';
 	res.render('quizes/result', {result: result, answer: answer});
 };