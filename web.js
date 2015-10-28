// Load Deps
var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

// Start Server
app.use(morgan('dev'));
app.use(gzippo.staticGzip('' + __dirname));
app.all('/*', function (req, res, next) {
  res.sendfile('index.html', {root: __dirname});
});
app.listen(process.env.PORT || 5000);
