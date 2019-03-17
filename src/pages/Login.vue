<template>
  <div class="login">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
          placeholder="用户名"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
        >记住我</a-checkbox>
        <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
        <span 
        id="toRegister"
        @click="toRegister"
        >立即注册</span>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    // login() {
    //   // 如果登录成功则跳转个人中心页面
    //   this.$router.push({
    //     path: '/mine'
    //   })
    // },
    toRegister() {
      this.$router.push({
        path: "/register"
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.login {
  width: 400px;
  height: 500px;
  margin: 200px auto;
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
  #toRegister {
    color: #1890ff;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
