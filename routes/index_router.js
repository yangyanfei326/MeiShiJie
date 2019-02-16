const express=require("express");
const router=express.Router();
const pool=require("../pool");

//http://localhost:3000/index
/*顶部轮播图*/
router.get("/",(req,res)=>{
    var sql="SELECT * FROM MeiShijie_index_carousel ";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
/*水果蔬菜五谷生鲜 */
router.get("/fruit",(req,res)=>{
    var sql="SELECT * FROM MeiShijie_index_fruit";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
module.exports=router;