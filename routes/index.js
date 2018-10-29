var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert')

var url = 'mongodb://mongo-server-1:27017'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Book Store' });
});

router.get('/books', function(req, res, next) {
  res.render('books', { title: 'Book Store' });
});

router.get('/orders', function(req, res, next) {
  res.render('orders', { title: 'Book Store' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Book Store' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Book Store' });
});

module.exports = router;
