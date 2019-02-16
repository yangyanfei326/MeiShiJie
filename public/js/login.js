  $(".tabs>p>a").click(function(){
    if($(this).html()=="更多第三方登录方式∨")
        $(this).html("收起").parent().next().slideDown();
    else{
        $(this).html("更多第三方登录方式∨").parent().next().slideUp();
    }
    })

    $(".section_form>div>p>a").click(function(){
        $(".section_form").toggle();
        $(".section_form2").toggle();
    })
    $(".section_form2>div>p>a").click(function(){
        $(".section_form").toggle();
        $(".section_form2").toggle();
    })

    $(".section_bottom").click(function(){
        $(".section_form_hide").slideToggle().next().slideToggle();
        $(".register_section_top_center").html("注册美食杰")
    })

    $(".register_text").blur(function(){
        var reg=/^1[3-8]\d{9}$/
        if(!reg.test($(this).val())){
            $(this).next().html("手机格式不正确")
            $(".btn-register").attr("disabled","true")
            $(this).next().css("color","#f00")
            $(this).next().css("text-indent","10px")
        }else{
            var phone=$(this).val();
            $.ajax({
                url:"http://127.0.0.1:3000/register/phone_reg",
                type:"get",
                data:{phone},
                dataType:"json",//因为返回json字符串，所以希望自动转为对象
                success:(res)=>{
                    $(this).next().html(res.msg)
                    $(this).next().css("color","#f00")
                    $(this).next().css("text-indent","10px")
                }
              }) 
        }
    }).focus(function(){
        $(this).next().html("")
    })

    $(".register_pwd").blur(function(){
        var reg=/^[[0-9a-zA-Z]{8,12}$/
        if(!reg.test($(this).val())){
            $(this).next().html("密码格式不正确")
            $(this).next().css("color","#f00")
            $(this).next().css("text-indent","10px")
        }
    }).focus(function(){
        $(this).next().html("")
    })

    $(".register_email").blur(function(){
        var reg=/@/;
        if(!reg.test($(this).val())){
            $(this).next().html("邮箱格式不正确")
            $(this).next().css("color","#f00")
            $(this).next().css("text-indent","10px")
        }else{
            var email=$(this).val();
            $.ajax({
                url:"http://127.0.0.1:3000/register/email_reg",
                type:"get",
                data:{email},
                dataType:"json",//因为返回json字符串，所以希望自动转为对象
                success:(res)=>{
                    $(this).next().html(res.msg)
                    $(".btn-register").attr("disabled","true")
                    $(this).next().css("color","#f00")
                    $(this).next().css("text-indent","10px")
                }
              }) 
        }
    }).focus(function(){
        $(this).next().html("")
    })


    $(".btn-register").click(function(){
        var phone=$(".register_text").val();
        var upwd=$(".register_pwd").val();
        $.ajax({
            url:"http://127.0.0.1:3000/register/phone_register",
            type:"post",
            data:{phone,upwd},
            dataType:"json",//因为返回json字符串，所以希望自动转为对象
            success:(res)=>{
                alert(res.msg)
            }
          })
    })

    $(".btn-register2").click(function(){
        var email=$(".register_email").val();
        var upwd=$(".register_epwd").val();
        $.ajax({
            url:"http://127.0.0.1:3000/register/email_register",
            type:"post",
            data:{email,upwd},
            dataType:"json",//因为返回json字符串，所以希望自动转为对象
            success:(res)=>{
                alert(res.msg)
            }
          })
    })

