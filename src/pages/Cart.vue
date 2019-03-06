<template>
    <div class="cart">
        <div class="title">
            <span class="titleName">我的购物车</span>
            <span class="goToMall">继续购物 ></span>
        </div>
        <div class="content">
            <ul class="tab-header">
                <li><input type="checkbox"/>全选/多选</li>
                <li>商品名称</li>
                <li>价格</li>
                <li>数量</li>
                <li>小计（元）</li>
                <li>操作</li>
            </ul>
            <div class="cartItem">
                <form action="">
                    <input type="checkbox" name="" id="">
                    <div class="itemPic">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="itemTitle">
                        <span class="itemVersion">
                            VIVO X20  4GB+64GB
                        </span>
                        <span class="itemColor">
                            颜色：玫瑰金
                        </span>
                    </div>
                    <div class="itemPrice">
                        1598.00
                    </div>
                    <div class="itenCount">
                        <div class="dec">
                            -
                        </div>
                        <div class="count">
                            1
                        </div>
                        <div class="add">
                            +
                        </div>
                    </div>
                    <div class="totalprice">
                        1598.00
                    </div>
                    <div class="handle">
                        <a-button type="danger" icon="delete" ghost>删除</a-button>
                    </div>
                </form>
            </div>
            <div class="cartItem">
                <form action="">
                    <input type="checkbox" name="" id="">
                    <div class="itemPic">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="itemTitle">
                        <span class="itemVersion">
                            VIVO X20  4GB+64GB
                        </span>
                        <span class="itemColor">
                            颜色：玫瑰金
                        </span>
                    </div>
                    <div class="itemPrice">
                        1598.00
                    </div>
                    <div class="itenCount">
                        <div class="dec">
                            -
                        </div>
                        <div class="count">
                            1
                        </div>
                        <div class="add">
                            +
                        </div>
                    </div>
                    <div class="totalprice">
                        1598.00
                    </div>
                    <div class="handle">
                        <a-button type="danger" icon="delete" ghost>删除</a-button>
                    </div>
                </form>
            </div>
            <div class="cartItem">
                <form action="">
                    <input type="checkbox" name="" id="">
                    <div class="itemPic">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="itemTitle">
                        <span class="itemVersion">
                            VIVO X20  4GB+64GB
                        </span>
                        <span class="itemColor">
                            颜色：玫瑰金
                        </span>
                    </div>
                    <div class="itemPrice">
                        1598.00
                    </div>
                    <div class="itenCount">
                        <div class="dec">
                            -
                        </div>
                        <div class="count">
                            1
                        </div>
                        <div class="add">
                            +
                        </div>
                    </div>
                    <div class="totalprice">
                        1598.00
                    </div>
                    <div class="handle">
                        <a-button type="danger" icon="delete" ghost>删除</a-button>
                    </div>
                </form>
            </div>
            <div class="toPay">
                <input type="checkbox"><span class="checkAll">全选</span>
                <div class="delAll">
                    删除选中商品
                </div>
                <div class="calculate">
                    已选商品<span class="count"> 2 </span>件, 合计：<span class="totalPrice">￥2397.00</span>
                    <div class="btn_toPay">
                    去结算
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

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
                li {
                    float: left;
                    list-style: none;
                    margin: 0 60px;
                }
                
            }
            .cartItem {
                height: 155px;
                margin-top: 5px;
                background: #fff;
                position: relative;
                form {
                    input {
                        width: 25px;
                        height: 25px;
                        border: 1px solid red;    
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
                    input {
                        width: 25px;
                        height: 25px;
                        border: 1px solid red;    
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
                        }
                    }
                    
            }
        }
    }
</style>
 