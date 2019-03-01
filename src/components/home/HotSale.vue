<template>
  <div class="hotSale">
    <div class="title">热卖专区</div>
    <div class="hotWrap">
      <dl v-for="item in hotList" :key="item.id">
        <img :src="item.image">
        <dt>耳机原装正品入耳式</dt>
        <dd>￥{{item.price}}</dd>
      </dl>
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
    this.$http.getHotSale().then(resp => {
      //   console.log(resp.data.data.items.list)
      const result = resp.data.data.items.list;
      this.hotList = result.slice(0, 3);
      console.log(this.hotList);
    });
  }
};
</script>

<style lang='scss' scoped>
.hotSale {
  height: 475px;

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
    height: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    dl{
        width: 32.6%;
        height: 400px;
        background: white;
        color: black;

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
