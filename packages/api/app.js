require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const createProxyMiddleware = require("http-proxy-middleware");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// proxy middleware options
const options = {
  target: "https://scontent-iad3-1.cdninstagram.com",
  changeOrigin: true,
};

const exampleProxy = createProxyMiddleware("/proxy", options);
app.use(exampleProxy);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // send the error page
//   res.status(err.status || 500);
//   res.send('error');
// });

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
});

app.listen(3030);

module.exports = app;
