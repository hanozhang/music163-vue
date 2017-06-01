
<template>
   <div>
      <audio   loop id="audio" autoplay v-bind:src='src'>
      <!-- <source src="http://100.100.104.1/IXC217d7a837304bc1843a7c24016001220/%E4%B8%8D%E8%AF%A5%28With_aMEI%29-%E5%91%A8%E6%9D%B0%E4%BC%A6.mp3" > -->
    </audio>

   <div class='s-player'>
    <!--<audio src="song.mp3" controls="controls" loop="loop" autoplay="autoplay">亲 您的浏览器不支持html5的audio标签</audio>-->
    <!--按钮区-->
    <div class="player-btn" id='playBtn'>
      <!--上一首btn-->
      <div class="btn pre"></div>
      <!--播放btn-->
      <div class="btn"  @click='playBtnClick' v-bind:class='{"play":isA,"pause":isB}'> </div>
      <!--下一首-->
      <div class="btn next"></div>
    </div>
    <!--中间进度条-->
    <div class="music-bar">
      <div class="album-art"><img :src='img' /></div>
      <div class="s-bar">
            <h4><span>{{songname}}</span> <span>{{author}}</span></h4>
            <div class="play-warp">
              <!-- <progress id="progress" class="s-progress"  min="0" max="100">0% -->
              <div class="s-progress">
                <div class='s-pro'>
                  <span><i></i></span>
                </div>
                <!-- </progress> -->
              </div>
              <p>shijian</p>
            </div>
          </div>
    </div>
    <!--右边的操作-->
    <div class="s-op">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li class="shoulist" @click='show = !show'><span>10</span></li>

      </ul>

    </div>

  <transition name="fade">
    <!-- 点击播列表时隐藏和显示图表  -->
    <div v-if="show"class="musiclist">
       <div class="list-title">
            <span>播放列表</span>
              <span>收藏全部</span>
                <span>清除</span>
                  <span>{{ songname }}</span>
       </div>
       <div class="list-content">
         <ul class='content-left'>

           <li  class="music-info" v-for="(music, index) in musiclist" v-on:click.prevent="playmusic(index)">
             <tr>


             <td class="hover-icon1"></td>
             <td>{{ music.songname }}</td>
             <td>{{music.author}}</td>
             <td></td>
            </tr>
            <div class="hover-icon">

            </div>
           </li>
         </ul>
          <ul class='content-right'>
             <li>演唱者：{{author}}</li>
             <li>此歌曲暂无歌词，<a href="#">求歌词</a> </li>



          </ul>
       </div>
     </div>

</transition>


   </div>

  </div>
</template>

<script>
var audio = document.querySelector("#audio")
var playBtn=document.querySelector("#playBtn");          //开始播放
var progress=document.querySelector("#progress")
// playBtn.addEventListener('click', playBtnClick);

