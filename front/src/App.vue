<template>
<div id="app">
  <header>
    <!-- 写死的导航栏头部部分 -->

    <div class="header-1">
      <a href="#" class="logo"> <img src="./assets/topbar.png" alt=""></a>

      <ul class="ul-top">
        <li>
          <router-link to="/Findmusic">发现音乐</router-link>
        </li>
        <li>
          <router-link to='/Mymusic'>我的音乐</router-link>
        </li>
        <li>
          <router-link to='/Songs'> <a href="#">朋友</a></router-link>  </li>
        <li><a href="#">商城</a></li>
        <li><a href="#">音乐人</a></li>
        <li><a href="#">下载客户端</a></li>
      </ul>


      <input type="text" id="search" placeholder="单曲/歌手/专辑/MV用户" />
      <span class="sp-hover" @click='logb0x'>登录</span>
      <span class="sp-hover2"></span>
      <ul class="hover-lock">
        <li><span></span>手机号登录</li>
        <li><span></span>微信登录</li>
        <li><span></span>QQ登录</li>
        <li><span></span>新浪微博登录</li>
        <li><span></span>网易邮箱帐号登录</li>
      </ul>
    </div>


    <div class="header-2">
      <div class="ul-bottom">
        <ul>
          <li><a href="#">推荐</a></li>
          <li><a href="#">排行榜</a></li>
          <li><a href="#">歌单</a></li>
          <li><a href="#">主播电台</a></li>
          <li><a href="#">歌手</a></li>
          <li><a href="#">新碟上架</a></li>
        </ul>
      </div>
    </div>


  </header>


  <article>
    <div id="logbox" v-if='logbox'>
      <v-Login></v-Login>
      <em @click="closelog"> X</em>
    </div>

  </article>

    <router-view></router-view>
  <footer>
   <!-- 音乐播放条. -->


   <v-Footer></v-Footer>
   <div id="playmusic">
     <div class="playlock">
       <span @click='clockplayer'></span>
     </div>
     <div id="player">
        <v-Player></v-Player>
     </div>
   </div>


  </footer>


</div>
</template>

<script>
import Swiper from './components/Swiper.vue'
//引用轮播图模块
import Player from './components/Player.vue'

import Login from './components/Login.vue'
import Footer from './components/Footer.vue'

require('../../front/static/CSS/reset.css')
//引用css reset文件
require('../../front/static/CSS/index.css')
//引用音乐模块CSS
require('../../front/static/CSS/music-player.css')





export default {
  name: 'app',
  components: {
    'v-Swiper': Swiper,
    'v-Player':Player,
    'v-Login':Login,
    'v-Footer':Footer
  },
  data(){
    return{
        logbox:false
    }
  },
  methods:{
    logb0x:function(){
      // alert(123)
      console.log(this.logbox)
      this.logbox = true
    },
    closelog:function(){
      this.logbox = false;

    },
    clockplayer:function(){
      let play = document.querySelector("#playmusic");

    }
  }
}


</script>

<style>

</style>
