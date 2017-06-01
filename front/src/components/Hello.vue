<template lang="html">
  <div id='article'>


     <div class="index-banner">
     <v-Swiper class="swiper"></v-swiper>
     </div>
<div id="main">


     <div class="main-article">
       <div class="article-left">
          <div class="hot-music">
            <!-- 热门推荐 -->
            <div class="music-head">
                <ul>
                  <li><a href="#">热门推荐</a></li>
                   <li class="bd-bar"><a href="#">华语</a></li>
                   <li class="bd-bar"><a href="#">流行</a></li>
                   <li class="bd-bar"><a href="#">摇滚</a></li>
                   <li class="bd-bar"><a href="#">民谣</a></li>
                   <li class="bd-bar"><a href="#">电子</a></li>
                   <li><a href="#">更多</a></li>
                </ul>
            </div>

            <div class="hot-music-article">
               <ul class="cvrst">
                 <li v-for='index in data'>
                   <div class="u-cover">
                     <div class="cover-article">
                        <a href="#">
                          <img v-bind:src="index.src" alt="">
                          <!-- 图片封面 -->
                        </a>
                        <div class="cover-buttom">
                             <span></span>
                             <span> {{index.text}}</span>

                             <span></span>
                        </div>

                     </div>
                     <p>
                       <!-- 标题 -->
                      <a href="#" class="cover-text"> {{index.title}}</a>
                     </p>
                   </div>
                 </li>
               </ul>
            </div>
          </div>

          <div class="ad-music">
            <!-- 广告 -->
<img src="https://haitaoad.nosdn.127.net/ad.bid.material_f1785e4993f346f08a88589376a40294?imageView&amp;thumbnail=689x75&amp;quality=100" border="0" height="75" width="689" alt="Web(网页版)首页新碟上架">

          </div>

          <div class="new-music">
            <!-- 新碟上市 -->
            <div class="music-head">
                <ul>
                  <li><a href="#">新碟上市</a></li>

                   <li><a href="#">更多</a></li>
                </ul>

            </div>

            <div class="newmusic-article">
<v-Smalllunbo></v-Smalllunbo>
            </div>


          </div>

          <div class="list-music">
            <!-- 榜单 -->
            <div class="music-head">
                <ul>
                  <li><a href="#">榜单</a></li>

                   <li><a href="#">更多</a></li>
                </ul>
            </div>
            <div class="listmusic-article">
              <!-- 音乐榜单组件 -->
              <v-ListmusicArticle></v-ListmusicArticle>

            </div>

          </div>
       </div>

       <div class="article-right">
              <div class="n-log">
                      <span>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</span>
                      <button type="button" name="button">用户登录</button>
              </div>

              <div class="n-singer">
             <span><a href="#"> 入驻歌手</a></span>
             <span><a href="#">查看更多 ></a></span>
             <hr>

             <ul>
               <li v-for='index in singer'>
                <a href="#">
                  <div class="singer-info">
                   <img  v-bind:src="index.img" alt="">


                  <h4>{{index.name}}</h4>
                  <p>{{index.text}}</p>
                  </div>
                </a>
               </li>
             </ul>
             <button  class="btn-sen"type="button" name="button"><h4>申请成为网易音乐人</h4></button>
              </div>

              <div class="n-dj">
                <span><a href="#">热门DJ</a></span>
               <hr>
               <ul>
                 <li v-for='index in dj'>
                <div class="jd-info">
                  <img v-bind:src="index.img" alt="">
                  <span>{{index.name}}</span>
                  <span>{{index.text}}</span>
                </div>
                       <!-- {{ index.name}} -->
                 </li>
               </ul>

              </div>
       </div>
     </div>

</div>




  </div>



</template>

