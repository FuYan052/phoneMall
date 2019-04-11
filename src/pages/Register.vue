<template>
  <div class="register">
    <!-- <img src="../assets/banner1.jpg" alt=""> -->
    <div class="wrap">
      <h2>账户登录</h2>
      <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      v-bind="formItemLayout"
      label="用户名"
    >
      <a-input
        v-decorator="[
          'username',
          {
            rules: [{
              type: 'string', message: '请输入正确的用户名!',
            }, {
              required: true, message: '请输入用户名!',
            }]
          }
        ]"
      />
    </a-form-item>
    <a-form-item
      v-bind="formItemLayout"
      label="密码"
    >
      <a-input
        v-decorator="[
          'password',
          {
            rules: [{
              required: true, message: '请输入密码!',
            }, {
              validator: validateToNextPassword,
            }],
          }
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item
      v-bind="formItemLayout"
      label="确认密码"
    >
      <a-input
        v-decorator="[
          'repassword',
          {
            rules: [{
              required: true, message: '请再次输入密码!',
            }, {
              validator: compareToFirstPassword,
            }],
          }
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>
    <a-form-item
      v-bind="formItemLayout"
      label="手机号码"
    >
      <a-input
        v-decorator="[
          'phone',
          {
            rules: [{
              type: 'string', len: 11, message: '必须是11位的手机号码!'
            }, {
              required: true, message: '请输入手机号码!',
            }]
          }
        ]"
      >
      </a-input>
    </a-form-item>
    <a-form-item
      v-bind="formItemLayout"
      label="住址"
    >
      <a-input
        v-decorator="[
          'address',
          {
            rules: [{
              required: true, message: '请输入住址!',
            }]
          }
        ]"
      />
    </a-form-item>
    <a-form-item
      v-bind="formItemLayout"
      label="注册时间"
    >
      <a-date-picker v-decorator="['createAt', config]" />
    </a-form-item>
    <a-form-item
      v-bind="formItemLayout"
      label="滑动验证"
    >
      <drag-verify 
        :width="width" 
        :height="height" 
        :text="text" 
        :success-text="successText" 
        :progress-bar-bg="progressBarBg" 
        @passcallback="checkSuccess"
        ></drag-verify>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-checkbox
        v-decorator="['agreement', {valuePropName: 'checked'}]"
      >
        我已阅读 <a href="">
          用户协议
        </a>
      </a-checkbox>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button
        type="primary"
        html-type="submit"
      >
        立即注册
      </a-button>
    </a-form-item>
  </a-form>
  </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/header/HeaderNav";
import dragVerify from 'vue-drag-verify'

export default {
  name: "Register",
  components: {
    HeaderNav:HeaderNav,
    dragVerify,
  },
  data () {
    return {
      width: 350,
      height: 30,
      text: '滑动至右边',
      successText: '验证成功',
      isSuccess: false,
      progressBarBg: '#CCFFCC',
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
       config: {
        rules: [{ type: 'object', required: true, message: '请选择时间!' }],
      },
      params:{
        userName:'',
        password: '',
        phoneNum: '',
        address: '',
        createAt: '',
      }
    };
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err && this.isSuccess===true && values.agreement===true) {
          this.params.userName = values.username
          this.params.password = values.password
          this.params.phoneNum = values.phone
          this.params.address = values.address
          this.params.createAt = values.createAt

          console.log('Received values of form: ', values);
          console.log(this.params)
          // 注册
          this.$http.getRegister(this.params)
          .then(resp => {
              console.log(resp)
            if(resp.status === 200){
              console.log(resp)
              alert("注册成功!")
              this.$router.push({
                path: '/login'
              })
            }
          })
        }else{
          alert("注册失败！")
        }
      });
    },
    handleConfirmBlur  (e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword  (rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('两次密码输入不一致!');
      } else {
        callback();
      }
    },
    validateToNextPassword  (rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['repassword'], { force: true });
      }
      callback();
    },
    checkSuccess() {
      this.isSuccess = true
      console.log(this.isSuccess)
    }
  },
};
</script>

<style lang='scss' scoped>
.register {
  // height: 100%;
  // position: relative;
  // img {
  //   height: 100%;
  //   position: absolute;
  //   top: 0;
  //   left: -700px;
  // }
  background: url(../assets/banner1.jpg);
  background-size: 100% 100%;
  .wrap {
    width: 560px;
    padding-right: 60px;
    height: 700px;
    padding-top: 50px;
    background: #fff;
    margin: 200px 20%;
    z-index: 5;
      h2 {
        font-size: 26px;
        font-weight: bold;
        text-align: center;
        color: #1890ff;
        padding-bottom: 50px;
      }
    }
  }
  
</style>

