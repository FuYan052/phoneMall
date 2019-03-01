<template>
  <div id="footer">
    <ul class="vp-foot-category-list">
        <li>
            <dl class="vp-foot-category">
                <dt>热门链接</dt>
                <dd><a data-head-click-stat="cfrom=1110&amp;name=NEX双屏版" href="//www.vivo.com.cn/vivo/nexdualdisplay/">NEX双屏版</a></dd>
                <dd><a data-head-click-stat="cfrom=1110&amp;name=X23" href="//www.vivo.com.cn/vivo/x23/">X23</a></dd>
                <dd><a data-head-click-stat="cfrom=1110&amp;name=Z3" href="//www.vivo.com.cn/vivo/z3/">Z3</a></dd>
                <dd><a data-head-click-stat="cfrom=1110&amp;name=vivo摄影" href="http://gallery.vivo.com.cn/">vivo摄影</a></dd>
                <dd><a data-head-click-stat="cfrom=1110&amp;name=查找手机" href="http://findphone.vivo.com">查找手机</a></dd>
                <dd><a data-head-click-stat="cfrom=1110&amp;name=常见问题" href="//www.vivo.com.cn/service/questions/all">常见问题</a></dd>
            </dl>
        </li>
        <li>
            <dl class="vp-foot-category">
                <dt>在线购买</dt>
                <dd><a data-head-click-stat="cfrom=1111&amp;name=官方商城" href="https://shop.vivo.com.cn/">官方商城</a></dd>
                <dd><a data-head-click-stat="cfrom=1111&amp;name=选购手机" href="https://shop.vivo.com.cn/product/phone">选购手机</a></dd>
                <dd><a data-head-click-stat="cfrom=1111&amp;name=选购配件" href="https://shop.vivo.com.cn/product/parts">选购配件</a></dd>
                <dd><a data-head-click-stat="cfrom=1111&amp;name=政企服务" href="//www.vivo.com.cn/cooperation">政企服务</a></dd>
                <dd><a data-head-click-stat="cfrom=1111&amp;name=以旧换新" href="https://shopact.vivo.com.cn/page/recycle">以旧换新</a></dd>
                <dd><a data-head-click-stat="cfrom=1111&amp;name=服务保障" href="https://shop.vivo.com/sp/xservice">服务保障</a></dd>
            </dl>
        </li>
        <li>
            <dl class="vp-foot-category">
                <dt>服务支持</dt>
                <dd><a data-head-click-stat="cfrom=1112&amp;name=服务首页" href="//www.vivo.com.cn/service.html">服务首页</a></dd>
                <dd><a data-head-click-stat="cfrom=1112&amp;name=服务网点查询" href="//www.vivo.com.cn/service/map.html">服务网点查询</a></dd>
                <dd><a data-head-click-stat="cfrom=1112&amp;name=真伪查询" href="//www.vivo.com.cn/service/authenticityCheck/index">真伪查询</a></dd>
                <dd><a data-head-click-stat="cfrom=1112&amp;name=服务政策" href="//www.vivo.com.cn/service/policy/1">服务政策</a></dd>
                <dd><a data-head-click-stat="cfrom=1112&amp;name=预约维修" href="//www.vivo.com.cn/service/appointment">预约维修</a></dd>
                <dd><a data-head-click-stat="cfrom=1112&amp;name=维修配件价格" href="//www.vivo.com.cn/service/accessory" target="_blank">维修配件价格</a></dd>
            </dl>
        </li>
        <li>
            <dl class="vp-foot-category" data-height="7.832906666666666rem" style="">
                <dt>vivo社区</dt>
                <dd><a data-head-click-stat="cfrom=1113&amp;name=社区首页" href="https://bbs.vivo.com.cn/index.php">社区首页</a></dd>
                <dd><a data-head-click-stat="cfrom=1113&amp;name=摄影专区" href="https://bbs.vivo.com.cn/vpai.php">摄影专区</a></dd>
                <dd><a data-head-click-stat="cfrom=1113&amp;name=微博" href="https://weibo.com/vivomobile" target="_blank">微博</a></dd>
                <dd><a data-head-click-stat="cfrom=1113&amp;name=贴吧" href="https://tieba.baidu.com/f?kw=vivo" target="_blank">贴吧</a></dd>
                <dd><a data-head-click-stat="cfrom=1113&amp;name=兴趣部落" href="https://buluo.qq.com/p/barindex.html?bid=212058" target="_blank">兴趣部落</a></dd>
            </dl>
        </li>
        <li>
            <dl class="vp-foot-category">
                <dt>关于vivo</dt>
                <dd><a data-head-click-stat="cfrom=1114&amp;name=vivo简介" href="//www.vivo.com.cn/about">vivo简介</a></dd>
                <dd><a data-head-click-stat="cfrom=1114&amp;name=工作机会" href="https://hr.vivo.com">工作机会</a></dd>
                <dd><a data-head-click-stat="cfrom=1114&amp;name=新闻资讯" href="//www.vivo.com.cn/brand/news/list">新闻资讯</a></dd>
                <dd><a data-head-click-stat="cfrom=1114&amp;name=采购平台" href="https://supply.vivo.com.cn" target="_blank">采购平台</a></dd>
                <dd><a data-head-click-stat="cfrom=1114&amp;name=开发者平台" href="https://dev.vivo.com.cn" target="_blank">开发者平台</a></dd>
            </dl>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: "BottomHome",
  data() {
    return {
      supremePhoneList: []
    };
  },
  created() {}
};
</script>

<style lang='scss' scoped>
#footer {
  color:black;
	a {
  color:black;
	}
	.vp-foot-category-list {
		width: 88%;
		height: 300px;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		
		.vp-foot-category{
			text-align: left;
			padding-top: 30px;
			dt {
				font-weight: bold;
				padding-bottom: 20px;
			}
			dd {
				margin: 10px 0;
			}
		}
	}
}
</style>
