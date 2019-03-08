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
    </div>
</template>

<script>
export default {
    name: 'HeaderNav',
    data() {
        return {
            navs: [],
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
    }

</style>
