<template>
    <div class="cart">
        <div class="title">
            <span class="titleName">我的购物车</span>
            <router-link 
            tag="span"
            :to="{
                path: `/home`,
               }"
            class="goToMall">继续购物 >
            </router-link>
        </div>
        <div class="content">
            <ul class="tab-header">
                <li><a-checkbox 
                :indeterminate="indeterminate"
                @change="onCheckAllChange"
                :checked="checkAll">多选/全选</a-checkbox></li>
                <li>商品名称</li>
                <li>价格</li>
                <li>数量</li>
                <li>小计（元）</li>
                <li>操作</li>
            </ul>
            <div class="cartItem"
                v-for="(item,index) in cart"
                :key="index"
            >
                <form action="">
                    <a-checkbox class="checkBox" ref="{{index}}" @change="onChange"></a-checkbox>
                    <div class="itemPic">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="itemTitle">
                        <span class="itemVersion">
                            VIVO X20  4GB+64GB
                        </span>
                        <span class="itemColor">
                            颜色：{{item.color}}
                        </span>
                    </div>
                    <div class="itemPrice">
                        {{item.price}}
                    </div>
                    <div class="itenCount">
                        <div class="dec" @click="handledec(item,index)">
                            -
                        </div>
                        <div class="count">
                            {{item.count}}
                        </div>
                        <div class="add" @click="handleAdd(item,index)">
                            +
                        </div>
                    </div>
                    <div class="totalprice">
                        {{item.totalPrice}}
                    </div>
                    <div class="handle">
                        <a-button type="danger" icon="delete" ghost @click="handleDelete(item,index)">删除</a-button>
                    </div>
                </form>
            </div>
            <div class="toPay">
                <a-checkbox class="checkBox" @change="onChange">全选</a-checkbox>
                <div class="delAll">
                    删除选中商品
                </div>
                <div class="calculate">
                    已选商品<span class="count"> 2 </span>件, 合计：<span class="totalPrice">￥2397.00</span>
                    <router-link 
                    class="btn_toPay"
                    tag="div"
                    :to="{
                        path: `/order`,
                       }"
                    >
                    去结算
                    </router-link>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
// const plainOptions = [this.$refs]
export default {
    name: 'Cart',
    data() {
        return {
            cart: [],
            count: '',
            color: '',
            price: '',
            indeterminate: true,
            checkAll: false,
            plainOptions: [],
        }
    },
    created() {
        this.cart = JSON.parse(window.sessionStorage.cart)
        console.log(this.cart)
        // this.count = this.cart[0].count
        // this.color = this.cart[0].color
        // this.price = this.cart[0].price
    },
    mounted() {
        this.plainOptions = this.$refs.checked
    },
    methods: {
        //   数量加按钮
        handleAdd(item,index) {
            item.count++;
            if (item.count > 5) 
                item.count = 5;
            item.totalPrice = item.price * item.count
            window.sessionStorage.setItem('cart',JSON.stringify(this.cart))
        },
        //   数量减按钮
        handledec(item,index) {
            item.count--;
            if (item.count < 1) 
                item.count = 1;
            item.totalPrice = item.price * item.count
            window.sessionStorage.setItem('cart',JSON.stringify(this.cart))
        },
        // 删除单项
        handleDelete(item,index) {
            console.log(item,index)
            this.cart = this.cart.filter((delItem,_index) => _index !== index)
            window.sessionStorage.setItem('cart',JSON.stringify(this.cart))
        },
        // 复选框按钮
        onChange (checkedList) {
            this.indeterminate = !!checkedList.length && (checkedList.length < plainOptions.length)
            this.checkAll = checkedList.length === plainOptions.length
        },
        // 全选按钮
        onCheckAllChange (e) {
            // this.plainOptions = this.$refs.checked
            console.log(this.$refs)
            Object.assign(this, {
                checkedList: e.target.checked ? plainOptions : [],
                indeterminate: false,
                checkAll: e.target.checked,
            })
        },
    }
}
</script>

