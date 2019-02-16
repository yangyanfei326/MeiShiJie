const express=require("express");
const router=express.Router();
const pool=require("../pool");
//http://localhost:3000/products

//碗碟商品列表
router.get("/getGoodlist",(req,res)=>{
	//var  cls = req.query.cls;
	var pno=req.query.pno;
	if(pno===undefined) pno=0;
	//if(cls>1){
		var sql="SELECT * FROM MeiShijie_wandie_list";
	pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    var count=result.length;
    var pageCount=Math.ceil(count/9)
    var products=result.slice(pno*9,pno*9+9)
                              //0
                              //10
                              //20
    var output={pno,count,pageCount,products}
    res.send(output);
    })
})

//人气商品列表
router.get("/getGoodlistByScore",(req,res)=>{
    pool.query("SELECT * FROM MeiShijie_wandie_list ORDER BY wscore DESC limit 0,5",(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//获取商品详情
router.get("/getGooddetail",(req,res)=>{
    var wid=parseInt(req.query.wid);
    pool.query("SELECT * FROM MeiShijie_wandie_list WHERE wid=?",[wid],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

module.exports=router;