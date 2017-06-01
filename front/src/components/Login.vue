<template lang="html">
  <div class="logbox"  v-if='zero'>
   <div class="log-first" v-if='first'>
     <div class="log-head">
      <h2>登录</h2>
     </div>
     <div class="log-main">

         <!-- 登录框第一层 初始状态为显示 -->
         <div class="log-main-left">
            <div class="u-plt">
<!--  图片 -->
            </div>
            <div class="u-btn">
              <a @click="clickphone" href="javascript:void(0)">手机号登录</a>
              <a @click="clickreg" href="javascript:void(0)">注&nbsp&nbsp册</a>
            </div>

         </div>
         <div class="log-main-right">
              <ul>
                <li class="log-li"><a href="#"> <i></i> 微信登录</a></li>
                <li class="log-li"><a href="#"> <i></i> QQ登录</a></li>
                <li class="log-li"><a href="#"> <i></i> 微博登录</a></li>
                <li class="log-li"><a href="#"> <i></i> 网易邮箱帐号登录</a></li>
              </ul>
         </div>
       </div>

     </div>

     <div class="log-second" v-if='second'>
       <!-- 第二层，手机号登录界面 -->
       <div class="log-head">
        <h2>手机号登录</h2>
       </div>
      <div class="log-main">
          <div class="log-send">
            <ul class="send-phone">
              <!-- 用来使内部元素对外层居中 -->
            <li> <input type="text" name="" value="" placeholder="请输入手机号码"> </li>
            <li><input type="text" name="" value="" placeholder="请输入密码"></li>
            <li>
                <label for="readcheck">
                  <input type="checkbox"  id="readcheck"name="" value="">
                  自动登录
                </label>
                <span> 忘记密码？</span>
           </li>
           <li> <button type="button" class='phone-btn' name="button">登&nbsp录 </button></li>
            </ul>
            </div>
            <div class='send-bottom'>
              <a href="javascript:void(0)" @click='back'> < 其他登录方式</a>
              <a   @click="clickreg" href="javascript:void(0)"> 没有帐号？免费注册 ></a>
            </div>
      </div>
     </div>

     <div log-third v-if='third'>
       <div class="log-head">
        <h2>手机号注册</h2>
       </div>

       <div class="log-main">
          <div class="log-send">
              <ul class="send-phone">
                <li>
                  <label for="reg-username">&nbsp手机号:
                    <br>
                  <span class="u-prefix">+86</span>
                    <input type="text" id='reg-username' placeholder="请输入手机号"  @blur='checked' v-model='number'>
                  </label>

                </li>

                <li>

                  <label for="reg-password"> &nbsp密码：
                    <br>
                    <input type="password"  id='reg-password' placeholder="设置登录密码，不少于6位" v-model="userpassword">

                  </label>
                          <span class="span2" v-if="span1">{{span2}}</span>
                  <table border="0" cellpadding='0' cellspacing='0'>
                         <tr align='center'>
                            <td class="pwd pwd_c"></td>
                            <td class="pwd pwd_c">密码强度：{{this.infoText}}</td>
                            <td class="pwd pwd_c"></td>
                        </tr>
                  </table>

                </li>
                 <li> <button type="button" class='phone-btn' name="button" @click='register'>下一步 </button></li>
              </ul>


          </div>

         <div class='send-bottom'>
           <a id='back-btn' @click='back' href="javascript:void(0)"> < 返回登录</a>

         </div>
       </div>


     </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      //设置登录状态表初始值
      zero: true, //第一层大的为显示
      first: true, //首先显示选择登录注册页面
      second: false, //手机登录界面隐藏
      third: false, //注册界面隐藏
      userpassword:'',
      number:'',
      infoText:'低',
      span1:false,
      span2:""


    }
  },
  methods: {
    clickphone: function() { //点击手机登录
        this.zero = true, //大框
        this.first = false, //选择层
        this.second = true, //手机登录界面为显示
        this.third = false //注册层
    },
    clickreg: function() { //点击注册时
      this.zero = true,
        this.first = false,
        this.second = false,
        this.third = true //注册层显示
    },
    back: function() { //返回上层
      this.zero = true,
        this.first = true, //返回第一层
        this.second = false,
        this.third = false
    },
    userpasswordGrade:function(){    //密码测试
      let grade=/^(?!([\d_])+$)(?!([a-zA-Z_]+)$)\w+$/
      let psd = this.userpassword
      console.log(psd);
      if(grade.test(psd)){
        this.infoText='强'
      }else{
          this.infoText='中'
      }
    },
    checked:function(){       //正确手机号验证
      let space= /^\s*$/g;  //手机号不能为空
      let regFormat = /^[1][358][0-9]{9}$/   // 正确手机号码段
      let number = this.number;

      if (space.test(number)) {
          this.span2 = '手机号不能为空';
          this.span1 = true;
      }else if(!(regFormat.test(number))){
          this.span2 = '请输入正确手机号';
          this.span1 = true;
      }else{
           this.span2 = false;
          this.span1 = '';
      }

    },
    register:function(){
        let regFormat = /^[1][358][0-9]{9}$/;             //手机号验证
        let grade=/^(?!([\d_])+$)(?!([a-zA-Z_]+)$)\w+$/;  //密码强度验证
        let userpassword=this.userpassword;
        let number = this.number;
        // console.log(number,userpassword)
        if(regFormat.test(number)&&grade.test(userpassword)){    //当点击时，如果手机号和密码强度通过检测,
          alert("注册成功")                                      //弹出注册成功
                                       //将页面上的uesr 和psw返回到后台路由register中
          axios.post('/users/register',{'username':number,'password':userpassword}).then(res => {
            this.zero = true,
              this.first = true, //返回第一层
              this.second = false,
              this.third = false
                     })
                 }
             },


          },
  watch:{
    userpassword:'userpasswordGrade'
  }
}
</script>

