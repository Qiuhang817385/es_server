var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //返回一个网页
    res.render('index', {title: 'Express'});
});
//这里是服务器端,接受到请求并且返回数据
//可以请求一个外部的json数据
router.get('/news', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    var id = req.query.id;
    console.log('/news id='+id);
    // 假数据,1条新闻
    var news1 = {
        id: id,
        title: '华为mate30发布会',
        content: 'HUAWEI Mate30系列全球发布会将于北京时间9月19日20:00在慕尼黑举行，届时华为旗舰新品Mate30系列将与大家见面。',
        commentsUrl: '/comments?newsId='+id
    };
    var news2 = {
        id: id,
        title: '美军回应网传UFO',
        content: '近日,美国军机遭遇不明飞行物的视频火了。美国海军发言人一份流传于多家媒体的声明证实,这些画面确由美军飞机监视器拍摄',
        commentsUrl: '/comments?newsId='+id
    };
    var news3 = {
        id: id,
        title: '俄病毒研究所爆炸',
        content: '俄罗斯西伯利亚储存埃博拉和天花病毒样本的研究中心在9月16日时发生了爆炸并引起了火灾',
        commentsUrl: '/comments?newsId='+id
    };
    let xinwen=[news1,news2,news3];
    
    
    res.json(xinwen[id]);
    
});


router.get('/comments', function (req, res, next) {
    //服务器返回简单请求
    // 服务器标识允许哪个域的请求
    //方式1:*,允许你所有域,服务器处对所有的请求进行放行放行
    res.set('Access-Control-Allow-Origin', '*');
    // 方式2:请求头origin字段为当前域 那个域请求,下面的*号就可以返回那个域推荐这种
    //方式3动态设置为请求域，多人协作时，多个前端对接一个后台，这样很方便
    
    //cross-origin resource sharing
    console.log('/comments newsId=' + req.query.newsId);
    var newsId = req.query.newsId;
    //假数据,1条数据对应的多个评论
    var comments = [
        {
            id: 0,
            content: 'comment content1111...',
            newsId : newsId
        },
        {
            id: 1,
            content: 'comment content2222...',
            newsId : newsId
        },
        {
            id: 2,
            content: 'comment content3333...',
            newsId : newsId
        }];
    res.json(comments);
});
/* router.get('/ratings',function(req,res,next){
    res.set('Access-Control-Allow-Origin',"*");
    var newsId = req.query.newsId;
    
}) */

module.exports = router;
