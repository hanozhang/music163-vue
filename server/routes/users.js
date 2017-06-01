var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
//
var connection = mysql.createConnection({
  host:'localhost',
  port:3306,
  password:'root',
  user:'root',
  database:'music163'
});

//页面歌曲分类路由
//页面歌曲分类路由
//从localhost：3000/users/main?index=0&limit=10 请求歌曲
// index=0&limit=10 为分页 index为页数 limit为每页的数据条目.
router.get('/main',function(req,res,next){
  connection.query("SELECT*FROM`music-lists` limit "+req.query.index*req.query.limit+","+req.query.limit,function(err,rows,fd){
    if(err){
      console.log(err)
    } else {
      console.log(rows);
      res.send(rows);
    }
  })
})

//注册
//将req的username和userpassword 通过路由insert到数据库中

router.post('/register',function(req,res,next){
  let username = req.body.username //用户名
  let password = req.body.password
  console.log(username,password)
  connection.query('INSERT INTO `userdata`( `username`, `userpassword`) VALUES (?,?)',[username,password],function(err,rows,fw){
    if (err) {
      console.log('注册失败');
    }else{
       res.send(rows);
      console.log('注册成功');

    }
  })
})

//登录路由
//



module.exports = router;
