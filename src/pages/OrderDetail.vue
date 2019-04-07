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
        <a-checkbox class="checkbox" @change="onChange(item)">使用此地址</a-checkbox>
        <p class="del" @click="handleDel(item)">删除</p>
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
    <div class="orderItem" v-for="item in cart" :key="item.productId">
          <div class="itemPic">
              <img :src="item.imgPath1" alt="">
          </div>
          <div class="itemTitle">
              <span class="itemVersion">
                {{item.productName}}  {{item.versionName}}
              </span>
              <span class="itemColor">
                  颜色：{{item.colorName}}
              </span>
          </div>
          <div class="itemPrice">
              {{item.price}}
          </div>
          <div class="itenCount">
            {{item.buyNum}}
          </div>
          <div class="totalprice">
            {{item.price * item.buyNum}}
        </div>
    </div>
    <div class="toPay">
      <p>应付总额：<span>￥{{account}}</span><br />
         收件人：{{choicedReceiver}}<br />
         联系电话： {{choicePhone}}<br />
         收货地址：{{choicedAddress}}
         
      </p>
      <div class="btn-toPay" @click="handlePay">
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
      allAddress: [],
      choicedReceiver: '',
      choicePhone: '',
      choicedAddress: '',
      cart: [],
      account: '',
      order: {}
    }
  },
  components: { 
    RegionPicker,
    BottomHome,
  },
  created() {
    // console.log(this.$route.params.id)
    // this.fetchAllAddress()
    const user_id = window.sessionStorage.user_id
    console.log(user_id)
    // 获取收货地址
      this.$http.getAddress(user_id).then(resp => {
        console.log(resp)
        if(resp.status === 200) {
          this.allAddress = resp.data 
          console.log(this.allAddress)
        }
      })
    // 获取存入购物车的数据
    // if(user_id == 10)
    // this.cart = window.sessionStorage.cart
    // console.log(this.cart)
    this.$http.getCarts(user_id).then(resp => {
      console.log(resp)
      this.cart = resp.data
      // 计算总金额
    const prices = []
    this.cart.forEach(item => {
      console.log(item) 
        prices.push(item.price * item.buyNum)
    })
    console.log(prices)
    this.account = prices.reduce((curr,result) => {
        return result += curr
    })
    console.log(this.account)
    })
    
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

    onChange (item) {
      console.log(item)
      this.choicedReceiver = item.receiver
      this.choicedAddress = item.province + item.district + item.address
      this.choicePhone = item.signerMobile
      console.log(this.choicedAddress)
    },

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
        // 获取收货地址
        this.$http.getAddress(user_id).then(resp => {
          console.log(resp)
          if(resp.status === 200) {
            this.allAddress = resp.data 
            console.log(this.allAddress)
          }
        })
      }, 2000);

      
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
    // 删除地址
    handleDel(item) {
      const result = confirm("确定要删除吗？")
      if(result){
        this.allAddress = this.allAddress.filter(_item => _item.receiveAdressId !== item.receiveAdressId)
        this.$http.delAddress(item.receiveAdressId).then(resp => {
          // console.log(resp)
        })
      }
    },
    // 提交订单
    handlePay() {
      this.order = {
        orderId: parseInt(10000000000000000 * Math.random()),
        shouldPay: this.account
      }
      window.sessionStorage.setItem("order",JSON.stringify(this.order))
      const orders = this.cart
      const user_id = window.sessionStorage.user_id
      orders.forEach(item => {
        let paramsOrder = {
          userId: user_id,
          productId: item.productId,
          color: item.colorName,
          version: item.versionName,
          price: item.price,
          productCount: item.buyNum,
        }
        console.log(paramsOrder)
        this.$http.addOrder(paramsOrder).then(resp => {
          console.log(resp)
          if(resp.status === 200){
            this.$router.push({
              path: '/payment'
            })
          }
          
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .order {
    background: #ececeb;
    // height: 100%;
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
      height: 350px;
      margin: 0 auto;
      margin-top: 20px;
      background: #fff;
      padding: 35px;
      h4 {
        font-size: 18px;
        color: #333333;
      }
      .hasAddress {
        width: 350px;
        height: 230px;
        padding: 10px;
        float: left;
        border: 1px solid #ccc;
        margin-top: 30px;
        margin-left: 20px;
        position: relative;
        p {
          line-height: 40px;
          span {
            font-weight: bold;
          }
        }
        .checkbox {
          // width: 25px;
          height: 25px;
          font-size: 12px;
          position: absolute;
          bottom: 20px;
        }
        .del {
          color: red;
          position: absolute;
          right: 15px;
          bottom: 20px;
          cursor: pointer;
        }
      }
      .toAdd {
        width: 300px;
        height: 230px;
        float: left;
        border: 1px solid #ccc;
        margin-top: 30px;
        margin-left: 20px;
        position: relative;
        .addIcon {
          position: absolute;
          top: 80px;
          left: 130px;
          font-size: 32px;
        }
        p {
          text-align: center;
          margin-top: 125px;
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
      height: 300px;
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
        cursor: pointer;
      }
    }
    #footer {
      background: #fff;
    }
  }

</style>
