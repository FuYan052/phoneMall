<template>
  <div class="ManagementSystem">
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <div class="logo"/>
        <span class="phoneMallTitle">众尚机城后台管理系统</span>
      </a-layout-header>
      <a-layout>
        <a-layout-sider collapsible v-model="collapsed">
          <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
            <a-menu-item key="1">
              <a-icon type="pie-chart"/>
              <router-link to="/admin/order" tag="span">
              订单管理
              </router-link>
            </a-menu-item>
            <a-sub-menu key="sub9">
              <span slot="title">
                <a-icon type="user"/>
                <router-link to="/admin/order" tag="span">
              商品管理
              </router-link>
              </span>
              <a-menu-item key="3" @click="openProductList">商品列表</a-menu-item>
              <a-menu-item key="4" @click="openProductEdit">编辑商品</a-menu-item>
              <a-menu-item key="5" @click="openProductAdd">上新商品</a-menu-item>
              <a-menu-item key="6" @click="openProductColor">商品颜色</a-menu-item>
              <a-menu-item key="7" @click="openProductVersion">商品版本</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="1111">
              <span slot="title">
                <a-icon type="user"/>
                <router-link to="/admin/userlist" tag="span">
              用户管理
              </router-link>
              </span>
              <a-menu-item key="3" @click="openList">用户列表</a-menu-item>
              <!-- <a-menu-item key="4" @click="openEdit">编辑用户</a-menu-item> -->
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content
            :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
          >
          <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "ManagementSystem",
  data() {
    return {
      collapsed: false
    };
  },
  created() {},
  methods: {
    // 用户管理
    openList() {
      this.$router.push({
        path: '/admin/userlist'
      })
    },
    openEdit() {
      this.$router.push({
        path: '/admin/useredit'
      })
    },
    
    // 商品管理
    openProductList() {
      this.$router.push({
        path: '/admin/productlist'
      })
    },
    openProductEdit() {
      this.$router.push({
        path: '/admin/productedit'
      })
    },
    openProductAdd() {
      this.$router.push({
        path: '/admin/productadd'
      })
    },
    openProductColor() {
      this.$router.push({
        path: '/admin/productcolor'
      })
    },
    openProductVersion() {
      this.$router.push({
        path: '/admin/productversion'
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.ManagementSystem {
  height: 100%;

  #components-layout-demo-top-side-2 {
  height: 100%;
    .phoneMallTitle {
      color: white;
      font-size: 20px;
    }
  }
  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
}
</style>
