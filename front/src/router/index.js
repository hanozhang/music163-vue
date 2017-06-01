import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Findmusic from '@/components/Hello.vue'
import Mymusic from '@/components/Mymusic.vue'
import Songs from '@/components/Songs.vue'
// import Swiper from '@/components/Swiper.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',     //首页
      name: 'Hello',
      component: Hello

    },
    {
      path: '/Findmusic',     //发现音乐
      name: 'Findmusic',
      component: Findmusic
    },
    {
      path: '/Mymusic',       //我的音乐
      name: 'Mymusic',
      component: Mymusic
    },
    {
      path:'/Songs',         //单曲音乐播放（点击榜单里的歌曲跳转
      name:'Songs',
      component:Songs
    }
  ]
})
