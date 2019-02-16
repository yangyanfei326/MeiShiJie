 $(function(){
        var wid=parseInt(location.search.split("=")[1])
        $.ajax({
            url:"http://127.0.0.1:3000/products/getGooddetail",
            type:"get",
            data:{wid},
            dataType:"json",
            success:function(res){
                console.log(res)
                var html="";
                    html+=
                       `<div id="preview" class="section_top_detail_left">
                            <div class="card">
                                <div id="mask" class="display"></div>
                                <div id="super-mask"></div>
                                <div id="div-lg" style="background:url('${res[0].wimg}') no-repeat center center" class="display"></div>
                                <div class="card-body">
                                    <img src="${res[0].wimg}" alt="" style="width:352px;height:352px">
                                    <img class="img_small" src="images/20181220172002_61147.jpg" alt="" style="width:97px;height:97px">
                                </div>
                            </div>
                        </div>
                        <div class="section_top_detail_right">
                            <p class="section_top_detail_right_title">${res[0].wname}</p>
                            <div class="section_top_detail_right_div">
                                <p><span>积分兑换</span></p>
                                <ul>
                                    <li>兑换积分：<strong>${res[0].wscore}</strong></li>
                                    <li>达人专享：<strong>10920</strong><span>七级达人优惠价格</span></li>
                                    <li>用户评分：<span></span>已兑换：3件</li>
                                    <li>我要兑换 <input type="text" value="1">件，库存（0）件</li>
                                </ul>
                            </div>
                            <input type="button" value="马上兑换">
                        </div>`
                $(".section_top_detail").html(html);

                
                var $mask=$("#mask");
                var $lgDiv=$("#div-lg");
                //中图片表层还有一个mask，无法直接在中图片上绑定事件，所以在其上面覆盖一个遮罩层，在这个遮罩层上绑定事件
                $("#super-mask").hover(function(){
                      $mask.toggleClass("display");
                      $lgDiv.toggleClass("display");
                    })
                .mousemove(function(e){
                //鼠标进入遮罩层supermask上时，获取mask距离super-mask的left和top
                    var top=e.offsetY-87.5;
                    var left=e.offsetX-87.5;
                //如果top《0，即mask已经到达super-mask顶部，top=0，如果top》175，即mask已经到达super-mask底部，top=175
                //如果left《0，即mask已经到达super-mask左部，left=0，如果left》175，即mask已经到达super-mask右部，left=175
                    if(top<0) top=0; else if(top>175) top=175;
                    if(left<0) left=0; 
                    else if(left>175) left=175;
                    $mask.css({top,left});
                    $lgDiv.css(
                      "background-position",
                      `-${left*1.15}px -${top*1.3}px`)
                  })

            }
        })
       
})





