<template>
  <div class="order">
    <div class="headerTitle">
      核对订单信息
    </div>
    <div class="address">
      <h4>收货人信息</h4>
      <!-- 已有收获地址 -->
      <div class="hasAddress" v-for="item in allAddress" :key="item.receiveAdressId">
        <p><span>收货人：</span>{{item.receiver}}</p>
        <p><span>联系电话：</span>{{item.signerMobile}}</p>
        <p><span>详细地址：</span>{{item.province}}{{item.city}}{{item.district}}{{item.address}}</p>
      </div>
      <!-- 新建收获地址 -->
      <div class="toAdd">
        <a-icon class="addIcon" @click="showModal" type="plus-circle" />
        <p>添加新地址</p>
        <!-- 添加地址模态框 -->
        <a-modal
          title="新建收获地址"
          :visible="visible"
          @ok="handleOk"
          :confirmLoading="confirmLoading"
          @cancel="handleCancel"
        >
          <a-form
          :form="form"
          
        >
          <a-form-item
            label="收货人"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 25 }"
          >
            <a-input
              v-decorator="[
                'receiver',
                {rules: [{ required: true, message: '请输入收货人姓名!' }]}
              ]"
            />
          </a-form-item>
          <a-form-item
            label="联系电话"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 25 }"
          >
            <a-input
              v-decorator="[
                'signerMobile',
                {rules: [{ required: true, message: '请输入联系电话!' }]}
              ]"
            />
          </a-form-item>
          <a-form-item
            label="收货地区"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 20 }"
          >
            <region-picker
              :province="province"
              :city="city"
              :district="district"
              @onchange="change">
            </region-picker>
          </a-form-item>
          <a-form-item
            label="详细地址"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 25 }"
          >
            <a-input
              v-decorator="[
                'address',
                {rules: [{ required: true, message: '请输入详细地址!' }]}
              ]"
            />
          </a-form-item>
        </a-form>
        </a-modal>
      </div>
    </div>
    <div class="sure">
      <p>确认商品</p>
      <router-link
        tag="h4"
        :to="{
              path: `/cart`,
            }"
      >返回购物车修改 >
      </router-link>
    </div>
    <div class="itemTitle">
      <ul>
        <li>商品名称</li>
        <li>价格（元）</li>
        <li>数量</li>
        <li>小计（元）</li>
      </ul>
    </div>
    <div class="orderItem">
          <div class="itemPic">
              <img src="../assets/logo.png" alt="">
          </div>
          <div class="itemTitle">
              <span class="itemVersion">
                  VIVO X20  4GB+64GB
              </span>
              <span class="itemColor">
                  颜色：玫瑰金
              </span>
          </div>
          <div class="itemPrice">
              1598.00
          </div>
          <div class="itenCount">
            1
          </div>
          <div class="totalprice">
              1598.00
        </div>
    </div>
    <div class="toPay">
      <p>应付总额：<span>￥2397.00</span><br />
         收件人：张三<br />
         收货地址：云南玉溪红塔区
      </p>
      <div class="btn-toPay">
        提交订单
      </div>
    </div>
    <bottom-home></bottom-home>
  </div>
</template>

<script>
import { RegionPicker } from 'vue-region-picker'
import REGION_DATA from 'china-area-data'
import BottomHome from "@/components/footer/BottomHome";

