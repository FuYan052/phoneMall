<template>
    <div class="phonelist">
        <div class="wrapNav">
            <h1>手机列表</h1>
        </div>
        <!-- 这里换成渲染currentList -->
        <div class="wrapList">
            <router-link
            tag="dl"
            v-for="item in currentList" 
            :key="item.productId"
            :to="{
                path: `/detail`,
                query: {
                    id:item.productId
                }}"
            > 
                <img :src="item.imgUrl" alt="">
                <dt>{{item.productName}}</dt>
                <dd>￥{{item.productSize}}</dd>
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
            currentList: [],    //当前页数据列表
            listLength: null,
            pageSize: 12,
            current:1,
            vivo: [],
            oppo: [],
            huawei: [],
            meizu: [],
            xiaomi: [],
            sanxing: [],
        }
    },
    methods: {
        onChange(pageNumber) {
            this.current = pageNumber;  // 当前页改变
            console.log('Page: ', pageNumber);
            // 当前页起始下标及结束下标
            const start = (this.current - 1) * this.pageSize;
            const end = start + this.pageSize;
            // 当前页数据列表
            this.currentList = this.phoneList.slice(start, end)
        },
    },
       
    created() {
        //  console.log(this.$route)
        //  const brandId = this.$route.params.id
        //  console.log(brandId)

        // this.$http.getList().then(resp => {
        //     // console.log(resp)
        //     this.phoneList = resp.data.res_body.list
        //     // 第一次进入是当前页数据列表
        //     this.currentList = this.phoneList.slice(0, 12)
        //     console.log(this.currentList)
        //     this.listLength = this.phoneList.length
        // });

        // 获取所有商品
        this.$http.getAllPro().then(resp => {
            const brandId = this.$route.params.id
            console.log(resp)
            const result = resp.data
            this.vivo = result.filter(item => item.brandId == 'V_202')
            this.huawei = result.filter(item => item.brandId == 'H_101')
            this.oppo = result.filter(item => item.brandId == 'O_303')
            this.meizu = result.filter(item => item.brandId == 'M_505')
            this.xiaomi = result.filter(item => item.brandId == 'X_404')
            this.sanxing = result.filter(item => item.brandId == 'S_606')
            
            if (brandId == 1001)
                this.phoneList = this.huawei
            if (brandId == 1002)
                this.phoneList = this.vivo
            if (brandId == 1003)
                this.phoneList = this.oppo
            if (brandId == 1004)
                this.phoneList = this.meizu
            if (brandId == 1005)
                this.phoneList = this.xiaomi
            if (brandId == 1006)
                this.phoneList = this.sanxing

            // this.phoneList = resp.data.res_body.list
            // 第一次进入是当前页数据列表
            this.currentList = this.phoneList.slice(0, 12)
            console.log(this.currentList)
            this.listLength = this.phoneList.length

            console.log(this.phoneList)
        })

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
