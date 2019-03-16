<template>
  <div class="supremePhone">
    <div class="title">精品手机</div>
    <div class="hotWrap">
      <router-link 
      v-for="item in supremePhoneList" 
      :key="item.id"
      tag="dl" 
      :to="{
                path: `/detail`,
                query: {
                    id:item.id
                }}"
      >
        <img :src="item.image">
        <dt>耳机原装正品入耳式</dt>
        <dd>￥{{item.price}}</dd>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupremePhone",
  data() {
    return {
      supremePhoneList: []
    };
  },
  created() {
    this.$http.getHotSale().then(resp => {
      //   console.log(resp.data.data.items.list)
      const result = resp.data.data.items.list;
      this.supremePhoneList = result.slice(0, 8);
      // console.log(this.supremePhoneList);
    });
  }
};
</script>

<style lang='scss' scoped>
.supremePhone {
  height: 750px;

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
    height: 650px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;

    dl{
        width: 24.2%;
        height: 320px;
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
            width: 120px;
            height: 145px;
            margin: 25px auto;
        }
    }
  }
}
</style>
