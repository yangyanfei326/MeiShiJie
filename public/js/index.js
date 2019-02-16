//向http://localhost:3000/index发送get请求
/*顶部轮播图请求*/
$.ajax({
    url:"http://localhost:3000/index",
    type:"get",
    dataType:"json"//因为返回json字符串，所以希望自动转为对象
  })//支持promise:open(result)
  .then(function( result ){
    var html_breakfast="";
    var html_lunch="";
    var html_afternoon="";
    var html_dinner="";
    var html_last="";
    var i=1;
    for(var p of result){
    var div_section_top_carousel=document.querySelector(".section_top_carousel");
    if(p.cstyle=="早餐"){
        html_breakfast+=` 
        <li>
            <a href="javascript:;"><img src="${p.cimg}" alt=""></a>
            <div>
                <a class="section_top_nav_imgtag1" href="javascript:;">${p.csmalltitle}</a>
                <a class="section_top_nav_imgtag2" href="javascript:;">${p.ctitle}</a>
                <p class="section_top_nav_imgtag3">${p.cdetails}</p>
            </div>
        </li>      
        `;
    }
    div_section_top_carousel.children[0].children[1].innerHTML=html_breakfast; 
    if(p.cstyle=="午餐"){ 
        html_lunch+=` 
        <li>
            <a href="javascript:;"><img src="${p.cimg}" alt=""></a>
            <div>
                <a class="section_top_nav_imgtag1" href="javascript:;">${p.csmalltitle}</a>
                <a class="section_top_nav_imgtag2" href="javascript:;">${p.ctitle}</a>
                <p class="section_top_nav_imgtag3">${p.cdetails}</p>
            </div>
        </li>      
        `;
    }
    div_section_top_carousel.children[1].children[1].innerHTML=html_lunch;   
    if(p.cstyle=="下午茶"){         
        html_afternoon+=` 
        <li>
            <a href="javascript:;"><img src="${p.cimg}" alt=""></a>
            <div>
                <a class="section_top_nav_imgtag1" href="javascript:;">${p.csmalltitle}</a>
                <a class="section_top_nav_imgtag2" href="javascript:;">${p.ctitle}</a>
                <p class="section_top_nav_imgtag3">${p.cdetails}</p>
            </div>
        </li>      
        `;
    }
    div_section_top_carousel.children[2].children[1].innerHTML=html_afternoon;
    if(p.cstyle=="晚餐"){
        
        html_dinner+=` 
        <li>
            <a href="javascript:;"><img src="${p.cimg}" alt=""></a>
            <div>
                <a class="section_top_nav_imgtag1" href="javascript:;">${p.csmalltitle}</a>
                <a class="section_top_nav_imgtag2" href="javascript:;">${p.ctitle}</a>
                <p class="section_top_nav_imgtag3">${p.cdetails}</p>
            </div>
        </li>      
        `;
    }
    div_section_top_carousel.children[3].children[1].innerHTML=html_dinner;   
    if(p.cstyle=="夜宵"){     
        html_last+=` 
        <li>
            <a href="javascript:;"><img src="${p.cimg}" alt=""></a>
            <div>
                <a class="section_top_nav_imgtag1" href="javascript:;">${p.csmalltitle}</a>
                <a class="section_top_nav_imgtag2" href="javascript:;">${p.ctitle}</a>
                <p class="section_top_nav_imgtag3">${p.cdetails}</p>
            </div>
        </li>      
        `;
    }
    div_section_top_carousel.children[4].children[1].innerHTML=html_last;
    }

/*十二月份请求*/
$.ajax({
    url:"http://localhost:3000/index/fruit",
    type:"get",
    dataType:"json"//因为返回json字符串，所以希望自动转为对象
  })//支持promise:open(result)
  .then((res)=>{
    var html_fruit="";
    var html_veg="";
    var html_wugu="";
    var html_shengxian="";
    for(var f of res){
        if(f.ftype=="水果"){        
            html_fruit+=
            `<li>
                <a href="javascript:;"><img src="${f.fimg}"></a>
                <p><input type="checkbox" disabled><a href="javascript:;">${f.fname}</a></p>
            </li>`
        }
        $(".section_middle_tabs_content1").html(html_fruit)
        if(f.ftype=="蔬菜"){
            html_veg+=
            `<li>
                <a href="javascript:;"><img src="${f.fimg}"></a>
                <p><input type="checkbox" disabled><a href="javascript:;">${f.fname}</a></p>
            </li>`
        }
        $(".section_middle_tabs_content2").html(html_veg)
        if(f.ftype=="五谷"){
            html_wugu+=
            `<li>
                <a href="javascript:;"><img src="${f.fimg}"></a>
                <p><input type="checkbox" disabled><a href="javascript:;">${f.fname}</a></p>
            </li>`
        }
        $(".section_middle_tabs_content3").html(html_wugu)
        if(f.ftype=="生鲜"){
           
            html_shengxian+=
            `<li>
                <a href="javascript:;"><img src="${f.fimg}"></a>
                <p><input type="checkbox" disabled><a href="javascript:;">${f.fname}</a></p>
            </li>`
        }
        $(".section_middle_tabs_content4").html(html_shengxian)
    }
  })

$.ajax({
    url:"http://localhost:3000/index",
    type:"get",
    dataType:"json"//因为返回json字符串，所以希望自动转为对象
})
.then((res)=>{

})


/*页面动态效果*/
    $("input").focus(function(){
        $(this).css("outline","0")
    })
    setInterval(function(){
        var $li_changed=$("ul.section_top_carousel>li");
        for(var item of $li_changed){
            var num = parseInt(item.getAttribute("num"));
            if(num >=1&&num<=5){
                num--;
                if(num<1){num=5;}
                item.setAttribute("class","li"+String(num));
                item.setAttribute("num",num);
            }
        }
       
    },2000)

    $("a.section_top_carousel_prev").click(function(){
        var $li_changed=$("ul.section_top_carousel>li");
        for(var item of $li_changed){
            var num = parseInt(item.getAttribute("num"));
            if(num >=1&&num<=5){
                num--;
                if(num<1){num=5;}
                item.setAttribute("class","li"+String(num));
                item.setAttribute("num",num);
            }
        }
    })
    $("a.section_top_carousel_next").click(function(){
        var $li_changed=$("ul.section_top_carousel>li");
        for(var item of $li_changed){
            var num = parseInt(item.getAttribute("num"));
            if(num >=1&&num<=5){
                num++;
                if(num>5){num=1;}
                item.setAttribute("class","li"+String(num));
                item.setAttribute("num",num);
            }
        }
    })
    
    $(".section_middle_tabs_title").on("mouseover","a",function(){
        var i=$(this).parent().index();
        var $content=$(".section_middle_tabs_content");
        $content.children(`:nth-child(${i+1})`).css("display","block").siblings().css("display","none")
    })

    $(".section_middle_carousel_images").hover(function(){
        $(this).children(":last-child").slideToggle()
    })

    setInterval(function(){
        $(".section_middle_carousel").toggle()
    },2000)
    


    $("a.section_top_carousel_prev2").click(function(){
        if($(this).parent().parent().is(":not(':first-child')"))
        $(this).parent().parent().hide().prev().show();
    })
    $("a.section_top_carousel_next2").click(function(){
        if($(this).parent().parent().is(":not(':last-child')"))
        $(this).parent().parent().hide().next().show();
    })    
    
    $(".section_bottom_tabs_div>p>a").mouseenter(function(){
        var src=$(this).attr("data-target");
        $(this).parent().parent().prev().children(":first").children(":first").attr("src",src)
    })
    .mouseleave(function(){
        var src=$(this).parent().parent().children(":first").children(":first").attr("data-target");
        $(this).parent().parent().prev().children(":first").children(":first").attr("src",src)
    })
  })