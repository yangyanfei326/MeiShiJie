const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/phone_reg",(req,res)=>{
    var phone=req.query.phone;
    var sql="SELECT count(uid) as c FROM MeiShijie_user WHERE phone=?";
    pool.query(sql,[phone],(err,result)=>{
        if(err) throw err;
        if(result[0].c>0)
            res.send({code:0,msg:"该手机号已被注册"});
        else{
            res.send({code:1,msg:"该手机号可以使用"});
        }
    })
})

router.get("/email_reg",(req,res)=>{
    var email=req.query.email;
    var sql="SELECT count(uid) as c FROM MeiShijie_user WHERE email=?";
    pool.query(sql,[email],(err,result)=>{
        if(err) throw err;
        if(result[0].c>0)
            res.send({code:0,msg:"该邮箱已被注册"});
        else{
            res.send({code:1,msg:"该邮箱可以使用"});
        }
    })
})


router.post("/phone_register",(req,res)=>{
    var phone=req.body.phone;
    var upwd=req.body.upwd;
    if(!phone){
        res.send({code:0,msg:"手机号不能为空"});
        return
    }
    if(!upwd){
        res.send({code:0,msg:"密码不能为空"});
        return
    }
    var sql="INSERT INTO MeiShijie_user (phone,upwd) VALUES (?,md5(?))";
    pool.query(sql,[phone,upwd],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"注册成功"});
    })
})

router.post("/email_register",(req,res)=>{
    var email=req.body.email;
    var upwd=req.body.upwd;
    if(!email){
        res.send({code:0,msg:"邮箱不能为空"});
        return
    }
    if(!upwd){
        res.send({code:0,msg:"密码不能为空"});
        return
    }
    var sql="INSERT INTO MeiShijie_user (email,upwd) VALUES (?,md5(?))";
    pool.query(sql,[email,upwd],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"注册成功"});
    })
})

router.get("/login",(req,res)=>{
    var text=req.query.text;
    var upwd=req.query.upwd;
    if(!text){
        res.send({code:0,msg:"登录手机/邮箱/昵称不能为空"});
        return
    }
    if(!upwd){
        res.send({code:0,msg:"密码不能为空"});
        return
    }
    var sql="SELECT count(uid) as c FROM MeiShijie_user WHERE phone=? AND upwd= md5(?)";
    pool.query(sql,[text,upwd],(err,result)=>{
        if(err) throw err;
        if(result[0].c>0){
            res.send({code:1,msg:"登录成功"});
        }else{
            res.send({code:0,msg:"登录失败"});
        }
    })
})

module.exports=router;