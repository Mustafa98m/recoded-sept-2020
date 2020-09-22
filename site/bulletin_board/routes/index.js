var express = require('express');
var router = express.Router();

<<<<<<< HEAD
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
=======
/* EJS: Shows the landing page which contains sign-in and sign-up forms. */
router.get('/', (req, res, next) => {
  res.render('index');
>>>>>>> upstream/master
});

module.exports = router;
