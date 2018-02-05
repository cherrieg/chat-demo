var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// app.locals.chatBack = 'hello test';

/*index.post('/new', function(req, res) {

    function getAns(name){
    	var url = 'http://www.tuling123.com/openapi/api?key=f93ec45a82df4bcf94e0da9bea6eadd0&info=' + name;
        var res = request('GET', url);
        var info = JSON.parse(res.getBody('utf8'));
        chatWord = info.text;
        console.log(chatWord);
        return chatWord;
    }

    var info = getAns(req.body.name);
    res.send(info);

    console.log("==="+ info);

    res.locals.chatBack = info;

    console.log("==="+ res.locals.chatBack);

})*/

// index.post('/', function(req, res) {
// 	// var body = '';

//     req.on('data', function(data) {
//     	body += JSON.parse(data);
//         obj = JSON.parse(data);
//         console.log(obj);
//         console.log("数据已接收");
//         var word = obj.name;
//         console.log(word);
//         var url = 'http://www.tuling123.com/openapi/api?key=f93ec45a82df4bcf94e0da9bea6eadd0&info=' + word;
//         var res = request('GET', url);
//         var info = JSON.parse(res.getBody('utf8'));
//         chatWord = info.text;
//         console.log("===" + chatWord + "===");
//     });

//     req.on('end', function() {
//          console.log("===" + body + "===");
//     });

//     console.log("```XX" + body + "XX```");
// })
module.exports = app;