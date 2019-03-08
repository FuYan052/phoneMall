<template>
  <div class="register">
    <!-- <a-alert
      message="注册成功！"
      type="success"
      showIcon
      v-show="isSuccessed"
    /> -->
    <div class="r-logo">
      <img src="https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/logo.d68beda.png.webp">
    </div>
    <p>账号注册</p>
    <div class="alert" style="color: red; padding-left: 50px; display: none;">注册失败，请重试！</div>
    <form class="form-register">
      <input class="inp inp-n" type="text" name="phonenumber" placeholder="请输入手机号">
      <br>
      <input class="inp inp-p" type="password" name="password" placeholder="请输入密码">
    </form>

    <div class="r-register" @click="register">立即注册</div>
    <div class="r-login" @click="toLogin">登录</div>

    
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      isSuccessed: false,
    }
  },
  methods: {
    register() {
      // 如果注册成功
      alert("注册成功！")
    },
    // 跳转到登录页
    toLogin() {
      this.$router.push({
        path: '/login'
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.register {
  width: 450px;
  height: 600px;
  background: white;
  z-index: 10;
  margin: 70px auto;
  overflow: hidden;
  .r-logo {
    width: 450px;
    height: 60px;
    margin-top: 20px;
    img {
      width: 150px;
      height: 50px;
      margin-left: 148px;
    }
  }
  p {
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
  }
  form {
    .inp {
      width: 350px;
      height: 60px;
      margin-top: 35px;
      margin-left: 47px;
    }
  }
  div {
    width: 350px;
    height: 60px;
    margin-top: 35px;
    margin-left: 47px;
    text-align: center;
    line-height: 60px;
    color: white;
    border-radius: 40px;
    cursor: pointer;

  }
  .r-register {
    background: #3b9bfa;
  }
  .r-login {
    border: 1px solid #3b9bfa;
    color: #3b9bfa;
  }
}
</style>

