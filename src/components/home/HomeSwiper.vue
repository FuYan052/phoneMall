<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div 
        class="swiper-slide"
        v-for="item in swiperPic"
        :key="item.b_id"
      ><img :src="item.url"></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperPic: [],
    };
  },
  created() {
    // console.log(this.$http)
    this.$http.getBanners()
        .then(resp => {
            console.log(resp.data)
            this.swiperPic = resp.data.data
            console.log(this.swiperPic)
            this.$nextTick().then(this.initSwiper)
        })
        
  },
  
  mounted() {
    // this.initSwiper();
  },
  methods: {
    initSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        autoplay: true, // 自动轮播
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }

      });
    }
  }
};
</script>
<style>
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  margin: 0 15px;
  background: none;
  border: 1px solid #fff;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  width: 20px;
  border-radius: 10px;
  background: #fff;
}
</style>
<style lang='scss' scoped>
.swiper-container {
  width: 100%;
  height: 900px;
  position: relative;

  .swiper-wrapper {
    .swiper-slide {
      width: 100%;
      height: 900px;

      img{
        width: 100%;
        height: 900px;
      }
    }
  }
  .swiper-pagination {
    height: 30px;
    line-height: 30px;
    bottom: 0;
  }
}
</style>