<script>
import Swiper from './Swiper.vue'
import Smalllunbo from './Smalllunbo.vue'
import ListmusicArticle from './ListmusicArticle'
require('../../static/CSS/index.css')
export default {


  name: 'hello',
  components: {
    'v-Swiper': Swiper,
    'v-Smalllunbo':Smalllunbo,
    'v-ListmusicArticle':ListmusicArticle
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      index: '',
      data :[{
        id: '1',
        text: '102万',
        src:'http://p1.music.126.net/1ECDfCxnpMK_D_XFYhxBXg==/18937988276868596.jpg?param=140y140',
        title:'『致初恋』在最懵懂的时光爱上你'
      }, {
        id: '2',
        text: '29万',
        src:'http://p1.music.126.net/5qo5pjSupvzS7w2i2yEuAA==/109951162886557232.jpg?param=140y140',
        title:'迈阿密电子音乐节Ultra 2017 | 现场歌单'
      }, {
        id: '3',
        text: '430万',
        src:'http://p1.music.126.net/r7_StZp5RwC8xU6i1kW_ag==/18541064580732703.jpg?param=140y140',
        title:'『华语』虐到骨子里的歌，哪首戳中你泪点'
      }, {
        id: '4',
        text: '5740',
        src:'http://p1.music.126.net/-ZzL3nSZIv5kYqeg2maU_w==/19210667160553773.jpg?param=140y140',
        title:' 雪后公园 | 桥洞下的手风琴'
      }, {
        id: '5',
        text: '105万',
        src:'http://p1.music.126.net/nEAspSuJaVjm97qBk6tH2w==/5953855464897285.jpg?param=140y140',
        title:'德国工业重金精选'
      }, {
        id: '6',
        text: '11993',
        src:'http://p1.music.126.net/AbzpFrStMOzO78UEl74Pdg==/18653214767093965.jpg?param=140y140',
        title:'刚好，我也缺个女朋友'
      }, {
        id: '7',
        text: '314万',
        src:'http://p1.music.126.net/NtaRlR4zIAOeinTIALoFWw==/109951162810570181.jpg?param=140y140',
        title:'【欧美女声】梦醒了，我该如何去爱你'
      }, {
        id: '8',
        text: '134万',
        src:'http://p1.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg?param=140y140',
        title:' 跟我在一起吧，好吗？'
      }],
      singer:[{
        name:'张惠妹aMEI',
        text:'台湾歌手张惠妹',
        img:'http://p4.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62'
      },
      {
        name:'尚雯婕',
        text:'原创电子唱作人',
        img:'http://p4.music.126.net/BvFxS88342IznhCjp6jJKg==/5783431162155757.jpg?param=62y62'
      },
      {
        name:'羽泉组合',
        text:'国内知名组合',
        img:'http://p4.music.126.net/VIxIhQPW2wTREM_DfToHUA==/2107763790458943.jpg?param=62y62'
      },
      {
        name:'李志',
        text:'个体音乐人李志',
        img:'http://p3.music.126.net/nS7TH_KYtj5lJr8OxDKgWw==/3263350517410958.jpg?param=62y62'
      },
      {
        name:'马頔麻油叶',
        text:'民谣音乐人',
        img:'http://p4.music.126.net/2iIlyuUKcyee0x1v4TzXTg==/1375489058855837.jpg?param=62y62'
      }],
      dj:[{
        name:'陈立',
        text:'美食家陈立教授',
      img:'http://p3.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" data-src="http://p3.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40'
    },{
      name:'DJ艳秋',
      text:'著名音乐节目主持人',
    img:'http://p3.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40" data-src="http://p3.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40'
  },{
    name:'国家大剧院古典音乐频道',
    text:'国家大剧院古典音乐官方',
  img:'http://p3.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40" data-src="http://p3.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40'
},{
  name:'谢谢收听',
  text:'南京电台主持人',
img:'http://p4.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40" data-src="http://p4.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40'
},{
  name:'DJ苏晓',
  text:'独立DJ',
img:'http://p3.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" data-src="http://p3.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40'
},]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
