<template>
  <div class="home">
    <div id="components-layout-demo-basic">
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>
          <home-swiper></home-swiper>
          <hot-sale></hot-sale>
          <supreme-phone></supreme-phone>
        </a-layout-content>
        <a-layout-footer>
          <bottom-home></bottom-home>
          </a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>

<script>
import HomeSwiper from "@/components/home/HomeSwiper";
import HotSale from "@/components/home/HotSale";
import SupremePhone from "@/components/home/SupremePhone";
import BottomHome from "@/components/footer/BottomHome";

export default {
  name: "Home",
  components: {
    homeSwiper: HomeSwiper,
    HotSale: HotSale,
    SupremePhone:SupremePhone,
    BottomHome:BottomHome
  }
};
</script>

<style lang='scss'>
.home {
  height: 100%;
}
#components-layout-demo-basic,
.ant-layout {
  height: 100%;
  text-align: center;
  justify-content: space-between;
}
#components-layout-demo-basic .ant-layout-header{
  background: #474745;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
	background: white;
}
#components-layout-demo-basic .ant-layout-content {
  background: #f4f4f1;
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
</style>
