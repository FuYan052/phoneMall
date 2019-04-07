<template>
<div class="mine">
  <div class="title">
    个人中心
  </div>
  <div class="wrap">
    <div class="bg">
    <div class="account">
      <span class="username">{{user}}</span>
      <span class="logout" @click="logout">退出账号</span>
    </div>
    <div class="user">
      <p>用户名：<span>{{username}}</span></p>
      <p>密码：<span>{{password}}</span></p>
      <p>联系电话：<span>{{phoneNum}}</span></p>
      <p>住址：<span>{{address}}</span></p>
      <a-button class="edit" type="primary" icon="edit"  @click="showModal">修改</a-button>
      <a-modal
        title="修改信息"
        :visible="visible"
        @ok="handleOk"
        :confirmLoading="confirmLoading"
        @cancel="handleCancel"
      >
        <p>
          <a-form
          :form="form"
        >
          <a-form-item
            label="用户姓名"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '用户姓名',
                { initialValue: username },
                {rules: [{ required: true, message: '请输入用户姓名!' }]}
              ]"
                placeholder="请输入用户姓名"
            />
          </a-form-item>
          <a-form-item
            label="密码"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '密码',
                { initialValue: password },
                {rules: [{ required: true, message: '请输入密码!' }]}
              ]"
                placeholder="请输入密码"
            />
          </a-form-item>
          <a-form-item
            label="联系电话"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '联系电话',
                { initialValue: phoneNum },
                {rules: [{ required: true, message: '请输入联系电话!' }]}
              ]"
              placeholder="请输入联系电话"
            />
          </a-form-item>
          <a-form-item
            label="详细住址"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '详细住址',
                { initialValue: address },
                {rules: [{ required: true, message: '请输入详细住址!' }]}
              ]"
              placeholder="请输入详细住址"
            />
          </a-form-item>
        </a-form>
        </p>
      </a-modal>
    </div>
    </div>
  </div>
  
</div>
  
</template>

<script>
export default {
  name: 'Mine',
  data() {
    return {
      user: '',
      userId: '',
      userInfo: '',
      username: '',
      password: '',
      phoneNum: '',
      address: '',
      visible: false,
      confirmLoading: false,
      visible: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
    }
  },
  created() {
    this.user = window.sessionStorage.user
    const user_id = window.sessionStorage.user_id
    this.userId = user_id
    // console.log(user_id)
    this.$http.getUserList().then(resp => {
      // console.log(resp)
      const result = resp.data.data
      // console.log(result)
      this.userInfo = result.filter(item => item.userId == user_id)[0]
      console.log(this.userInfo)
      this.username = this.userInfo.userName
      this.password = this.userInfo.password
      this.phoneNum = this.userInfo.phoneNum
      this.address = this.userInfo.address
    })
  },
  methods: {
    logout() {
      console.log("退出登录")
      window.sessionStorage.removeItem('user')
      window.sessionStorage.removeItem('user_id')
      this.$router.push({
        path: '/home'
      })
    },
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.username = values.用户姓名
          this.password = values.密码
          this.phoneNum = values.联系电话
          this.address = values.详细住址
          // 保存到数据库
          const params = {
            userId: this.userId,
            userName: this.username,
            password: this.password,
            phoneNum: this.phoneNum,
            address: this.address,
          }
          console.log(params)
          this.$http.updateUser(params).then(resp => {
            console.log(resp)
          })
        }
      });
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 1000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
  }
}
</script>

<style lang='scss' scoped>
.mine {
  background: #ececeb;
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    width: 88%;
    height: 80px;
    margin: 0 auto;
    background: #fff;
    line-height: 80px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
  }
  .wrap {
    background: #fff;
    width: 88%;
    margin: 0 auto;
    margin-top: 20px;
    flex: 1;
    .bg {
      width: 80%;
      height: 75%;
      border: 1px solid;
      margin: 100px auto;
      background: url(../assets/bg1.jpg);
      background-size: cover;
      .account {
        height: 100px;
        width: 88%;
        margin: 0 auto;
        // border: 1px solid #dedede;
        position: relative;
        .username {
          line-height: 100px;
          position: absolute;
          right: 200px;
          font-weight: bold;
        }
        .logout {
          line-height: 100px;
          position: absolute;
          right: 50px;
          cursor: pointer;
          color: blue;
        }
      }
      .user {
        width: 85%;
        height: 500px;
        margin: 0 auto;
        border:1px solid steelblue;
        p {
          font-size: 26px;
          font-weight: bold;
          line-height: 80px;
          span {
            font-size: 20px;
          }
        }
        .edit {
          margin-top: 40px;
          margin-left: 50px;
        }
      }
    }
    
  }
  
}
</style>
