<template>

    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in items">
            <img v-bind:src="item.src" alt="">
            </div>
        </div>
         <div class="swiper-button-next swiper-1eft"></div>
        <div class="swiper-button-prev swiper-2ight"></div>
    </div>
</template>
<script>
import Swiper from '../../static/JS/swiper.min'
require('../../static/CSS/swiper.min.css')
     export default{
        name:"smalllunbo",
        data(){
            return{
               items:[
                   {src:"http://p4.music.126.net/8pIIIOpj9yvG1q1KrLnpxg==/18535567022899061.jpg?param=100y100"},
                   {src:"http://p3.music.126.net/fmNYAHeTw8RsScINvs0rag==/19180980346582017.jpg?param=100y100"},
                   {src:"http://p4.music.126.net/T9k_PNKyTqQXSG405-td2A==/18592741627540011.jpg?param=100y100"},
                   {src:"http://p3.music.126.net/MAV17EqAp26SEiJbEW7TJw==/18536666534515487.jpg?param=100y100"},
                   {src:"http://p4.music.126.net/brtKZnqe7ExowVrbT922Mg==/18599338697296502.jpg?param=100y100"},
                   {src:"http://p4.music.126.net/N0nm0luCEOZIjyn9gLLnZQ==/18989665323352265.jpg?param=100y100"},
                   {src:"http://p3.music.126.net/TT0MxuY6JOBeVh6H-Wfd1Q==/18192519393706276.jpg?param=100y100"},
                   {src:"http://p3.music.126.net/ztrIj-uqfFDmW6TndrleQA==/18978670207055090.jpg?param=100y100"},
                   {src:"http://p4.music.126.net/3xloePo0OjeNecS-d75epQ==/18923694625696399.jpg?param=100y100"},
                   {src:"http://p4.music.126.net/8pIIIOpj9yvG1q1KrLnpxg==/18535567022899061.jpg?param=100y100"},
                   {src:"http://p3.music.126.net/fmNYAHeTw8RsScINvs0rag==/19180980346582017.jpg?param=100y100"},
                   {src:"http://p4.music.126.net/T9k_PNKyTqQXSG405-td2A==/18592741627540011.jpg?param=100y100"},
                   {src:"http://p3.music.126.net/MAV17EqAp26SEiJbEW7TJw==/18536666534515487.jpg?param=100y100"},
                   {src:"http://p4.music.126.net/brtKZnqe7ExowVrbT922Mg==/18599338697296502.jpg?param=100y100"},
                   {src:"http://p4.music.126.net/N0nm0luCEOZIjyn9gLLnZQ==/18989665323352265.jpg?param=100y100"},
                   {src:"http://p3.music.126.net/TT0MxuY6JOBeVh6H-Wfd1Q==/18192519393706276.jpg?param=100y100"},
                   {src:"http://p3.music.126.net/ztrIj-uqfFDmW6TndrleQA==/18978670207055090.jpg?param=100y100"},
                   {src:"http://p4.music.126.net/3xloePo0OjeNecS-d75epQ==/18923694625696399.jpg?param=100y100"}
               ]
            }
        },
        created:function(){

        },
        components:{

        },
        methods:{

            },
        mounted(){
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop : true,
        loopAdditionalSlides : 1,
        // Enable debugger
        debugger: true
    });
        }
        }


</script>
<style>




    .swiper-container {
        width: 660px;
        height: 180px;
        /*padding:20px;*/
        /*border:1px solid #d3d3d3;*/
        /*margin-top:20px;*/
        background-color:rgb(245,245,245)
    }
    .swiper-slide {
       /*width: 100px;*/
       /*height: 100px;*/
        text-align: center;
        font-size: 18px;
        /*background-color: #ccc;*/
        background:url('../../static/img/cover1.png');
        background-position: 317px 257px;
         margin-right: 20px !important ;
         overflow: hidden;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-button-next, .swiper-button-prev {
      height: 14px !important;
      top:57% !important;
    }
    .swiper-button-next{
      
    /*transform: translateX(20px);*/
    }
</style>
