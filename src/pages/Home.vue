<template>
  <div class="home">
    <div id="components-layout-demo-basic">
      <a-layout>
        <a-layout-header>
          <header-nav></header-nav>
        </a-layout-header>
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
import HeaderNav from "@/components/header/HeaderNav";

export default {
  name: "Home",
  components: {
    homeSwiper: HomeSwiper,
    HotSale: HotSale,
    SupremePhone:SupremePhone,
    BottomHome:BottomHome,
    HeaderNav:HeaderNav
  }
};
</script>

<style lang='scss'>
.home {
  height: 100%;
}
#components-layout-demo-basic,
.ant-layout {
  text-align: center;
  justify-content: space-between;
}
#components-layout-demo-basic .ant-layout-header{
  background: #7197ef;
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