export default {
  name: 'OrderDetail',
  data() {
    return {
      visible: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      province: '广东', // you can set initial value or not.
      city: 440100, // by code or name.
      district: '',
      address: '',
      receiver: '',
      signerMobile: '',
      visible: false,
      confirmLoading: false,
      allAddress: []
    }
  },
  components: { 
    RegionPicker,
    BottomHome,
  },
  methods: {
    showModal() {
      const isLogin = Boolean(window.sessionStorage.user)
      if(isLogin){
        this.visible = true
      } else {
        alert("请先登录！")
      }
        
    },
    // handleSubmit (e) {
    //   // e.preventDefault();
    //   this.form.validateFields((err, values) => {
    //     if (!err) {
    //       console.log('Received values of form: ', values);
    //     }
    //   });
    // },

    // 选择城市
    change(e) {
      console.log(e)
      this.province = e.province
      this.city = e.city
      this.district = e.district
    },

    handleOk(e) {
      const user_id = window.sessionStorage.user_id
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.receiver = values.receiver
          this.signerMobile = values.signerMobile
          this.address = values.address
        }
      });
      const params = {
        userId: user_id,
        receiver: this.receiver,
        province: this.province,
        city: this.city,
        district: this.district,
        address: this.address,
        signerMobile: this.signerMobile,
        allAddress: []
      }
      // console.log(params)

      // 调保存接口
      this.$http.saveAddress(params).then(resp => {
        console.log(resp)
      })
      // this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);

      // this.fetchAllAddress()
      // const user_id = window.sessionStorage.user_id
      this.$http.getAddress(user_id).then(resp => {
        console.log(resp)
        if(resp.status === 200) {
          this.allAddress = resp.data 
          console.log(this.allAddress)
        }
      })
    },

    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
    // 获取该用户所有地址
    // fetchAllAddress() {
    //   console.log("ok")
    //   const user_id = window.sessionStorage.user_id
    //   this.$http.getAddress(user_id).then(resp => {
    //     console.log(resp)
    //     if(resp.status === 200) {
    //       this.allAddress = resp.data 
    //       console.log(this.allAddress)
    //     }
    //   })
    // },
  created() {
    // console.log(this.$route.params.id)
    // this.fetchAllAddress()
    const user_id = window.sessionStorage.user_id
      this.$http.getAddress(user_id).then(resp => {
        console.log("ok")
        console.log(resp)
        if(resp.status === 200) {
          this.allAddress = resp.data 
          console.log(this.allAddress)
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .order {
    background: #ececeb;
    height: 100%;
    .headerTitle {
      width: 88%;
      background: #fff;
      height: 70px;
      margin: 0 auto;
      text-align: center;
      line-height: 70px;
      font-size: 22px;
      font-weight: bold;
    }
    .address {
      width: 88%;
      height: 280px;
      margin: 0 auto;
      margin-top: 20px;
      background: #fff;
      padding: 35px;
      h4 {
        font-size: 18px;
        color: #333333;
      }
      .hasAddress {
        width: 300px;
        height: 180px;
        padding: 10px;
        float: left;
        border: 1px solid #ccc;
        margin-top: 30px;
        margin-left: 20px;
        p {
          line-height: 40px;
          span {
            font-weight: bold;
          }
        }
      }
      .toAdd {
        width: 300px;
        height: 180px;
        float: left;
        border: 1px solid #ccc;
        margin-top: 30px;
        margin-left: 20px;
        position: relative;
        .addIcon {
          position: absolute;
          top: 45px;
          left: 130px;
          font-size: 32px;
        }
        p {
          text-align: center;
          margin-top: 90px;
        }
      }
    }
    .sure {
      height: 90px;
      width: 88%;
      background: #fff;
      margin: 0 auto;
      margin-top: 20px;
      padding: 0 30px;
      p {
        float: left;
        line-height: 90px;
        font-size: 18px;
        font-weight: bold;
      }
      h4 {
        float: right;
        line-height: 90px;
        font-size: 12px;
        cursor: pointer;
      }
    }
    .itemTitle {
      width: 88%;
      height: 64px;
      background: #fff;
      margin: 0 auto;
      margin-top: 2px;
      ul {
        li {
          float: left;
          font-weight: bold;
          line-height: 64px;
          margin-left: 200px;
        }
        li:nth-child(2) {
          margin-left: 370px;
        }
        li:nth-child(3) {
          margin-left: 175px;
        }
        li:nth-child(4) {
          margin-left: 230px;
        }
      }
    }
    .orderItem {
      width: 88%;
      height: 155px;
      background: #fff;
      margin: 0 auto;
      margin-top: 2px;
      position: relative;
      .itemPic {
        width: 110px;
        height: 110px;
        border: 1px solid #ececec;
        position: absolute;
        left: 100px;
        top: 25px;
          img {
              width: 70px;
              height: 90px;
              margin: 10px 20px;
          }
      }
      .itemTitle {
        width: 274px;
        height: 100%;
        position: absolute;
        left: 250px;
        font-size: 12px;
        .itemVersion {
            display: block;
            height: 32px;
            margin-top: 47px;
            color: #333333;
            line-height: 32px;
        }
        .itemColor {
            display: block;
            height:30px;
            color: #686868;
            line-height: 30px;
        }
      }
      .itemPrice {
        width: 165px;
        height: 100%;
        position: absolute;
        left: 600px;
        line-height: 154px;
        text-align: center;
      }
      .itenCount {
        position: absolute;
        left: 920px;
        line-height: 155px;
      }
      .totalprice {
          width: 150px;
          color: red;
          position: absolute;
          right: 500px;
          line-height: 155px;
          text-align: center;
      }
    }
    .toPay {
      width: 88%;
      height: 255px;
      background: #fff;
      margin: 0 auto;
      margin-top: 20px;
      padding: 30px;
      position: relative;
      p {
        font-size: 18px;
        float: right;
        text-align: right;
        font-weight: bold;
        line-height: 45px;
        span {
          font-size: 26px;
          color: #f04141;
        }
      }
      .btn-toPay {
        width: 160px;
        height: 45px;
        color: #fff;
        background: #f51200;
        line-height: 45px;
        text-align: center;
        border-radius: 45px;
        position: absolute;
        right: 30px;
        bottom: 20px;
      }
    }
  }

</style>
