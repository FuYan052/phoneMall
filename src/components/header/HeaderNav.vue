<template>
    <div class="headerNav">
        <ul>
            <router-link
                v-for="item in navs" 
                :key="item.id"
                tag="li"
                :to="`/phonelist/${item.id}`"
                >
                {{item.title}}
            </router-link>
        </ul>
        
        <p class="username" v-show="isLogin">
            欢迎您：{{user}} &nbsp;&nbsp;&nbsp; <span class="logout" @click="handleLogout">退出登录</span>
        </p>
        <a-dropdown>
            <a-icon class="user" type="user" />
            <a-menu slot="overlay">
            <a-menu-item id="menu-item">
                <router-link
                tag="span"
                :to="{
                    path: `/mine`
                }"
                >个人中心</router-link>
            </a-menu-item>
            <a-menu-item id="menu-item">
                <router-link
                tag="span"
                :to="{
                    path: `/cart`
                }"
                >购物车</router-link>
            </a-menu-item>
            <a-menu-item id="menu-item">
                <router-link
                tag="span"
                :to="{
                    path: `/order`
                }"
                >我的订单</router-link>
            </a-menu-item>
            <a-menu-item id="menu-item">
                <router-link
                tag="span"
                :to="{
                    path: `/login`
                }"
                >登录/注册</router-link>
            </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations
} from 'vuex'
export default {
    name: 'HeaderNav',
    data() {
        return {
            navs: [],
            placements: 'bottomRight',
        }    
    },
    computed: {
        ...mapState(['user']),
        ...mapState(['isLogin'])
    },
    methods: {
        ...mapMutations(['logout']),
        handleLogout() {
            console.log("退出登录")
            window.sessionStorage.removeItem('user')
            this.logout()

        }
    },
       
    created() {
        this.$http.getNav().then(resp => {
            console.log(resp)
            this.navs = resp.data.res_body.data;
            console.log(this.navs)
            
        });

    }
}
</script>

<style lang='scss' scoped>
    .headerNav {
        position: relative;
        ul {
            width: 800px;
            height: 60px;
            margin: 0 23%;
            line-height: 60px;
            display: flex;
            justify-content: space-between;
            li {
                list-style: none;
                cursor: pointer;
            }
        }
        .user {
            color: white;
            font-size: 32px;
            position: absolute;
            line-height: 60px;
            right: 20%;
            top: 5px;
        }
        .username {
            color: white;
            position: absolute;
            line-height: 60px;
            right: 6%;
            top: 0;
            .logout {
                cursor: pointer;
            }
        }
        // #menu-item {
        //     height: 70px;
        //     line-height: 70px;
        //     font-weight: bold;
        // }
    }

</style>