export default {
  name: 'songs',
  data () {
    return {
      isPlaying:false,
      isA:true,
      isB:true,
      show:false
    }

  },
  methods: {
    playBtnClick(){     //点击播放按钮时执行的代码
      var audio = document.querySelector("#audio")
      if(!this.isPlaying){   //检查文件是否在播放
          // alert(2)
         audio.play();
         this.isPlaying = true;
          this.isA = !this.isA

      }else{
        audio.pause();
        this.isPlaying = false;
          this.isA = !this.isA
        // alert(4)
      }
    },
    playmusic:function(index){
      let src = this.musiclist[index].src
      let songname = this.musiclist[index].songname
      let author = this.musiclist[index].author
      let img = this.musiclist[index].img
      this.$store.commit('increment',src)
      this.$store.commit('songname',songname)
      this.$store.commit('author',author)
      this.$store.commit('img',img)
      console.log(src)
      console.log(songname)
    }



  },
  computed:{
    src(){
    return this.$store.state.src
  },
  songname(){
      return this.$store.state.songname
  },
  img(){
      return this.$store.state.img
  },
  author(){
        return this.$store.state.author
  },
    thismusic(){
    return this.$store.state.thismusic
  },
  musiclist(){
      return this.$store.state.musiclist
      console.log(musiclist)

  }


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#audio{
  position: absolute;
}
.s-player{
  width: 980px;
  /*height: 100%;*/
  /*background: rgba(43,43,43,0.8);*/
  margin: 5px auto;
  display: flex;
}
/*按钮区*/
.player-btn{
  /*border: 1px solid #000;*/

}

.player-btn>.btn{
  float: left;
  width: 35px;
  height: 35px;
  margin: 8px 0 0 0 ;
}
.player-btn>.pre{
  background: url("../../static/img/playbar.png");
  background-position: 4px -126px;

}
.player-btn>.next{
  background: url("../../static/img/playbar.png");
  background-position: -76px -126px;
}
.player-btn>.play{
  background: url("../../static/img/playbar.png");
  background-position: -1px -205px;
}
.pause{
  background: url("../../static/img/playbar.png");
  background-position: -1px -166px;
}
/*进度条去*/
.music-bar{
  /*border: 1px solid #000;*/
  display: flex;
  margin: 6px 0 0 20px;
  /*padding-top: 4px;*/
}
.play-warp{
  display: flex;
  /*border: 1px solid #000;*/
}
.music-bar  img{
  width: 30px;
  height: 30px;
  margin-top:5px;
  /*border: 1px solid #000;*/
}
.s-bar{
  margin-left: 15px;
}
.s-bar>h4>span:nth-child(1){
  color: #fff;
}
.s-bar>h4>span:nth-child(2){
  color: #ccc;
  margin-left: 12px;
}
.s-progress{
  width: 490px;
  height: 10px;
  background: rgb(83, 83, 83);
  /*border: 1px solid #000;*/
  border-radius: 5px;
  margin-top: 5px;
  position: relative
}
.s-pro{
width:100px;
height: 10px;
background: rgb(199,12,12);
  border-radius: 5px;
/*transform: translate(1px,1px);*/
}
.s-progress span{
  position: absolute;
  left: 90px;
  top:-3px;
  height: 15px;
  width: 15px;
  background: #fff;
  border-radius: 50%;
  line-height: 15px;
  text-align: center;
  border:1px solid black;
}
.s-progress span i{
  display: inline-block;
  width: 6px;
  height: 6px;
  background: rgb(184, 24, 13);
  border-radius: 50%;
}
.s-progress .play-warp p{
 padding: 0 0 0 10px;
}
.s-op ul{
  display: flex;
  margin: 10px 0 0 20px;;
}
.s-op ul li{
  width: 30px;
  height: 30px;
  margin: 0 5px;
}
.s-op ul li:nth-child(1){
      background: url("../../static/img/playbar.png");
  background-position: -87px -160px;
}
.s-op ul li:nth-child(2){
      background: url("../../static/img/playbar.png");
  background-position: -113px -160px;
}
.s-op ul li:nth-child(3){
      background: url("../../static/img/playbar.png");
  background-position: -0px -244px;
}
.s-op ul li:nth-child(4){
      background: url("../../static/img/playbar.png");
  background-position: -65px -244px;
}
.s-op ul li:nth-child(5){
  background: url("../../static/img/playbar.png");
  background-position: -44px -67px;
  width: 60px;
  text-align: center;
  line-height:30px;
}
.s-op ul li:nth-child(5):hover{
  background-position: -44px -97px;
}
.s-op ul li:nth-child(5) span{
  margin-left: 10px;
  width: 40px;
  height: 10px;
  color:rgb(128, 125, 125);
  font-weight:lighter;
}

.musiclist{
  width: 975px;
  height: 303px;
  /*border:1px solid black;*/
  position: absolute;
  border-radius: 5px 5px 0 0 ;
  bottom: 47px;
  right: 180px;


}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}


/*播放列表布局*/
.list-title{
  width: 976px;
  height: 39px;
    border-radius: 5px 5px 0 0 ;
    position:relative;
/*border-bottom: 1px solid black;*/
background: url('../../static/img/playlist_bg.png') -9px 0px;
}
.list-content{
  width: 975px;
  height: 263px;
  border-top: 1px solid rgb(8, 7, 8);

background: url(../../static/img/playlist_bg.png) repeat -1017px 0px;

}

.list-title span{
  height: 39px;
  color: rgb(214,214,214);
  line-height: 39px;
  font-size: 12px;
  position: absolute;
    font-weight: bold;
}
.list-title span:nth-child(1){
  font-size: 14px;
  left: 25px;

}
.list-title span:nth-child(2){
left:398px;
}
.list-title span:nth-child(3){
left:490px;
}
.list-title span:nth-child(4){
  font-size: 14px;
  width: 346px;
  text-align: center;
left:595px;
}
.content-left{
  width: 547px;
  height: 260px;
  float: left;
  border-right:4px solid rgb(9, 9, 9);
  overflow-y:  auto;
  overflow-x: hidden;
}

.content-right{
  width:420px;
  height: 260px;
  float: left;
  text-align: center;

}
.content-right li:nth-child(1) {
  margin-top: 50px;
  height: 40px;
  width: 420px;
  font-size: 14px;
}
.content-right li:nth-child(2) a{
  text-decoration: underline;

}
.content-left li{
  width: 547px;
  height: 28px;
  background: rgba(17, 18, 17,1);
  margin: 1px 0px;
  line-height: 28px;
  box-sizing: border-box;
  color: white;
  padding-left: 28px;
  position: relative;
}
.music-info tr td:nth-child(1) {
  background: url("../../static/img/playlist.png") -182px 8px;
  width: 20px;
  height: 27px;
  visibility: hidden;
}

.music-info tr td:nth-child(2) {
  width: 200px;
  padding-left: 8px;
  /*border:1px solid black;*/
}
.music-info tr td:nth-child(3){
  width: 50px;
  padding-left: 150px;
}
.music-info tr td:nth-child(4){
  width: 20px;
  height:18px;
  background: url("../../static/img/playlist.png") -80px -20px;
  position: absolute;
  right: 30px;
  margin-top: 6px;
}
.hover-icon{
  width:80px;
  height: 27px;
  /*border:1px solid black;*/
  position: absolute;
  top: 0px;
  left: 320px;
  display: none;
  background: url("../../static/img/playlist.png") ;
  background-position: 5px 7px;

}
.music-info:hover .hover-icon{
  display: block;
}
.music-info:hover .hover-icon1{
  visibility: visible;
}

</style>
