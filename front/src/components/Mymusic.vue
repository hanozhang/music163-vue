<template lang="html">
  <div class="main">
     <div class="main-article">
       <div class="article-bg">
         <img src="../../static/img/mymusic.png" alt="">
       </div>
     </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Mymusic',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    axios.get('/users/main?index=0&limit=60')
        .then(response=>{
          console.log(response);
          this.comments=response.data;
        })
        .catch(err=>{
          console.log(err)
        })
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
.article-bg {
  height: 268px;
  margin-top: 50px;
  overflow: hidden;

}
.article-bg img{
  width: 807px;
  /*height: 308px;*/
  transform: translate(100px);
    margin: 0 auto;
}

/*.article-left {
  width: 710px;
  height: 700px;
}

.article-right {
  width: 169px;
  height: 700px;
}*/
</style>
