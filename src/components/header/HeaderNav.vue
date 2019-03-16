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
        
        <p class="username">
            欢迎您：张三
        </p>
        <a-dropdown>
            <a-icon class="user" type="user" />
            <a-menu slot="overlay">
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
export default {
    name: 'HeaderNav',
    data() {
        return {
            navs: [],
            placements: 'bottomRight',
        }    
    },
    methods: {
      
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
            margin: 0 auto;
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
            right: 12%;
            top: 0;
        }
        // #menu-item {
        //     height: 70px;
        //     line-height: 70px;
        //     font-weight: bold;
        // }
    }

</style>
