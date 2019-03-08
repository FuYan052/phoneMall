<template>
  <div class="login">
    <img src="https://usrsyswsdl.vivo.com.cn/usermng/1551443967258.jpg">

    <div class="l-box">
      <div class="l-logo">
        <img
          src="https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/logo.d68beda.png.webp"
        >
      </div>
      <p>账号登录</p>
      <div class="alert" style="color: red; padding-left: 50px; display: none;">用户名或密码错误！</div>
      <form class="form-login">
        <input class="inp inp-n" type="text" name="phonenumber" placeholder="请输入手机号">
        <br>
        <input class="inp inp-p" type="password" name="password" placeholder="请输入密码">
      </form>
      <div class="l-login" @click="login">登录</div>
      <div class="l-register" @click="toRegister">注册账号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      // 如果登录成功则跳转个人中心页面
      this.$router.push({
        path: '/mine'
      })
    },
    toRegister() {
      this.$router.push({
        path: '/register'
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.login {
  width: 100%;
  height: 750px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .l-box {
    width: 450px;
    height: 600px;
    background: white;
    z-index: 10;
    position: absolute;
    top: 70px;
    right: 120px;
    .l-logo {
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
    .l-login {
      background: #3b9bfa;
    }
    .l-register {
      border: 1px solid #3b9bfa;
      color: #3b9bfa;
    }
  }
}
</style>
