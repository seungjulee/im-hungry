var serve = require('koa-static');
var koa = require('koa');
var logger = require('koa-logger')
var app = koa();
app.use(logger())
app.use(serve(__dirname + '/static'));

app.listen(3000);
console.log("Listening to port 3000")
