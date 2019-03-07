<template>
    <div class="detail">
        <div class="pic-wrap">
			<!--手机大图-->
			<div class="p-m">
                <img :src="midImg" alt="">
            </div>
            <div class="smallImg">
                <div class="itemSmallImg" v-for="item in smallImg" :key="item.id">
                    <img :src="item.img" alt="">
                </div>
            </div>
        </div>
			
			<!--右边的列表-->
			<div class="p-right">
				<div class="p_title">
                    <span> 全面屏  4GB+64GB  玫瑰金</span>
                    <p>面部识别，0.1s解锁</p>
                </div>
                <div class="singlePrice">
                    ￥1698
                </div>
				<div class="product-version">
					<div class="choice-v">选择版本</div>
					<div class="p-version">
						<div class="choice-version">
                            全网通  6GB+64GB
						</div>
						<div class="choice-version">
                            全网通  6GB+64GB
						</div>
						<div class="choice-version">
                            全网通  6GB+64GB
						</div>
					</div>
				</div>
				<div class="product-color">
					<div class="choice">选择颜色</div>
					<div class="p-color">
                        <div class="choice-color">
                            金色
						</div>
                        <div class="choice-color">
                            玫瑰金
						</div>
                        <div class="choice-color">
                            磨砂黑
						</div>
                        <div class="choice-color">
                            银色
						</div>
                        <div class="choice-color">
                            极光蓝
						</div>
					</div>
				</div>
				<div class="product-count">
					<div class="choice-c">选择数量</div>
					<div class="p-count">
						<input type="button" name="" class="down" value="-" />
						<input type="text" class="cou" name="" id="" value="1" />
						<input type="button" name="" class="up" value="+" />
					</div>
                    <p>(限购 5 部)</p>
				</div>
				<!--加入购物车部分-->
				<div class="p-buy">
                    <p><span class="totalPrice">￥1698</span>   &nbsp;&nbsp;&nbsp;已选： 全网通版&nbsp; 3GB+64GB 金色&nbsp;&nbsp;  <span class="total-amount">1 </span>件</p>
					<div class="add-tocart">加入购物车</div>
					<div class="imm-buy">立即购买</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
    name: 'Detail',
    data() {
        return {
            midImg: '',
            smallImg: []
        }
    },
    created() {
    this.$http.getDetailImg().then(resp => {
    //   console.log(resp);
      const list = resp.data.res_body.list;
      this.midImg = list[0].img;
      this.smallImg = list.slice(0,4);
      console.log(this.smallImg)
    });
  }
}
</script>

<style lang='scss' scoped>
    .detail {
        width: 88%;
        height: 900px;
        // border: 1px solid black;
        margin: 0 auto;
        margin-top: 50px;
        position: relative;
        box-sizing: border-box;
        .pic-wrap{
            width: 700px;
            height: 750px;
            // border: 1px solid rebeccapurple;
            margin-left: 100px;
            position: relative;
            .p-m{
                width: 400px;
                height: 500px;
                margin: 30px auto;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .smallImg {
                width: 400px;
                height: 120px;
                position: absolute;
                bottom: 0;
                left: 21%;
                display: flex;
                justify-content: space-between;
                .itemSmallImg {
                    width: 25%;
                    height: 120px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width: 60px;
                        height: 70px;
                    }
                }
            }
        }
    
        .p-right{
            width: 850px;
            height: 900px;
            // border: 1px solid rebeccapurple;
            position: absolute;
            top: 0;
            right: 0;
            .p_title {
                width: 600px;
                height: 110px;
                border-bottom: 1px solid #dddada;
                span {
                    font-size: 32px;
                    font-weight: bold;
                    display: block;
                    margin-top: 25px;
                }
                p {
                    font-size: 16px;
                    font-weight: bold;
                    margin-top: 20px;
                }
                
            }
            .singlePrice {
                width: 600px;
                height: 100px;
                line-height: 100px;
                font-size: 36px;
                color: #f51200;
                font-weight: bold;
                border-bottom: 1px solid #dddada;
            }
            .product-version{
                width: 600px;
                height: 150px;
                .choice-v{
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    margin-top: 10px;
                    font-weight: bold;
                }
                .p-version{
                    width: 600px;
                    height: 100px;
                    .choice-version {
                        float: left;
                        width: 185px;
                        height: 40px;
                        line-height: 40px;
                        border: 1px solid gray;
                        border-radius: 3px;
                        margin:0 15px;
                        margin-top: 25px;
                        text-align: center;
                        font-size: 14px;
                    }
                }
            }
            .product-color{
                width: 600px;
                height: 120px;
                margin-top: 40px;
                .choice{
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    margin-top: 10px;
                    font-weight: bold;
                }
                .p-color{
                    width: 600px;
                    height: 100px;
                    .choice-color {
                        float: left;
                        width: 80px;
                        height: 40px;
                        line-height: 40px;
                        border: 1px solid gray;
                        border-radius: 3px;
                        margin:0 15px;
                        margin-top: 25px;
                        text-align: center;
                        font-size: 14px;
                    }
                }
            }
            .product-count{
                width: 600px;
                height: 130px;
                margin-top: 10px;
                border-bottom: 1px solid #dddada;
                position: relative;
                .choice-c{
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    margin-top: 10px;
                    font-weight: bold;
                }
                .p-count{
                    float: left;
                    margin-left: 35px;
                    input{
                        margin-top: 17px;
                        width: 35px;
                        height: 35px;
                        float: left;
                        background: white;
                        border: 1px solid;
                    }
                    .cou{
                        width: 60px;
                        text-align: center;
                        border-left: none;
                        border-right: none;
                    }
                }
                p {
                    color: #999999;
                    position: absolute;
                    left: 190px;
                    top: 53px;
                }
            }

            .p-buy{
                width: 600px;
                height: 200px;
                p{
                    margin-top: 55px;
                    line-height: 25px;
                    color: #666666;
                    font-size: 16px;
                    .totalPrice {
                        font-size: 19px;
                        font-weight: bold;
                        color: red;
                    }
                    }
                    .total-amount{
                        color: red;
                    }
                }
                .add-tocart{
                    display: inline-block;
                    width: 170px;
                    height: 50px;
                    text-align: center;
                    color: white;
                    line-height: 50px;
                    border-radius: 40px;
                    background: #ff9536;
                    margin-top: 55px;
                }
                .imm-buy{
                    display: inline-block;
                    width: 170px;
                    height: 50px;
                    text-align: center;
                    color: white;
                    line-height: 50px;
                    border-radius: 40px;
                    background: #f51200;
                    margin-top: 55px;
                    margin-left: 30px;
                }
            }
        
    }
</style>
