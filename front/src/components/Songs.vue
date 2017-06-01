<template lang="html">
    <div class="main">
      <div class="main-article">
        <div class="article-left">
           <div class="mysong">
             <!--音乐主体部分  -->
              <div class="mysong-img">
                <!--音乐专辑封面  -->
              <span class="mysong-imgbg">
                <img :src='thismusic.img'  class="j-img">
               <!-- <a class="des s-fc7">生成外链播放器</a> -->
               </span>
               <div class="music-link">
              <i class="iconfont icon-music"></i>
                <a>生成外链播放器</a>
                </div>
              </div>

              <div class="mysong-text">
               <!-- 音乐主要信息 -->
                <div class="hd">
                  <i></i>
                 <div class="tit">{{thismusic.songname}}</div>

                </div>
                <p>
                  歌手：
                  <span>{{thismusic.author}}</span>
                 </p>
                <p>
                  所属专辑：
                  <span>{{thismusic.dvd}}</span>
                </p>
                <div class="jf-info">
                 <div class="jf-btn2">
                    <a href="script:void(0)" class="u-btn1 " @click='playmusic'><i>
                   <em class="ply"></em>播放</i><a class="u-btni" href="script:void(0)"></a></a>
                   <a href="script:void(0)" class="u-btn2 jf-btn"><i>收藏</i></a>
                   <a href="script:void(0)" class="u-btn3 jf-btn"><i>分享</i></a>
                   <a href="script:void(0)" class="u-btn4 jf-btn"><i>下载</i></a>
                   <a href="script:void(0)" class="u-btn5 jf-btn"><i><span class="cnt_comment_count">1427</span></i></a>
                </div>
             </div>

             <div class="song-lyric">
               暂时没有歌词 求歌词
             </div>

              </div>
           </div>
        </div>
        <div class="article-right">
            <h2>网易云多端音乐下载</h2>
            <hr>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <h3>同步歌单，随时畅听320k好音乐</h3>
        </div>

      </div>
    </div>
</template>

<script>
import axios from "axios" //引用axios

// require("../../static/CSS/")
// require('../../static/CSS/iconfont.css')

export default {
  name: 'Songs',
  data() {
    return {}
  },
  methods:{
    playmusic:function(){
      let src = this.thismusic.src
      let songname = this.thismusic.songname
      this.$store.commit('increment',src)
      this.$store.commit('songname',songname)
      this.$store.commit('author',author)
      this.$store.commit('img',img)
      console.log(src)
      console.log(songname)
    }
  },
  computed:{
    thismusic(){
    return this.$store.state.thismusic
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 700px !important;
  background: rgb(245, 245, 245);
}
.main-article{
  height: 700px;
}
.article-left {
  width: 710px;
  height: 700px;
}

.article-right {
  width: 269px;
  height: 700px;
  box-sizing: border-box;
  padding: 40px 30px;
  text-align: left;
}
.article-right h3{
  font-weight: lighter;
  color:rgb(149, 145, 146);
}
.article-right ul{
  width: 200px;
  height: 65px;
  /*border:1px solid black;*/
  background: url('../../static/img/sprite.png') no-repeat 0 -385px;
}
.article-right ul li{
  float: left;
  height: 48px;
  width: 42px;
  margin-top: 5px;
  border:1px solid white;
  /*display: none;*/

}


.article-right ul li:nth-child(1):hover{
    background: url('../../static/img/sprite.png') no-repeat;
  background-position: -1px -471px;

}
.article-right ul li:nth-child(2){
  width: 100px;
  margin: 5px 5px;

}
.article-right ul li:nth-child(2):hover{
  background: url('../../static/img/sprite.png') no-repeat;
  background-position: -50px -471px;
}

.article-right ul li:nth-child(3):hover{
  background: url('../../static/img/sprite.png') no-repeat;
  background-position: -157px -471px;
}

.mysong {
  width: 640px;
  height: 567px;
  margin: 24px auto;
  /*border: 1px solid #000;*/
}

.mysong-img {
  width: 206px;
  height: 234px;
  float: left;
  margin: 8px;
  /*border: 1px solid #000;*/
}

.mysong-text {
  float: right;
  margin-top: 8px;
  width: 414px;
  height: 489px;
  /*border: 1px solid #000;*/
  box-sizing: border-box;
  padding-left: 8px;
}

.mysong-text p {
  width: 414px;
  height: 16px;
  margin: 10px 0;
}

.mysong-imgbg {
  display: block;
  text-align: center;
  line-height: 335px;
  width: 205px;
  height: 205px;
  /*border: 1px solid #000;*/
  background: url('../../static/img/coverall.png');
  background-position: -141px -580px;
}
.music-link{
  width: 205px;
  text-align: center;

}
.music-link a{
color:#0c73c2;
text-decoration: underline;

}

.mysong-imgbg img {
  width:130px;
  height: 130px;
  border: 3px solid rgba(1, 1, 1, 0.75);
  border-radius: 50%;
}

.hd {
  width: 414px;
  height: 31px;
  /*border: 1px solid #000;*/
  line-height: 31px;
  font-size: 24px;
  box-sizing: border-box;
  /*padding-left: 8px;*/
}

.hd i {
  display: inline-block;
  float: left;
  vertical-align: middle;
  margin-top: 4px;
  width: 54px;
  height: 24px;
  /*border: 1px solid #000;*/
  background: url("../../static/img/icon.png") no-repeat 0 -463px;
}

.tit {
  vertical-align: middle;
  margin-left: 5px;
  float: left;
  /*border: 1px solid #000;*/
}



.u-btn1 i {
  float: left;
  padding: 0 7px 0 8px;
  color: #fff;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  background: url("../../static/img/button2.png") 0 -387px;
}

.ply {
  float: left;
  width: 20px;
  height: 18px;
  margin: 6px 2px 2px 0;
  overflow: hidden;
  background: url("../../static/img/button2.png") 0 -1622px;
}


.u-btni{
    margin-right: -4px;
    width: 31px;
    margin-left: -3px;
    padding-right: 0;
    padding: 0 5px 0 0;
    float: left;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
     background:url("../../static/img/button2.png")   0 -1588px;

}

.u-btn2 {
  margin-right: 6px;
  padding: 0 5px 0 5px;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url("../../static/img/button2.png") right -1020px;
}

.u-btn2 i {
  padding-right: 2px;
  padding-left: 28px;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url("../../static/img/button2.png") 0 -977px;
}

.u-btn3 {
  margin-right: 6px;
  padding: 0 5px 0 0;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url("../../static/img/button2.png") right -1020px;
}

.u-btn3 i {
  padding-right: 2px;
  padding-left: 28px;
  padding: 0 7px 0 36px;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url("../../static/img/button2.png") 0 -1225px;
}

.u-btn4 {
  margin-right: 6px;
  padding: 0 5px 0 0;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url("../../static/img/button2.png") right -1020px;
}

.u-btn4 i {
  padding-right: 2px;
  padding-left: 28px;
  padding: 0 7px 0 36px;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url("../../static/img/button2.png") 0 -2761px;
}

.u-btn5 {
  margin-right: 6px;
  padding: 0 5px 0 0;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url("../../static/img/button2.png") right -1020px;
}

.u-btn5 i {
  padding-right: 2px;
  padding-left: 28px;
  padding: 0 7px 0 36px;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url("../../static/img/button2.png") 0 -1465px;
}
.song-lyric{
  width: 300px;
  height: 300px;
  margin-top: 100px;
}
</style>
