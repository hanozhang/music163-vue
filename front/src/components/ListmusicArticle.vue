<template lang="html">
   <div class="music-lists">
   <dl class="table-list">
     <td class="musicHead">
       <div class="head-img">
        <img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=80y80" alt="">
       </div>
       <div class="head-text">
         <a href=""><h2>云音乐飙升榜</h2></a>
                  <div class="btn-icon">
                      <a href="javascript:void(0)"></a>
                      <a href="javascript:void(0)"></a>
                  </div>

       </div>
     </td>
     <dd>
       <ul>
         　<!-- 通过v-for循环动态生成歌曲列表    -->
         <li  v-for="(topmusiclist,index) in topmusiclist">
           <span> {{topmusiclist.id}}</span>
         <!--  此路由为跳转榜单单曲播放页面 -->
      　 <router-link to="/Songs">
      　　<a href="javascript:void(0)" @click="topmusic(index)">{{topmusiclist.songname}}</a>
    　　　</router-link>
    <i class='musicplay'></i>
    <i class="addlists" @click='addlists1(index)'></i>
    <i class="addprop"></i>
　　　　　 </li>

         <li>
                 <div class="mor"><a href="javascript:void(0)">查看全部></a></div>
         </li>
       </ul>

     </dd>
   </dl>

   <dl class="table-list">
   <td class="musicHead">
     <div class="head-img">
      <img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=80y80" alt="">
     </div>
     <div class="head-text">
       <a href=""><h2>云音乐新歌榜</h2></a>
                <div class="btn-icon">
                    <a href="javascript:void(0)"></a>
                    <a href="javascript:void(0)"></a>
                </div>

     </div>
   </td>
     <dd>
       <ul>
            　<!-- 通过v-for循环动态生成歌曲列表    -->
         <li v-for="(newmusiclist,index) in newmusiclist">
           <span class="span-1">{{newmusiclist.id-10}}</span>
           <router-link to="/Songs">
           <a href="javascript:void(0)" @click="newmusic(index)" >{{newmusiclist.songname}}</a>
           </router-link>
           <i class='musicplay'></i>
           <i class="addlists" @click='addlists2(index)'></i>
           <i class="addprop"></i>

         </li>
         <li>
                 <div class="mor"><a href="javascript:void(0)">查看全部></a></div>
         </li>
       </ul>
     </dd>
   </dl>
   <dl class="table-list">
   <td class="musicHead">
     <div class="head-img">
      <img src="http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=80y80" alt="">
     </div>
     <div class="head-text">
       <a href=""><h2>网易原创歌曲榜</h2></a>
                <div class="btn-icon">
                    <a href="javascript:void(0)"></a>
                    <a href="javascript:void(0)"></a>
                </div>

     </div>
   </td>
     <dd>
       <ul>
            　<!-- 通过v-for循环动态生成歌曲列表    -->
         <li v-for='(orimusiclist,index) in orimusiclist'>
           <span> {{orimusiclist.id-20}}</span>
           <router-link to="/Songs">
           <a href="javascript:void(0)" @click="orimusic(index)">{{orimusiclist.songname}}</a>
         </router-link>
         <i class='musicplay'></i>
         <i class="addlists" @click='addlists3(index)'></i>
         <i class="addprop"></i>
         </li>
         <li>
                 <div class="mor"><a href="javascript:void(0)">查看全部></a></div>
         </li>
       </ul>
     </dd>
   </dl>
   </div>
</template>

<script>
import axios from 'axios';
//引入axios来达到请求后端

