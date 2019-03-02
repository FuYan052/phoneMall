<template>
  <div class="register">
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

    <a class="r-register" href="javascript:void(0);">立即注册</a>
    <a class="r-login" href="/html/login.html">登录</a>
  </div>
</template>

<script>
export default {
  name: "Register"
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
  a {
    display: block;
    width: 350px;
    height: 60px;
    margin-top: 35px;
    margin-left: 47px;
    text-align: center;
    line-height: 60px;
    color: white;
    border-radius: 40px;
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

