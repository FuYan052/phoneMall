<template>
  <div class="warp">
    <div class="detail">
      <div class="pic-wrap">
        <!--手机大图-->
        <div class="p-m">
          <img :src="midImg" alt>
        </div>
        <div class="smallImg">
          <div class="itemSmallImg" v-for="item in smallImg" :key="item.id">
            <img :src="item.img" alt>
          </div>
        </div>
      </div>
      <!--右边的列表-->
      <div class="p-right">
        <div class="p_title">
          <span>VIVO x20 全面屏 玫瑰金</span>
          <p>{{theDetail[0].describe}}</p>
        </div>
        <div class="singlePrice">￥{{theDetail[0].price}}</div>
        <div class="product-version">
          <div class="choice-v">选择版本</div>
          <div class="p-version" @click="choicVersion($event)">
            <div class="choice-version">全网通 2GB+32GB</div>
            <div class="choice-version">全网通 4GB+64GB</div>
            <div class="choice-version">全网通 6GB+128GB</div>
          </div>
        </div>
        <div class="product-color">
          <div class="choice">选择颜色</div>
          <div class="p-color">
            <div class="choice-color">金色</div>
            <div class="choice-color">玫瑰金</div>
            <div class="choice-color">磨砂黑</div>
            <div class="choice-color">银色</div>
            <div class="choice-color">极光蓝</div>
          </div>
        </div>
        <div class="product-count">
          <div class="choice-c">选择数量</div>
          <div class="p-count">
            <input type="button" name class="down" @click="handledec" value="-">
            <input type="text" class="cou" name v-model="count" value="count">
            <input type="button" name class="up" @click="handleAdd" value="+">
          </div>
          <p>(限购 5 部)</p>
        </div>
        <!--加入购物车部分-->
        <div class="p-buy">
          <p>
            <span class="totalPrice">￥{{totalPrice}}</span> &nbsp;&nbsp;&nbsp;已选： 全网通版&nbsp; 3GB+64GB 金色&nbsp;&nbsp;
            <span class="total-amount">{{count}}</span>件
          </p>
          <div class="add-tocart" @click="addCart(theDetail[0].id)">加入购物车</div>
          <div class="imm-buy" @click="toPay(theDetail[0].id)">立即购买</div>
        </div>
      </div>
    </div>
    <bottom-home></bottom-home>
  </div>
</template>

<script>
import BottomHome from "@/components/footer/BottomHome";