export default {
  name: 'ListmusicArticle',
  data() {
    return {
      topmusiclist:'',
      newmusiclist:'',
      orimusiclist:''
    }
  },
  methods:{
    topmusic:function(index){
      let thismusic = this.topmusiclist[index];
      console.log(thismusic);
     this.$store.commit('playsongs',thismusic);
    },
    newmusic:function(index){
      let thismusic = this.newmusiclist[index];
      console.log(thismusic);
      this.$store.commit('playsongs',thismusic);
    },
    orimusic:function(index){
      let thismusic = this.orimusiclist[index];
      // console.log(thismusic);
        this.$store.commit('playsongs',thismusic);
    },
    addlists1:function(index){
      // alert("123")
      let playlist=this.topmusiclist[index];
      console.log(playlist)
      this.$store.commit('setList',playlist)
      // console.log(thismusic)
    },
    addlists2:function(index){
      let playlist=this.newmusiclist[index];
      console.log(playlist)
      this.$store.commit('setList',playlist)
    },
    addlists3:function(index){
      let playlist=this.orimusiclist[index];
      console.log(playlist)
      this.$store.commit('setList',playlist)
    }

  },

  mounted: function() {
    // 通过
    axios.get('/users/main?index=0&limit=10').then(topmusiclist => {
          //从localhost：3000/users/main?index=0&limit=10 请求歌曲
          // index=0&limit=10 为分页 index为页数 limit为每页的数据条目.

        // console.log(this.musiclist);
        this.topmusiclist = topmusiclist.data
        //  将topmusiclist.data 赋值给变量topmusiclist

      }),
      axios.get('/users/main?index=1&limit=10').then(newmusiclist => {

          this.newmusiclist = newmusiclist.data
          // console.log(this.newmusiclist);
        }),
        axios.get('/users/main?index=2&limit=10').then(orimusiclist => {

            this.orimusiclist = orimusiclist.data
            // console.log(this.orimusiclist);
          })
  }
}
</script>

<style lang="css">

.music-lists {
  width: 690px;
  height: 505px;
  background: rgb(245,245,245);
}
.table-list{
width: 229px;
height: 505px;
border-right: 1px solid rgb(232, 224, 224);
float: left;
}
.table-list td{
  width: 210px;
  height: 100px;
  padding-top: 20px;
  padding-left: 20px;

  /*background: black;*/
}
.head-img{
  width: 80px;
  height: 80px;
  float: left;
}
.head-text{

  float: left;
}
.head-text h2{
  margin-top: 2px;
  margin-left: 10px;
    font-size: 14px;
  font-weight: 600;
}
.btn-icon {
  width: 90px;
  height: 22px;
  /*border: 1px solid #000;*/
}
.btn-icon a{
  float: left;
  /*display: inline-block;*/
  width: 22px;
  height: 22px;
  margin-top: 20px;
  margin-left: 10px;
  /*margin-right: 20px;*/
  /*border: 1px solid #000;*/


}
.btn-icon a:nth-child(1){
    background: url('../../static/img/index.png')-267px -205px;

}
.btn-icon a:nth-child(1):hover{
      background: url('../../static/img/index.png')-267px -235px;
}
.btn-icon a:nth-child(2){
    background: url('../../static/img/index.png')-299px -205px;

}
.btn-icon a:nth-child(2):hover{
    background: url('../../static/img/index.png')-299px -235px;

}

.table-list ul li {
  padding-left: 28px;
  height: 35px;
  line-height: 35px;
}
.table-list ul li:nth-child(2n+1){
  background: rgb(232, 232, 232);
}
.table-list ul li span{
  width: 20px;
  display: inline-block;
  font-size: 16px;
  text-align: center;
  margin:0px 10px 0px -10px  ;
    font-weight: 500;

  color: rgb(72, 73, 72);

}
/*.table-list ul li:last-child span{
margin-left: -9px;
}*/
.table-list ul li:nth-child(1) span,
.table-list ul li:nth-child(2) span,
.table-list ul li:nth-child(3) span
{

  color: rgb(180, 19, 19);
    /*-webkit-margin-start: 20px;*/
}
.mor a{
  float: right;
  margin-right: 28px;
  color: black;
}
.table-list dd ul li{
  position:relative;
}
.addlists
,.musicplay,
.addprop{
  /*音乐列表后面的houver小图标*/
  display: inline-block;
  position: absolute;
  top: 8px;

  width: 20px;
  height: 20px;
  display: none;
  /*border:1px solid black;*/
}
.addlists{

  background:url('../../static/img/icon.png') no-repeat 0px -697px;
  right: 28px;

}
.musicplay{
    background:url('../../static/img/index.png') no-repeat ;
  background-position: -267px -268px;
  right: 50px;
}
.addprop{
    background:url('../../static/img/index.png') no-repeat -295px -268px;

   right: 10px;
}

.table-list dd ul li:hover > i{
  display: block;
}

</style>
