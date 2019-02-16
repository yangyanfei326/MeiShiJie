//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const index=require("./routes/index_router");
const register=require("./routes/register_router");
const products=require("./routes/products.router")

const cors=require("cors")
var app = express();
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use(cors({
    origin:"http://127.0.0.1:5500",
    credentials:true//允许跨域
}))
app.use("/index",index);
app.use("/register",register);
app.use("/products",products)