<style scoped>
.logbox {
  width: 530px;
  height: 325px;
  border-radius: 5px;
}


/* 登录框头部*/

.log-first,
.log-second,
.log-third {
  box-shadow: 1px 0px 5px rgb(61, 60, 62);
}

.log-head {
  width: 530px;
  height: 38px;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 1px solid black;
  background: rgb(45, 45, 45);
  /*text-align: left;*/
}

.log-head h2 {
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin-left: 18px;
  line-height: 38px;
}


/* 登录框身体部分*/

.log-main {
  width: 529px;
  height: 286px;
  padding: 40px 0 39px;
  background: white;
  box-sizing: border-box;
  /*border: 1px solid black;*/
}

.log-main-left {
  width: 300px;
  height: 205px;
  box-sizing: border-box;
  padding: 0 35px 3px 40px;
  border-right: 1px dotted #ccc;
  text-align: center;
  /*background: black;*/
  float: left;
}


/*登录框右侧*/

.log-main-right {
  width: 187px;
  height: 222px;
  box-sizing: border-box;
  float: left;
  padding: 3px 0 3px 39px;
  margin-top: -15px;
  /*background: black;*/
}

.u-plt {
  width: 224px;
  height: 120px;
  /*border:1px solid black;*/
  background: url('../../static/img/platform.png') no-repeat 13px 0;
}

.u-btn a {
  display: block;
  width: 224px;
  height: 30px;
  border: 1px solid rgba(208, 206, 203, .7);
  line-height: 31px;
  border-radius: 5px;
  margin-top: 8px;
  font-size: 13px;
  background: url('../../static/img/button2.png');
}

.u-btn a:hover {
  text-decoration: none !important;
}


/* btn图片位置*/

.u-btn a:nth-child(1) {
  color: white;
  background-position: 0px -387px;
}

.u-btn a:nth-child(1):hover {
  background-position: 0px -469px;
}

.u-btn a:nth-child(2) {
  background-position: 0px -223px;
}

.u-btn a:nth-child(2):hover {
  background-position: 0px -141px;
}

.log-main-right ul li {
  width: 148px;
  height: 39px;
  margin-top: 15px;
}


/* 右侧登录前面的logo*/

.log-li a i {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  width: 38px;
  height: 38px;
  background: url('../../static/img/logo.png')
}


/*分别设置不同logo的位置*/

.log-li:nth-child(1) a i {
  background-position: -150px -670px;
}

.log-li:nth-child(2) a i {
  background-position: -190px -670px;
}

.log-li:nth-child(3) a i {
  background-position: -231px -670px;
}

.log-li:nth-child(4) a i {
  background-position: -271px -670px;
}


/*第二层手机登录界面*/

.log-send {
  width: 220px;
  height: 224px;
  margin: -32px auto;
  /*line-height: 50px;*/
  /*background: black;*/
}

.send-phone {
  width: 220px;
  height: 150px;
  margin-top: 20px;
}

.log-send input[type*="text"]

{
  width: 220px;
  height: 32px;
  border: 1px solid #ccc;
  margin-bottom: 14px;
  border-radius: 4px;
  text-indent: 10px;
}
.log-send input[type*="password"]{
  width: 220px;
  height: 32px;
  border: 1px solid #ccc;
  margin-bottom: 14px;
  border-radius: 4px;
  text-indent: 10px;
}

.send-phone li:nth-child(3) input {
  vertical-align: middle;
}

.send-phone li:nth-child(3) span {
  float: right;
}

.phone-btn {
  width: 220px;
  height: 30px;
  border-radius: 5px;
  margin-top: 18px;
  font-size: 13px;
  background: url('../../static/img/button2.png');
  color: white;
  background-position: 0px -387px;
}

.phone-btn:hover {
  background-position: 0px -469px;
}


/*第三层底部*/

.send-bottom {
  position: absolute;
  bottom: 0px;
  width: 529px;
  height: 49px;
  border-top: 1px solid #c6c6c6;
  border-radius: 0 0 4px 4px;
  padding: 0 19px;
  background-color: #f7f7f7;
  line-height: 49px;
  box-sizing: border-box;
}

.send-bottom a:nth-child(1) {
  float: left;
  color: #0c72c3;
  margin-left: 10px;
}

.send-bottom a:nth-child(2) {
  color: rgb(94, 97, 94);
  float: right;
  margin-right: 10px;
}

.u-prefix {
  position: absolute;
  font-size: 14px;
  top: 91px;
}

#reg-username,
#reg-password {
  text-indent: 25px;
}

.span2{
  width: 20px;
  height: 20px;
margin-bottom: 5px;

  color: rgb(111, 110, 113);
}
</style>
