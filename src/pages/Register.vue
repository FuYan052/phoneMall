<template>
  <div class="register">
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
      label="验证码"
    >
      <a-row :gutter="8">
        <a-col :span="12">
          <a-input
            v-decorator="[
              'captcha',
              {rules: [{ required: true, message: '请输入验证码!' }]}
            ]"
          />
        </a-col>
        <a-col :span="12">
          <!-- <a-button>获取验证码</a-button> -->
          <check-code></check-code>
        </a-col>
      </a-row>
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
  
</template>

<script>
import CkeckCode from "@/components/checkcode/CkeckCode"
import HeaderNav from "@/components/header/HeaderNav";


export default {
  name: "Register",
  components: {
    CkeckCode:CkeckCode,
    HeaderNav:HeaderNav
  },
  data () {
    return {
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
        if (!err) {
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
  },
};
</script>

<style lang='scss' scoped>
.register {
  width: 500px;
  height: 800px;
  margin: 200px auto;
}
</style>

