// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vuex from 'vuex'
Vue.use(vuex)
// import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */

const store=new vuex.Store({
  state:{
    src:'',            //歌曲路径
    songs:'',
    thismusic:'',       //歌曲信息
    data:'',
    songname:'',
    author:'',
    img:'',
    playlist:{},
    musiclist:[]
  },
  mutations:{
    playsongs(state,thismusic){
      state.thismusic=thismusic
    },
    setList(state,playlist){
      state.playlist=playlist
      state.musiclist.push(playlist)
    },
    increment (state,src) {
    state.src = src},
    songname(state,songname){
     state.songname=songname       //歌曲名
   },
    author(state,author){
     state.author=author           //作者
   },
    img(state,img){
     state.img=img                  //歌曲图片
   }

  }
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
