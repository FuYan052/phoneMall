<template>
  <div class="hotSale">
    <div class="title">热卖专区</div>
    <div class="hotWrap">
      <router-link 
      v-for="item in hotList" 
      :key="item.productId"
      tag="dl" 
      :to="{
                path: `/detail`,
                query: {
                    id:item.productId
                }}"
      >
        <img :src="item.imgUrl">
        <dt>{{item.productName}}</dt>
        <dd>￥{{item.productSize}}</dd>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotSale",
  data() {
    return {
      hotList: []
    };
  },
  created() {
    this.$http.getAllPro().then(resp => {
      console.log(resp)
      //   console.log(resp.data.data.items.list)
      // const result = resp.data.data.items.list;
      const result = resp.data;
      const List = result.filter(item => item.sellPoint == '热卖')
      this.hotList = List.slice(0,3)
      console.log(this.hotList)
      // console.log(this.hotList);
    });
  }
};
</script>

<style lang='scss' scoped>
.hotSale {
  height: 575px;

  .title {
    width: 100%;
    height: 75px;
    line-height: 75px;
    text-align: center;
    font-size: 22px;
    color: black;
    font-weight: normal;
  }
  .hotWrap {
    width: 88%;
    height: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    dl{
        width: 32.6%;
        height: 500px;
        background: white;
        color: black;
        cursor: pointer;


        dt {
            margin-top: -30px;
        }
        
        dt,dd {
            font-size: 12px;
            height: 30px;
            line-height: 30px;
            width: 100%;
        }
        dd{
            color: red;
        }

        img {
            width: 145px;
            height: 184px;
            margin: 45px auto;
        }
    }
  }
}
</style>
