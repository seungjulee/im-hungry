var serve = require('koa-static');
var koa = require('koa');
var app = koa();

app.use(serve(__dirname + '/static'));

app.listen(3000);
console.log("Listening to port 3000")
