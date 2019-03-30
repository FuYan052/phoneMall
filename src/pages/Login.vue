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
          'username',
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
        <span id="toRegister" @click="toRegister">立即注册</span>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  computed: {
    ...mapState(["isLogin"]),
    ...mapState(["user"])
  },
  // watch: {
  //   isLogin () {
  //     // 当isLogin为true的时候，执行跳转
  //     const {
  //       from = '/home'
  //     } = this.$route.params
  //     this.$router.push(from)
  //   }
  // },
  methods: {
    ...mapMutations(["changeLoginStatus"]),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.username = values.username;
          this.password = values.password;
          console.log("Received values of form: ", values);
          console.log(this.username);
          const params = {username:this.username,password:this.password}
          // const params = '';
          // const params1 = '';
          // const params2 = '';
          // params1 = "username"=this.username
          // params2 = "password"=this.password
          // params = params1 +'&'+ params2
          // params = JSON.parse()
          console.log(params);

          // 登录接口
          this.$http.getLogin(params).then(resp => {
            console.log(resp);
            if (resp.status === 200) {
              window.sessionStorage.setItem("user", resp.data.userName);
              window.sessionStorage.setItem("user_id", resp.data.userId);
              // window.sessionStorage.setItem('token', resp.data.data.token)
              this.changeLoginStatus();
              alert("登录成功！");
              if(resp.data.userName === 'admin'){
                this.$router.push("/admin")
              }else{
                this.$router.push("/home");
              }
            }
          });

          // 登录假接口
          // this.$http.getLogin(params).then(resp => {
          //   console.log(resp);
          //   if (resp.data.code === 200) {
          //     window.sessionStorage.setItem("user", resp.data.data.username);
          //     window.sessionStorage.setItem("user_id", resp.data.data.user_id);
          //     this.changeLoginStatus();
          //     alert("登录成功！");
          //     this.$router.push("/home");
          //   }
          // })
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
