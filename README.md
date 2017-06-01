# music163-vue
## 项目需求
  - 网易云pc版及移动版
  - 能攻适配主流浏览器的分辨率
  - 使用七牛云储存，进行歌曲的存放
  - 推荐使用VUE.js完成
  - 能够实现前后端分离
  - 实现用户注册与登录系统
  - 为每位用户建立个人播放列表，并能够正常挑选喜好歌曲
  - 用户登录注册页面
  - 发现音乐界面
  - 我的音乐界面
  - 当前播放音乐界面
  - 个人帐号界面
 
## 选题设计思路
 ##### 项目框架选择
 - 前端使用VUE构建页面
 - vue-router实现页面跳转及页面跳转时歌曲能正常播放
 - node.js后台
 - 后端模版使用express生成
 - mysql数据库
 - 七牛云网盘
 - express useragent 判定用户登录的设备 
 - session 用户注册登录
 
 ##### 设计思路
  - 完整的前后端分离，要做到前端只有静态的样式而没有数据，数据通过ajax请求回前端页面进行渲染.
  - 后端使用express搭载
  - 路由的使用主要有通过“查”从数据库请求完整音乐列表、专辑封面作者。通过“增”将歌曲添加至用户个人的数据库。通过“删”将歌曲删除列表。  通过“增”将用户注册信息提交至数据库，再进行比对.　　（暂定）
  - 前端页面使用vue进行搭载，请求后端数据进行渲染. 
  - 通过数据库保存全部歌曲列表，通过后台请求会回本地，送get请求渲染到前端页面。
  - 在添加收藏时，将歌曲“增”加到用户专有的json文件里
  - 将用户信息保存在数据库，在登录的时候进行比对。返回登录成功界面并读取用户的json地址。json文件里保存用户的个人歌单，在个人收藏界面，读取的歌曲即为json保存的.
  - 在取消收藏时，即为将歌曲从文件里清除.
 
## 项目目录结构


 > 将vue和exoress合为同一个文件，通过更改所有路由入口指向同一个模板,然后通过vue-router判断地址,载入不同的页面，将两个模版配置到同一个项目. 最终实现访问express(localhost:3000)自动跳转到vue页面，实现自动跨域

 
描述项目目录结构如下
```bash
/
# 项目后端结构
|--server
   |--bin     #服务器配置
      |--www   #服务器配置
   |--public     #页面静态文件
      |--images     #images
      |--javascripts #js
      |--stylesheets  #css
      |-- index.html   #静态主页
   |--routes            #路由文件
      |--index.js
      |--user.js
   |--views          
      |--error.jade
      |--index.jade
      |--layout.jade
   |--app.js
   |--package.json
   |--其他配置文件


# 项目前端结构
|--front
   |--build
   |--config
   |--dist
   |--src       #重要入口
      |--assets    
      |--components   #模块存放地址
         |--
      |--router       #路由存放地址
         |--
      app.vue         #主要VUE文件
      main.js
   |--static
      |--.gitkeep

|--package.json         #合并后的vue和express项目的共有json



```

## 路由规则设计


### 全部音乐 接口

- url："/api/addmian" 
- type： `post`

```json
{
    music:[
        {id:1,src:'',author:'',dvd,''},
        {id:2,src:'',author:'',dvd,''}
    ],
    status:'ok'
}
```
### 添加收藏 接口

- url："/api/addlike" 
- type： `post`

```json
{
    music:[
        {id:1,src:'',author:'',dvd,''},
        {id:2,src:'',author:'',dvd,''}
    ],
    status:'ok'
}
```
### 删除收藏 接口

- url："/api/dellike" 
- type： `post`

```json
{
    music:[
        {id:1,src:'',author:'',dvd,''},
        {id:2,src:'',author:'',dvd,''}
    ],
    status:'ok'
}
```

|key|描述|
|---|---|
|music|Array，保存请求回的音乐信息|
|status|String，保存请求结果标识|
|src|String，音乐的播放路径|
|Author|String,音乐的作者
|imgsrc|String,音乐的专辑封面
....


## 数据库设计

描述数据库的设计方案，包括表划分，键类型与命名等内容的描述，格式如下
### 歌曲表
表名：mainmusic
|key|type|描述|
|---|---|---|
|id|number，A_I|自增长的数据类型，主键|
|TITLE|TEXT|歌名|
|AUTHOR|TEXT|作者|
|DVD|text|专辑|
|MUSICSRC|text|音乐在七牛云的地址|
|IMGSRC|text|图片地址|
|iyric|text|歌词|
.
.
.

### 用户表
表名 ：userdata
|key|type|描述|
|---|---|---|
|id|number，A_I|自增长的数据类型，主键|
|name|text|用户名|
|password|text|密码|
|userfavourite|text| 此文件为src地址文件，用来指向保存用户喜好歌曲的json文件。


---
