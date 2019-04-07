<template>
  <div class="payment">
    <div class="headerTitle">
      众尚收银台
      <p class="toHome" @click="toHome">返回首页</p>
    </div>
    <div class="wrap">
      <div class="content">
        <div class="icons-list">
          <a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
          <span class="text">订单提交成功，请您尽快付款！应付金额：<span class="money">￥{{order.shouldPay}}</span></span>
        </div>
      </div>
      <div class="payType">
        <p>平台支付</p>
        <div class="wrap2">
          <div 
          class="method" 
          v-for="(item,index) in payMethod" 
          :key="index"
          @click="choicMethod(item,index)" 
          :class="{'activeMethod':activeMethodIndex === index}"
           >
            {{item.name}}
          </div>
          <div class="zhifubao" v-if="zhifubao">
            <img src="../assets/zfb.jpg" alt="">
          </div>
          <div class="weixin" v-if="weixin">
            <img src="../assets/weixin.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
     
  </div>
</template>

<script>
export default {
  name: 'Payment',
  data() {
    return {
      order: '',
      payMethod: [{name:'支付宝支付',icon:'alipay'},{name:'微信支付',icon:'wechat'}],
      activeMethodIndex: 0,
      zhifubao: true,
      weixin: false
    }
  },
  
  created() {
    this.order = JSON.parse(window.sessionStorage.order) 
  },
  methods: {
    // 选择支付方式
    choicMethod(item,index) {
      this.activeMethodIndex = index
      this.zhifubao = !this.zhifubao
      this.weixin = !this.weixin
      console.log(item,index)
      console.log(this.activeMethodIndex)
    },
    // 返回首页
    toHome() {
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .payment {
    background: #ececeb;
    height: 100%;
    display: flex;
    flex-direction: column;
    .headerTitle {
      width: 88%;
      background: #fff;
      height: 70px;
      margin: 0 auto;
      text-align: center;
      line-height: 70px;
      font-size: 22px;
      font-weight: bold;
      padding-right: 30px;
      .toHome {
        color: blue;
        font-size: 16px;
        cursor: pointer;
        float: right;
        line-height: 70px;
      }
    }
    
    .wrap {
      width: 88%;
      flex: 1;
      margin: 0 auto;
      margin-top: 20px;
      background: #fff;
      padding: 35px;
      .content {
        height: 80px;
        .icons-list {
          margin-right: 6px;
          line-height: 80px;
          font-size: 54px;
          .text {
            font-size: 26px;
            font-weight: bold;
            line-height: 60px;
            .money {
              color: red;
            }
          }
        }
      }
      .payType {
        margin-top: 30px;
        height: 500px;
        padding-top: 30px;
        border-top: 3px solid #dedede;
        p {
          font-size: 22px;
          font-weight: bold;

        }
        .wrap2 {
          position: relative;
          .method {
          width: 250px;
          height: 60px;
          border: 1px solid;
          float: left;
          margin: 10px;
          margin-top: 30px;
          font-size: 22px;
          text-align: center;
          line-height: 60px;
          font-weight: bold;
          border-radius: 10px;
          cursor: default;
          }
          .activeMethod {
            border: 1px solid red;
          }
          .zhifubao {
            position: absolute;
            top: 100px;
            left: 7px;
          }
          .weixin {
            position: absolute;
            top: 100px;
            left: 280px;
          }
        }
        
      }
    }
  }

</style>
