<template>
    <div class="phonelist">
        <div class="wrapNav">
            <h1>手机列表</h1>
        </div>
        <div class="wrapList">
            <router-link
            tag="dl"
            v-for="item in phoneList" 
            :key="item.id"
            :to="{
                path: `/detail`,
                query: {
                    id:item.id
                }}"
            > 
                <img :src="item.img" alt="">
                <dt>{{item.title}}</dt>
                <dd>￥{{item.price}}</dd>
            </router-link>
        </div>
        <div class="pages">
            <a-pagination 
            showQuickJumper 
            :defaultCurrent="current" 
            :total="listLength" 
            :pageSize="pageSize"
            @change="onChange" />
        </div>
        <div class="footer">
            <bottom-home></bottom-home>
        </div>
    </div>
</template>

<script>
import BottomHome from "@/components/footer/BottomHome";
export default {
    name: 'PhoneList', 
    components: {
    BottomHome:BottomHome
    },
    data() {
        return {
            phoneList: [],
            listLength: null,
            pageSize: 12,
            current:1,
            pagination: {
                pageSize: 12,
            },
        }
    },
    methods: {
        
        onChange(pageNumber) {
            console.log('Page: ', pageNumber);
        },
    },
       
    created() {
        this.$http.getList().then(resp => {
            // console.log(resp)
            this.phoneList = resp.data.res_body.list
            this.listLength = this.phoneList.length
            // console.log(typeof(this.listLength))
        });

    }
}
</script>

<style lang='scss' scoped>
    .phonelist {
        background: #f1f1ef;
        .wrapNav {
            width: 85%;
            height: 130px;
            background: #fff;
            margin: 0 auto;
            margin-top: 70px;
        }
        .wrapList {
            width: 85%;
            // height: 800px;
            // border: 1px solid peru;
            margin: 0 auto;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            dl {
                width: 24.3%;
                height: 500px;
                margin-top: 15px;
                background: #fff;
                cursor: pointer;
                img {
                    width: 50%;
                    height: 300px;
                    margin-top: 50px;
                    margin-left: 26%;
                }
                dt,dd {
                    text-align: center;
                    margin-top: 45px;
                    font-weight: bold;
                }
                dd {
                    margin-top: 30px;
                    color: red;
                }
            }
        }
        .pages {
            width: 85%;
            height: 60px;
            // border: 1px solid peru;
            margin: 0 auto;
            margin-top: 40px;
        }
        .footer {
            margin-top: 100px;
            background: #fff;
        }
    }

</style>
