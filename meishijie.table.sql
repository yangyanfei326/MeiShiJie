SET NAMES UTF8;
DROP DATABASE IF EXISTS MeiShijie;
CREATE DATABASE MeiShijie CHARSET=UTF8;
USE MeiShijie;

#首页顶部轮播图
CREATE TABLE MeiShijie_index_carousel(
  cid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  cimg VARCHAR(128),#菜图片路径
  ctitle VARCHAR(32), #菜名
  csmalltitle VARCHAR(32),##菜系小标题*/
  cdetails VARCHAR(32),#菜系功能介绍
  chref VARCHAR(32), #菜品链接
  cstyle VARCHAR(32), #菜品类型
  ccount INT,          #评论数量
  cclick INT,          #点击量，人气
  cbuzhou VARCHAR(32), #步骤
  ctaste  VARCHAR(32)  #味道
);

/****首页轮播广告商品****/
INSERT INTO MeiShijie_index_carousel VALUES
(NULL, 'http://127.0.0.1:3000/images/a0c2fe1487e33650b10fe3f4c2378bea.jpg','酱香饼','补充能量','酱香四溢，越吃越好吃','product_details.html?lid=19',"早餐",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/841fbbb127550ab4398d0d41872f262d.jpg','牛奶紫薯饼','增强抵抗力','营养丰富，健康早餐必备','product_details.html?lid=19',"早餐",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/4f4e975b850345f096319b97d5557070.jpg','豆腐花','美容养颜','特色营养小吃，老少皆宜','product_details.html?lid=19',"早餐",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/9a6e255e851183d60c7810d2c8379615.jpg','笋干烧肉','营养丰富','笋干入味，超级下饭','product_details.html?lid=19',"午餐",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/1ef7646135abdfea8deb27cf25299e3b.jpg','酸辣开胃豆腐','补钙','冬季进补，多吃豆腐','product_details.html?lid=19',"午餐",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/fcb87f2b412ae786ac0ef3dca55650eb.jpg','土豆焖鸡','补充能量','鸡肉细嫩，土豆绵软','product_details.html?lid=19',"午餐",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/2c9e3b4ccb3db2e744433e96930830c3.jpg','酱焖羊肉','增强抵抗力','温补肝肾，暖身又驱寒','product_details.html?lid=19',"晚餐",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/3c73a7007e4f073b64487dbb14f1b341.jpg','莲藕肉丸','开胃消食','外酥里嫩，越吃越香','product_details.html?lid=19',"晚餐",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/35bf90b43e8c70239d9587378c2e2b4b.jpg','萝卜丝虾汤','助消化','色泽鲜艳，汤汁鲜美','product_details.html?lid=19',"晚餐",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/ff98a3f642f7bf3011230f837da0d37a.jpg','南瓜派','补充维生素','美容养颜，下午茶最佳选择','product_details.html?lid=19',"下午茶",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/06d8c6128e874206b181b10b70a73c74.jpg','山药芝麻糕','助消化','营养丰富，松软可口','product_details.html?lid=19',"下午茶",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/3a339f5bd77f037b86c97ae252786da2.jpg','紫薯香芋馅','增强抵抗力','细腻丰富，入口即化的美味','product_details.html?lid=19',"下午茶",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/577983445bca05fb9b65087468f1b468.jpg','发面水煎包','补充能量','表皮酥脆，鲜香无比','product_details.html?lid=19',"夜宵",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/8db13f27fb80af2d219ea1bc80180b63.jpg','炸鸡腿','增强抵抗力','外皮酥脆，鲜嫩多汁','product_details.html?lid=19',"夜宵",245,12589,"11步/大概16分钟","炖，咸香味"),
(NULL, 'http://127.0.0.1:3000/images/39c3e4867da36b3191b054692dc353bf.jpg','莴笋炒鸡蛋干','营养均衡','做法简单，快手美味','product_details.html?lid=19',"夜宵",245,12589,"11步/大概16分钟","炖，咸香味");


#首页十二月，适度进补
CREATE TABLE MeiShijie_index_fruit(
  fid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fimg VARCHAR(128),#水果/蔬菜/五谷/生鲜图片
  fname VARCHAR(32), #水果/蔬菜/五谷/生鲜名称
  ftype VARCHAR(32) #水果/蔬菜/五谷/生鲜种类
);
INSERT INTO MeiShijie_index_fruit VALUES
(null,"http://127.0.0.1:3000/images/3df43238975c0d2e094fa8e763a41f36_150x150.jpg","甘蔗","水果"),
(null,"http://127.0.0.1:3000/images/dacf1e18c99c4fe2f056f0c8f3aacbce_150x150.jpg","橙","水果"),
(null,"http://127.0.0.1:3000/images/41f12e50219c6afdc4735e336a99f16f_150x150.jpg","柚子","水果"),
(null,"http://127.0.0.1:3000/images/96fa7d7510bd0da37ea9bb7960f163d0_150x150.jpg","苹果","水果"),
(null,"http://127.0.0.1:3000/images/35af0f27e89091fb1126f81cdb6ad5c4_150x150.jpg","梨","水果"),
(null,"http://127.0.0.1:3000/images/cbe31e4ef6176df562054b6b5297ca50_150x150.jpg","香蕉","水果"),
(null,"http://127.0.0.1:3000/images/1c8c9bcf7198593b7da9b79ba82683fd_150x150.jpg","山楂","水果"),
(null,"http://127.0.0.1:3000/images/708c05cc3ea93a7bd9fc81653c5ff8ec_150x150.jpg","橘子","水果"),
(null,"http://127.0.0.1:3000/images/11f77378a0dda5c28ac4d021504ffa67_150x150.jpg","红薯","蔬菜"),
(null,"http://127.0.0.1:3000/images/11f77378a0dda5c28ac4d021504ffa67_150x150.jpg","红薯","蔬菜"),
(null,"http://127.0.0.1:3000/images/11f77378a0dda5c28ac4d021504ffa67_150x150.jpg","红薯","蔬菜"),
(null,"http://127.0.0.1:3000/images/11f77378a0dda5c28ac4d021504ffa67_150x150.jpg","红薯","蔬菜"),
(null,"http://127.0.0.1:3000/images/11f77378a0dda5c28ac4d021504ffa67_150x150.jpg","红薯","蔬菜"),
(null,"http://127.0.0.1:3000/images/11f77378a0dda5c28ac4d021504ffa67_150x150.jpg","红薯","蔬菜"),
(null,"http://127.0.0.1:3000/images/11f77378a0dda5c28ac4d021504ffa67_150x150.jpg","红薯","蔬菜"),
(null,"http://127.0.0.1:3000/images/11f77378a0dda5c28ac4d021504ffa67_150x150.jpg","红薯","蔬菜"),
(null,"http://127.0.0.1:3000/images/de64190a5636f1f8d8071f84b3dfc44b_150x150.jpg","核桃","五谷"),
(null,"http://127.0.0.1:3000/images/de64190a5636f1f8d8071f84b3dfc44b_150x150.jpg","核桃","五谷"),
(null,"http://127.0.0.1:3000/images/de64190a5636f1f8d8071f84b3dfc44b_150x150.jpg","核桃","五谷"),
(null,"http://127.0.0.1:3000/images/de64190a5636f1f8d8071f84b3dfc44b_150x150.jpg","核桃","五谷"),
(null,"http://127.0.0.1:3000/images/de64190a5636f1f8d8071f84b3dfc44b_150x150.jpg","核桃","五谷"),
(null,"http://127.0.0.1:3000/images/de64190a5636f1f8d8071f84b3dfc44b_150x150.jpg","核桃","五谷"),
(null,"http://127.0.0.1:3000/images/de64190a5636f1f8d8071f84b3dfc44b_150x150.jpg","核桃","五谷"),
(null,"http://127.0.0.1:3000/images/de64190a5636f1f8d8071f84b3dfc44b_150x150.jpg","核桃","五谷"),
(null,"http://127.0.0.1:3000/images/1f899fcb0e876187e8af3392faa9b9a8_150x150.jpg","羊肉","生鲜"),
(null,"http://127.0.0.1:3000/images/1f899fcb0e876187e8af3392faa9b9a8_150x150.jpg","羊肉","生鲜"),
(null,"http://127.0.0.1:3000/images/1f899fcb0e876187e8af3392faa9b9a8_150x150.jpg","羊肉","生鲜"),
(null,"http://127.0.0.1:3000/images/1f899fcb0e876187e8af3392faa9b9a8_150x150.jpg","羊肉","生鲜"),
(null,"http://127.0.0.1:3000/images/1f899fcb0e876187e8af3392faa9b9a8_150x150.jpg","羊肉","生鲜"),
(null,"http://127.0.0.1:3000/images/1f899fcb0e876187e8af3392faa9b9a8_150x150.jpg","羊肉","生鲜"),
(null,"http://127.0.0.1:3000/images/1f899fcb0e876187e8af3392faa9b9a8_150x150.jpg","羊肉","生鲜"),
(null,"http://127.0.0.1:3000/images/1f899fcb0e876187e8af3392faa9b9a8_150x150.jpg","羊肉","生鲜");

#首页中部轮播图
CREATE TABLE MeiShijie_index_carousel_middle(
  cmid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  cmimg VARCHAR(128),#菜图片路径
  cmtitle VARCHAR(32), #菜名
  cmsmalltitle VARCHAR(32),##菜系小标题*/
  cmspecial VARCHAR(32),#菜系别名
  cmcount INT,          #评论数量
  cmclick INT           #点击量，人气
);
INSERT INTO MeiShijie_index_carousel_middle VALUES
(NULL, 'http://127.0.0.1:3000/images/a0c2fe1487e33650b10fe3f4c2378bea.jpg','酱香饼','补充能量','酱香四溢，越吃越好吃',12345,123456),
(NULL, 'http://127.0.0.1:3000/images/841fbbb127550ab4398d0d41872f262d.jpg','牛奶紫薯饼','增强抵抗力','营养丰富，健康早餐必备','product_details.html?lid=19',"早餐"),
(NULL, 'http://127.0.0.1:3000/images/4f4e975b850345f096319b97d5557070.jpg','豆腐花','美容养颜','特色营养小吃，老少皆宜','product_details.html?lid=19',"早餐"),
(NULL, 'http://127.0.0.1:3000/images/9a6e255e851183d60c7810d2c8379615.jpg','笋干烧肉','营养丰富','笋干入味，超级下饭','product_details.html?lid=19',"午餐"),
(NULL, 'http://127.0.0.1:3000/images/1ef7646135abdfea8deb27cf25299e3b.jpg','酸辣开胃豆腐','补钙','冬季进补，多吃豆腐','product_details.html?lid=19',"午餐"),
(NULL, 'http://127.0.0.1:3000/images/fcb87f2b412ae786ac0ef3dca55650eb.jpg','土豆焖鸡','补充能量','鸡肉细嫩，土豆绵软','product_details.html?lid=19',"午餐"),
(NULL, 'http://127.0.0.1:3000/images/2c9e3b4ccb3db2e744433e96930830c3.jpg','酱焖羊肉','增强抵抗力','温补肝肾，暖身又驱寒','product_details.html?lid=19',"晚餐"),
(NULL, 'http://127.0.0.1:3000/images/3c73a7007e4f073b64487dbb14f1b341.jpg','莲藕肉丸','开胃消食','外酥里嫩，越吃越香','product_details.html?lid=19',"晚餐"),
(NULL, 'http://127.0.0.1:3000/images/35bf90b43e8c70239d9587378c2e2b4b.jpg','萝卜丝虾汤','助消化','色泽鲜艳，汤汁鲜美','product_details.html?lid=19',"晚餐"),
(NULL, 'http://127.0.0.1:3000/images/ff98a3f642f7bf3011230f837da0d37a.jpg','南瓜派','补充维生素','美容养颜，下午茶最佳选择','product_details.html?lid=19',"下午茶"),
(NULL, 'http://127.0.0.1:3000/images/06d8c6128e874206b181b10b70a73c74.jpg','山药芝麻糕','助消化','营养丰富，松软可口','product_details.html?lid=19',"下午茶"),
(NULL, 'http://127.0.0.1:3000/images/3a339f5bd77f037b86c97ae252786da2.jpg','紫薯香芋馅','增强抵抗力','细腻丰富，入口即化的美味','product_details.html?lid=19',"下午茶"),
(NULL, 'http://127.0.0.1:3000/images/577983445bca05fb9b65087468f1b468.jpg','发面水煎包','补充能量','表皮酥脆，鲜香无比','product_details.html?lid=19',"夜宵"),
(NULL, 'http://127.0.0.1:3000/images/8db13f27fb80af2d219ea1bc80180b63.jpg','炸鸡腿','增强抵抗力','外皮酥脆，鲜嫩多汁','product_details.html?lid=19',"夜宵"),
(NULL, 'http://127.0.0.1:3000/images/39c3e4867da36b3191b054692dc353bf.jpg','莴笋炒鸡蛋干','营养均衡','做法简单，快手美味','product_details.html?lid=19',"夜宵");


#用户列表
CREATE TABLE MeiShijie_user(
  uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  uname VARCHAR(32),#用户的ID，为用户的唯一标识，由系统自动生成
  upwd  VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),#手机号码
  avatar VARCHAR(128),#头像图片路径
  user_name VARCHAR(32),#用户名，如王小明
  gender INT#性别， 0-女 1-男
);
/**用户信息**/
INSERT INTO MeiShijie_user VALUES
(NULL, 'dingding', md5("123456"), 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', md5("123456"), 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', md5("123456"), 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'yaya', md5("123456"), 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');

#碗碟商品列表
CREATE TABLE MeiShijie_wandie_list(
  wid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  wname VARCHAR(32),#碗碟名称
  wimg VARCHAR(128),#碗碟图片
  wscore VARCHAR(128),#碗碟所需积分
  wsale VARCHAR(128),#月销量
  wtime DATETIME,  #上新时间
  wtype VARCHAR(32) #碗碟
);
INSERT INTO MeiShijie_wandie_list VALUES
(null,"欧式金边锤目纹沙拉碗","http://127.0.0.1:3000/images/20181220172002_61147.jpg","21840","15","2018-11-2","碗碟"),
(null,"北欧风格餐具盘子（黑色套装8寸+10寸）","http://127.0.0.1:3000/images/20181018163936_10923.jpg","15000","2","2018-11-2","碗碟"),
(null,"手绘描金植物小清新陶瓷盘套装","http://127.0.0.1:3000/images/20181019115052_45511.jpg","21600","18","2018-11-2","碗碟"),
(null,"欧式金边锤目纹沙拉碗","http://127.0.0.1:3000/images/20181220172002_61147.jpg","21840","15","2018-11-2","碗碟"),
(null,"北欧风格餐具盘子（黑色套装8寸+10寸）","http://127.0.0.1:3000/images/20181018163936_10923.jpg","15000","2","2018-11-2","碗碟"),
(null,"手绘描金植物小清新陶瓷盘套装","http://127.0.0.1:3000/images/20181019115052_45511.jpg","21600","18","2018-11-2","碗碟"),
(null,"欧式金边锤目纹沙拉碗","http://127.0.0.1:3000/images/20181220172002_61147.jpg","21840","15","2018-11-2","碗碟"),
(null,"北欧风格餐具盘子（黑色套装8寸+10寸）","http://127.0.0.1:3000/images/20181018163936_10923.jpg","15000","2","2018-11-2","碗碟"),
(null,"手绘描金植物小清新陶瓷盘套装","http://127.0.0.1:3000/images/20181019115052_45511.jpg","21600","18","2018-11-2","碗碟"),
(null,"欧式金边锤目纹沙拉碗","http://127.0.0.1:3000/images/20181220172002_61147.jpg","21840","15","2018-11-2","碗碟"),
(null,"北欧风格餐具盘子（黑色套装8寸+10寸）","http://127.0.0.1:3000/images/20181018163936_10923.jpg","15000","2","2018-11-2","碗碟"),
(null,"手绘描金植物小清新陶瓷盘套装","http://127.0.0.1:3000/images/20181019115052_45511.jpg","21600","18","2018-11-2","碗碟"),
(null,"欧式金边锤目纹沙拉碗","http://127.0.0.1:3000/images/20181220172002_61147.jpg","21840","15","2018-11-2","碗碟"),
(null,"北欧风格餐具盘子（黑色套装8寸+10寸）","http://127.0.0.1:3000/images/20181018163936_10923.jpg","15000","2","2018-11-2","碗碟"),
(null,"手绘描金植物小清新陶瓷盘套装","http://127.0.0.1:3000/images/20181019115052_45511.jpg","21600","18","2018-11-2","碗碟"),
(null,"欧式金边锤目纹沙拉碗","http://127.0.0.1:3000/images/20181220172002_61147.jpg","21840","15","2018-11-2","碗碟"),
(null,"北欧风格餐具盘子（黑色套装8寸+10寸）","http://127.0.0.1:3000/images/20181018163936_10923.jpg","15000","2","2018-11-2","碗碟"),
(null,"手绘描金植物小清新陶瓷盘套装","http://127.0.0.1:3000/images/20181019115052_45511.jpg","21600","18","2018-11-2","碗碟"),
(null,"欧式金边锤目纹沙拉碗","http://127.0.0.1:3000/images/20181220172002_61147.jpg","21840","15","2018-11-2","碗碟"),
(null,"北欧风格餐具盘子（黑色套装8寸+10寸）","http://127.0.0.1:3000/images/20181018163936_10923.jpg","15000","2","2018-11-2","碗碟"),
(null,"手绘描金植物小清新陶瓷盘套装","http://127.0.0.1:3000/images/20181019115052_45511.jpg","21600","18","2018-11-2","碗碟"),
(null,"欧式金边锤目纹沙拉碗","http://127.0.0.1:3000/images/20181220172002_61147.jpg","21840","15","2018-11-2","碗碟"),
(null,"北欧风格餐具盘子（黑色套装8寸+10寸）","http://127.0.0.1:3000/images/20181018163936_10923.jpg","15000","2","2018-11-2","碗碟"),
(null,"手绘描金植物小清新陶瓷盘套装","http://127.0.0.1:3000/images/20181019115052_45511.jpg","21600","18","2018-11-2","碗碟");