export default {
  name: "Detail",
  components: {
    BottomHome: BottomHome
  },
  data() {
    return {
      midImg: "",
      smallImg: [],
      theDetail: {},
      version: '',
      color: '',
      count: 1
    };
  },
  created() {
    const _id = this.$route.query.id;
    // 根据id获取对应商品详情
    this.$http.getDetail(_id).then(resp => {
      //   console.log(resp)
      this.theDetail = resp.data.res_body.list;
      // console.log(this.theDetail)
    });
    this.$http.getDetailImg().then(resp => {
      //   console.log(resp);
      const list = resp.data.res_body.list;
      this.midImg = list[0].img;
      this.smallImg = list.slice(0, 4);
      //   console.log(this.smallImg)
    });
  },
  computed: {
    singlePrice: function() {
      return this.theDetail[0].price;
    },
    totalPrice: function() {
      return this.singlePrice * this.count;
    }
  },
  methods: {
    //   选择版本
    choicVersion(e) {
        console.log(e)
        this.version = e.target.innerText
        console.log(this.version)
    },
    //   数量加按钮
    handleAdd() {
      this.count++;
      if (this.count > 5) this.count = 5;
    },
    //   数量减按钮
    handledec() {
      this.count--;
      if (this.count < 1) this.count = 1;
    },
    addCart(id) {
      //   console.log(id)
      alert("添加购物车成功! id为" + id);
    },
    toPay(id) {
      //   console.log(id)
      this.$router.push({
        path: `/order`
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.warp {
  width: 100%;
  height: 100%;
  background: #f4f4f1;

  .detail {
    width: 93%;
    height: 1000px;
    // border: 1px solid black;
    background: #fff;
    margin: 0 auto;
    padding-top: 100px;
    box-sizing: border-box;
    .pic-wrap {
      width: 800px;
      height: 750px;
      // border: 1px solid rebeccapurple;
      position: relative;
      .p-m {
        width: 400px;
        height: 500px;
        margin: 30px auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .smallImg {
        width: 400px;
        height: 120px;
        position: absolute;
        bottom: 0;
        left: 25%;
        display: flex;
        justify-content: space-between;
        .itemSmallImg {
          width: 25%;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 60px;
            height: 70px;
          }
        }
      }
    }

    .p-right {
      width: 950px;
      height: 900px;
      padding-top: 50px;
      // border: 1px solid rebeccapurple;
      position: absolute;
      top: 0;
      right: 0;
      .p_title {
        width: 600px;
        height: 110px;
        border-bottom: 1px solid #dddada;
        span {
          font-size: 32px;
          font-weight: bold;
          display: block;
          margin-top: 25px;
        }
        p {
          font-size: 16px;
          font-weight: bold;
          margin-top: 20px;
        }
      }
      .singlePrice {
        width: 600px;
        height: 100px;
        line-height: 100px;
        font-size: 36px;
        color: #f51200;
        font-weight: bold;
        border-bottom: 1px solid #dddada;
      }
      .product-version {
        width: 600px;
        height: 150px;
        .choice-v {
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          margin-top: 10px;
          font-weight: bold;
        }
        .p-version {
          width: 600px;
          height: 100px;
          .choice-version {
            float: left;
            width: 185px;
            height: 40px;
            line-height: 40px;
            border: 1px solid gray;
            border-radius: 3px;
            margin: 0 15px;
            margin-top: 25px;
            text-align: center;
            font-size: 14px;
            cursor: pointer;
          }
        }
      }
      .product-color {
        width: 600px;
        height: 120px;
        margin-top: 40px;
        .choice {
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          margin-top: 10px;
          font-weight: bold;
        }
        .p-color {
          width: 600px;
          height: 100px;
          .choice-color {
            float: left;
            width: 80px;
            height: 40px;
            line-height: 40px;
            border: 1px solid gray;
            border-radius: 3px;
            margin: 0 15px;
            margin-top: 25px;
            text-align: center;
            font-size: 14px;
          }
        }
      }
      .product-count {
        width: 600px;
        height: 130px;
        margin-top: 10px;
        border-bottom: 1px solid #dddada;
        position: relative;
        .choice-c {
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          margin-top: 10px;
          font-weight: bold;
        }
        .p-count {
          float: left;
          margin-left: 35px;
          input {
            margin-top: 17px;
            width: 35px;
            height: 35px;
            float: left;
            background: white;
            border: 1px solid;
          }
          .up {
            cursor: pointer;
          }
          .cou {
            width: 60px;
            text-align: center;
            border-left: none;
            border-right: none;
          }
        }
        p {
          color: #999999;
          position: absolute;
          left: 190px;
          top: 53px;
        }
      }

      .p-buy {
        width: 600px;
        height: 200px;
        p {
          margin-top: 55px;
          line-height: 25px;
          color: #666666;
          font-size: 16px;
          .totalPrice {
            font-size: 19px;
            font-weight: bold;
            color: red;
          }
        }
        .total-amount {
          color: red;
        }
      }
      .add-tocart {
        display: inline-block;
        width: 170px;
        height: 50px;
        text-align: center;
        color: white;
        line-height: 50px;
        border-radius: 40px;
        background: #dd7a23;
        margin-top: 55px;
        cursor: pointer;
      }
      .imm-buy {
        display: inline-block;
        width: 170px;
        height: 50px;
        text-align: center;
        color: white;
        line-height: 50px;
        border-radius: 40px;
        background: #f51200;
        margin-top: 55px;
        margin-left: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
