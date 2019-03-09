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
                <router-link to="/admin/product" tag="span">
              商品管理
              </router-link>
              </span>
              <a-menu-item key="3">Tom</a-menu-item>
              <a-menu-item key="4">Bill</a-menu-item>
              <a-menu-item key="5">Alex</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="1111">
              <span slot="title">
                <a-icon type="user"/>
                <router-link to="/admin/user/userlist" tag="span">
              用户管理
              </router-link>
              </span>
              <a-menu-item key="3">用户列表</a-menu-item>
              <a-menu-item key="4">编辑用户</a-menu-item>
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
  created() {}
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
