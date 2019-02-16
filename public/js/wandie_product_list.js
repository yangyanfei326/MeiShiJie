 /*左侧底部轮播图*/
setInterval(function(){
    var left=parseInt($(".section_middle_left_bottom_carousel_inner").css("left"));
    $(".section_middle_left_bottom_carousel_inner").css("left",String(left-=260)+"px")
    if(parseInt($(".section_middle_left_bottom_carousel_inner").css("left"))<=-700)
    $(".section_middle_left_bottom_carousel_inner").css("left","0px");
    $("")
},1500)
/*隐藏导航栏*/
$(".section_middle_left_top").on("mouseenter","div",function(){
    var i=$(this).index();
    var $div_hide=$(".section_middle_left_top_hide_ul")
    $div_hide.children(`:nth-child(${i+1})`).show().siblings().hide();
})
$(".section_middle_left_top_parent").mouseleave(function(){
    $(".section_middle_left_top_hide_ul").children().hide();
})
$(".section_middle_left_top_hide_ul").children().hide();

/*分页*/ 
$(function(){
    function lodePage(pno=0){
       /* var kwords=decodeURI(
            location.search.split("=")[1]
        )*/
        $.ajax({
            url:"http://127.0.0.1:3000/products/getGoodlist",
            type:"get",
            data:{pno},
            dataType:"json",
            success:function(output){
                var {products,count,pageCount}=output;
                var html="";
                for(var p of products){
                    var {wid,wname,wimg,wscore,wsale}=p;
                    console.log(p.wid)
                    html+=
                    `<div class="products_item">
                        <a href="wandie_product_details.html?wid=${wid}">
                            <img src="${wimg}" style="width:198px;height:198px" alt="">
                        </a>
                        <p><a href="wandie_product_details.html?wid=${wid}">${wname}</a></p> 
                        <p>${wscore}积分</p>
                        <p>月销量：${wsale}份</p>
                    </div>`
                }
                $(".products_list").html(html);

                
                html=`<span class="page_sp_prev"><input type="button" value="上一页"></span>`;
                for(var i=0;i<pageCount;i++){
                    html+=(i!=pno)?`<span><input type="button" value="${i+1}"></span>`:`<span class="active"><input type="button" value="${i+1}"></span>`
                }
                html+=
                `<span class="page_sp_next"><input type="button" value="下一页"></span>
                <p>&nbsp; &nbsp;共 &nbsp;${Math.ceil(count/9)} &nbsp;页</p>`
                $(".page").html(html)

                if(pno==0){
                   var $first=$(".page>span:first>input");
                   $first.attr("disabled","true")
                }
                if(pno==pageCount-1){
                    var $last=$(".page>span:last>input");
                    $last.attr("disabled","true")
                }
                
            }
        })
    }
    lodePage();
    function lodePageScore(){
       /* var kwords=decodeURI(
            location.search.split("=")[1]
        )*/
        $.ajax({
            url:"http://127.0.0.1:3000/products/getGoodlistByScore",
            type:"get",
           
            dataType:"json",
            success:function(res){
                var html="";
                for(var i=0;i<res.length;i++){
                    html+=
                    `<li>
                    <a class="section_middle_left_middle" href="javascript:;">
                        <p>${i+1}</p>
                        <img style="width:60px; height:60px" src="${res[i].wimg}" alt="">
                        <div>
                            <p>${res[i].wname}</p>
                            <p>${res[i].wscore}</p>
                        </div>
                    </a>
                </li>`
                }
                $(".section_middle_left_middle_div>ul").html(html);  
            }
        })
    }
    lodePageScore();

    $(".page").on("click","input",function(e){
        e.preventDefault();
        $(this).css("outline","none")
        var pno;
        if($(this).val()=="上一页"){
            var i=parseInt($(".page>span.active>input").val());
            pno=i-2;
        }else if($(this).val()=="下一页"){
            //找到现在处于active的li下a的内容数字
            var i=parseInt(
              $(".page>span.active>input").val()
            );
            pno=i;//内容数字本来就比当前pno大1,所以下一页，不需要再+1
          }else{
            pno=$(this).val()-1;
          }
          lodePage(pno);
    })

    
})





