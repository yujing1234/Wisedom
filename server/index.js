const express = require("express");
const app = express();

const router = require("./router");

app.use('/api',router);

app.use(express.static('data'))

//配置打印
const debug = require("debug")("my-application");

//使用post中间件
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended:true
}))





//监听接口
app.listen(3000,function(){
    debug("服务器运行在3000端口上");
})