<style lang='scss' scoped>
    .cart {
        height: 100%;
        background: #f4f4f1;
        .title {
            width: 88%;
            height: 60px;
            background: #fff;
            margin: 0 auto;
            line-height: 60px;
            .titleName {
                display: inline-block;
                width: 120px;
                height: 60px;
                text-align: center;
                margin-left: 47%;
                font-size: 22px;
                font-weight: bold;
            }
            .goToMall {
                float: right;
                margin-right: 30px;
                cursor: pointer;
            }
        }
        .content {
            width: 88%;
            margin: 0 auto;
            margin-top: 20px;
            .tab-header {
                width: 100%;
                height: 64px;
                line-height: 64px;
                background: #fff;
                position: relative;
                li {
                    list-style: none;
                    position: absolute;
                    font-weight: bold;
                }
                li:nth-child(1) {
                    left: 50px;
                    .checkBox {
                        width: 25px;
                        height: 25px;
                        position: absolute;
                        top: 20px;
                    }
                    span {
                        margin-left: 40px;
                    }
                }
                li:nth-child(2) {
                    left: 350px;
                }
                li:nth-child(3) {
                    left: 730px;
                }
                li:nth-child(4) {
                    left: 1023px;
                }
                li:nth-child(5) {
                    right: 400px;
                }
                li:nth-child(6) {
                    right: 185px;
                }
                
            }
            .cartItem {
                height: 155px;
                margin-top: 5px;
                background: #fff;
                position: relative;
                form {
                    .checkBox {
                        width: 25px;
                        height: 25px;
                        background-color: #fff;
                        position: absolute;
                        left: 50px;
                        top: 40%; 
                    }
                    .itemPic {
                        width: 110px;
                        height: 110px;
                        border: 1px solid #ececec;
                        position: absolute;
                        left: 150px;
                        top: 25px;
                            img {
                                width: 70px;
                                height: 90px;
                                margin: 10px 20px;
                            }
                    }
                    .itemTitle {
                        width: 274px;
                        height: 100%;
                        position: absolute;
                        left: 350px;
                        font-size: 12px;
                        .itemVersion {
                            display: block;
                            height: 32px;
                            margin-top: 47px;
                            color: #333333;
                            line-height: 32px;
                        }
                        .itemColor {
                            display: block;
                            height:30px;
                            color: #686868;
                            line-height: 30px;
                        }
                    }
                    .itemPrice {
                        width: 165px;
                        height: 100%;
                        position: absolute;
                        left: 680px;
                        line-height: 154px;
                        text-align: center;
                    }
                    .itenCount {
                        width:150px;
                        position: absolute;
                        left: 980px;
                        top: 60px;
                        .dec,
                        .count,
                        .add {
                            width: 40px;
                            height: 40px;
                            border: 1px solid #bbbbbb;
                            line-height: 40px;
                            text-align: center;
                            float: left;
                            cursor: pointer;
                        }
                        .count {
                            width: 50px;
                        }
                    }
                    .totalprice {
                        width: 150px;
                        color: red;
                        position: absolute;
                        right: 380px;
                        line-height: 154px;
                        text-align: center;
                    }
                    .handle {
                        position: absolute;
                        right: 150px;
                        top: 60px;
                    }
                }
            }
            .toPay {
                height: 100px;
                margin: 0 auto;
                font-weight: bold;
                background: #fff;
                margin-top: 25px;
                position: relative;
                    .checkBox {
                        width: 100px;
                        height: 25px;
                        background-color: #fff;
                        position: absolute;
                        left: 50px;
                        top: 40%; 
                    }
                    .checkAll {
                        display: block;
                        position: absolute;
                        left: 110px;
                        top: 41%; 
                    }
                    .delAll {
                        position: absolute;
                        left: 200px;
                        top: 41%; 
                    }
                    .calculate {
                        width: 540px;
                        height: 100px;
                        line-height: 100px;
                        font-size: 16px;
                        position: absolute;
                        right: 50px;
                        .count {
                            color: red;
                        }
                        .totalPrice {
                            color: red;
                            font-size: 30px;
                        }
                        .btn_toPay {
                        width: 150px;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        border-radius: 40px;
                        color: white;
                        background: #f51200;
                        position: absolute;
                        right: 20px;
                        top: 32%;
                        cursor: pointer;
                        }
                    }
                    
            }
        }
    }
</style>
 