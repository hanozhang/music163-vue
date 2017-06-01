<template>
 <footer><!--脚-->
        <div class="foo-middle"><!--内容-->
            <div class="f1"><!--第一个内容-->
              <a href="javascript:void(0)">
                  <span class="s-fc1"></span>
                <span class="s-fc3">独立音乐人招募计划</span>
                <br>
                <span class="s-fc4">加入我们 即将与超过亿万乐迷互动</span>
              </a>
            </div>
            <div class="f2"><!--第二个内容-->
              <a href="javascript:void(0)">
                <span class="s-fc2"></span>
                <span class="s-fc3">音乐专栏招募计划</span>
                <br>
                <span class="s-fc4">加入我们 与同道中人交流心得</span>
              </a>
            </div>
            <div class="f3"><!--第三个内容-->
             <p><a href="javascript:void(0)">关于网易</a>-<a href="javascript:void(0)">客户服务</a>-<a href="javascript:void(0)">服务条款</a>-<a href="javascript:void(0)">网站导航</a> 网易公司版权所有©1997-2017</p>
              <p> 杭州乐读科技有限公司运营：<a href="javascript:void(0)">浙网文[2015]0415-135号</a></p>
            </div>
        </div>
    </footer>



</template>


<script>
     export default{
        name:"footer",
        data(){
            return{
               msg:""
            }
        },
        created:function(){

        },
        components:{

        },
        methods:{



            }
        }






</script>



<style scoped>
    footer{/*尾部*/
    width: 100%;
    height: 126px;
    background-color:rgb(249, 249, 249);
    border-top: 1px solid rgb(211,211,211);
}
.foo-middle{/*尾部内容*/
    width: 980px;
    height: 125px;
    margin: 0 auto;
}

.f1 a,
.f2 a{/*第一个内容*/
    float: left;
    width: 247px;
    height: 46px;
    margin: 29px 0 0 0;
    line-height: 22px;
}
.s-fc1{/*尾部小图片*/
    float: left;
    width: 46px;
    height: 46px;
}
.s-fc3{/*尾部文字样式*/
    color: #666;
    line-height: 22px;
    font-size: 12px;
}
.s-fc4{
    color: #999;
    line-height: 22px;
    font-size: 12px;
}
.f2 a{ /*第二个内容*/
    display: inline-block;
    float: left;
    width: 300px;
    height: 46px;
}
.s-fc2{/*尾部小图片*/
    float: left;
    width: 46px;
    height: 46px;
}
.f3{
    float: left;
    font-size: 12px;
    line-height: 22px;
    margin-top: 29px;
    width: 381px;
}
.f3 p{
     color: #999;
}
.f3 a{
     color: #666;
}
</style>
