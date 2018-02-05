var express = require('express');
var router = express.Router();
// var request = require('request');
// var Promise = require('promise');
var request = require('sync-request');
var value;
/*API 聊天机器人的API*/
// http://www.tuling123.com/openapi/api?key=f93ec45a82df4bcf94e0da9bea6eadd0&info=厦门天气
// var url = 'http://www.tuling123.com/openapi/api?key=f93ec45a82df4bcf94e0da9bea6eadd0&info=' + word;
//request是异步回调
/*request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        chatWord = info.text;
        console.log("====" + chatWord + "====");
    }
});*/


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Home',
    });
});

router.post('/new', function(req, res) {

    function getAns(name) {

        // console.log("传过去是:" + name);
        var url = 'http://www.tuling123.com/openapi/api?key=04e90b17275a4c97afd3051487ad8a2a&info=' + name;
        var res = request('GET', url);
        // console.log("====" + res.getBody());
        var info = JSON.parse(res.getBody('utf8'));
        var chatWord = info.text;
        // console.log(chatWord);
        return chatWord;
    }
    value = getAns(req.body.name);
    res.send(value);

    // console.log("==="+ value);

})

module.exports = router;