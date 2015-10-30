// Load Deps
var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var history = require('connect-history-api-fallback');
var app = express();

// Start Server
app.use(history({
  index: 'dist/index.html'
}));
app.use(morgan('dev'));
app.use(gzippo.staticGzip('' + __dirname));
app.listen(process.env.PORT || 5000);
